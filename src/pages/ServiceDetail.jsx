import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { T, useLang } from '../i18n/LangContext.jsx';
import { toPlainText } from '../i18n/utils.js';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import { services, getServiceBySlug } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const plainTitle = toPlainText(t(service.titleKey));
  const title = `${plainTitle} | AMC — Ondas Marítimas`;
  const description = t(service.descKey);
  const others = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: plainTitle,
    provider: { '@type': 'LocalBusiness', name: 'AMC — Ondas Marítimas, Serviços Marítimos, Lda.' },
    areaServed: 'Angola',
    description,
  };

  return (
    <>
      <SEO title={title} description={description} path={`/services/${service.slug}`} image={service.image} jsonLd={jsonLd} />

      <section className="svc-hero">
        <div className="svc-hero-bg" style={{ backgroundImage: `url('${service.image}')` }} />
        <div className="svc-hero-ov" />
        <div className="svc-hero-in">
          <Link to="/#services" className="svc-back">← {t('svc_back')}</Link>
          <span className="svc-code">{service.code}</span>
          <h1 dangerouslySetInnerHTML={{ __html: `${service.icon} ${t(service.titleKey)}` }} />
          <p className="intro">{t(service.descKey)}</p>
        </div>
      </section>

      <section className="svc-body">
        <div className="svc-grid">
          <Reveal as="div" className="rv">
            <p className="tag">{t('srv_tag')}</p>
            <T k={service.titleKey} as="h2" />
            <p className="intro">{t(service.descKey)}</p>
            <ul className="svc-ul">
              {service.bulletKeys.map((k) => (
                <li key={k} dangerouslySetInnerHTML={{ __html: t(k) }} />
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" className="svc-side rvR">
            <h4>{t('svc_other')}</h4>
            <div className="svc-side-list">
              {others.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="svc-side-item">
                  <span className="svc-side-ico">{s.icon}</span>
                  <T k={s.titleKey} />
                </Link>
              ))}
            </div>
            <h4>{t('svc_cta_h')}</h4>
            <p className="par-desc" style={{ marginBottom: 20 }}>{t('svc_cta_p')}</p>
            <a href="mailto:info@amc-angola.com" className="btn-w" style={{ width: '100%', textAlign: 'center' }}>{t('cta_btn')}</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
