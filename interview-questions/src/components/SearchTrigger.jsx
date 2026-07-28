import { useSearch } from './SearchProvider';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

// Small round button in the top-right controls that opens the search palette.
export default function SearchTrigger() {
  const { openSearch } = useSearch();
  const { lang } = useLanguage();

  return (
    <button
      type="button"
      className="search-trigger"
      aria-label={t(lang, 'searchOpen')}
      title={t(lang, 'searchOpen')}
      onClick={openSearch}
    >
      🔍
    </button>
  );
}
