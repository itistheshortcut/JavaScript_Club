# Asynchronous in Javascript

This document takes references from "You Don't Know JS: Async & Performance" by Kyle Simpson. Click [here](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance) read the book for free.

## Introduction

All of the JS programs are made of several chunks of code. Only one of which is going to execute right away, and the rest of execute later.

But the problem is tasks which cannot complete by now are going to complete asynchronously and behave differently from what you initially want.

## Callbacks

### Callbacks Example

```javascript
const goToClub = (name, callback) => {
  console.log(`${name} is going to the JS club`);
  callback();
};

goToClub("Khanh", () => {
  console.log("listening to music after club");
});
```

In the example above, the unnamed function is the callback function which will execute after the `console.log` inside `goToClub` function is executed.

### Callbacks' Limitations

Callbacks presents a confusing program flow, in a nonlinear and nonsequential way.

```javascript
const goToClub = (name, callback) => {
  console.log("goToClub");
  setTimeout(() => console.log(`${name} is going to the JS club`), 4000);
  callback();
};

const goingHome = () => {
  console.log("goingHome");
  setTimeout(() => console.log("I'm going home after the club"), 2000);
  goToBed();
};

const goToBed = () => {
  console.log("goToBed");
  setTimeout(() => console.log("I'm going to bed"), 2500);
};

goToClub("Khanh", () => {
  setTimeout(() => console.log("learning in the club"), 3500);
  goingHome();
});
console.log("zzz");
```

Callbacks also causes trust issues and makes third party integration trickier, hence the inversion of control, where you give the process of your program to the third party ultilites.

Band aid fixes to get the application works with changes in the third party utilities will make the code harder to maintain and spot the bugs/ bad practices.

### Error Handling for callbacks

We can use `try..catch` for error handling:

```javascript
try {
  fetch(url, callback);
} catch (err) {
  handleError(err);
}
```

or Node error-first style:

```javascript
function response(err, data) {
  // error?
  if (err) {
    console.error(err);
  }
  // otherwise, assume success
  else {
    console.log(data);
  }
}

fetch(url, response);
```

or split callbacks:

```javascript
function success(data) {
  console.log(data);
}

function failure(err) {
  console.error(err);
}

fetch(url, success, failure);
```

## Promises

Compare to the callbacks, promises won't hand over the process of the program away but rather expecting to get a reminder note of when the tasks will be finished, then decide what to do next.

### Promises API/ Syntax recap

#### new Promise(...) Constructor

The revealing constructor Promise(..) must be used with new, and must be provided a function callback that is synchronously/immediately called. This function is passed two function callbacks that act as resolution capabilities for the promise. We commonly label these resolve(..) and reject(..):

```javascript
var p = new Promise(function(resolve, reject) {
  // `resolve(..)` to resolve/fulfill the promise
  // `reject(..)` to reject the promise
});
```

`reject(..)` simply rejects the promise, but `resolve(..)` can either fulfill the promise or reject it, depending on what it's passed. If `resolve(..)` is passed an immediate, non-Promise, non-thenable value, then the promise is fulfilled with that value.

But if `resolve(..)` is passed a genuine Promise or thenable value, that value is unwrapped recursively, and whatever its final resolution/state is will be adopted by the promise.

#### Promise.resolve() and Promise.reject()

`Promise.reject()` returns a rejected `Promise` object with the given reason.

`Promise.resolve()` returns a `Promise` object that is resolved with the given value. If the value has a `then` method, the returned promise will follow that and adopt its eventual state, otherwise be fulfiled with the value

#### then() and catch()

`then()` appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled

`catch()` appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.

#### Promise.all() and Promise.race()

`Promise.all()` returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise fulfills, it is fulfilled with an array of the values from the fulfilled promises in the same order as defined in the iterable. If the returned promise rejects, it is rejected with the reason from the first promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises.

`Promise.race()` returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.

### Limitation

#### Sequence Error Handling

```javascript
const p = randomFunction(data)
  .then( d => doSomeThingElse(d))
  .then( r => finallyDo(r));
  .catch(err => handleError(err));

```

Normally any errors occur anywhere in the chain will be notified in the `.catch()`

But if any step in the chain does its own error handling, `.catch()` won't be notified

#### Single Value

Promises only a single fulfillment value or single rejection reason. So if we want to return multiple messages/ values, we need to construct a values wrapper (`object` or `array`) to do that.

#### Single resolution

A Promise can only be resolved once (fulfillment or rejection). So for example if you want to have a button to send a HTTPRequest to a link, get some data back and do something else with it, you will have to create a new Promise every time you click the button, instead of rerunning a defined Promise:

```javascript
click("#mybtn", function(evt) {
  var btnID = evt.currentTarget.id;

  request("http://some.url.1/?id=" + btnID).then(function(text) {
    console.log(text);
  });
});
```

### Async/Await keyword

#### Async

`Async` keyword can be placed before a function:

```javascript
async function fetchSth(){
  ...
  return something;
}

const someFunc = async () => {
  ...
  return somethingElse;
}

```

The word `async` before a function mean that function always returns a promise. Even if the function returns a non-promise value, Javascript will wrap that value in a resolved promise.

#### Await

`await` makes JS wait until the promises settles and returns its result.

`await` must be used inside an async function, and it's just an elegant version of `promise.then`

```javascript
async function fetchAPI() {
  let data = await fetch(url);
  console.log(data);
}

function fetchAPI() {
  fetch(url).then(data => console.log(data));
}
```

The two blocks above work the same, while async function, IMO, have a better clarity of what's going on.

### Error Handling for Promises

For normal Promises, we use `.catch()` at the end of the chain:

```javascript
function fetchAPI() {
  fetch(url)
    .then(data => doSomething(data))
    .then(processedData => doSomethingElse(processedData))
    .catch(err => handleError(err));
}
```

for `async/await`, we can also use `try..catch`:

```javascript
const fetchAPI = async () => {
  try {
    let data = await fetch(url);
    let processedData = await doSomething(data);
    doSomethingElse(processedData);
  } catch (err) {
    handleError(err);
  }
};
```
