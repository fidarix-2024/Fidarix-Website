import { ButtonLink } from '../components/Chrome';

function NotFoundPage() {
  return (
    <section className="section hero-panel">
      <p className="eyebrow">404</p>
      <h1 className="page-title">That page does not exist.</h1>
      <p className="page-copy">Use the navigation to get back to the main site.</p>
      <div className="hero-actions">
        <ButtonLink to="/">Go Home</ButtonLink>
      </div>
    </section>
  );
}

export default NotFoundPage;