// Английские переводы: css
export const css = {
    title: 'CSS Basics',
    description: 'Cascading Style Sheets',
    questions: {
      'css-selectors': {
        question: 'What CSS selectors do you know? What is specificity?',
        answer: `**Basic selectors:**

\`\`\`css
* { }                /* universal */
p { }                /* by tag */
.card { }            /* by class */
#header { }          /* by id */
[type="text"] { }    /* by attribute */

div p { }            /* descendant (any level) */
div > p { }          /* direct child */
h1 + p { }           /* next sibling */
h1 ~ p { }           /* all following siblings */

a:hover { }          /* pseudo-classes: :focus, :first-child, :nth-child(2n), :not() */
p::before { }        /* pseudo-elements: ::after, ::first-line, ::placeholder */
\`\`\`

**Specificity** — rule priority in case of conflict, counted as (a, b, c):

- **a** — number of id selectors;
- **b** — classes, attributes, pseudo-classes;
- **c** — tags and pseudo-elements.

\`#nav .item a\` = (1,1,1) beats \`.menu .item a\` = (0,2,1).

Inline styles are stronger than any selectors; \`!important\` overrides everything (an anti-pattern). With equal specificity, the last rule wins (the cascade). Recommendation: keep specificity low (the BEM methodology — classes only).`,
      },
      'box-model': {
        question: 'What is the box model?',
        answer: `The **box model** represents every element as a rectangle made up of four layers (from the inside out):

\`\`\`
┌─────────────── margin ────────────────┐
│  ┌──────────── border ─────────────┐  │
│  │  ┌───────── padding ─────────┐  │  │
│  │  │        content            │  │  │
│  │  └───────────────────────────┘  │  │
│  └─────────────────────────────────┘  │
└────────────────────────────────────────┘
\`\`\`

- **content** — the content itself (width × height);
- **padding** — inner spacing (the element's background extends over it);
- **border** — the border;
- **margin** — outer spacing (transparent).

**box-sizing:**

- \`content-box\` (default): \`width\` covers only the content; the final width = width + padding + border;
- \`border-box\`: \`width\` includes padding and border — more predictable.

Standard practice:

\`\`\`css
*, *::before, *::after { box-sizing: border-box; }
\`\`\`

A nuance — **margin collapse**: vertical margins of adjacent blocks merge into one (the larger one is taken). It happens only vertically and only in normal flow (not in flex/grid).`,
      },
      'flexbox-grid': {
        question: 'What is the difference between Flexbox and Grid?',
        answer: `**Flexbox** — one-dimensional layout (a row OR a column):

\`\`\`css
.container {
    display: flex;
    flex-direction: row;          /* row | column */
    justify-content: space-between; /* along the main axis */
    align-items: center;          /* along the cross axis */
    gap: 16px;
    flex-wrap: wrap;
}
.item { flex: 1 1 200px; }        /* grow shrink basis */
\`\`\`

Ideal for: navigation bars, cards in a row, centering, distributing space between elements.

**Grid** — two-dimensional layout (rows AND columns simultaneously):

\`\`\`css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-areas: "header header" "sidebar main";
    gap: 16px;
}
.header { grid-area: header; }
\`\`\`

Ideal for: whole-page layouts, complex grids, card galleries.

**Rule of thumb**: content dictates the layout (elements "line themselves up") — Flexbox; the layout dictates the content (a predefined grid) — Grid. They work great together: Grid for the page layout, Flexbox inside components.

Centering an element: \`display: flex; justify-content: center; align-items: center;\` or \`display: grid; place-items: center;\`.`,
      },
      position: {
        question: 'What values of the position property exist?',
        answer: `**static** (default) — the element is in normal flow; top/left/z-index have no effect.

**relative** — the element stays in the flow but is shifted relative to **its original position**; its place in the flow is preserved. Creates a context for absolute descendants.

**absolute** — the element is **removed from the flow**; it is positioned relative to the nearest ancestor with position ≠ static (otherwise — relative to \`<html>\`):

\`\`\`css
.parent { position: relative; }
.badge  { position: absolute; top: -8px; right: -8px; }
\`\`\`

**fixed** — removed from the flow; positioned relative to the **browser window**, does not move when scrolling (headers, modal windows).

**sticky** — a hybrid of relative and fixed: the element scrolls normally but "sticks" when a given threshold is reached:

\`\`\`css
.header { position: sticky; top: 0; }
\`\`\`

**z-index** — the stacking order; works only on positioned elements (≠ static). The concept of a **stacking context** matters: z-index is compared within a single context; a new context is created by opacity < 1, transform, filter, and others.`,
      },
    },
  };
