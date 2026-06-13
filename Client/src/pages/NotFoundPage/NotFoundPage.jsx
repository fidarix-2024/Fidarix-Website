import { ButtonLink } from '../../components/common/Layout';

function NotFoundPage() {
  return (
    <>
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-[120px]">
        <p className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-4">404</p>
        <h1 className="font-['Space_Grotesk'] text-white font-extrabold text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-tight mb-6">That page does not exist.</h1>
        <p className="text-white/60 text-[1.03rem] leading-[1.7] max-w-[45ch] mb-8">Use the navigation to get back to the main site.</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/">Go Home</ButtonLink>
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;