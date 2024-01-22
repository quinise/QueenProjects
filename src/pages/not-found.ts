import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TWStyles } from './../../tw.js';

@customElement('not-found')
export class NotFoundPage extends LitElement {

  static styles = [css ``, TWStyles];

    render() {
        return html`
            <nav-bar></nav-bar>
            <div class="container mt-12 w-full">
                <h1 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">The page you are searching for doesn't exist</h1>
                <h3 class="mb-4 drop-shadow-lg shadow-darkBrown/50 text-center">404: Page Not Found</h3>
            </div>
            <app-footer></app-footer>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'not-found': NotFoundPage
    }
}