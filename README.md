Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here][1].

## Table of Contents

- [App naming convention][2]
- [Updating to New Releases][3]
- [Sending Feedback][4]
- [Folder Structure][5]
- [Available Scripts][6]
  - [npm start][7]
  - [npm test][8]
  - [npm run build][9]
  - [npm run eject][10]
- [Supported Language Features and Polyfills][11]
- [Syntax Highlighting in the Editor][12]
- [Displaying Lint Output in the Editor][13]
- [Debugging in the Editor][14]
- [Formatting Code Automatically][15]
- [Changing the Page `<title>`][16]
- [Installing a Dependency][17]
- [Importing a Component][18]
- [Code Splitting][19]
- [Adding a Stylesheet][20]
- [Post-Processing CSS][21]
- [Adding a CSS Preprocessor (Sass, Less etc.)][22]
- [Adding Images, Fonts, and Files][23]
- [Using the `public` Folder][24]
  - [Changing the HTML][25]
  - [Adding Assets Outside of the Module System][26]
  - [When to Use the `public` Folder][27]
- [Using Global Variables][28]
- [Adding Bootstrap][29]
  - [Using a Custom Theme][30]
- [Adding Flow][31]
- [Adding Custom Environment Variables][32]
  - [Referencing Environment Variables in the HTML][33]
  - [Adding Temporary Environment Variables In Your Shell][34]
  - [Adding Development Environment Variables In `.env`][35]
- [Can I Use Decorators?][36]
- [Integrating with an API Backend][37]
  - [Node][38]
  - [Ruby on Rails][39]
- [Proxying API Requests in Development][40]
  - ["Invalid Host Header" Errors After Configuring Proxy][41]
  - [Configuring the Proxy Manually][42]
  - [Configuring a WebSocket Proxy][43]
- [Using HTTPS in Development][44]
- [Generating Dynamic `<meta>` Tags on the Server][45]
- [Pre-Rendering into Static HTML Files][46]
- [Injecting Data from the Server into the Page][47]
- [Running Tests][48]
  - [Filename Conventions][49]
  - [Command Line Interface][50]
  - [Version Control Integration][51]
  - [Writing Tests][52]
  - [Testing Components][53]
  - [Using Third Party Assertion Libraries][54]
  - [Initializing Test Environment][55]
  - [Focusing and Excluding Tests][56]
  - [Coverage Reporting][57]
  - [Continuous Integration][58]
  - [Disabling jsdom][59]
  - [Snapshot Testing][60]
  - [Editor Integration][61]
- [Developing Components in Isolation][62]
  - [Getting Started with Storybook][63]
  - [Getting Started with Styleguidist][64]
- [Making a Progressive Web App][65]
  - [Opting Out of Caching][66]
  - [Offline-First Considerations][67]
  - [Progressive Web App Metadata][68]
- [Analyzing the Bundle Size][69]
- [Deployment][70]
  - [Static Server][71]
  - [Other Solutions][72]
  - [Serving Apps with Client-Side Routing][73]
  - [Building for Relative Paths][74]
  - [Azure][75]
  - [Firebase][76]
  - [GitHub Pages][77]
  - [Heroku][78]
  - [Netlify][79]
  - [Now][80]
  - [S3 and CloudFront][81]
  - [Surge][82]
- [Advanced Configuration][83]
- [Troubleshooting][84]
  - [`npm start` doesn’t detect changes][85]
  - [`npm test` hangs on macOS Sierra][86]
  - [`npm run build` exits too early][87]
  - [`npm run build` fails on Heroku][88]
  - [`npm run build` fails to minify][89]
  - [Moment.js locales are missing][90]
- [Something Missing?][91]

## App naming convention

* css class naming: [module]-[type]--[name], module should == app by default;
* css class component name: app-comp--[name]

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog][92], find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog][93] for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback][94].

## Folder Structure

After creation, your project should look like this:

\`\`\`
my-app/
  README.md
  node\_modules/
  package.json
  public/
	index.html
	favicon.ico
  src/
	App.css
	app.js
	app.test.js
	index.css
	index.js
	logo.svg
\`\`\`

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000][95] to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests][96] for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment][97] for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6][98] syntax features, it also supports:

* [Exponentiation Operator][99] (ES2016).
* [Async/await][100] (ES2017).
* [Object Rest/Spread Properties][101] (stage 3 proposal).
* [Dynamic import()][102] (stage 3 proposal)
* [Class Fields and Static Properties][103] (part of stage 3 proposal).
* [JSX][104] and [Flow][105] syntax.

Learn more about [different proposal stages][106].

While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods][107] if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills][108]**:

* [`Object.assign()`][109] via [`object-assign`][110].
* [`Promise`][111] via [`promise`][112].
* [`fetch()`][113] via [`whatwg-fetch`][114].

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page][115] and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

> Note: this feature is available with `react-scripts@0.2.0` and higher.<br>
> It also only works with npm 3 or higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first. Then, add a file called `.eslintrc` to the project root:

\`\`\`js
{
  "extends": "react-app"
}
\`\`\`

Now your editor should report the linting warnings.

Note that even if you edit your `.eslintrc` file further, these changes will **only affect the editor integration**. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

If you want to enforce a coding style for your project, consider using [Prettier][116] instead of ESLint style rules.

## Debugging in the Editor

**This feature is currently only supported by [Visual Studio Code][117] and [WebStorm][118].**

Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

### Visual Studio Code

You would need to have the latest version of [VS Code][119] and VS Code [Chrome Debugger Extension][120] installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

\`\`\`json
{
  "version": "0.2.0",
  "configurations": [{
	"name": "Chrome",
	"type": "chrome",
	"request": "launch",
	"url": "http://localhost:3000",
	"webRoot": "${workspaceRoot}/src",
	"sourceMapPathOverrides": {
	  "webpack:///src/*": "${webRoot}/*"
	}
  }]
}
\`\`\`
> Note: the URL may be different if you've made adjustments via the [HOST or PORT environment variables][121].

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

Having problems with VS Code Debugging? Please see their [troubleshooting guide][122].

### WebStorm

You would need to have [WebStorm][123] and [JetBrains IDE Support][124] Chrome extension installed.

In the WebStorm menu `Run` select `Edit Configurations...`. Then click `+` and select `JavaScript Debug`. Paste `http://localhost:3000` into the URL field and save the configuration.

> Note: the URL may be different if you've made adjustments via the [HOST or PORT environment variables][125].

Start your app by running `npm start`, then press `^D` on macOS or `F9` on Windows and Linux or click the green debug icon to start debugging in WebStorm.

The same way you can debug your application in IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, and RubyMine. 

## Formatting Code Automatically

Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the code you write automatically to ensure a code style within your project. See the [Prettier's GitHub page][126] for more information, and look at this [page to see it in action][127].

To format our code whenever we make a commit in git, we need to install the following dependencies:

\`\`\`sh
npm install --save husky lint-staged prettier
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add husky lint-staged prettier
\`\`\`

* `husky` makes it easy to use githooks as if they are npm scripts.
* `lint-staged` allows us to run scripts on staged files in git. See this [blog post about lint-staged to learn more about it][128].
* `prettier` is the JavaScript formatter we will run before commits.

Now we can make sure every file is formatted correctly by adding a few lines to the `package.json` in the project root.

Add the following line to `scripts` section:

\`\`\`diff
  "scripts": {
+   "precommit": "lint-staged",
	"start": "react-scripts start",
	"build": "react-scripts build",
\`\`\`

Next we add a 'lint-staged' field to the `package.json`, for example:

\`\`\`diff
  "dependencies": {
	// ...
  },
+ "lint-staged": {
+   "src/\**/*.{js,jsx,json,css}": [
	"prettier --single-quote --write",
	"git add"
+   ]
+ },
  "scripts": {
\`\`\`

Now, whenever you make a commit, Prettier will format the changed files automatically. You can also run `./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx}"` to format your entire project for the first time.

Next you might want to integrate Prettier in your favorite editor. Read the section on [Editor Integration][129] on the Prettier GitHub page.

## Changing the Page `<title>`

You can find the source HTML file in the `public` folder of the generated project. You may edit the `<title>` tag in it to change the title from “React App” to anything else.

Note that normally you wouldn’t edit files in the `public` folder very often. For example, [adding a stylesheet][130] is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser [`document.title`][131] API. For more complex scenarios when you want to change the title from React components, you can use [React Helmet][132], a third party library.

