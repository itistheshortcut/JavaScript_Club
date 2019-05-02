//initializing an array with no values
let array = [];
let newArray = ["hello", "hi", "bye", "something"];
let anotherArray = new Array();
//adding values
array[0] = "hello";
array[1] = "hi";
array[2] = "bye";
array[3] = "goodbye";

const showCar = () => {
  let array = [1, 2, 3];
};
//accessing the each array
console.log("index of 0: " + array[0]);
console.log("index of 1: " + array[1]);
console.log("index of 2: " + array[2]);
console.log("index of 3: " + array[3]);

//This is the same as const array = ["hello", "hi", "bye", "goodbye"];

for (let i = 0; i < array.length; i++) {
  //prints to browser console
  console.log("printing from the console: " + array[i]);

  //prints to browser
  document.getElementById("root").innerHTML = "printing from root: " + array[i]; //goodbye
}
//Prints to the browser
document.getElementById("root2").innerHTML = "printing from root2: " + array;

//Prints a new array to the browser in the object (a)
document.getElementById("root3").innerHTML = array.map(
  a => `printing from root3: ${a} <br />`
);
{
  /** 
 printing from root3: hello 
,printing from root3: hi 
,printing from root3: bye 
,printing from root3: goodbye 
*/
}

document.getElementById("root4").innerHTML =
  "Prints out the length: " + array.length; //4
