import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { loadAllFull } from '../data/localized';
import { buildSearchIndex, searchQuestions } from '../data/search';
import Highlighted from './Highlighted';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

const MAX_RESULTS = 10;

// One search UI for the whole app: the command palette. Any entry point (the
// header trigger, the home-page launcher, or Cmd/Ctrl+K) opens the same overlay.
const SearchContext = createContext({ openSearch: () => {}, closeSearch: () => {} });

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // The index needs answer bodies, which are lazy-loaded (item 9). We build it
  // off the entry path: warmed on idle and guaranteed on first open, then cached
  // per language. Until it lands, the palette simply returns no matches for a beat.
  const [index, setIndex] = useState([]);
  const builtLang = useRef(null);
  const ensureIndex = useCallback(() => {
    if (builtLang.current === lang) return;
    builtLang.current = lang;
    loadAllFull(lang)
      .then((cats) => setIndex(buildSearchIndex(cats)))
      .catch(() => {
        builtLang.current = null; // let a later attempt retry
      });
  }, [lang]);

  const results = useMemo(
    () => searchQuestions(index, query).slice(0, MAX_RESULTS),
    [index, query]
  );

  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);

  // Warm the index in the background so the first open is instant.
  useEffect(() => {
    const ric = typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback : null;
    const handle = ric ? ric(ensureIndex) : setTimeout(ensureIndex, 1500);
    return () => {
      if (ric && typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(handle);
      else clearTimeout(handle);
    };
  }, [ensureIndex]);

  // Cmd/Ctrl+K toggles the palette from anywhere.
  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // On open: focus the input and lock background scroll. On close: reset query.
  useEffect(() => {
    if (open) {
      ensureIndex();
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, ensureIndex]);

  useEffect(() => setActive(0), [query]);
  useEffect(() => {
    listRef.current?.querySelector('.is-active')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const select = (item) => {
    if (!item) return;
    navigate(`/category/${item.catId}/question/${item.id}`);
    closeSearch();
  };

  const onInputKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeSearch();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      select(results[active]);
    }
  };

  const value = useMemo(() => ({ openSearch, closeSearch }), [openSearch, closeSearch]);

  return (
    <SearchContext.Provider value={value}>
      {children}

      {open && (
        <div
          className="search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={t(lang, 'searchPlaceholder')}
          onMouseDown={closeSearch}
        >
          <div className="search-palette" onMouseDown={(event) => event.stopPropagation()}>
            <input
              ref={inputRef}
              type="search"
              className="search-palette-input"
              value={query}
              placeholder={t(lang, 'searchPlaceholder')}
              aria-label={t(lang, 'searchPlaceholder')}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={onInputKeyDown}
            />

            {query.trim() && (
              <ul className="search-palette-results" role="listbox" ref={listRef}>
                {results.length === 0 ? (
                  <li className="search-palette-empty">{t(lang, 'searchNoResults')}</li>
                ) : (
                  results.map((item, i) => (
                    <li
                      key={`${item.catId}/${item.id}`}
                      role="option"
                      aria-selected={i === active}
                      className={`search-palette-item${i === active ? ' is-active' : ''}`}
                      onMouseEnter={() => setActive(i)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        select(item);
                      }}
                    >
                      <span className="search-result-badge">
                        {item.catIcon} {item.catTitle}
                      </span>
                      <span className="search-result-question">
                        <Highlighted text={item.question} query={query} />
                      </span>
                    </li>
                  ))
                )}
              </ul>
            )}

            <div className="search-palette-hint">{t(lang, 'searchHint')}</div>
          </div>
        </div>
      )}
    </SearchContext.Provider>
  );
}