If you use a custom server for your app in production and want to modify the title before it gets sent to the browser, you can follow advice in [this section][133]. Alternatively, you can pre-build each page as a static HTML file which then loads the JavaScript bundle, which is covered [here][134].

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

\`\`\`sh
npm install --save react-router
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add react-router
\`\`\`

This works for any library, not just `react-router`.

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`][135] instead.

For example:

### `Button.js`

\`\`\`js
import React, { Component } from 'react';

class Button extends Component {
  render() {
	// ...
  }
}

export default Button; // Don’t forget to use export default!
\`\`\`

### `DangerButton.js`


\`\`\`js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
	return <Button color="red" />;
  }
}

export default DangerButton;
\`\`\`

Be aware of the [difference between default and named exports][136]. It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

* [When to use the curly braces?][137]
* [Exploring ES6: Modules][138]
* [Understanding ES6: Modules][139]

## Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`][140]. Its [proposal][141] is in stage 3. The `import()` function-like form takes the module name as an argument and returns a [`Promise`][142] which always resolves to the namespace object of the module.

Here is an example:

### `moduleA.js`

\`\`\`js
const moduleA = 'Hello';

export { moduleA };
\`\`\`
### `app.js`

\`\`\`js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () =\> {
	import('./moduleA')
	  .then(({ moduleA }) => {
	    // Use moduleA
	  })
	  .catch(err => {
	    // Handle failure
	  });
  };

  render() {
	return (
	  <div>
	    <button onClick={this.handleClick}>Load</button>
	  </div>
	);
  }
}

export default App;
\`\`\`

This will make `moduleA.js` and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.

You can also use it with `async` / `await` syntax if you prefer it.

### With React Router

If you are using React Router check out [this tutorial][143] on how to use code splitting with it. You can find the companion GitHub repository [here][144].

## Adding a Stylesheet

This project setup uses [Webpack][145] for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `Button.css`

\`\`\`css
.Button {
  padding: 20px;
}
\`\`\`

### `Button.js`

\`\`\`js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
	// You can use them as regular CSS styles
	return <div className="Button" />;
  }
}
\`\`\`

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here][146]. However you should be aware that this makes your code less portable to other build tools and environments than Webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified `.css` file in the build output.

If you are concerned about using Webpack-specific semantics, you can put all your CSS right into `src/index.css`. It would still be imported from `src/index.js`, but you could always remove that import if you later migrate to a different build tool.

## Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer][147] so you don’t need to worry about it.

For example, this:

\`\`\`css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
\`\`\`

becomes this:

\`\`\`css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
	  -ms-flex-direction: row;
	      flex-direction: row;
  -webkit-box-align: center;
	  -ms-flex-align: center;
	      align-items: center;
}
\`\`\`

If you need to disable autoprefixing for some reason, [follow this section][148].

## Adding a CSS Preprocessor (Sass, Less etc.)

Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a `.Button` CSS class in `<AcceptButton>` and `<RejectButton>` components, we recommend creating a `<Button>` component with its own `.Button` styles, that both `<AcceptButton>` and `<RejectButton>` can render (but [not inherit][149]).

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative.

First, let’s install the command-line interface for Sass:

\`\`\`sh
npm install --save node-sass-chokidar
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add node-sass-chokidar
\`\`\`

Then in `package.json`, add the following lines to `scripts`:

\`\`\`diff
   "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
	 "start": "react-scripts start",
	 "build": "react-scripts build",
	 "test": "react-scripts test --env=jsdom",
\`\`\`

> Note: To use a different preprocessor, replace `build-css` and `watch-css` commands according to your preprocessor’s documentation.

Now you can rename `src/App.css` to `src/App.scss` and run `npm run watch-css`. The watcher will find every Sass file in `src` subdirectories, and create a corresponding CSS file next to it, in our case overwriting `src/App.css`. Since `src/app.js` still imports `src/App.css`, the styles become a part of your application. You can now edit `src/App.scss`, and `src/App.css` will be regenerated.

To share variables between Sass files, you can use Sass imports. For example, `src/App.scss` and other component style files could include `@import "./shared.scss";` with variable definitions.

To enable importing files without using relative paths, you can add the  `--include-path` option to the command in `package.json`.

\`\`\`
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node\_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node\_modules src/ -o src/ --watch --recursive",
\`\`\`

This will allow you to do imports like

\`\`\`scss
@import 'styles/\_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
\`\`\`

At this point you might want to remove all CSS files from the source control, and add `src/**/*.css` to your `.gitignore` file. It is generally a good practice to keep the build products outside of the source control.

As a final step, you may find it convenient to run `watch-css` automatically with `npm start`, and run `build-css` as a part of `npm run build`. You can use the `&&` operator to execute two scripts sequentially. However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

\`\`\`sh
npm install --save npm-run-all
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add npm-run-all
\`\`\`

Then we can change `start` and `build` scripts to include the CSS preprocessor commands:

\`\`\`diff
   "scripts": {
	 "build-css": "node-sass-chokidar src/ -o src/",
	 "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
	 "test": "react-scripts test --env=jsdom",
	 "eject": "react-scripts eject"
   }
\`\`\`

Now running `npm start` and `npm run build` also builds Sass files.

**Why `node-sass-chokidar`?**

`node-sass` has been reported as having the following issues:

- `node-sass --watch` has been reported to have *performance issues* in certain conditions when used in a virtual machine or with docker.

- Infinite styles compiling [^1939](https://github.com/facebookincubator/create-react-app/issues/1939)

- `node-sass` has been reported as having issues with detecting new files in a directory [^1891](https://github.com/sass/node-sass/issues/1891)

 `node-sass-chokidar` is used here as it addresses these issues.

## Adding Images, Fonts, and Files

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` a file right in a JavaScript module**. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a [data URI][150] instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to [^1153](https://github.com/facebookincubator/create-react-app/issues/1153).

Here is an example:

\`\`\`js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
\`\`\`

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

\`\`\`css
.Logo {
  background-image: url(./logo.png);
}
\`\`\`

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

**It is not required for React** but many people enjoy it (and React Native uses a similar mechanism for images).<br>
An alternative way of handling static assets is described in the next section.

## Using the `public` Folder

> Note: this feature is available with `react-scripts@0.5.0` and higher.

### Changing the HTML

The `public` folder contains the HTML file so you can tweak it, for example, to [set the page title][151].
The `<script>` tag with the compiled code will be added to it automatically during the build process.

### Adding Assets Outside of the Module System

You can also add other assets to the `public` folder.

Note that we normally encourage you to `import` assets in JavaScript files instead.
For example, see the sections on [adding a stylesheet][152] and [adding images and fonts][153].
This mechanism provides a number of benefits:

* Scripts and stylesheets get minified and bundled together to avoid extra network requests.
* Missing files cause compilation errors instead of 404 errors for your users.
* Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `public` folder, it will **not** be processed by Webpack. Instead it will be copied into the build folder untouched.   To reference assets in the `public` folder, you need to use a special variable called `PUBLIC_URL`.

Inside `index.html`, you can use it like this:

\`\`\`html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
\`\`\`

Only files inside the `public` folder will be accessible by `%PUBLIC_URL%` prefix. If you need to use a file from `src` or `node_modules`, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run `npm run build`, Create React App will substitute `%PUBLIC_URL%` with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use `process.env.PUBLIC_URL` for similar purposes:

\`\`\`js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return \<img src={process.env.PUBLIC\_URL + '/img/logo.png'} /\>;
}
\`\`\`

Keep in mind the downsides of this approach:

* None of the files in `public` folder get post-processed or minified.
* Missing files will not be called at compilation time, and will cause 404 errors for your users.
* Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

### When to Use the `public` Folder

Normally we recommend importing [stylesheets][154], [images, and fonts][155] from JavaScript.
The `public` folder is useful as a workaround for a number of less common cases:

* You need a file with a specific name in the build output, such as [`manifest.webmanifest`][156].
* You have thousands of images and need to dynamically reference their paths.
* You want to include a small script like [`pace.js`][157] outside of the bundled code.
* Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>` tag.

Note that if you add a `<script>` that declares global variables, you also need to read the next section on using them.

## Using Global Variables

When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the `window` object, for example:

\`\`\`js
const $ = window.$;
\`\`\`

This makes it obvious you are using a global variable intentionally rather than because of a typo.

Alternatively, you can force the linter to ignore any line by adding `// eslint-disable-line` after it.

## Adding Bootstrap

You don’t have to use [React Bootstrap][158] together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

\`\`\`sh
npm install --save react-bootstrap bootstrap@3
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add react-bootstrap bootstrap@3
\`\`\`

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your `src/index.js` file:

\`\`\`js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
\`\`\`

Import required React Bootstrap components within `src/app.js` file or your custom component files:

\`\`\`js
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
\`\`\`

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example [`app.js`][159] redone using React Bootstrap.

### Using a Custom Theme

Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package).<br>
We suggest the following approach:

* Create a new package that depends on the package you wish to customize, e.g. Bootstrap.
* Add the necessary build steps to tweak the theme, and publish your package on npm.
* Install your own theme npm package as a dependency of your app.

Here is an example of adding a [customized Bootstrap][160] that follows these steps.

## Adding Flow

Flow is a static type checker that helps you write code with fewer bugs. Check out this [introduction to using static types in JavaScript][161] if you are new to this concept.

Recent versions of [Flow][162] work with Create React App projects out of the box.

To add Flow to a Create React App project, follow these steps:

1. Run `npm install --save flow-bin` (or `yarn add flow-bin`).
2. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
3. Run `npm run flow init` (or `yarn flow init`) to create a [`.flowconfig` file][163] in the root directory.
4. Add `// @flow` to any files you want to type check (for example, to `src/app.js`).

Now you can run `npm run flow` (or `yarn flow`) to check the files for type errors.
You can optionally use an IDE like [Nuclide][164] for a better integrated experience.
In the future we plan to integrate it into Create React App even more closely.

To learn more about Flow, check out [its documentation][165].

## Adding Custom Environment Variables

> Note: this feature is available with `react-scripts@0.2.3` and higher.

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have `NODE_ENV` defined for you, and any other environment variables starting with
`REACT_APP_`.

**The environment variables are embedded during the build time**. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, just like [described here][166]. Alternatively you can rebuild the app on the server anytime you change them.

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally [exposing a private key on the machine that could have the same name][167]. Changing any environment variables will require you to restart the development server if it is running.

These environment variables will be defined for you on `process.env`. For example, having an environment
variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`.

There is also a special built-in environment variable called `NODE_ENV`. You can read it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal to `'development'`, when you run `npm test` it is always equal to `'test'`, and when you run `npm run build` to make a production bundle, it is always equal to `'production'`. **You cannot override `NODE_ENV` manually.** This prevents developers from accidentally deploying a slow development build to production.

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined
in the environment inside a `<form>`:

\`\`\`jsx
render() {
  return (
	<div>
	  <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
	  <form>
	    <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
	  </form>
	</div>
  );
}
\`\`\`

During the build, `process.env.REACT_APP_SECRET_CODE` will be replaced with the current value of the `REACT_APP_SECRET_CODE` environment variable. Remember that the `NODE_ENV` variable will be set for you automatically.

When you load the app in the browser and inspect the `<input>`, you will see its value set to `abcdef`, and the bold text will show the environment provided when using `npm start`:

\`\`\`html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
\`\`\`

The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this
value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in
a `.env` file. Both of these ways are described in the next few sections.

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

\`\`\`js
if (process.env.NODE\_ENV !== 'production') {
  analytics.disable();
}
\`\`\`

When you compile the app with `npm run build`, the minification step will strip out this condition, and the resulting bundle will be smaller.

### Referencing Environment Variables in the HTML

> Note: this feature is available with `react-scripts@0.9.0` and higher.

You can also access the environment variables starting with `REACT_APP_` in the `public/index.html`. For example:

\`\`\`html
<title>%REACT\_APP\_WEBSITE\_NAME%</title>
\`\`\`

Note that the caveats from the above section apply:

* Apart from a few built-in variables (`NODE_ENV` and `PUBLIC_URL`), variable names must start with `REACT_APP_` to work.
* The environment variables are injected at build time. If you need to inject them at runtime, [follow this approach instead][168].

### Adding Temporary Environment Variables In Your Shell

Defining environment variables can vary between OSes. It’s also important to know that this manner is temporary for the
life of the shell session.

#### Windows (cmd.exe)

\`\`\`cmd
set REACT\_APP\_SECRET\_CODE=abcdef&&npm start
\`\`\`

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

\`\`\`bash
REACT\_APP\_SECRET\_CODE=abcdef npm start
\`\`\`

### Adding Development Environment Variables In `.env`

> Note: this feature is available with `react-scripts@0.5.0` and higher.

To define permanent environment variables, create a file called `.env` in the root of your project:

\`\`\`
REACT\_APP\_SECRET\_CODE=abcdef
\`\`\`

`.env` files **should be** checked into source control (with the exclusion of `.env*.local`).

#### What other `.env` files can be used?

> Note: this feature is **available with `react-scripts@1.0.0` and higher**.

* `.env`: Default.
* `.env.local`: Local overrides. **This file is loaded for all environments except test.**
* `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

* `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
* `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
* `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the [dotenv documentation][169] for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI][170] or [Heroku][171].

## Can I Use Decorators?

Many popular libraries use [decorators][172] in their documentation.<br>
Create React App doesn’t support decorator syntax at the moment because:

* It is an experimental proposal and is subject to change.
* The current specification version is not officially supported by Babel.
* If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.

However in many cases you can rewrite decorator-based code without decorators just as fine.<br>
Please refer to these two threads for reference:

* [^214](https://github.com/facebookincubator/create-react-app/issues/214)
* [^411](https://github.com/facebookincubator/create-react-app/issues/411)

Create React App will add decorator support when the specification advances to a stable stage.

## Integrating with an API Backend

These tutorials will help you to integrate your app with an API backend running on another port,
using `fetch()` to access it.

### Node
Check out [this tutorial][173].
You can find the companion GitHub repository [here][174].

### Ruby on Rails

Check out [this tutorial][175].
You can find the companion GitHub repository [here][176].

## Proxying API Requests in Development

> Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.<br>
For example, a production setup might look like this after the app is deployed:

\`\`\`
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/\* requests using the backend implementation
\`\`\`

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

\`\`\`js
  "proxy": "http://localhost:4000",
\`\`\`

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:4000/api/todos` as a fallback. The development server will **only** attempt to send requests without `text/html` in its `Accept` header to the proxy.

Conveniently, this avoids [CORS issues][177] and error messages like this in development:

\`\`\`
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
\`\`\`

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.<br>
If the `proxy` option is **not** flexible enough for you, alternatively you can:

* [Configure the proxy yourself][178]
* Enable CORS on your server ([here’s how to do it for Express][179]).
* Use [environment variables][180] to inject the right server host and port into your app.

### "Invalid Host Header" Errors After Configuring Proxy

When you enable the `proxy` option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in [this article][181] and [this issue][182].

This shouldn’t affect you when developing on `localhost`, but if you develop remotely like [described here][183], you will see this error in the browser after enabling the `proxy` option:

> Invalid Host header

To work around it, you can specify your public development host in a file called `.env.development` in the root of your project:

\`\`\`
HOST=mypublicdevhost.com
\`\`\`

If you restart the development server now and load the app from the specified host, it should work.

If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to `.env.development.local`. **Note that this is dangerous and exposes your machine to remote code execution from malicious websites:**

\`\`\`
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY\_DISABLE\_HOST\_CHECK=true
\`\`\`

We don’t recommend this approach.

### Configuring the Proxy Manually

> Note: this feature is available with `react-scripts@1.0.0` and higher.

If the `proxy` option is **not** flexible enough for you, you can specify an object in the following form (in `package.json`).<br>
You may also specify any configuration value [`http-proxy-middleware`][184] or [`http-proxy`][185] supports.
\`\`\`js
{
  // ...
  "proxy": {
	"/api": {
	  "target": "<url>",
	  "ws": true
	  // ...
	}
  }
  // ...
}
\`\`\`

All requests matching this path will be proxies, no exceptions. This includes requests for `text/html`, which the standard `proxy` option does not proxy.

If you need to specify multiple proxies, you may do so by specifying additional entries.
Matches are regular expressions, so that you can use a regexp to match multiple paths.
\`\`\`js
{
  // ...
  "proxy": {
	// Matches any request starting with /api
	"/api": {
	  "target": "<url_1>",
	  "ws": true
	  // ...
	},
	// Matches any request starting with /foo
	"/foo": {
	  "target": "<url_2>",
	  "ssl": true,
	  "pathRewrite": {
	    "^/foo": "/foo/beta"
	  }
	  // ...
	},
	// Matches /bar/abc.html but not /bar/sub/def.html
	"/bar/[^/]*[.]html": {
	  "target": "<url_3>",
	  // ...
	},
	// Matches /baz/abc.html and /baz/sub/def.html
	"/baz/.*/.*[.]html": {
	  "target": "<url_4>"
	  // ...
	}
  }
  // ...
}
\`\`\`

### Configuring a WebSocket Proxy

When setting up a WebSocket proxy, there are a some extra considerations to be aware of.

If you’re using a WebSocket engine like [Socket.io][186], you must have a Socket.io server running that you can use as the proxy target. Socket.io will not work with a standard WebSocket server. Specifically, don't expect Socket.io to work with [the websocket.org echo test][187].

There’s some good documentation available for [setting up a Socket.io server][188].

Standard WebSockets **will** work with a standard WebSocket server as well as the websocket.org echo test. You can use libraries like [ws][189] for the server, with [native WebSockets in the browser][190].

Either way, you can proxy WebSocket requests manually in `package.json`:

\`\`\`js
{
  // ...
  "proxy": {
	"/socket": {
	  // Your compatible WebSocket server
	  "target": "ws://<socket_url>",
	  // Tell http-proxy-middleware that this is a WebSocket proxy.
	  // Also allows you to proxy WebSocket requests without an additional HTTP request
	  // https://github.com/chimurai/http-proxy-middleware#external-websocket-upgrade
	  "ws": true
	  // ...
	}
  }
  // ...
}
\`\`\`

## Using HTTPS in Development

> Note: this feature is available with `react-scripts@0.4.0` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature][191] to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

#### Windows (cmd.exe)

\`\`\`cmd
set HTTPS=true&&npm start
\`\`\`

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

\`\`\`bash
HTTPS=true npm start
\`\`\`

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Generating Dynamic `<meta>` Tags on the Server

Since Create React App doesn’t support server rendering, you might be wondering how to make `<meta>` tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:

\`\`\`html
\<!doctype html\>
<html lang="en">
  <head>
	<meta property="og:title" content="__OG_TITLE__">
	<meta property="og:description" content="__OG_DESCRIPTION__">
\`\`\`

Then, on the server, regardless of the backend you use, you can read `index.html` into memory and replace `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.

## Pre-Rendering into Static HTML Files

If you’re hosting your `build` with a static hosting provider you can use [react-snapshot][192] or [react-snap][193] to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page _with_ the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here][194].

