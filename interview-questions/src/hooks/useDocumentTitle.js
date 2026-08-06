import { useEffect } from 'react';

// Sets document.title for the current route (item 11). The prerendered HTML gives
// crawlers the right title on first load; this keeps it correct across client-side
// SPA navigation, where there is no new document. A null/empty title is a no-op.
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}
