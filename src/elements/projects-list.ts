import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from '@lit/task';
import { Project } from "../interfaces/Project.ts"

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config.ts"

@customElement('projects-list')
export class ProjectsList extends LitElement {
    private _getProjectsTask = new Task(this, {
        task: async () => {
            const projectsRef = (collection(db, "projects"));
            const queryProjects = query(projectsRef);
            const querySnapshot = await getDocs(queryProjects);
            const fetchedData: Array<Project> = [];
    
            const getProjectsPromise = new Promise((resolve, reject) => {
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
    
      render() {
          return html`
            ${ this._getProjectsTask.render({
              initial: () => html`
                <div class="mt-40">
                  <p>Waiting to start task</p>
                </div>
                `,
              pending: () => html`<div class="mt-40"><p>Loading projects...</p> <p>${console.log("status in loading " + this._getProjectsTask.status)}</p></div>`,
              complete: (projects) => html`
                  <p>${console.log("projects in complete " + projects)}</p>
              `,
              error: (e) => html`<p>Error: ${e}</p>
                <p>${console.log("status in error " + this._getProjectsTask.status)}</p>
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