## Injecting Data from the Server into the Page

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:

\`\`\`js
\<!doctype html\>
<html lang="en">
  <head>
	<script>
	  window.SERVER_DATA = __SERVER_DATA__;
	</script>
\`\`\`

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to [sanitize the JSON before sending it to the client][195] as it makes your app vulnerable to XSS attacks.**

## Running Tests

> Note: this feature is available with `react-scripts@0.3.0` and higher.<br>
> [Read the migration guide to learn how to enable it in older projects!][196]

Create React App uses [Jest][197] as its test runner. To prepare for this integration, we did a [major revamp][198] of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom][199], they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `app.test.js` and `app.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode][image-1]

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration][200] server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

\`\`\`js
import sum from './sum';

it('sums numbers', () =\> {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
\`\`\`

All `expect()` matchers supported by Jest are [extensively documented here][201].<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`][202] to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

\`\`\`js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () =\> {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
\`\`\`

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/app.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API][203] from [Enzyme][204]. To install it, run:

\`\`\`sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add enzyme enzyme-adapter-react-16 react-test-renderer
\`\`\`

As of Enzyme 3, you will need to install Enzyme along with an Adapter corresponding to the version of React you are using. (The examples above use the adapter for React 16.)

The adapter will also need to be configured in your [global setup file][205]:

#### `src/setupTests.js`
\`\`\`js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
\`\`\`

Now you can write a smoke test with it:

\`\`\`js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () =\> {
  shallow(<App />);
});
\`\`\`

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`][206], and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation][207] for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

