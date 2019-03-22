//creates the header h1 tag with class name header, text showing "Hello World" centered.
const header = document.createElement("h1");
header.innerHTML = "Hello World";
header.setAttribute("class", "header")
header.style.fontStyle = "italic";
header.style.textAlign = "center";

//creates the p tag with text showing "This is the first paragraph" class name is paragraph1.
const p1 = document.createElement('p');
p1.innerHTML = "This is the first paragraph";
p1.setAttribute('class', 'paragraph1');

//creates the p tag with text showing "This is the second paragraph" class name is paragraph2
//color is red and text is aligned on the right of the screen
const p2 = document.createElement('p');
p2.innerHTML = "This is the second paragraph";
p2.setAttribute('class', 'paragraph2');
p2.style.color = "red";
p2.style.textAlign = 'right';

//creates a new div element with id = div1 and has the text showing "Hello"
//when text "Hello is clicked", it changes to the text "I am from div1"
const div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.innerHTML = "Hello";
div1.style.textAlign = "center";
div1.style.color = "rgb(0,0,256)"; //can just write blue instead of "rgb(0,0,256)"

document.addEventListener("click", () => 
    document.getElementById("div1").innerHTML = "I am from div1"
);




document.getElementById('root').append(header, p1, p2, div1);