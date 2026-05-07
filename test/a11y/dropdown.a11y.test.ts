import "../sgds-web-component";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit";

describe("Dropdown a11y", () => {
  it("sgds-dropdown should be accessible", async () => {
    const el = await fixture(html`
      <sgds-dropdown>
        <sgds-dropdown-item>Option 1</sgds-dropdown-item>
        <sgds-dropdown-item>Option 2</sgds-dropdown-item>
        <sgds-dropdown-item>Option 3</sgds-dropdown-item>
      </sgds-dropdown>
    `);
    await expect(el).to.be.accessible();
  });

  it("sgds-overflow-menu should be accessible", async () => {
    const el = await fixture(html`
      <sgds-overflow-menu>
        <sgds-dropdown-item>View</sgds-dropdown-item>
        <sgds-dropdown-item>Edit</sgds-dropdown-item>
        <sgds-dropdown-item>Delete</sgds-dropdown-item>
      </sgds-overflow-menu>
    `);
    await expect(el).to.be.accessible();
  });
});
