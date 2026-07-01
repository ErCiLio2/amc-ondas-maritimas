import { useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';

export default function Footer() {
  const { t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  function goToAnchor(e, anchor) {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate(`/#${anchor}`);
    }
  }

  return (
    <footer>
      <div className="ft">
        <div className="fb">
          <span className="logo-text">AMC</span>
          <div className="fb-lg">Ondas Marítimas — Serviços Marítimos, Lda.</div>
          <p className="fb-tg">{t('ft_tag')}</p>
        </div>
        <div className="fc">
          <h5>{t('ft_srv')}</h5>
          <ul>
            <li><a href="/#services" onClick={(e) => goToAnchor(e, 'services')}>{t('ft_s1')}</a></li>
            <li><a href="/#services" onClick={(e) => goToAnchor(e, 'services')}>{t('ft_s2')}</a></li>
            <li><a href="/#services" onClick={(e) => goToAnchor(e, 'services')}>{t('ft_s3')}</a></li>
            <li><a href="/#services" onClick={(e) => goToAnchor(e, 'services')}>{t('ft_s4')}</a></li>
            <li><a href="/#storage" onClick={(e) => goToAnchor(e, 'storage')}>Armazenagem</a></li>
          </ul>
        </div>
        <div className="fc">
          <h5>{t('ft_loc')}</h5>
          <ul>
            <li><a href="/#locations" onClick={(e) => goToAnchor(e, 'locations')}>Luanda (HQ)</a></li>
            <li><a href="/#locations" onClick={(e) => goToAnchor(e, 'locations')}>Soyo</a></li>
            <li><a href="/#locations" onClick={(e) => goToAnchor(e, 'locations')}>Cabinda</a></li>
            <li><a href="/#locations" onClick={(e) => goToAnchor(e, 'locations')}>Lobito</a></li>
            <li><a href="/#locations" onClick={(e) => goToAnchor(e, 'locations')}>Ambriz</a></li>
          </ul>
        </div>
        <div className="fc">
          <h5>{t('ft_con')}</h5>
          <ul>
            <li><a href="#">Rua dos Heróis, Ed. 18</a></li>
            <li><a href="#">2.º Andar, Bairro Azul</a></li>
            <li><a href="#">Luanda, Angola</a></li>
            <li><a href="mailto:info@amc-angola.com">info@amc-angola.com</a></li>
          </ul>
        </div>
      </div>
      <div className="fb2">
        <p>© 2026 AMC — Ondas Marítimas, Serviços Marítimos, Lda. · Luanda, Angola</p>
        <p>{t('ft_rts')}</p>
      </div>
    </footer>
  );
}
