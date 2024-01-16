import { LitElement, css, html } from 'lit'
import { customElement, property, state, query} from 'lit/decorators.js'
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
  count = 0;

  @property()
  newTitle = '';

  @property()
  newStartDate = new Date();

  @property()
  newEndDate = new Date();

  @property()
  newUser = '';

  @property()
  newIsComplete = '';

  @property()
  newDescription = '';

  @state()
  _submitEnabled = false;

  @query('#title')
  _newTitle!: HTMLInputElement;

  @query('#startDate')
  _newStartDate!: HTMLInputElement;

  @query('#endDate')
  _newEndDate!: HTMLInputElement;

  @query('#user')
  _newUser!: HTMLInputElement;

  @query('#isComplete')
  _newIsComplete!: HTMLInputElement;

  @query('#description')
  _newDescription!: HTMLInputElement;

  _inputChanged(e: Event) {
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
  }

  private _handleClose(e: Event) {
    console.log(`close ${e}`);
    this.renderRoot.querySelector("#data-modal").close();
  }

  private _handleOpen(e: Event) {
    console.log(`open ${e}`);
    this.renderRoot.querySelector("#data-modal").showModal();
  }

  private submitNewProject(e: Event) {
    e.preventDefault();
    
    this.newTitle = this._newTitle.value;
    this.newStartDate = this._newStartDate.value;
    this.newEndDate = this._newEndDate.value;
    this.newUser = this._newUser.value;
    this.newIsComplete = this._newIsComplete.value;
    this.newDescription = this._newDescription.value;

    this._newTitle.value = '';
    this._newStartDate.value = new Date();
    this._newEndDate.value = new Date();
    this._newUser.value = '';
    this._newIsComplete.value = '';
    this._newDescription.value = '';

    this._submitEnabled = false;
  }

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
        <form id="new-project-form" class="max-w-screen-md mx-auto">
            <div class="flex flex-col mb-4">
              <div class="mb-8">
                <label for="title" class="ml-4 text-darkBrown">Title</label>
                <input type="text" id="title" @input=${this._inputChanged} class="ml-16 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="startDate" class="ml-4 text-darkBrown">Start Date</label>
                <input type="date" id="startDate" @input=${this._inputChanged} name="startDate" class="ml-8 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="endDate" class="ml-4 text-darkBrown">End Date</label>
                <input type="date" id="endDate" @input=${this._inputChanged} name="endDate" class="ml-9 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="user" class="ml-4 text-darkBrown">User</label>
                <input type="text" id="user" name="user" @input=${this._inputChanged} class="ml-16 border-2 border-darkBrown" />
              </div>
              <div class="mb-8">
                <label for="isComplete" class="ml-4 text-darkBrown">Complete</label>
                <input type="checkbox" id="isComplete" name="isComplete" @input=${this._inputChanged} class="ml-8 border-2 border-darkBrown" value="complete" />
              </div>
              <div class="mb-8">
                <label for="description" class="ml-4 text-darkBrown">Description</label>
                <textarea rows="4" cols="30" id="description" name="description" @input=${this._inputChanged} class="mt-2 ml-4 border-2 border-darkBrown"></textarea>
              </div>
            <div class="flex items-center justify-end">
              <button class="px-6 py-2 mr-5 mb-5 text-sm text-white bg-peach rounded-lg outline-none hover:bg-sunflower ring-white" @click=${this.submitNewProject} 
                .disabled=${!this._submitEnabled}
                >
              Submit
              </button>
            </div>
          </form> 
        </div>
      </dialog>
      <h1 class=" drop-shadow-lg shadow-darkBrown/50 text-center">Projects</h1>
      <div class="mx-auto mt-20 grid gap-4 grid-cols-2 w-2/3">
        <a href=""><button class="cursor-pointer flex flex-col w-full p-6 items-center gap-8 rounded-md border-[1px] border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">
        Dummy Project 0
        </button></a>
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
