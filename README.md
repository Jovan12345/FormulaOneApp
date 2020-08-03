# Formula One app - READ ME!

This file is created to lay out the steps for installation and starting the app and the most important parts explained on high level. 


## Installation

**Prerequisites**

 - Installed Node.js

**Installation Steps**

 1. Open CLI (command line interface)
 2. Navigate to the project folder
 3. run `npm install`
 4. run `npm start`
 5. The app runs in development mode, can be access through browser on http://localhost:3000

## App description

 - This is an application built using React and Redux. It's purpose is to serve information related to Formula One from the ergast API WEB Service.
 - In the app there are in total 5 components, which mainly are switched using React-Router.
 - Inside some of the components AXIOS is used to make REST based calls to the ergast API.
 - To make the calls asynchronously, Redux-Thunk is used as a middleware.
 - On high level from the components, the actions are called where the REST calls are made and the response from the API is dispatched to the reducers. The reducers are connected to React Store using the Provider and Connect methods from React-Redux.