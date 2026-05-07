import "../sgds-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Icon a11y", () => {
  it("sgds-icon should be accessible", async () => {
    const el = await fixture(html` <sgds-icon name="plus"></sgds-icon> `);
    await expect(el).to.be.accessible();
  });

  it("sgds-icon-list should be accessible", async () => {
    const el = await fixture(html`
      <sgds-icon-list>
        <sgds-icon-list-item>
          <sgds-icon slot="icon" name="check"></sgds-icon>
          Item one
        </sgds-icon-list-item>
        <sgds-icon-list-item>
          <sgds-icon slot="icon" name="check"></sgds-icon>
          Item two
        </sgds-icon-list-item>
      </sgds-icon-list>
    `);
    await expect(el).to.be.accessible();
  });
});
