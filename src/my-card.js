import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Trunks";
    this.image = "https://ih1.redbubble.net/image.5646336836.3130/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg";
    this.link = "https://dragonball.fandom.com/wiki/Trunks";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin: 0;
        opacity: 0.8;
        background-color: purple;
        transition: 0.6s all ease-in-out;
      }

      .card-image {
        width: 200px;
        height: auto; 
      }

      .card-content {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px; 
        overflow: auto;
      }

      .card-title {
        position: sticky;
        top: 0;
        background-color: #9A4EAE;
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }

      .card-list {
        margin: 0;
        padding: 0 32px;
      }

      .card-list li {
        padding: 8px 16px;
        list-style: square;
      }

      .btn {
        color: #efa926;
        background-color: white;
        font-size: 15px;
        margin: 0px 0px 5px 0px;
      }
      .btn:focus,
      .btn:hover {
        background-color: red;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card-title">${this.title}</h1>
        <img src=${this.image} alt=${this.title} class="card-image" />
        <p>Trunks is a Saiyan/Human hybrid and the son of Vegeta and Bulma.</p>
        <a href=${this.link} target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>  
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
