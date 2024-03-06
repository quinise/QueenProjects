/*
    This file provides the code that queries a 
    Firestore database and renders the a list of 
    projects with the retrieved collection  data.
*/

import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from '@lit/task';


import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config.ts"

import { Project } from "../types/Project.ts"
import { TWStyles } from '../../tw.js';

@customElement('projects-list')
export class ProjectsList extends LitElement {
  static styles = [css ``, TWStyles];

  @property({type: Boolean}) 
  open = true;

  private async _notify() {
    this.open = !this.open;
    await this.updateComplete;
    const name = this.open ? 'opened' : 'closed';
    this.dispatchEvent(new CustomEvent(name, {bubbles: true, composed: true}));
  }
  
  private _dispatchProject(project: Project) {
    if (project) {
      const options = {
        detail: {value: project},
        bubbles: true,
        composed: true
      };
  
      this.dispatchEvent(new CustomEvent('projectSelection', options));
    }
  }

  private _getProjectsTask = new Task(this, {
    task: async () => {
      const projectsRef = (collection(db, "projects"));
      const queryProjects = query(projectsRef);
      const querySnapshot = await getDocs(queryProjects);
      const fetchedData: Array<Project> = [];

      const getProjectsPromise = new Promise<Project[] | string>((resolve, reject) => {
        querySnapshot.forEach((doc) => {
            const incommingProject: Project = {
                id: doc.data().id,
                title: doc.data().title,
                startDate: doc.data().startDate,
                endDate: doc.data().endDate,
                client: doc.data().client,
                isComplete: doc.data().isComplete,
                description: doc.data().description,
            }

            fetchedData.push(incommingProject);
        });

          if (fetchedData.length > 0) {
              resolve(fetchedData);
          } else {
              reject("Could not retrieve Firebase data");  
          }
      })

      return getProjectsPromise;
    },
    args: () => []
  
  });
    
  protected render() {
    return html`
      ${this._getProjectsTask.render({
        initial: () => html`
          <div class="mt-40">
            <p>Waiting to start task</p>
          </div>
          `,
        pending: () => html`<div class="mt-40"><p>Loading projects...</p></div>`,
        complete: (projects) =>
        html`
          <button @click=${this._notify}>${this.open ? 'Minimize projects' : 'Show projects'}</button>
          <div ?hidden=${!this.open}>
            ${Object(projects).map((project: Project) => html`   
            <button @click=${()=>{
                this._dispatchProject(project);
                this._notify;
                 }
              } class="mt-5 cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
              ${project.title}
            </button>
            `)}
          </div>
            
        `,
        error: (e) => html`<p>Error: ${e}</p>
          `
          })
        }
    ` 
    }
  }

declare global {
 interface HTMLElementTagNameMap {
   'projects-list': ProjectsList
    }
  } 