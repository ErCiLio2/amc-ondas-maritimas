import { Helmet } from 'react-helmet-async';
import { useLang } from '../i18n/LangContext.jsx';

const SITE_URL = 'https://amcondasmaritimas.vercel.app';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1605664041952-4a2855d5ca5c?w=1200&q=75&auto=format&fit=crop';

const LOCALE_MAP = { pt: 'pt_PT', en: 'en_US', fr: 'fr_FR' };

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, jsonLd }) {
  const { lang } = useLang();
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AMC — Ondas Marítimas" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={LOCALE_MAP[lang] || 'pt_PT'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export { SITE_URL };
