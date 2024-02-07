/*
This file provides the code for the update links 
page. The user can input links that will be sent to
the admin

*/
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('update-links')
export class UpdateLinks extends LitElement {

  static styles = [css ``, TWStyles];

  render() {
    return html`
        <nav-bar></nav-bar>
        <div class="container mt-40 w-full">
            <h1 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">Update Links</h1>
            <div class="mt-10 grid grid-rows-5 grid-flow-col gap-4">
                <div>
                    <label class="mx-3 text-darkBrown">Meta</label>
                    <input class="mx-9 cursor-pointer text-darkBrown border-darkBrown border-2 mb-2" onChange={}/>
                    <button class="ml-1 cursor-pointer text-darkBrown w-1/6 p-2 rounded-md border-[1px] border-border_sm bg-sunflower shadow-lg shadow-darkBrown/50"><p class="text-center">Go</p></button>
                </div>
                <div>
                    <label class="mx-3 text-darkBrown">Instagram</label>
                    <input class="mx-2 cursor-pointer text-darkBrown border-darkBrown border-2 mb-2" onChange={}/>
                    <button class="ml-7 cursor-pointer text-darkBrown w-1/6 p-2 rounded-md border-[1px] border-border_sm bg-sunflower shadow-lg shadow-darkBrown/50"><p class="text-center">Go</p></button>
                </div>
                <div>
                    <label class="mx-2 text-darkBrown">YouTube</label>
                    <input class="mx-5 cursor-pointer text-darkBrown border-darkBrown border-2 mb-2" onChange={}/>
                    <button class="ml-4 cursor-pointer text-darkBrown w-1/6 p-2 rounded-md border-[1px] border-border_sm bg-sunflower shadow-lg shadow-darkBrown/50"><p class="text-center">Go</p></button>
                </div>
                <div>
                    <label class="mx-2 text-darkBrown">X</label>
                    <input class="ml-16 cursor-pointer text-darkBrown border-darkBrown border-2 mb-2" onChange={}/>
                    <button class="ml-10 cursor-pointer text-darkBrown w-1/6 p-2 rounded-md border-[1px] border-border_sm bg-sunflower shadow-lg shadow-darkBrown/50"><p class="text-center">Go</p></button>
                </div>
                <div>
                    <label class="mx-2 text-darkBrown">Email</label>
                    <input class="ml-10 cursor-pointer text-darkBrown border-darkBrown border-2 mb-2" onChange={}/>
                    <button class="ml-10 cursor-pointer text-darkBrown w-1/6 p-2 rounded-md border-[1px] border-border_sm bg-sunflower shadow-lg shadow-darkBrown/50"><p class="text-center">Go</p></button>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'update-links': UpdateLinks
  }
}
