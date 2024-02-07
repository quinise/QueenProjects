/*
This file provides the code for the settings page
where the user can delete their account or switch
to dark mode.

*/

import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';

@customElement('user-settings')
export class UserSettings extends LitElement {
    static styles = [css ``, TWStyles];

    render() {
        return html`
        <nav-bar></nav-bar>
        <div class="container my-60">
            <h1 class="drop-shadow-lg shadow-darkBrown/50 text-center">Settings</h1>
            <div class="mx-auto mt-20 w-2/3">
                <button class="cursor-pointer w-full mb-10 p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
                Dark Mode
                </button>
                <button class="cursor-pointer w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
                Delete Account
                </button>
            </div>
        </div>
        <app-footer></app-footer>
        `
     } 
}

declare global {
    interface HTMLElementTagNameMap {
      'user-settings': UserSettings
    }
  }
  