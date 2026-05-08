import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { blogPosts } from '../data/site';

function BlogPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["News &", "Views"]}
        copy="SEO-friendly content that supports the rest of the site. Publishing practical articles helps organic traffic and builds brand trust."
        actions={[
          <ButtonLink key="contact" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Start a Project
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Latest <br /> Updates
        </h2>
        <Marquee 
          items={blogPosts.map(p => p.title.toUpperCase() + " • ")} 
          speed="30s"
        />
      </SectionWise>

      <section className="bg-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 24px' }}>
          {blogPosts.map((post, i) => (
            <article key={post.title} style={{ 
              padding: '60px 0', 
              borderBottom: '1px solid #eee', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              gap: 40
            }}>
              <div style={{ flex: 1 }}>
                <p className="eyebrow" style={{ color: 'var(--primary)', marginBottom: 20 }}>{post.category}</p>
                <h3 className="display-huge" style={{ fontSize: '3rem' }}>{post.title}</h3>
                <p className="body-copy" style={{ marginTop: 20, maxWidth: '600px' }}>{post.excerpt}</p>
              </div>
              <ButtonLink to="#" style={{ borderRadius: '999px', padding: '15px 30px', border: '1px solid #000', color: '#000', background: 'transparent' }}>Read Article</ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>Stay Informed</h2>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.6)', margin: '30px 0' }}>We write about the future of the web, design systems, and conversion strategy.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            <input placeholder="Email address" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '15px 30px', borderRadius: '999px', width: '300px' }} />
            <button className="button button-primary" style={{ borderRadius: '999px', padding: '0 40px' }}>Subscribe</button>
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default BlogPage;