\`\`\`js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () =\> {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
\`\`\`

All Jest matchers are [extensively documented here][208].<br>
Nevertheless you can use a third-party assertion library like [Chai][209] if you want to, as described below.

Additionally, you might find [jest-enzyme][210] helpful to simplify your tests with readable matchers. The above `contains` code can be written simpler with jest-enzyme.

\`\`\`js
expect(wrapper).toContainReact(welcome)
\`\`\`

To enable this, install `jest-enzyme`:

\`\`\`sh
npm install --save jest-enzyme
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add jest-enzyme
\`\`\`

Import it in [`src/setupTests.js`][211] to make its matchers available in every test:

\`\`\`js
import 'jest-enzyme';
\`\`\`

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest][212], and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX][213].

However, if you are used to other libraries, such as [Chai][214] and [Sinon][215], or if you have existing code using them that you’d like to port over, you can import them normally like this:

\`\`\`js
import sinon from 'sinon';
import { expect } from 'chai';
\`\`\`

and then use them in your tests like you normally do.

### Initializing Test Environment

> Note: this feature is available with `react-scripts@0.4.0` and higher.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

#### `src/setupTests.js`
\`\`\`js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
\`\`\`

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.<br>
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report][image-2]

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

#### Configuration

The default Jest coverage configuration can be overriden by adding any of the following supported keys to a Jest config in your package.json.

Supported overrides:
 - [`collectCoverageFrom`][216]
 - [`coverageReporters`][217]
 - [`coverageThreshold`][218]
 - [`snapshotSerializers`][219]

Example package.json:

\`\`\`json
{
  "name": "your-package",
  "jest": {
	"collectCoverageFrom" : [
	  "src/**/*.{js,jsx}",
	  "!<rootDir>/node_modules/",
	  "!<rootDir>/path/to/dir/"
	],
	"coverageThreshold": {
	  "global": {
	    "branches": 90,
	    "functions": 90,
	    "lines": 90,
	    "statements": 90
	  }
	},
	"coverageReporters": ["text"],
	"snapshotSerializers": ["my-serializer-module"]
  }
}
\`\`\`

### Continuous Integration

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers
#### Travis CI

1. Following the [Travis Getting started][220] guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your [profile][221] page.
1. Add a `.travis.yml` file to your git repository.
\`\`\`
language: node\_js
node\_js:
  - 6
cache:
  directories:
	- node_modules
script:
  - npm run build
  - npm test
\`\`\`
1. Trigger your first build with a git push.
1. [Customize your Travis CI Build][222] if needed.

#### CircleCI

Follow [this article][223] to set up CircleCI with a Create React App project.

### On your own environment
##### Windows (cmd.exe)

\`\`\`cmd
set CI=true&&npm test
\`\`\`

\`\`\`cmd
set CI=true&&npm run build
\`\`\`

(Note: the lack of whitespace is intentional.)

##### Linux, macOS (Bash)

\`\`\`bash
CI=true npm test
\`\`\`

\`\`\`bash
CI=true npm run build
\`\`\`

The test command will force Jest to run tests once instead of launching the watcher.

>  If you find yourself doing this often in development, please [file an issue][224] to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### Disabling jsdom

By default, the `package.json` of the generated project looks like this:

\`\`\`js
  "scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"test": "react-scripts test --env=jsdom"
\`\`\`

If you know that none of your tests depend on [jsdom][225], you can safely remove `--env=jsdom`, and your tests will run faster:

\`\`\`diff
  "scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
-   "test": "react-scripts test --env=jsdom"
+   "test": "react-scripts test"
\`\`\`

To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`][226]
* [`TestUtils.renderIntoDocument()`][227] ([a shortcut][228] for the above)
* [`mount()`][229] in [Enzyme][230]

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`][231] (shallow rendering)
* [`shallow()`][232] in [Enzyme][233]

Finally, jsdom is also not needed for [snapshot testing][234].

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.][235]

### Editor Integration

If you use [Visual Studio Code][236], there is a [Jest extension][237] which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview][image-3]

## Developing Components in Isolation

Usually, in an app, you have a lot of UI components, and each of them has many different states.
For an example, a simple button component could have following states:

* In a regular state, with a text label.
* In the disabled mode.
* In a loading state.

Usually, it’s hard to see these states without running a sample app or some examples.

Create React App doesn’t include any tools for this by default, but you can easily add [Storybook for React][238] ([source][239]) or [React Styleguidist][240] ([source][241]) to your project. **These are third-party tools that let you develop components and see all their states in isolation from your app**.

![Storybook for React Demo][image-4]

You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.

### Getting Started with Storybook

Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

First, install the following npm package globally:

\`\`\`sh
npm install -g @storybook/cli
\`\`\`

Then, run the following command inside your app’s directory:

\`\`\`sh
getstorybook
\`\`\`

After that, follow the instructions on the screen.

Learn more about React Storybook:

* Screencast: [Getting Started with React Storybook][242]
* [GitHub Repo][243]
* [Documentation][244]
* [Snapshot Testing UI][245] with Storybook + addon/storyshot

### Getting Started with Styleguidist

Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground.

First, install Styleguidist:

\`\`\`sh
npm install --save react-styleguidist
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add react-styleguidist
\`\`\`

Then, add these scripts to your `package.json`:

\`\`\`diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
	 "start": "react-scripts start",
\`\`\`

Then, run the following command inside your app’s directory:

\`\`\`sh
npm run styleguide
\`\`\`

After that, follow the instructions on the screen.

Learn more about React Styleguidist:

* [GitHub Repo][246]
* [Documentation][247]

## Making a Progressive Web App

By default, the production build is a fully functional, offline-first
[Progressive Web App][248].

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

 * All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
 * Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.
 * On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web **push notifications**. This eliminates the need for the app store.

The [`sw-precache-webpack-plugin`][249]
is integrated into production configuration,
and it will take care of generating a service worker file that will automatically
precache all of your local assets and keep them up to date as you deploy updates.
The service worker will use a [cache-first strategy][250]
for handling all requests for local assets, including the initial HTML, ensuring
that your web app is reliably fast, even on a slow or unreliable network.

### Opting Out of Caching

If you would prefer not to enable service workers prior to your initial
production deployment, then remove the call to `registerServiceWorker()`
from [`src/index.js`][251].

If you had previously enabled service workers in your production deployment and
have decided that you would like to disable them for all your existing users,
you can swap out the call to `registerServiceWorker()` in
[`src/index.js`][252] first by modifying the service worker import:
\`\`\`javascript
import { unregister } from './registerServiceWorker';
\`\`\`
and then call `unregister()` instead.
After the user visits a page that has `unregister()`,
the service worker will be uninstalled. Note that depending on how `/service-worker.js` is served,
it may take up to 24 hours for the cache to be invalidated.

### Offline-First Considerations

1. Service workers [require HTTPS][253],
although to facilitate local testing, that policy
[does not apply to `localhost`][254].
If your production web server does not support HTTPS, then the service worker
registration will fail, but the rest of your web app will remain functional.

1. Service workers are [not currently supported][255]
in all web browsers. Service worker registration [won't be attempted][256]
on browsers that lack support.

1. The service worker is only enabled in the [production environment][257],
e.g. the output of `npm run build`. It's recommended that you do not enable an
offline-first service worker in a development environment, as it can lead to
frustration when previously cached assets are used and do not include the latest
changes you've made locally.

1. If you *need* to test your offline-first service worker locally, build
the application (using `npm run build`) and run a simple http server from your
build directory. After running the build script, `create-react-app` will give
instructions for one way to test your production build locally and the [deployment instructions][258] have
instructions for using other methods. \*Be sure to always use an
incognito window to avoid complications with your browser cache.\*

1. If possible, configure your production environment to serve the generated
`service-worker.js` [with HTTP caching disabled][259].
If that's not possible—[GitHub Pages][260], for instance, does not
allow you to change the default 10 minute HTTP cache lifetime—then be aware
that if you visit your production site, and then revisit again before
`service-worker.js` has expired from your HTTP cache, you'll continue to get
the previously cached assets from the service worker. If you have an immediate
need to view your updated production deployment, performing a shift-refresh
will temporarily disable the service worker and retrieve all assets from the
network.

1. Users aren't always familiar with offline-first web apps. It can be useful to
[let the user know][261]
when the service worker has finished populating your caches (showing a "This web
app works offline!" message) and also let them know when the service worker has
fetched the latest updates that will be available the next time they load the
page (showing a "New content is available; please refresh." message). Showing
this messages is currently left as an exercise to the developer, but as a
starting point, you can make use of the logic included in [`src/registerServiceWorker.js`][262], which
demonstrates which service worker lifecycle events to listen for to detect each
scenario, and which as a default, just logs appropriate messages to the
JavaScript console.

1. By default, the generated service worker file will not intercept or cache any
cross-origin traffic, like HTTP [API requests][263],
images, or embeds loaded from a different domain. If you would like to use a
runtime caching strategy for those requests, you can [`eject`][264]
and then configure the
[`runtimeCaching`][265]
option in the `SWPrecacheWebpackPlugin` section of
[`webpack.config.prod.js`][266].

### Progressive Web App Metadata

The default configuration includes a web app manifest located at
[`public/manifest.json`][267], that you can customize with
details specific to your web application.

When a user adds a web app to their homescreen using Chrome or Firefox on
Android, the metadata in [`manifest.json`][268] determines what
icons, names, and branding colors to use when the web app is displayed.
[The Web App Manifest guide][269]
provides more context about what each field means, and how your customizations
will affect your users' experience.

## Analyzing the Bundle Size

[Source map explorer][270] analyzes
JavaScript bundles using the source maps. This helps you understand where code
bloat is coming from.

To add Source map explorer to a Create React App project, follow these steps:

\`\`\`sh
npm install --save source-map-explorer
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add source-map-explorer
\`\`\`

Then in `package.json`, add the following line to `scripts`:

\`\`\`diff
   "scripts": {
+    "analyze": "source-map-explorer build/static/js/main.\*",
	 "start": "react-scripts start",
	 "build": "react-scripts build",
	 "test": "react-scripts test --env=jsdom",
\`\`\`

Then to analyze the bundle run the production build then run the analyze
script.

\`\`\`
npm run build
npm run analyze
\`\`\`

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### Static Server

For environments using [Node][271], the easiest way to handle this would be to install [serve][272] and let it handle the rest:

\`\`\`sh
npm install -g serve
serve -s build
\`\`\`

The last command shown above will serve your static site on the port **5000**. Like many of [serve][273]’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

\`\`\`sh
serve -h
\`\`\`

### Other Solutions

You don’t necessarily need a static server in order to run a Create React App project in production. It works just as fine integrated into an existing dynamic one.

Here’s a programmatic example using [Node][274] and [Express][275]:

\`\`\`javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(\_\_dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(\_\_dirname, 'build', 'index.html'));
});

app.listen(9000);
\`\`\`

The choice of your server software isn’t important either. Since Create React App is completely platform-agnostic, there’s no need to explicitly use Node.

The `build` folder with static assets is the only output produced by Create React App.

However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like `/todos/42` in your single-page app.

### Serving Apps with Client-Side Routing

If you use routers that use the HTML5 [`pushState` history API][276] under the hood (for example, [React Router][277] with `browserHistory`), many static file servers will fail. For example, if you used React Router with a route for `/todos/42`, the development server will respond to `localhost:3000/todos/42` properly, but an Express serving a production build as above will not.

This is because when there is a fresh page load for a `/todos/42`, the server looks for the file `build/todos/42` and does not find it. The server needs to be configured to respond to a request to `/todos/42` by serving `index.html`. For example, we can amend our Express example above to serve `index.html` for any unknown paths:

\`\`\`diff
 app.use(express.static(path.join(\_\_dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/\*', function (req, res) {
   res.sendFile(path.join(\_\_dirname, 'build', 'index.html'));
 });
\`\`\`

If you’re using [Apache HTTP Server][278], you need to create a `.htaccess` file in the `public` folder that looks like this:

\`\`\`
	Options -MultiViews
	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^ index.html [QSA,L]
\`\`\`

It will get copied to the `build` folder when you run `npm run build`. 

If you’re using [Apache Tomcat][279], you need to follow [this Stack Overflow answer][280].

Now requests to `/todos/42` will be handled correctly both in development and in production.

On a production build, and in a browser that supports [service workers][281],
the service worker will automatically handle all navigation requests, like for
`/todos/42`, by serving the cached copy of your `index.html`. This
service worker navigation routing can be configured or disabled by
[`eject`ing][282] and then modifying the
[`navigateFallback`][283]
and [`navigateFallbackWhitelist`][284]
options of the `SWPreachePlugin` [configuration][285].

When users install your app to the homescreen of their device the default configuration will make a shortcut to `/index.html`. This may not work for client-side routers which expect the app to be served from `/`. Edit the web app manifest at [`public/manifest.json`][286] and change `start_url` to match the required URL scheme, for example:

\`\`\`js
  "start\_url": ".",
\`\`\`

### Building for Relative Paths

By default, Create React App produces a build assuming your app is hosted at the server root.<br>
To override this, specify the `homepage` in your `package.json`, for example:

\`\`\`js
  "homepage": "http://mywebsite.com/relativepath",
\`\`\`

This will let Create React App correctly infer the root path to use in the generated HTML file.

**Note**: If you are using `react-router@^4`, you can root `<Link>`s using the `basename` prop on any `<Router>`.<br>
More information [here][287].<br>
<br>
For example:
\`\`\`js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
\`\`\`

#### Serving the Same Build from Different Paths

> Note: this feature is available with `react-scripts@0.9.0` and higher.

If you are not using the HTML5 `pushState` history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your `package.json`:

\`\`\`js
  "homepage": ".",
\`\`\`

This will make sure that all the asset paths are relative to `index.html`. You will then be able to move your app from `http://mywebsite.com` to `http://mywebsite.com/relativepath` or even `http://mywebsite.com/relative/path` without having to rebuild it.

