# HTML(HyperText Markup Language)

- HTML is the most basic building block of the Web.It defines the meaning and structure of web content.

- Other technologies besides **HTML** are generally used to describe a web page's appearance/presentation ([[CSS]]) or functionality/behavior ([[JavaScript]]).

- "**Hypertext**" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web.

- HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.

- The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on

- HTML uses "**markup**" to annotate text, images, and other content for display in a Web browser.

- HTML markup includes special "**elements**" such as 
	- `<head>`
	- `<title>`
	- `<body>`
	- `<header>`
	- `<footer>`
	- `<article>`
	- `<section>`
	- `<p>`
	- `<div>`
	- `<span>`
	- `<img>`
	- `<aside>`
	- `<audio>`
	- `<canvas>`
	- `<datalist>`
	- `<details>`
	- `<embed>`
	- `<nav>`
	- `<search>`
	- `<output>`
	- `<progress>`
	- `<video>`
	- `<ul>`
	- `<ol>`
	- `<li>`
- and many others.

# Anatomy of a HTML element

![[Pasted image 20240615201138.png]]

1. **The opening tag:** This consists of the name of the element (in this case, p), wrapped in opening and closing **angle brackets.** This states where the element begins or starts to take effect -- in this case the paragraph begins.

2. **The closing tag:** This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends -- in this case where the paragraphs ends.

3. **The content:** This is the content of the element, which in this case, is just text.

4. **The element:** The opening tag, the closing tag, and the content together comprise the element.

# Attributes

Attributes contain extra information about the element that you don't want to appear in the actual content. Here, `class` is the attribute name and `editor-note` is the attribute value. The `class` attribute allows you to give the element a non-unique identifier that can be used to target it (and any other elements with the same `class` value) with style information and other things. Some attributes have no value, such as `required`.

![[Pasted image 20240615204745.png]]


# Nesting elements

you can put elements insider other elements too.

```HTML
<p>My cat is <strong>very</strong> grumpy. </p>
```

# Void elements

Some elements have no content and are called **void elements.** Take `<img>` element that we already have in out HTML page

```HTML
<img src="images/firefox-icon.png" alt="My test image" />
```

# Anatomy of an HTML document

```HTML
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```
\
- `<!DOCTYPE html>` doctype. It is a required preamble. In the mists of time, when HTML was young (around 1991/92), doctype were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However, these days, they don't do much and are basically just needed to make sure your document behaves correctly. 

- `<head></head>` the `<head>` element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like **keywords** and a page description that you want to appear in search results, [[CSS]] to style our content, character set declarations, and more.

-  `<meta charset="utf-8">` — This element sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later on.

-  `<meta name="viewport" content="width=device-width">` — This viewport element ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down.

- `<title></title>` — the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favorite it.

- `<body></body>` — the [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) element. This contains _all_ the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.