# Angular

Web components are [fully supported in Angular](https://custom-elements-everywhere.com/#angular) and can be used directly.

## Installation

Locally install the library or use CDN by adding the script tag to entry point of the Angular application (i.e. index.html). Follow instructions in `Installation` and `Imports` documentation section

## Configuration

Angular requires `CUSTOM_ELEMENTS_SCHEMA` to recognise custom element tags. Add it to the `schemas` array of any standalone component that uses SGDS web components.

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

## Importing the library

Import the library once in your root component (or in `main.ts`) to register all custom elements globally:

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@govtechsg/sgds-web-component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

Alternatively, import individual components for smaller bundles:

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@govtechsg/sgds-web-component/components/Button";
import "@govtechsg/sgds-web-component/components/Alert";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

## Referencing sgds-web-components in Angular

Use `ViewChild` with a template reference to access component properties and methods programmatically:

```typescript
// alert.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from "@angular/core";
import SgdsAlert from "@govtechsg/sgds-web-component/components/Alert/sgds-alert.js";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent {
  @ViewChild("alert")
  alert?: ElementRef<SgdsAlert>;

  showAlert() {
    if (this.alert) {
      this.alert.nativeElement.show = true;
    }
  }

  closeAlert() {
    this.alert?.nativeElement.close();
  }
}
```

```html
<!-- alert.component.html -->
<sgds-button (click)="showAlert()">Show Alert</sgds-button>
<sgds-button (click)="closeAlert()">Close Alert</sgds-button>
<sgds-alert #alert>This is an alert</sgds-alert>
```