### [Azure][288]

See [this][289] blog post on how to deploy your React app to Microsoft Azure.

### [Firebase][290]

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a [Firebase account][291] and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `database.rules.json` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.

\`\`\`sh
	=== Project Setup
	
	First, let's associate this project directory with a Firebase project.
	You can create multiple project aliases by running firebase use --add,
	but for now we'll just set up a default project.
	
	? What Firebase project do you want to associate as default? Example app (example-app-fd690)
	
	=== Database Setup
	
	Firebase Realtime Database Rules allow you to define how your data should be
	structured and when your data can be read from and written to.
	
	? What file should be used for Database Rules? database.rules.json
	✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
	Future modifications to database.rules.json will update Database Rules when you run
	firebase deploy.
	
	=== Hosting Setup
	
	Your public directory is the folder (relative to your project directory) that
	will contain Hosting assets to uploaded with firebase deploy. If you
	have a build process for your assets, use your build's output directory.
	
	? What do you want to use as your public directory? build
	? Configure as a single-page app (rewrite all urls to /index.html)? Yes
	✔  Wrote build/index.html
	
	i  Writing configuration info to firebase.json...
	i  Writing project information to .firebaserc...
	
	✔  Firebase initialization complete!
\`\`\`

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.

\`\`\`sh
	=== Deploying to 'example-app-fd690'...
	
	i  deploying database, hosting
	✔  database: rules ready to deploy.
	i  hosting: preparing build directory for upload...
	Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
	✔  hosting: 8 files uploaded successfully
	i  starting release process (may take several minutes)...
	
	✔  Deploy complete!
	
	Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
	Hosting URL: https://example-app-fd690.firebaseapp.com
\`\`\`

For more information see [Add Firebase to your JavaScript Project][292].

### [GitHub Pages][293]

> Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:

\`\`\`js
  "homepage": "https://myusername.github.io/my-app",
\`\`\`

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app][294], run:

\`\`\`sh
npm install --save gh-pages
\`\`\`

Alternatively you may use `yarn`:

\`\`\`sh
yarn add gh-pages
\`\`\`

Add the following scripts in your `package.json`:

\`\`\`diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
	"start": "react-scripts start",
	"build": "react-scripts build",
\`\`\`

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

\`\`\`sh
npm run deploy
\`\`\`

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more][295] about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide][296].

### [Heroku][297]

Use the [Heroku Buildpack for Create React App][298].<br>
You can find instructions in [Deploying React with Zero Configuration][299].

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:

\`\`\`
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build\_1234/src
\`\`\`

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:

\`\`\`
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build\_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build\_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build\_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
\`\`\`

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore` or `~/.gitignore_global`.

