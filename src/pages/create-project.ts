import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';

@customElement('create-project')
export class CreateProject extends LitElement {

  static styles = [css ``, TWStyles];
  
  render() {
    return html`
        <div class="mt-32 container p-6 backdrop-blur-sm bg-peach/50">
            <div class="mx-auto h-2/3 border-2 border-darkBrown rounded-xl drop-shadow-lg shadow-darkBrown/50 bg-white">
              <button class="mt-2 ml-64 text-darkBrown drop-shadow-lg shadow-darkBrown/50">close</button>
              <h1 class="my-8 text-darkBrown drop-shadow-lg shadow-darkBrown/50 text-center">Create Project</h1>
              <form>
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
                <button type="submit" class="mb-6 ml-20 cursor-pointer w-1/2 p-2 items-center rounded-md border-border_sm bg-sunflower text-darkBrown shadow-lg shadow-darkBrown/50">Save Project</button>
              </form>
            </div>
        </div>
    ` 
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'create-project': CreateProject
  }
}