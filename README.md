# SailBook

Built from simple React boilerplate with babel, webpack, and webpack-dev-server. See `package.json` for details of dependencies.

## Quick Start

1. Clone or download this repo

2. Change to this project's directory, and in terminal run `npm install`, or `yarn install` if you use Yarn.

3. There are three commands defined in `package.json`:

    - `npm run dev` or `yarn dev` will start a webpack-dev-server with HMR (Hot Module Replacement). This will save your time in re-transpiling JSX and refreshing browsers everytime you make changes to your React components.

    - `npm run build` or `yarn build` will use webpack to bundle two files `vendor.bundle.js` and `app.bundle.js` into `static/js` directory.

    - `npm run clean` or `yarn clean` will simply rm the built js files.

4. After using `npm run dev` to start a webpack-dev-server, the content is served at http://localhost:8000/
