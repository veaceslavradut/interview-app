// Английский перевод банка квиза: css. Порядок вариантов и опций — как в RU.
export const css = {
  'css-selectors': [
    {
      question: 'How do you correctly order style kinds by increasing specificity?',
      options: [
        'Tag selector < class < id < inline style',
        'Inline style < id < class < tag selector',
        'Id < class < inline style < tag selector',
        'Specificity is the same for all selectors',
      ],
    },
    {
      question: 'What does the selector .card > p select?',
      options: [
        'p elements that are direct children of elements with the card class',
        'All p inside card at any depth',
        'p elements coming right after card',
        'The parents of p elements with the card class',
      ],
    },
  ],
  'box-model': [
    {
      question: 'What does the CSS box model consist of?',
      options: [
        'Content, padding, border, margin',
        'Header, body, footer, sidebar',
        'Width, height, top, left',
        'Font, color, background, shadow',
      ],
    },
    {
      question: 'What does box-sizing: border-box do?',
      options: [
        'Includes padding and border in the element’s specified width/height',
        'Adds padding and border on top of the specified width',
        'Removes all of an element’s spacing',
        'Draws a border around each block for debugging',
      ],
    },
  ],
  'flexbox-grid': [
    {
      question: 'What is the fundamental difference between Flexbox and Grid?',
      options: [
        'Flexbox is one-dimensional layout (a row or a column); Grid is two-dimensional (rows and columns at once)',
        'Grid is deprecated, Flexbox is its replacement',
        'Flexbox works only with text, Grid only with images',
        'Grid is supported only in mobile browsers',
      ],
    },
    {
      question: 'Which Flexbox property aligns items along the main axis?',
      options: ['justify-content', 'align-items', 'flex-wrap', 'z-index'],
    },
  ],
  'position': [
    {
      question: 'What is an element with position: absolute positioned relative to?',
      options: [
        'The nearest ancestor with position other than static (otherwise — relative to the document)',
        'Always relative to the browser window',
        'Relative to the neighbouring element',
        'Relative to the centre of the page',
      ],
    },
    {
      question: 'What does position: sticky do?',
      options: [
        'The element behaves like relative until it reaches a scroll threshold, then “sticks” like fixed',
        'The element is always fixed in a corner of the screen',
        'The element cannot be selected with the mouse',
        'The element sticks to other elements on overlap',
      ],
    },
  ],
};
