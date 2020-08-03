Installation:
	Prerequisites: Installed Node.js
	
	- Open CLI (command line interface)
	- Navigate to the project folder './fone' in this case
	- run ##npm install
	- run ##npm start
	- The app runs in development mode, can be access through browser on http://localhost:3000
	
	For development purposes to run the LESS-CSS watcher: 
	- Open new CLI (command line interface)
	- Navigate to the project folder './fone' in this case
	- run ##less-watch-compiler src public

App description:	
	This is an application built using React and Redux. It's purpose is to serve information related to Formula One from the ergast API WEB Service.
	In the app there are in total 5 components, which mainly are switched using React-Router. 
	Inside some of the components AXIOS is used to make REST based calls to the ergast API.
	To make the calls asynchronously, Redux-Thunk is used as a middleware. 
	On high level from the components, the actions are called where the REST calls are made and the response from the API is dispatched to the reducers. The reducers are connected to React Store using the Provider and Connect methods from React-Redux.