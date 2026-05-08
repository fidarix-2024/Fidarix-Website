import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import { projects } from '../data/site';

function PortfolioPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["Selected", "Works"]}
        copy="Project work with the context buyers need before they reach out. Each case study shows the problem, the solution, and the measurable results."
        actions={[
          <ButtonLink key="contact" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Discuss a Project
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Featured <br /> Projects
        </h2>
        <Marquee 
          items={projects.map(p => p.name.toUpperCase() + " • ")} 
          speed="20s"
        />
      </SectionWise>

      <SectionWise bg="bg-white">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 40 }}>
          {projects.map((project, i) => (
            <div key={project.name} className="wise-card" style={{ 
              background: i % 3 === 0 ? 'var(--wise-yellow)' : i % 3 === 1 ? 'var(--wise-pink)' : 'var(--wise-dark)',
              color: i % 3 === 2 ? '#fff' : '#000',
              flex: 'none', width: '100%', height: 'auto', minHeight: '500px'
            }}>
              <div>
                <p className="eyebrow" style={{ color: 'rgba(0,0,0,0.5)' }}>{project.industry}</p>
                <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>{project.name}</h3>
              </div>
              <div style={{ marginTop: 40 }}>
                <p style={{ fontWeight: 700, marginBottom: 10 }}>The Problem:</p>
                <p className="body-copy" style={{ marginBottom: 20 }}>{project.problem}</p>
                <p style={{ fontWeight: 700, marginBottom: 10 }}>The Result:</p>
                <p className="body-copy">{project.result}</p>
                <p className="card-meta" style={{ marginTop: 30, opacity: 0.6 }}>Stack: {project.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWise>

      <SectionWise bg="bg-dark">
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 className="display-huge" style={{ color: '#fff' }}>Ready to start?</h2>
          <p className="body-copy" style={{ color: 'rgba(255,255,255,0.6)', margin: '30px 0' }}>We are currently accepting new projects for Q3 2026.</p>
          <ButtonLink to="/contact" style={{ borderRadius: '999px', padding: '20px 60px', background: 'var(--wise-green)', color: '#000' }}>Get a Quote</ButtonLink>
        </div>
      </SectionWise>
    </div>
  );
}

export default PortfolioPage;