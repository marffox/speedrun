# TwentyoneButtonsTest

The project has been build with the next requirements:
Node version: 8.4.0
Npm version: 5.5.1

The arquitecture has been thought to give modularity to each component.
To get that, each component has the structure as follow:
    - name.component.ts
    - name.component.html
    - name.component.scss
    - name.routes.ts
    - name.modules.ts

For styling, I used Sass, where we can find a folder structure for base styles and common assets, and a single scss file placed in each component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

