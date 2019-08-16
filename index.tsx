import React from "react";
import ReactDOM from "react-dom";

import { App } from "./src/App";

class CustomComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define("custom-component", CustomComponent);
