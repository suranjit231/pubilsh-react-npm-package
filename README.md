# Create and Publish your own react npm packages

## A. Create a New Directory for the Package: ( create a project folder )

- 1. Initialize a New npm Package:
```
npm init
```
- 2. Make sure that while initialzed the npm packages your package name will be like that

- a.  "name": "@suranjitnamasudra/publish-react-npm"
- b. "license": "MIT",

- 3. Install Required Dependencies:
```
npm install react react-dom
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```
- 4. Set Up Babel:
- Create a .babelrc file with the following content:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
- 5. Create a src folder inside the projects
- 6. Create your React component file inside the src folder (e.g., MyComponent.jsx)
- 7. Write the following code for the components.
```
// src/MyComponent.jsx
import React from 'react';

const MyComponent = ({ message }) => {
    return <div style={{ color: 'blue', fontSize: '20px' }}>{message}</div>;
};

export default MyComponent;
```

## Important Notes:
- If you are using css module or seperate css file make sure that file path should comes from the disk folder. 
like if i have a css file inside the ( src/MyComponents.module.css ) which is linked with my components 
then make sure that file path comes like that (../src/MyComponents.module.css ). so when we run the 
npm build commond it push ( MyComponents.jsx file ) to the dest folder and start create dependency tree
So, that we have to make sure that we comes out of the ( dest ) folder then go inside the src folder and find the
( MyComponents.module.css file ). example ( import styles from '../src/MyComponent.module.css' ).

  - XXX---- Don't make like this ( import styles from './MyComponent.module.css') ----XXX

## Step 3: Configure the Build Process

1. Add a build script in your package.json:
```
"scripts": {
    "build": "babel src --out-dir dist"
}
```

2. Build the package:
```
npm run build
```
- This will transpile your code from src to a dist folder using Babel.

## Add Package Metadata

1. Update your package.json
- Ensure it specifies the entry points
```
"main": "dist/MyComponent.js",
"files": [
    "dist"
]
```

2. Add the peerDependencies field to specify React as a peer dependency it should exact matching version with your
react and react-dom that you install as a dependency
```
"peerDependencies": {
     "react": "^18.3.1",
    "react-dom": "^18.3.1"
}
```

## Publish the Package
1. Log in to npm:
```
npm login
```
2. Publish the Package:
```
npm publish --access public
```
- If you encounter a naming conflict, change the name field in package.json (e.g., @yourusername/my-react-package).

## Use the Package in Another Project

1. Create a New Project:
``` 
npx create-react-app test-app
```

2. Install Your Package:
```
npm install @suranjitnamasudra/publish-react-npm
```
3. Use Your Component: Update App.js:
```
import React from 'react';
import MyComponent from '@suranjitnamasudra/publish-react-npm';

const App = () => {
    return (
        <div>
            <h1>Testing My React Package</h1>
            <MyComponent message="Hello from MyComponent!" />
        </div>
    );
};

export default App;
```
4. Run the Project:
```
npm start
```

## Steps for Update the Package when anything change:

1. Make changes to your package.
2. Increment the version in package.json:
3. run build commond
```npm run build
```
4. publish updated npm packages
```
npm publish --access public
```
