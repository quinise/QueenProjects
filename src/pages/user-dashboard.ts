import { LitElement, css, html } from 'lit'
import { customElement, property, state, query} from 'lit/decorators.js'
import { uid } from 'uid';
import { addProjectToDb } from '../services/addProject.js';
import { fetchProjects } from '../services/fetchProjects.js';
import { TWStyles } from './../../tw.js';
import './../elements/projects-list.ts';
import './../elements/new-project-form.ts';

@customElement('user-dashboard')
export class UserDashboard extends LitElement {

  static styles = [css ``, TWStyles];

  render() {
    return html`
    <nav-bar></nav-bar>
    <div class="container">
      <div class="flex justify-end">
        <new-project-form ></new-project-form>
      </div>
      <h1 class="mt-18 drop-shadow-lg shadow-darkBrown/50 text-center">Projects</h1>
      <div class="mx-auto mt-20 grid gap-4 grid-cols-2 w-2/3">
        <projects-list></projects-list>
        <button class="cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
        Dummy Project 1
        </button>
        <button class="cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
        Dummy Project 2
        </button>
        <button class="cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
        Dummy Project 3
        </button>
      </div>
    </div>
    <app-footer></app-footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-dashboard': UserDashboard
  }
}
