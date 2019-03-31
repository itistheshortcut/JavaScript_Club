# HTML BASIC

---

[Learning Source](https://www.w3schools.com/html/html_intro.asp)

##### INTRODUCTION

###### What is HTML?

HTML stands for Hyper Text Markup Language
HTML describes the structure of Web pages using markup
HTML elements are the building blocks of HTML pages

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

```
The <!DOCTYPE html> declaration defines this document to be HTML5
The <html> element is the root element of an HTML page
The <head> element contains meta information about the document
The <title> element specifies a title for the document
The <body> element contains the visible page content
```

##### STRUCTURE

```
* All HTML documents must start with a document type declaration: <!DOCTYPE html>
* The HTML document itself begins with <html> and ends with </html>
* The visible part of the HTML document is between <body> and </body>
```

##### HTML Tags

HTML tags are element names surrounded by angle brackets:

```html
<tagname>content goes here...</tagname>
```

```
HTML tags normally come in pairs like <p> and </p>
The first tag in a pair is the start tag, the second tag is the end tag
The end tag is written like the start tag, but with a forward slash inserted before the tag name
```

##### Most popular HTML elements

###### Heading

```html
<h1>Heading 1</h1>
```

h1 defines the most important heading. h6 defines the least important heading

###### Paragraph

```html
<p>This is a paragraph.</p>
```

###### Link

```html
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```

You can click on a link and jump to another document.
When you move the mouse over a link, the mouse arrow will turn into a little hand.

##### Image

```html
<img src="img_girl.jpg" alt="Girl in a jacket" />
```

The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image.

###### Table

```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

```
An HTML table is defined with the <table> tag.
Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.
```

###### List

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

```
An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.
The list items will be marked with bullets (small black circles) by default
```

###### Block

```html
<div>Hello</div>
<span>Hello</span>
```

```
* A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can)
* The <section> element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading (h1-h6 element) as a child of the <section> element.
* The <div> element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.
```

###### HTML class

```html
<div class="cities">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>
```

###### HTML ID

```html
<h1 id="myHeader">My Header</h1>
```
