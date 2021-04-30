https://create-react-app.dev/

```
 npx create-react-app frontend --template typescript 
```

this generates:
1. a folder 'frontend'
2. package.json with react dependencies in it
3. public folder
4. src folder

...and some more files

```
cd frontend
npm start
```

starts the example application that was generated using create-react-app

node_modules can be deleted and re-created from package.json dependencies with

```npm i```

dependencies and devDependencies in package.json are prepared as well as the scripts.

The scripts are:
1. ```npm start``` # starts your app in dev mode
2. ```npm build``` # generates a dist folder named 'build' that can be deployed to some web-server to make the app public available - look at the packages...   
3. ```npm test``` # will run the jest testsa

