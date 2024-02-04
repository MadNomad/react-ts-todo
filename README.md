# Yet Another ToDo List App
This is pet-project for practice

Used: React, TypeScript, Material UI, styled-components


## Troubleshooting

For using Material UI with styled-components needed some trick...

Put these in package.json
```
"dependencies": {
    "@mui/styled-engine": "npm:@mui/styled-engine-sc@^6.0.0-alpha.10",
    "@mui/material": "^5.15.2",
    "@mui/styled-engine-sc": "^6.0.0-alpha.10",
    ...
 "overrides": {
    "styled-components":"^5.3.11",
    "@mui/system": {
      "@mui/styled-engine": "npm:@mui/styled-engine-sc@^6.0.0-alpha.10"
    }
  },
  ```

If you do not completely remove node_modules and package-log.json before npm install, accessing /admin-messenger will throws an error:\
"Can't resolve '@emotion/styled' in '*/client/node_modules/@mui/system/node_modules/@mui/styled-engine'".\
This is because npm already install the real version of @mui/styled-engine\
> [!IMPORTANT]
>Then you need to remove "name": "@mui/styled-engine-sc", from "node_modules/@mui/styled-engine" in package-lock.json and commit it to trick npm resolve @mui/styled-engine depedency of @mui/system by alias of "@mui/styled-engine"
instead of the installed real version.

Thanks to **napbla**!
[Link to issue resolving](https://github.com/mui/material-ui/issues/27846#issuecomment-1859539140)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
