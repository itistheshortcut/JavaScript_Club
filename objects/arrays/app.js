//array and object declaration
let myArr = [];
let myArrObject = {
  type: "",
  model: "",
  color: "",
  price: 0
};
let newArr = [];

//function saveCar in array
const saveCar = () => {
  //variables
  const carType = document.getElementById("type").value;
  const carModel = document.getElementById("model").value;
  const carColor = document.getElementById("color").value;
  const carPrice = document.getElementById("price").value;

  //add variables to the assigned array called arr
  const arr = [carType, carModel, carColor, carPrice];
  //pushing array arr into myArr with spread operator
  myArr = [...myArr, arr.join(" ")];
  //alert success
  alert("Successfully added!");
};

//function showCar() displays all values in array to the browser
const showCar = () => {
  //displays info on the board
  return (document.getElementById("showCar").innerHTML = myArr.map(
    d => `Cars: ${d} <br />`
  ));
};

//function saveCarObject saves car to an object and pushed to an array
const saveCarObject = () => {
  //variables
  const carType = document.getElementById("typeObject").value;
  const carModel = document.getElementById("modelObject").value;
  const carColor = document.getElementById("colorObject").value;
  const carPrice = document.getElementById("priceObject").value;
  //object declaration and key values
  const carObject = {
    type: carType,
    model: carModel,
    color: carColor,
    price: carPrice
  };
  myArrObject = { ...carObject };
  newArr = [...newArr, myArrObject];
  alert("Successfully added!");
};

//function showCarObject displays all values in the object to the browser
const showCarObject = () => {
  return (document.getElementById("showObjectCar").innerHTML = newArr.map(
    carObject => `Car: ${carObject.type}
  ${carObject.model} ${carObject.color} ${carObject.price}
  <br />`
  ));
};
