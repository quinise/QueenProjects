/*
This file contains the code for the user's dashbaord
where they can create a new project,
view the list of projects.
*/

import { LitElement, css, html } from 'lit'
import { customElement} from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';
import '../components/new-project-form.ts';
import '../components/projects-list.ts';
import '/src/pages/project-dashboard.ts';

@customElement('user-dashboard')
export class UserDashboard extends LitElement {

  static styles = [css ``, TWStyles];

  render() {
    return html`
    <nav-bar></nav-bar>
    <div class="container">
      <div class="flex justify-end">
        <new-project-form></new-project-form>
      </div>
      <h1 class="mt-18 drop-shadow-lg shadow-darkBrown/50 text-center">Projects</h1>
      <div class="mx-auto mt-20 w-1/2">
        <project-dashboard>
          <projects-list></projects-list>
        </project-dashboard>
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
