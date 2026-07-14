import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../i18n/translations';

export default function Breadcrumbs({ items }) {
  const { lang } = useLanguage();
  return (
    <nav className="breadcrumbs" aria-label={t(lang, 'breadcrumbsLabel')}>
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {item.to ? (
            <Link to={item.to} className="breadcrumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