### [Netlify][300]

**To do a manual deploy to Netlify’s CDN:**

\`\`\`sh
npm install netlify-cli
netlify deploy
\`\`\`

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

1. [Start a new netlify project][301]
2. Pick your Git hosting service and select your repository
3. Click `Build your site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:

\`\`\`
/\*  /index.html  200
\`\`\`

When you build the project, Create React App will place the `public` folder contents into the build output.

### [Now][302]

Now offers a zero-configuration single-command deployment. You can use `now` to deploy your app for free.

1. Install the `now` command-line tool either via the recommended [desktop tool][303] or via node with `npm install -g now`.

2. Build your app by running `npm run build`.

3. Move into the build directory by running `cd build`.

4. Run `now --name your-project-name` from within the build directory. You will see a **now.sh** URL in your output like this:

	\`\`\`
	> Ready! https://your-project-name-tpspyhtdtk.now.sh (copied to clipboard)
	\`\`\`

	Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.][304]

### [S3][305] and [CloudFront][306]

See this [blog post][307] on how to deploy your React app to Amazon Web Services S3 and CloudFront.

### [Surge][308]

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, for example:

\`\`\`sh
	   project path: /path/to/project/build
\`\`\`

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file][309].

## Advanced Configuration

You can adjust various development and production settings by setting environment variables in your shell or with [.env][310].

Variable | Development | Production | Usage
:--- | :---: | :---: | :---
BROWSER | :white\_check\_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser][311] to override this behavior, or set it to `none` to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to `npm start` will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the `.js` extension.
HOST | :white\_check\_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host.
PORT | :white\_check\_mark: | :x: | By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.
HTTPS | :white\_check\_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode.
PUBLIC\_URL | :x: | :white\_check\_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in [`package.json` (`homepage`)][312]. Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.
CI | :large\_orange\_diamond: | :white\_check\_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.
REACT\_EDITOR | :white\_check\_mark: | :x: | When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can [send a pull request to detect your editor of choice][313]. Setting this environment variable overrides the automatic detection. If you do it, make sure your systems [PATH][314] environment variable points to your editor’s bin folder.
CHOKIDAR\_USEPOLLING | :white\_check\_mark: | :x: | When set to `true`, the watcher runs in polling mode, as necessary inside a VM. Use this option if `npm start` isn't detecting changes.
GENERATE\_SOURCEMAP | :x: | :white\_check\_mark: | When set to `false`, source maps are not generated for a production build. This solves OOM issues on some smaller machines.

## Troubleshooting

### `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.<br>
If this doesn’t happen, try one of the following workarounds:

