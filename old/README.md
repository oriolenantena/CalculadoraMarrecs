To build on modern systems, that already have newer angular versions:


mkdir ~/Docker_Share
copy project to Docker_Share...
docker run -ti --rm -v ~/Docker_Share:/data ubuntu:22.04 /bin/bash
apt update
apt install npm
cd /data/project...
npm install
npm install -g @angular/cli@9.1.6  
ng build --prod  


# Deploy
Aixo esta posat a un hosting ovh de marrecs, compartit amb un wordpress (fent servir multisite de hosting ovh)

# CalculadoraMarrecs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
