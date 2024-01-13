import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';

@customElement('settings-page')
export class SettingsPage extends LitElement {

  static styles = [css ``, TWStyles];

    render() {
        return html`
            <nav-bar></nav-bar>
            <div class="container mt-12 w-full">
                <h1 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">Settings</h1>
                <div class="w-2/3 grid grid-cols-1 gap-0 mx-auto place-items-center">
                    <button class="cursor-pointer my-8 w-2/3 p-6 items-center gap-8 rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Dark Mode</button>
                    <button class="cursor-pointer w-2/3 p-6 items-center gap-8 rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Delete Account</button>
                </div>

            </div>
            <app-footer></app-footer>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'settings-page': SettingsPage
    }
}