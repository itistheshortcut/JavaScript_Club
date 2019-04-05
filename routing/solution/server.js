const express = require("express");
const app = express();
const port = 3000;
const jsonfile = require("jsonfile");

//middlewares
app.use(express.json());

//Assign a variable filePath to directory data.json file
const filePath = __dirname + "/" + "data.json";

//Routing Example
//1) Sending and reading text on the browser:
//2) Open a browser and type in: localhost:3000
app.get("/", (req, res) => res.send("Hello world")); //"Hello world"  should show up

//Sending a Get request to /persons to Read a list of persons
app.get("/persons", (req, res) => {
  jsonfile
    .readFile(filePath)
    .then(obj => {
      res.end(JSON.stringify(obj));
    })
    .catch(err => {
      console.log(err);
    });
});

//Send a Get request to server at /persons/:id to READ(view)
app.get("/persons/:id", (req, res) => {
  console.log(req.params.id); //checks what is being requested by the client
  jsonfile
    .readFile(filePath)
    .then(obj => {
      const dataObject = obj.persons.find(d => d.id == req.params.id);
      res.end(JSON.stringify(dataObject));
    })
    .catch(err => {
      console.log(err);
    });
});

//Send a Post request to /persons, add new person in persons object in data.json file
app.post("/persons", (req, res) => {
  let id = Number(req.body.id);
  let firstname = req.body.firstName;
  let lastname = req.body.lastName;
  let age = req.body.age;
  let country = req.body.country;
  let person = { id, firstname, lastname, age, country };
  jsonfile
    .readFile(filePath)
    .then(obj => {
      obj.persons.push(person);
      jsonfile.writeFile(filePath, obj).then(() => {
        res.end();
      });
    })
    .catch(err => {
      console.log(err);
    });
});

//Send a PUT request to /quotes/:id to update a quote
app.put("/persons/:id", (req, res) => {
  jsonfile.readFile(filePath).then(obj => {
    const person = obj.persons.find(d => d.id == req.params.id);
    person.id = obj.persons.id;
    person.firstName = obj.persons.firstName;
    person.lastName = obj.persons.lastName;
    person.age = obj.persons.age;
    person.country = obj.persons.country;
    jsonfile.writeFile(filePath, obj).then(() => res.end());
  });
});

//Send a delete request to /quotes/:id to delete a person
app.delete("/persons/:id", (req, res) => {
  jsonfile
    .readFile(filePath)
    .then(obj => {
      obj.persons.find(d => d.id === req.params.id);
      obj.persons.splice(0, 1);
      jsonfile.writeFile(filePath, obj).then(() => res.end());
    })
    .catch(err => console.log(err));
});
app.listen(3000, () => console.log(`app listening on port ${port}!`));
