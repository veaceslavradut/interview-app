import { splitHighlight } from '../data/search';

// Renders `text` with the first case-insensitive occurrence of `query` wrapped
// in a <mark>. Shared by the home search and the command-palette overlay.
export default function Highlighted({ text, query }) {
  return (
    <>
      {splitHighlight(text, query).map((part, i) =>
        part.hit ? (
          <mark key={i} className="search-highlight">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}
