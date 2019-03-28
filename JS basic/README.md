# JAVASCRIPT

[Learning Source](https://www.w3schools.com/js/js_intro.asp)

##### VARIABLE

Variables are containers for storing data values

```js
var carName = "Volvo";
var x = 5;
```

[Reference](https://www.w3schools.com/js/js_variables.asp)

##### Data type

```js
var length = 16; // Number
var lastName = "Johnson"; // String
var x = { firstName: "John", lastName: "Doe" }; // Object
var cars = ["Saab", "Volvo", "BMW"]; //array
var person = { firstName: "John", lastName: "Doe", age: 50 }; //object
```

###### Note:

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```js
var x = 16 + 4 + "Volvo";
var x = "Volvo" + 16 + 4;
```

[Reference](https://www.w3schools.com/js/js_datatypes.asp)

##### Function

Function is a block of code designed to perform a particular task and is executed when "something" invokes it

```js
var x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}
```

myFunction refers to the function object, and myFunction() refers to the function result.

[Reference](https://www.w3schools.com/js/js_functions.asp)

##### Object

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

- Accessing Object Properties

```js
person.lastName;
person["lastName"];
```

- Object method

```js
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const name = person.fullName();
```

[Reference](https://www.w3schools.com/js/js_objects.asp)

##### Condition

- If

```js
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
}
```

- If-else

```js
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

[Reference](https://www.w3schools.com/js/js_if_else.asp)

##### Switch statement

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.

```js
var day;
switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "new week is coming";
}
```

- The default keyword specifies the code to run if there is no case match

[Reference](https://www.w3schools.com/js/js_switch.asp)

##### LOOP FOR

```js
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

[Reference](https://www.w3schools.com/js/js_loop_for.asp)

##### LOOP WHILE

```js
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

- Note: If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

##### DO/WHILE LOOP

This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

```js
do {
  // code block to be executed
} while (condition);
```

[Reference](https://www.w3schools.com/js/js_loop_while.asp)

\*the end
