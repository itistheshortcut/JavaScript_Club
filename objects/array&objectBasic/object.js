//declaring an object with values
const object = {
  firstName: "John",
  lastName: "Smith",
  age: 18,
  location: "Helsinki Finland",
  greeting: function() {
    return `Greeting from object: <br /> 
     I am ${this.firstName} ${this.lastName}. <br />
        I am ${this.age} years old. <br />
        I live in ${this.location} `;
  }
};

//displaying on the browser window the greeting
document.getElementById("root5").innerHTML = object.greeting();

//array is accessible in the global scope
console.log("calling in the global scope: " + array);

//adding object to the array
array.push(object);

//Notice**** array lengths in the array.js file does not get updated
console.log(array);

//printing out array of objects
document.getElementById("root6").innerHTML =
  array[4].firstName + " " + array[4].lastName;
