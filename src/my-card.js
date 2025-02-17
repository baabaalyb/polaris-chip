import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Trunks";
    this.image = "https://ih1.redbubble.net/image.5646336836.3130/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg";
    this.link = "https://dragonball.fandom.com/wiki/Trunks";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 16px;
        width: 300px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
      }

      :host([fancy]) {
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .card {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .card-image {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
      }

      .card-title {
        font-size: 1.5em;
        text-align: center;
        padding: 16px;
        margin: 0;
        background-color: #9A4EAE;
        color: white;
      }

      details {
        padding: 16px;
        flex-grow: 1;
      }

      details summary {
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 8px;
      }

      details div {
        border: 1px solid #ccc;
        padding: 8px;
        margin-top: 8px;
        background-color: #f9f9f9;
        border-radius: 4px;
        max-height: 150px;
        overflow-y: auto;
      }

      .btn {
        display: block;
        width: 100%;
        padding: 8px;
        margin-top: 8px;
        background-color: #efa926;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      }

      .btn:hover {
        background-color: #d18e1f;
      }
    `;
  }

  openChanged(e) {
    this.fancy = e.target.hasAttribute('open');
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img src=${this.image} alt=${this.title} class="card-image" />
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot></slot>
            <a href=${this.link} target="_blank">
              <button class="btn"><em>Link to more information!</em></button>
            </a>
          </div>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
