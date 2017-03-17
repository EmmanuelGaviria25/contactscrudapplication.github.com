# Application Angularjs and Spring Service
## ContactsCrudApplication
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/egav-dev-angular/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Sample project to create a crud with BackEnd in spring service and FrontEnd in Angularjs, gulp, and template RDash with my modifications

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/EmmanuelGav/ContactsCrudApplication.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).
6. Run the gulp rar task `gulp war`. This will generate a file .war.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

#### Modules & Packages
By default, I include  [`rdash-angular`](https://github.com/rdash/rdash-angular), [`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), [`ui.router`](https://github.com/angular-ui/ui-router), [`ngStorage`](https://github.com/gsklee/ngStorage) and [`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with rdash-angular, add them to your `bower.json` file and then update the `src/index.html` file, to include them in the minified distribution output.

## Credit
* [Emmanuel Gaviria](https://github.com/EmmanuelGav)