import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';

export default function NotFound() {
  return (
    <>
      <PageHeader label="Lost?" title="Page not" accent="found." />
      <section className="section-pad notfound-section">
        <p className="notfound-copy">
          The page you are looking for does not exist. Let's get you back to something beautiful.
        </p>
        <Link className="button button-dark" to="/">← Back to home</Link>
      </section>
    </>
  );
}
