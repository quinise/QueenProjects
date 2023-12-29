import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('user-dashboard')
export class UserDashboard extends LitElement {

  static styles = [css ``, TWStyles];


  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
    <nav-bar></nav-bar>
    <h1 class="mt-60 drop-shadow-lg shadow-darkBrown/50 text-center">Projects</h1>
    <div class="mx-auto mt-20 grid gap-4 grid-cols-2 w-2/3">
      <button class="cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
      Dummy Project 0
      </button>
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
    <app-footer></app-footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-dashboard': UserDashboard
  }
}
