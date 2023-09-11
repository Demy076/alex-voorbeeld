import { LitElement, TemplateResult, html } from "lit";
import { customElement, query } from "lit/decorators";

@customElement("main-page")
export class MainPage extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
  private execute_hover() {
    console.log("hover");
  }
  connectedCallback(): void {
    super.connectedCallback();
    console.log("connected");
  }
  protected render(): TemplateResult<1> {
    return html`
      <h1>Home</h1>
      <div class="container">
        <sl-alert variant="danger" open>
          <sl-icon slot="icon" library="fa" name="fab-spotify"></sl-icon>
          <strong>This is super informative</strong><br />
          You can tell by how pretty the alert is.
        </sl-alert>
      </div>
    `;
  }
}
