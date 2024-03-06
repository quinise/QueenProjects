/*
This file provides the code for the app's 
login page using GoogleAuthProvider. 

*/

import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase.config.js'
import { TWStyles } from './../../tw.js';

@customElement('login-page')
export class LoginPage extends LitElement {

  static styles = [css ``, TWStyles];

  private handleGoogleAuth(e: Event) {
    e.preventDefault();
    
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  }

  render() {
    return html`
    <nav-bar></nav-bar>
    <div class="container mt-40">
      <div class="h-1/2 w-2/3 box-content mx-auto p-4 bg-peach/75">
        <h1 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">Login</h1>
        <div class="flex flex-col space-y-2 justify-center">
          <button class="w-full meta-login-button cursor-pointer h-1/3 w-2/3 mb-2 p-3  bg-metaBlue text-white">Log In With Meta</button>
          <button @click="${this.handleGoogleAuth}" class="w-full google-login-button cursor-pointer h-1/3 w-2/3 p-3 bg-googleBlue text-white">Log In With Google</button>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-page': LoginPage
  }
}