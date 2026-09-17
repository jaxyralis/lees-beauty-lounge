import { Link } from 'react-router-dom';

export function ScrollToTop() {
  window.scrollTo(0, 0);
  return null;
}

export function PageHeader({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <div className="page-header">
      <div className="section-pad">
        <p className="section-label">{label}</p>
        <h1>{title}<br /><em>{accent}</em></h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
