/*
    This file provides the code that renders the 
    project's dashboard, a component with project 
    details. 
*/

import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { TWStyles } from './../../tw.js';
import { Project } from '../types/Project.ts';

@customElement('project-dashboard')
export class ProjectDashboard extends LitElement {
  static styles = [css ``, TWStyles];

  @property({attribute: false}) 
  selectedProject = Project;
    
   protected render() {
      return html`
      <p @projectSelection=${this._projectListener}><slot></slot></p>
      <div class="container mt-16 w-full">
        <h3 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">Project</h3>
        <h1 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">${this.selectedProject.title}</h1>
        <div class="mx-auto w-full mt-10 grid grid-rows-3 grid-flow-col gap-0">
          <div class="mx-auto">
            <label class="mr-12 text-darkBrown">URL</label>
            <a class="cursor-pointer text-darkBrown border-darkBrown" href="http://project-url.com">http://project-url.com</a>
            <div>
              <div class="inline-block mt-6 h-[20px] w-[20px] rounded-full bg-green"></div>
              <p class="inline-block ml-9 text-darkBrown">Webapp is running</p>
            </div>
          </div>
          <div class="h-1/2 mx-auto">
            <h4 class="mb-4 text-darkBrown">Unique Site Visitors</h4>
            <div>
              <label class="inline my-8 text-darkBrown">Today</label>
              <p class="inline ml-16">x</p>
            </div>
            <div class="mt-1">
              <label class="inline my-8 text-darkBrown">This Week</label>
              <p class="inline ml-9">x</p>
            </div>
            <div class="mt-1">
              <label class="inline my-8 text-darkBrown">This Month</label>
              <p class="inline ml-7">x</p>
            </div>
          </div>
          <div class="mt-16 flex flex-row">
            <button class="cursor-pointer mr-2 w-1/3 p-6 items-center gap-8 rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Features</button>
            <button class="cursor-pointer mx-2 w-1/3 p-6 items-center gap-8 rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Update Links</button>
            <button class="cursor-pointer ml-2 w-1/3 p-6 items-center gap-8 rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Notes</button>
          </div>
        </div>
      </div>
      `
    }

    private _projectListener(e: CustomEvent) {
      this.selectedProject = e.detail.value;
    }
  }


declare global {
    interface HTMLElementTagNameMap {
      'project-dashboard': ProjectDashboard
    }
}