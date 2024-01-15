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
   * The number of times the button has been clicked. Property example
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
    <nav-bar></nav-bar>
    <div class="container">
      <button @click="${this._handleOpen}" data-open-modal class="mt-40 ml-12 cursor-pointer w-1/8 p-4 items-center rounded-md border-border_sm bg-sunflower text-white shadow-lg shadow-darkBrown/50"><strong>+</strong></button>
      <dialog id="data-modal" class="h-3/4 w-3/4">
        <div class="text-darkBrown h-full w-full">
        <div class="flex justify-end">
          <button @click="${this._handleClose}" class="my-4 cursor-pointer w-1/8 p-2 mr-4 items-center rounded-md border-border_sm bg-peach text-darkBrown shadow-lg shadow-darkBrown/50">close</button>
        </div>
        <h1 class="my-8 text-darkBrown drop-shadow-lg shadow-darkBrown/50 text-center">Create Project</h1>
        <form class="max-w-screen-md mx-auto">
            <div class="flex flex-col mb-4">
              <div class="mb-8">
                <label for="title" class="ml-4 text-darkBrown">Title</label>
                <input type="text" id="title" name="title" class="ml-16 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="startDate" class="ml-4 text-darkBrown">Start Date</label>
                <input type="number" id="startDate" name="startDate" class="ml-8 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="endDate" class="ml-4 text-darkBrown">End Date</label>
                <input type="number" id="endDate" name="endDate" class="ml-9 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="user" class="ml-4 text-darkBrown">User</label>
                <input type="text" id="user" name="user" class="ml-16 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="isComplete" class="ml-4 text-darkBrown">Complete</label>
                <input type="checkbox" id="isComplete" name="isComplete" class="ml-8 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="description" class="ml-4 text-darkBrown">Description</label>
                <textarea rows="4" cols="30" id="description" name="description" class="mt-2 ml-4 border-2 border-darkBrown"></textarea>
              </div>
            <div class="flex items-center justify-between">
              <button class="inline-flex items-center px-6 py-2 text-sm text-gray-800 rounded-lg shadow outline-none gap-x-1 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back
              </button>
              <button class="px-6 py-2 mb-5 text-sm text-white bg-peach rounded-lg outline-none hover:bg-sunflowerring-white">
                Next
              </button>
            </div>
          </form>
        
        <!-- <form>
            
            <button type="submit" class="mb-6 ml-20 cursor-pointer w-1/2 p-2 items-center rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Save Project</button> -->
          </form>
        </div>
      </dialog>
      <h1 class=" drop-shadow-lg shadow-darkBrown/50 text-center">Projects</h1>
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
    </div>
    <app-footer></app-footer>
    `
  }

  private _handleClose(e: Event) {
    console.log(`close ${e}`);
    this.renderRoot.querySelector("#data-modal").close();
  }

  private _handleOpen(e: Event) {
    console.log(`open ${e}`);
    this.renderRoot.querySelector("#data-modal").showModal();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-dashboard': UserDashboard
  }
}
