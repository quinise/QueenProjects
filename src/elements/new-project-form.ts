// This file holds the code for the new project form on the User Dashboard page. In this file input data is validated and on passing is added to a Firestore database.

import { LitElement, css, html } from 'lit'
import { customElement, property, state, query} from 'lit/decorators.js'
import { uid } from 'uid';
import { addProjectToDb } from '../services/addProject.js';
import { TWStyles } from './../../tw.js';

@customElement('new-project-form')
export class NewProjectForm extends LitElement {
  static styles = [css ``, TWStyles];
  
  @property()
  newTitle = '';

  @property()
  newStartDate = ''

  @property()
  newEndDate = ''

  @property()
  newClient = '';

  @property({type: Boolean})
  newIsComplete = false;

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

  @query('#client')
  _newClient!: HTMLInputElement;

  @query('#isComplete')
  _newIsComplete!: HTMLInputElement;

  @query('#description')
  _newDescription!: HTMLInputElement;

  _inputChanged(e: Event) {
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
  }

  private setFormInputToEmpty() {
    this._newTitle.value = '';
    this._newStartDate.value = '';
    this._newEndDate.value = '';
    this._newClient.value = '';
    this._newIsComplete.value = '';
    this._newDescription.value = '';
  }

  private setNewProject() {
    let project = {
      id: uid(),
      title: this.newTitle,
      startDate: this.newStartDate,
      endDate: this.newEndDate,
      client: this.newClient,
      isComplete: this.newIsComplete,
      description: this.newDescription
    }

    return project
  }

  private newProjectDataValidation() {
    if (!(this._newTitle.value).match(/^[\.a-zA-Z0-9,!? ]*$/)) {this.showIncorrectTitleAlert(); console.log(false);}
    if (!(this._newStartDate.value).match(/^\d{4}-\d{2}-\d{2}$/)) {this.showIncorrectDateAlert(); return false;}
    if (!(this._newEndDate.value).match(/^\d{4}-\d{2}-\d{2}$/) || (this._newStartDate.value > this._newEndDate.value)) {this.showIncorrectDateAlert(); return false;}
    if (!(this._newDescription.value).match(/^[\.a-zA-Z0-9,!? ]*$/)) {this.showIncorrectDescriptionAlert(); return false;}

    // if (!(this._newIsComplete.value).checked || (this._newIsComplete.value).checked) {this.showIncorrectIsCompleteAlert(); return;}

  }

  private _handleNewProjectData(e: Event) {
    e.preventDefault();

    if (this.newProjectDataValidation() != false) {
      this.newTitle = this._newTitle.value;
      this.newStartDate = this._newStartDate.value;
      this.newEndDate = this._newEndDate.value;
      this.newClient = this._newClient.value;
      this.newIsComplete = this._newIsComplete.value;
      this.newDescription = this._newDescription.value;
    
      let project = this.setNewProject();
      addProjectToDb(project);

      this.showSuccessfulSaveAlert()
    }

    this._submitEnabled = false;
  }

  private showSuccessfulSaveAlert() {
    alert('Your project has been saved');
  }

  private showIncorrectTitleAlert() {
    alert('Please choose a valid title');
  }

   private showIncorrectDateAlert() {
    alert('Please choose a valid date');
   }

  //  private showIncorrectIsCompleteAlert() {
  //   alert("Please choose a valid completion status");
  //  }

  private showIncorrectDescriptionAlert() {
    alert('Only letters, numbers, and punctuation are accepted');
  }

  private _handleClose(e: Event) {
    console.log(`close ${e}`);
    this.setFormInputToEmpty();
    this.renderRoot.querySelector("#data-modal").close();
  }

  private _handleOpen(e: Event) {
    console.log(`open ${e}`);
    this.renderRoot.querySelector("#data-modal").showModal();
  }

  render() {
    return html`
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
                  <label for="client" class="ml-4 text-darkBrown">Client</label>
                  <input type="text" id="client" name="client" @input=${this._inputChanged} class="ml-16 border-2 border-darkBrown" />
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
                <button class="px-6 py-2 mr-5 mb-5 text-sm text-white bg-peach rounded-lg outline-none hover:bg-sunflower ring-white" @click=${this._handleNewProjectData} 
                  .disabled=${!this._submitEnabled}
                  >
                Submit
                </button>
              </div>
            </form> 
          </div>
        </dialog>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'new-project-form': NewProjectForm
  }
}
