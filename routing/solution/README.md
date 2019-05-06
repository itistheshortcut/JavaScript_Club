# Basic Routing

#### ***This lesson is to provide basic routing understanding with NodeJS on server side application*** 

[REST API DEMO](https://js-club-api.herokuapp.com/persons)
___

# Lesson Overview

****Understands the differences between server application and REST API**** 
- Create a server with ExpressJS
- Create static json data
- Set routing: `GET, POST, UPDATE, DELETE`
- Test data with Postman
___
# Requirements

- Basic Knowledge of NodeJS
- Basic Knowledge of JavaScript Obejcts
- Basic Knowledge of promises
- Basic Knowledge of conditional statements

___
# Installation

- Open a new folder: `git clone 'GitHub_URL_LINK'`
- Open file in code editor: VSCODE
- Run command and leave default settings: `npm init`
- Run command: `npm install --save express`
- Run command: `npm install -g nodemon` or `npm install --save-dev nodemon`
- Download Postman: [Postman Website](https://www.getpostman.com/downloads/)
___
# Starting the server

- Create a new file: server.js
- In server.js:
    - `const express = requires("express");`
   - `const app = express();`
   - `const port = 3000;`
   - `app.listen(port, () => consolelog("app is running");`

- run command: `nodemon server.js`

___
# Documentation

 - What is ExpressJS? 
    - [ExpressJS](https://expressjs.com/en/starter/hello-world.###ml)
- What is a jsonFile? 
    - [jsonFile](https://www.npmjs.com/package/jsonfile)
- What is a ***CRUD***?
    - [Crud operations](https://www.codecademy.com/articles/what-is-crud)