import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Página Não Encontrada | AMC — Ondas Marítimas" description="A página que procura não existe." path="/404" />
      <section className="cta-sec" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: '0 auto' }}>
          <p className="tag c">404</p>
          <h2>PÁGINA NÃO ENCONTRADA</h2>
          <div className="cta-acts">
            <Link to="/" className="btn-w">Voltar ao Início</Link>
          </div>
        </div>
      </section>
    </>
  );
}
