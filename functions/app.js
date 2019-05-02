let a = 10;
let b = 20;
const addFunc = a + b;
document.getElementById("root").innerHTML = addFunc;
console.log(addFunc);

//first function with parameters
function addAB(c, d) {
    return c + d;
}
document.getElementById("root1").innerHTML = "Hello I am from root1: " + addAB(100, 100);
document.getElementById("root3").innerHTML = "Hello I am from root3: " + addAB(200, 200);
//200 //400
//second function with no parameters
function Addab() {
    return a + b;
}
document.getElementById("root2").innerHTML = "Hello I am from root2: " + Addab();

const newFunc = function () {
    return a + b;
}
document.getElementById("root4").innerHTML = "Hello I am from root4: " + newFunc();

const otherFunc = function (b, c) {
    return b * c;
}
document.getElementById("root5").innerHTML = "Hello I am from root5: " +
    otherFunc(10, 10); //100

const arrowFunct = (a, b) => a + b;
console.log("I am from arrow function1: " + arrowFunct(1, 2));

const arrowFunc = () => a + b;
console.log("I am from arrowFunc2: " + arrowFunc());

const arrowFunction = () => (a + b) * 100;
console.log("Hello I am from arrow function3: " + arrowFunction());


const anotherFunc = () => {
    let a = 100;
    let b = 200;
    let c = 300;
    return a + b + c;
}

console.log("Hello i am from anotherFunc: " + anotherFunc());