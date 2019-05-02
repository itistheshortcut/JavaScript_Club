# Programming for beginners

#### Define your personal goals
Programming is one of the most valuable skills you can pick up in these modern times, whether for career prospects or to stretch your brain and create something awesome. To get the best out of learning programming, it would be useful to define why you want to learn to code: to be a professional programmer, to design websites and games for fun, to gain new skills that might be useful for your job, etc. 
#### Choose your language
There's no one "best" programming language, and once you've learned one, it's fairly easy to pick up another. Depending on what you want to make or do, your choice might already be made up for you.  However, for beginners it’s highly recommended to start from learning the basics of programming which is HTML, CSS and JavaScript.  There are plenty of other programming languages available, the most popular for example are Python, PHP, SQL, Java, C++.  

 #### Start with the basics – code editiors

There’re many code editors available, one of the most popular and convenient one is Visual Studio Code 
 
Visual Studio Code is an open source code editor software developed by Microsoft. It offers built-in support for TypeScript, JavaScript, and Node.js. It's autocompleted with IntelliSense features provides smart completions based on variable types, essential modules, and function definitions. 
- Platform: Mac, Windows, Linux 
Price: Free 
Features: 
- Easy working with Git and other SCM (Software Configuration management) providers 
- Code refactoring & debugging
- Easily extensible and customizable
[Download link:](https://code.visualstudio.com/) 

#### Create first HTML, CSS and JavaScript pages

Web pages can be created and modified by using professional HTML editors.
- Step 1: open code editor (for example, Visual Studio)

- Step 2: write or copy some main HTML
 
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```


Step 3: save the file on your computer:
- Select File > Save as in the code editor menu
- Name the file "index.html" (or any other name, but with “.html” in the end)
- Select the place (folder) where you want to save it and press Save 
- Step 4: Open the saved HTML file in your favourite browser (double click on the file, or  right-click - and choose "Open with")

If you need to create JavaScript page to add a code for interaction on your HTML page, or create a   design in CSS for your page, you can do it the same way:
- to create JavaScript page, create new file in your code editor and save it with “.js” in the end, for example “app.js”; 

- to create CSS page, create new file in your code editor and save it with “.css” in the end, for example “style.css”; 

####Connect your HTML, CSS and JavaScript pages

- To connect your HTML file with JavaScript file, you have to add the script tag to your basic HTML. The script element is used to define a client-side script (JavaScript); it either contains scripting statements, or it points to an external script file through the src attribute.
        

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <script src="app.js"></script> 
  </body>
</html>
```

- To connect your HTML file with CSS, you need to add a link tag to it in the <head> section of the HTML page:


```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
 </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <script src="app.js"></script> 
  </body>
</html>
```

