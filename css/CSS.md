# CSS Intro

## What is CSS?

Cascading Style Sheet is a tool that transform the presentation of a document, describing how HTML elements are to be displayed.

## How to link the CSS and the HTML together

### Inline styling

For assigning a few styles directly to one specific element:

<p style="color: blue">This text should be blue</p>
```HTML
<p style="color: blue">This text should be blue</p>
```

### Style Element

The style element is one way to include a stylesheet as an embedded stylesheet in your HTML file:

```HTML
<head>
<style type="text/css">
    p {
        color: blue;
        font-size: 12;
    }
</style>
</head>
```

### External Stylesheet

Linking an external stylesheet using the `<link>` tag:

```HTML
<link rel="stylesheet" type="text/css" href="stylesheetlink.css" />
```

## Stylesheet Syntax

### Structure

Each stylesheet will contain a number of rule looking like this:

![alt text](https://www.w3schools.com/css/selector.gif "Rule structure")

The selector decides which part of the document will be changed. In this rule all `<h1>` elements are selected

The declaration block contains one or more declarations. Each declaration is a combination of the property of the selected element and the value of that property. In this rule the `color` property has the value of `blue`, and the `font-size` property has the value of `12px`.

The rule means all `h1` elements will be styled in `blue` text with the font size of `12px`

### Grouping Selectors

We can group multiple selectors in one rule and seperate them with a comma:

```CSS
p, h1, h2 {color: red;}
```

In this rule all of `p`, `h1`, `h2` elements will have red color applied to them.

### Type of Selectors

#### Element Selectors

This will select all of selected HTML elements, for example: `h1`,`h2`,`p`, `a`, `body` even `html`.

#### Class Selectors

This will select all of the elements which have the selected class. To assign a class to an element, use the class attribute:

```HTML
<p class="notice">This will be selected </p>
<p> This won't </p>
```

To select elements with specific class, use period(`.`) before class name:

```CSS
.notice {color: yellow;}
```

Class selectors are best used for reusability.

#### Specific Elements with Class

You can choose a specific element with class too:

```CSS
span.notice {color: red;}  /*this will select all spans with class notice*/
```

#### Multiple Classes

An element can have multiple classes:

```HTML
<div class="notice urgent">...</div>
```

Multiple classes selector:

```CSS
.notice.urgent {color: red;}
```

Only elements with the class attribute contains **both** `notice` and `urgent` will be selected. The following will be selected:

```HTML
<div class="notice urgent closed">...</div>
```

But this won't be selected:

```HTML
<div class="urgent">...</div>
```

#### ID Selectors

The element with the selected ID attribute:

```HTML
<div id="profile">...</div>
```

can be selected using hash (#) before the id name in CSS:

```CSS
#profile{
    font-size: 13px;
}
```

id attribute is best used for one-time only purpose, when you know for certain that id value will appear in the document.

#### Attribute Selectors

You can select all elements with specific attribute:

```CSS
img[src] {height: 200; width: 300;}
```

or all elements with exact attribute value:

```CSS
img[src="This is a link to a picture"] {height: 400; width: 700;}
```

For **more** types of attribute selectors, checkout this [link](https://www.w3schools.com/csS/css_attribute_selectors.asp)

#### Descendant Selectors

```CSS
h2 em {
    color: red;
}
```

This will make any `em` that are descended from/ nested in `h2` become red.

or more specific:

```CSS
#profile ul li em {
    color: red;
}
```

This will make any `em` inside a `li` inside a `ul` inside a element with `profile` id become red.

#### Selecting Children

A child is a direct descendant of the parents. **FACT**
To select a child:

```CSS
div > p {
    font-weight: bold;
}
```

#### Sibling Selectors

##### Adjacent Siblings

```CSS
h1 + p {
    ...
}
```

##### Following Siblings

```CSS
h2 ~ ol {
    ...
}
```

##### Pseudo-Class/Element Selectors

Check out this [link](https://www.w3schools.com/css/css_pseudo_classes.asp) for the Pseudo selectors.

## Inheritance

The descendants will inherit the declarations from the ancestors.

In this example:

```HTML
<div style="color: blue;"><p>Jon Snow, you know nothing.</p></div>
```

<div style="color: blue;"><p>Jon Snow, you know nothing.</p></div>

The `p` will inherit the blue color from `div`, unless there is a rule with color declaration for the `p` element.

## The Cascade

## Values and Units

### Notable Length Units

- `em`: relative to the font-size of the parent element
- `ex`: relative to the height of the letter 'x' of the current font size
- `rem`: relative to the font-size of the root element
- `vw`: viewport width
- `vh`: viewport height
- `vmin`: viewport w/h - smaller one
- `vmax`: viewport w/h - bigger one

### Colors

- Named colors: `red`, `blue`, `black`, `green`, etc...
- Hexadecimal RGB code: `#000000` - `#FFFFFF`
- Decimal RG code: `rgb(0,0,0)` - `rgb(255,255,255)`
  ###Variables/ Custom Value:
  Custom values can be declared and reused for the elements and the descendants in which they were declared.

```CSS
html {
    --base-color: #45DC67;
    }

h1 {color: var(--base-color);}
```

## Fonts

Check out this [link](https://www.w3schools.com/css/css_font.asp) for references.

## Texts

Check out this [link](https://www.w3schools.com/css/css_text.asp) for references.

## Paddings, Borders, Outlines and Margins

### Paddings and Margins

This box model shows the paddings and margins of an element:
![alt text](https://i.imgur.com/sRRkMBk.png "Box Model")

There are many ways to declare the paddings and margins of every side of the element. Since paddings and margins are declared in the same way, here are some examples for paddings, and margins are the same:

```CSS
div {
    padding: 2px; /*This will apply an 2px padding to all sides of the element*/
}

div {
    padding-left: 3px;
    padding-right: 4px;
    padding-top: 5px;
    padding-right: 9px;
}

div {
    padding: 3px 2px 4px 8px; /*Top Right Bottom Left*/
}

div {
    padding: 3px 2px 4px; /*Top Right-Left Bottom*/
}

div {
    padding: 3px 2px; /*Top-Bottom Right-Left*/
}

```

### Borders and Outlines

The differences between Borders and Outlines are:

- Outlines don't take up space
- Outlines may be nonrectangular
- User agents often render outlines on elements in the :focus state

Refer to this [link](https://codepen.io/anon/pen/vPwbyd) to see the example of the differences

## Positioning

### Types of position

The values of _position_ have the following meanings:

- _static_: This one's box is generated as normal
- _relative_: This one's box is offset by some distance and the space that the element would originally have occupied is preserved
- _absolute_: This one's box is removed from the flow of the document and positioned with respect to its containing block, which may be another element in the document or the initial contaning block
- _fixed_: Just the absolute but the containing block is the viewport itself
- _sticky_ This one is generated normally, until the conditions for the stickiness come to pass, then it will be removed from the flow of the document as a absolute positioned with the original place is preserved. If the conditions are no longer met, the element is returned to the flow of the document.

Refer to this [example](https://codepen.io/anon/pen/aMrgZY) to see the differences between types of position

### Overflows and Clipping

If the content of the elementis too much for the element's size, it will overflow the element itself, in that case, the _overflow_ property may (or may not!) help you with that

- _visible_: default behaviour, content will overflow and go out of the element's size
- _hidden_: the overflowed content will be clipped to fit the size of the element and can not be accessed
- _scroll_: the overflows content will be hidden but accessible with scrolling.

### Z-axis

`z-index` can decide which way overlapped elements will be shown, by having higher `z-index` means the element will be show first in front.

## Flexbox

Flex layout give the container the ability to alter its items' size and order to best fill the available space.

Refer to this [link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for flexbox.

## Grid layout

Differs from Flexbox which one-dimension based, Grid layout is a two-dimensional grid-based layout system.

Refer to this [link](https://css-tricks.com/snippets/css/complete-guide-grid/) for grid layout.
