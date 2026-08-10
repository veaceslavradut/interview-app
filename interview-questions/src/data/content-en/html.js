// Английские переводы: html
export const html = {
    title: 'HTML Basics',
    description: 'HyperText Markup Language',
    questions: {
      'what-is-html': {
        question: 'What is HTML? What is the basic structure of a document?',
        answer: `**HTML (HyperText Markup Language)** is a hypertext markup language that describes the structure and content of a web page using elements (tags).

Basic document structure:

\`\`\`html
<!DOCTYPE html>                     <!-- HTML5 standards mode -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tab title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Page heading</h1>
    <p>A paragraph of text with a <a href="https://example.com">link</a>.</p>
    <script src="app.js"></script>
</body>
</html>
\`\`\`

- \`<!DOCTYPE html>\` — the document type declaration (without it — quirks mode);
- \`<head>\` — metadata: encoding, title, styles, viewport;
- \`<body>\` — the visible content.

HTML5 added: semantic tags, \`<video>\`/\`<audio>\`, \`<canvas>\`, new \`<input>\` types, local storage (Web Storage), geolocation.`,
      },
      'semantic-html': {
        question: 'What is semantic markup?',
        answer: `**Semantic markup** means using HTML tags according to their meaning rather than their appearance.

HTML5 semantic tags:

\`\`\`html
<header>  — page/section header
<nav>     — navigation
<main>    — main content (one per page)
<article> — self-contained content (article, post)
<section> — thematic section
<aside>   — sidebar, supplementary content
<footer>  — footer
<figure> / <figcaption> — illustration with a caption
<time>    — date/time
\`\`\`

Instead of "div soup":

\`\`\`html
<!-- bad -->
<div class="header"><div class="nav">...</div></div>

<!-- good -->
<header><nav>...</nav></header>
\`\`\`

**Why:**

- **accessibility (a11y)**: screen readers understand the page structure;
- **SEO**: search engines index semantic code better;
- code readability and maintainability;
- consistent behavior across browsers.

Also important: an h1-h6 heading hierarchy without gaps, \`alt\` on images, \`<label>\` for form fields, ARIA attributes when necessary.`,
      },
      'block-inline': {
        question: 'What is the difference between block and inline elements?',
        answer: `**Block elements** (\`display: block\`):

- take up the full available width of the parent;
- start on a new line;
- width, height, and all margin/padding apply;
- examples: \`<div>\`, \`<p>\`, \`<h1>-<h6>\`, \`<ul>\`, \`<section>\`, \`<form>\`.

**Inline elements** (\`display: inline\`):

- take up only the width of their content;
- flow within the text, do not break the line;
- width/height **do not apply**; vertical margins do not work;
- examples: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<code>\`.

**Inline-block** (\`display: inline-block\`) — a hybrid: flows within the text but supports width/height and full spacing; default examples: \`<img>\`, \`<button>\`, \`<input>\`.

Nesting rules: block elements may contain block and inline elements; inline elements — only inline ones (exception: in HTML5 \`<a>\` may wrap blocks).

The display value can be changed via CSS; modern layout is built on \`flex\` and \`grid\`, which change the behavior of the container's **children**.`,
      },
    },
  };