* If your project is in a Dropbox folder, try moving it out.
* If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher][315] due to a Webpack bug.
* Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Adjusting Your Text Editor”][316].
* If your project path contains parentheses, try moving the project to a path without them. This is caused by a [Webpack watcher bug][317].
* On Linux and macOS, you might need to [tweak system settings][318] to allow more watchers.
* If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread][319].

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your [Watchman][320] installation as described in [facebookincubator/create-react-app#713][321].

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

* [facebook/jest#1767][322]
* [facebook/watchman#358][323]
* [ember-cli/ember-cli#6259][324]

It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use [Homebrew][325], you can run these commands to update it:

\`\`\`
watchman shutdown-server
brew update
brew reinstall watchman
\`\`\`

You can find [other installation methods][326] on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that *uninstalling* Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` exits too early

It is reported that `npm run build` can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:

>  The build failed because the process exited too early. This probably means the system ran out of memory or someone called `kill -9` on the process.

If you are completely sure that you didn't terminate the process, consider [adding some swap space][327] to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames.
Please refer to [this section][328].

### Moment.js locales are missing

If you use a [Moment.js][329], you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of [all the locales provided by Moment.js][330].

To add a specific Moment.js locale to your bundle, you need to import it explicitly.<br>
For example:

\`\`\`js
import moment from 'moment';
import 'moment/locale/fr';
\`\`\`

If import multiple locales this way, you can later switch between them by calling `moment.locale()` with the locale name:

\`\`\`js
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
\`\`\`

This will only work for locales that have been explicitly imported before.

### `npm run build` fails to minify

Some third-party packages don't compile their code to ES5 before publishing to npm. This often causes problems in the ecosystem because neither browsers (except for most modern versions) nor some tools currently support all ES6 features. We recommend to publish code on npm as ES5 at least for a few more years.

<br>
To resolve this:

1. Open an issue on the dependency's issue tracker and ask that the package be published pre-compiled.
  2. Note: Create React App can consume both CommonJS and ES modules. For Node.js compatibility, it is recommended that the main entry point is CommonJS. However, they can optionally provide an ES module entry point with the `module` field in `package.json`. Note that **even if a library provides an ES Modules version, it should still precompile other ES6 features to ES5 if it intends to support older browsers**.

2. Fork the package and publish a corrected version yourself.

3. If the dependency is small enough, copy it to your `src/` folder and treat it as application code.

In the future, we might start automatically compiling incompatible third-party modules, but it is not currently supported. This approach would also slow down the production builds.

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know][331] or [contribute some!][332]

[1]:	https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[2]:	#app-naming-convension
[3]:	#updating-to-new-releases
[4]:	#sending-feedback
[5]:	#folder-structure
[6]:	#available-scripts
[7]:	#npm-start
[8]:	#npm-test
[9]:	#npm-run-build
[10]:	#npm-run-eject
[11]:	#supported-language-features-and-polyfills
[12]:	#syntax-highlighting-in-the-editor
[13]:	#displaying-lint-output-in-the-editor
[14]:	#debugging-in-the-editor
[15]:	#formatting-code-automatically
[16]:	#changing-the-page-title
[17]:	#installing-a-dependency
[18]:	#importing-a-component
[19]:	#code-splitting
[20]:	#adding-a-stylesheet
[21]:	#post-processing-css
[22]:	#adding-a-css-preprocessor-sass-less-etc
[23]:	#adding-images-fonts-and-files
[24]:	#using-the-public-folder
[25]:	#changing-the-html
[26]:	#adding-assets-outside-of-the-module-system
[27]:	#when-to-use-the-public-folder
[28]:	#using-global-variables
[29]:	#adding-bootstrap
[30]:	#using-a-custom-theme
[31]:	#adding-flow
[32]:	#adding-custom-environment-variables
[33]:	#referencing-environment-variables-in-the-html
[34]:	#adding-temporary-environment-variables-in-your-shell
[35]:	#adding-development-environment-variables-in-env
[36]:	#can-i-use-decorators
[37]:	#integrating-with-an-api-backend
[38]:	#node
[39]:	#ruby-on-rails
[40]:	#proxying-api-requests-in-development
[41]:	#invalid-host-header-errors-after-configuring-proxy
[42]:	#configuring-the-proxy-manually
[43]:	#configuring-a-websocket-proxy
[44]:	#using-https-in-development
[45]:	#generating-dynamic-meta-tags-on-the-server
[46]:	#pre-rendering-into-static-html-files
[47]:	#injecting-data-from-the-server-into-the-page
[48]:	#running-tests
[49]:	#filename-conventions
[50]:	#command-line-interface
[51]:	#version-control-integration
[52]:	#writing-tests
[53]:	#testing-components
[54]:	#using-third-party-assertion-libraries
[55]:	#initializing-test-environment
[56]:	#focusing-and-excluding-tests
[57]:	#coverage-reporting
[58]:	#continuous-integration
[59]:	#disabling-jsdom
[60]:	#snapshot-testing
[61]:	#editor-integration
[62]:	#developing-components-in-isolation
[63]:	#getting-started-with-storybook
[64]:	#getting-started-with-styleguidist
[65]:	#making-a-progressive-web-app
[66]:	#opting-out-of-caching
[67]:	#offline-first-considerations
[68]:	#progressive-web-app-metadata
[69]:	#analyzing-the-bundle-size
[70]:	#deployment
[71]:	#static-server
[72]:	#other-solutions
[73]:	#serving-apps-with-client-side-routing
[74]:	#building-for-relative-paths
[75]:	#azure
[76]:	#firebase
[77]:	#github-pages
[78]:	#heroku
[79]:	#netlify
[80]:	#now
[81]:	#s3-and-cloudfront
[82]:	#surge
[83]:	#advanced-configuration
[84]:	#troubleshooting
[85]:	#npm-start-doesnt-detect-changes
[86]:	#npm-test-hangs-on-macos-sierra
[87]:	#npm-run-build-exits-too-early
[88]:	#npm-run-build-fails-on-heroku
[89]:	#npm-run-build-fails-to-minify
[90]:	#momentjs-locales-are-missing
[91]:	#something-missing
[92]:	https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md
[93]:	https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md
[94]:	https://github.com/facebookincubator/create-react-app/issues
[95]:	http://localhost:3000
[96]:	#running-tests
[97]:	#deployment
[98]:	https://github.com/lukehoban/es6features
[99]:	https://github.com/rwaldron/exponentiation-operator
[100]:	https://github.com/tc39/ecmascript-asyncawait
[101]:	https://github.com/sebmarkbage/ecmascript-rest-spread
[102]:	https://github.com/tc39/proposal-dynamic-import
[103]:	https://github.com/tc39/proposal-class-public-fields
[104]:	https://facebook.github.io/react/docs/introducing-jsx.html
[105]:	https://flowtype.org/
[106]:	https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
[107]:	https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb
[108]:	https://en.wikipedia.org/wiki/Polyfill
[109]:	https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
[110]:	https://github.com/sindresorhus/object-assign
[111]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[112]:	https://github.com/then/promise
[113]:	https://developer.mozilla.org/en/docs/Web/API/Fetch_API
[114]:	https://github.com/github/fetch
[115]:	https://babeljs.io/docs/editors
[116]:	https://github.com/jlongster/prettier
[117]:	https://code.visualstudio.com
[118]:	https://www.jetbrains.com/webstorm/
[119]:	https://code.visualstudio.com
[120]:	https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
[121]:	#advanced-configuration
[122]:	https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting
[123]:	https://www.jetbrains.com/webstorm/
[124]:	https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji
[125]:	#advanced-configuration
[126]:	https://github.com/prettier/prettier
[127]:	https://prettier.github.io/prettier/
[128]:	https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8
[129]:	https://github.com/prettier/prettier#editor-integration
[130]:	#adding-a-stylesheet
[131]:	https://developer.mozilla.org/en-US/docs/Web/API/Document/title
[132]:	https://github.com/nfl/react-helmet
[133]:	#generating-dynamic-meta-tags-on-the-server
[134]:	#pre-rendering-into-static-html-files
[135]:	http://exploringjs.com/es6/ch_modules.html
[136]:	http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281
[137]:	http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281
[138]:	http://exploringjs.com/es6/ch_modules.html
[139]:	https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules
[140]:	http://2ality.com/2017/01/import-operator.html#loading-code-on-demand
[141]:	https://github.com/tc39/proposal-dynamic-import
[142]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[143]:	http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html
[144]:	https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app
[145]:	https://webpack.js.org/
[146]:	https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b
[147]:	https://github.com/postcss/autoprefixer
[148]:	https://github.com/postcss/autoprefixer#disabling
[149]:	https://facebook.github.io/react/docs/composition-vs-inheritance.html
[150]:	https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
[151]:	#changing-the-page-title
[152]:	#adding-a-stylesheet
[153]:	#adding-images-fonts-and-files
[154]:	#adding-a-stylesheet
[155]:	#adding-images-fonts-and-files
[156]:	https://developer.mozilla.org/en-US/docs/Web/Manifest
[157]:	http://github.hubspot.com/pace/docs/welcome/
[158]:	https://react-bootstrap.github.io
[159]:	https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js
[160]:	https://medium.com/@tacomanator/customizing-create-react-app-aa9ffb88165
[161]:	https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb
[162]:	http://flowtype.org/
[163]:	https://flowtype.org/docs/advanced-configuration.html
[164]:	https://nuclide.io/docs/languages/flow/
[165]:	https://flowtype.org/
[166]:	#injecting-data-from-the-server-into-the-page
[167]:	https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527
[168]:	#generating-dynamic-meta-tags-on-the-server
[169]:	https://github.com/motdotla/dotenv
[170]:	https://docs.travis-ci.com/user/environment-variables/
[171]:	https://devcenter.heroku.com/articles/config-vars
[172]:	https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
[173]:	https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
[174]:	https://github.com/fullstackreact/food-lookup-demo
[175]:	https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
[176]:	https://github.com/fullstackreact/food-lookup-demo-rails
[177]:	http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations
[178]:	#configuring-the-proxy-manually
[179]:	http://enable-cors.org/server_expressjs.html
[180]:	#adding-custom-environment-variables
[181]:	https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
[182]:	https://github.com/webpack/webpack-dev-server/issues/887
[183]:	https://github.com/facebookincubator/create-react-app/issues/2271
[184]:	https://github.com/chimurai/http-proxy-middleware#options
[185]:	https://github.com/nodejitsu/node-http-proxy#options
[186]:	https://socket.io/
[187]:	http://websocket.org/echo.html
[188]:	https://socket.io/docs/
[189]:	https://github.com/websockets/ws
[190]:	https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[191]:	#proxying-api-requests-in-development
[192]:	https://www.npmjs.com/package/react-snapshot
[193]:	https://github.com/stereobooster/react-snap
[194]:	https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319
[195]:	https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0
[196]:	https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030
[197]:	https://facebook.github.io/jest/
[198]:	https://facebook.github.io/jest/blog/2016/09/01/jest-15.html
[199]:	https://github.com/tmpvar/jsdom
[200]:	#continuous-integration
[201]:	https://facebook.github.io/jest/docs/en/expect.html#content
[202]:	https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled
[203]:	http://airbnb.io/enzyme/docs/api/shallow.html
[204]:	http://airbnb.io/enzyme/
[205]:	#initializing-test-environment
[206]:	http://airbnb.io/enzyme/docs/api/mount.html
[207]:	http://airbnb.io/enzyme/
[208]:	http://facebook.github.io/jest/docs/en/expect.html
[209]:	http://chaijs.com/
[210]:	https://github.com/blainekasten/enzyme-matchers
[211]:	#initializing-test-environment
[212]:	https://github.com/facebook/jest/issues/new
[213]:	https://github.com/facebook/jest/pull/1566
[214]:	http://chaijs.com/
[215]:	http://sinonjs.org/
[216]:	https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
[217]:	https://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string
[218]:	https://facebook.github.io/jest/docs/en/configuration.html#coveragethreshold-object
[219]:	https://facebook.github.io/jest/docs/en/configuration.html#snapshotserializers-array-string
[220]:	https://docs.travis-ci.com/user/getting-started/
[221]:	https://travis-ci.org/profile
[222]:	https://docs.travis-ci.com/user/customizing-the-build/
[223]:	https://medium.com/@knowbody/circleci-and-zeits-now-sh-c9b7eebcd3c1
[224]:	https://github.com/facebookincubator/create-react-app/issues/new
[225]:	https://github.com/tmpvar/jsdom
[226]:	https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
[227]:	https://facebook.github.io/react/docs/test-utils.html#renderintodocument
[228]:	https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91
[229]:	http://airbnb.io/enzyme/docs/api/mount.html
[230]:	http://airbnb.io/enzyme/index.html
[231]:	https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
[232]:	http://airbnb.io/enzyme/docs/api/shallow.html
[233]:	http://airbnb.io/enzyme/index.html
[234]:	http://facebook.github.io/jest/blog/2016/07/27/jest-14.html
[235]:	http://facebook.github.io/jest/blog/2016/07/27/jest-14.html
[236]:	https://code.visualstudio.com
[237]:	https://github.com/orta/vscode-jest
[238]:	https://storybook.js.org
[239]:	https://github.com/storybooks/storybook
[240]:	https://react-styleguidist.js.org/
[241]:	https://github.com/styleguidist/react-styleguidist
[242]:	https://egghead.io/lessons/react-getting-started-with-react-storybook
[243]:	https://github.com/storybooks/storybook
[244]:	https://storybook.js.org/basics/introduction/
[245]:	https://github.com/storybooks/storybook/tree/master/addons/storyshots
[246]:	https://github.com/styleguidist/react-styleguidist
[247]:	https://react-styleguidist.js.org/docs/getting-started.html
[248]:	https://developers.google.com/web/progressive-web-apps/
[249]:	https://github.com/goldhand/sw-precache-webpack-plugin
[250]:	https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network
[251]:	src/app/index.js
[252]:	src/app/index.js
[253]:	https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https
[254]:	http://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385
[255]:	https://jakearchibald.github.io/isserviceworkerready/
[256]:	src/app/registerServiceWorker.js
[257]:	#deployment
[258]:	#deployment
[259]:	http://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours
[260]:	#github-pages
[261]:	https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption
[262]:	src/app/registerServiceWorker.js
[263]:	#integrating-with-an-api-backend
[264]:	#npm-run-eject
[265]:	https://github.com/GoogleChrome/sw-precache#runtimecaching-arrayobject
[266]:	../config/webpack.config.prod.js
[267]:	src/public/manifest.json
[268]:	src/public/manifest.json
[269]:	https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
[270]:	https://www.npmjs.com/package/source-map-explorer
[271]:	https://nodejs.org/
[272]:	https://github.com/zeit/serve
[273]:	https://github.com/zeit/serve
[274]:	https://nodejs.org/
[275]:	http://expressjs.com/
[276]:	https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries
[277]:	https://github.com/ReactTraining/react-router
[278]:	https://httpd.apache.org/
[279]:	http://tomcat.apache.org/
[280]:	https://stackoverflow.com/a/41249464/4878474
[281]:	https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
[282]:	#npm-run-eject
[283]:	https://github.com/GoogleChrome/sw-precache#navigatefallback-string
[284]:	https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp
[285]:	../config/webpack.config.prod.js
[286]:	src/public/manifest.json
[287]:	https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string
[288]:	https://azure.microsoft.com/
[289]:	https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321
[290]:	https://firebase.google.com/
[291]:	https://console.firebase.google.com/
[292]:	https://firebase.google.com/docs/web/setup
[293]:	https://pages.github.com/
[294]:	https://myusername.github.io/my-app
[295]:	https://reacttraining.com/react-router/web/api/Router
[296]:	https://github.com/rafrex/spa-github-pages
[297]:	https://www.heroku.com/
[298]:	https://github.com/mars/create-react-app-buildpack
[299]:	https://blog.heroku.com/deploying-react-with-zero-configuration
[300]:	https://www.netlify.com/
[301]:	https://app.netlify.com/signup
[302]:	https://zeit.co/now
[303]:	https://zeit.co/download
[304]:	https://zeit.co/blog/unlimited-static
[305]:	https://aws.amazon.com/s3
[306]:	https://aws.amazon.com/cloudfront/
[307]:	https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af
[308]:	https://surge.sh/
[309]:	https://surge.sh/help/adding-a-200-page-for-client-side-routing
[310]:	#adding-development-environment-variables-in-env
[311]:	https://github.com/sindresorhus/opn#app
[312]:	#building-for-relative-paths
[313]:	https://github.com/facebookincubator/create-react-app/issues/2636
[314]:	https://en.wikipedia.org/wiki/PATH_(variable)
[315]:	https://github.com/facebookincubator/create-react-app/issues/1164
[316]:	https://webpack.js.org/guides/development/#adjusting-your-text-editor
[317]:	https://github.com/webpack/watchpack/issues/42
[318]:	https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers
[319]:	https://github.com/facebookincubator/create-react-app/issues/659
[320]:	https://facebook.github.io/watchman/
[321]:	https://github.com/facebookincubator/create-react-app/issues/713
[322]:	https://github.com/facebook/jest/issues/1767
[323]:	https://github.com/facebook/watchman/issues/358
[324]:	https://github.com/ember-cli/ember-cli/issues/6259
[325]:	http://brew.sh/
[326]:	https://facebook.github.io/watchman/docs/install.html#build-install
[327]:	https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04
[328]:	#resolving-heroku-deployment-errors
[329]:	https://momentjs.com/
[330]:	https://momentjs.com/#multiple-locale-support
[331]:	https://github.com/facebookincubator/create-react-app/issues
[332]:	https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md

[image-1]:	http://facebook.github.io/jest/img/blog/15-watch.gif
[image-2]:	http://i.imgur.com/5bFhnTS.png
[image-3]:	https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png
[image-4]:	http://i.imgur.com/7CIAWpB.gif