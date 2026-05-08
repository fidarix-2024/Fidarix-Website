import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import Folder from '../components/Folder';
import { team, techStack, aboutTimeline } from '../data/site';

function AboutPage() {
  return (
    <div className="page-wise">
      <ImpactHero
        lines={["About", "Fidarix"]}
        copy="A focused studio built around good taste, clear systems, and measurable outcomes. We help brands present their offer with more clarity and trust."
        actions={[
          <ButtonLink key="contact" to="/contact" style={{ padding: '20px 40px', fontSize: '1.2rem' }}>
            Work With Us
          </ButtonLink>
        ]}
      />

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Small team <br /> Sharp delivery
        </h2>
        <Marquee 
          items={team.map(m => m.name.toUpperCase() + " • " + m.role.toUpperCase() + " • ")} 
          speed="25s"
        />
      </SectionWise>

      <section className="bg-burgundy">
        <div className="foundations-grid">
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Story</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>The studio</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Fidarix started as a small production studio and evolved into a brand-led web partner for founders who care about aesthetics.
            </p>
          </div>
          <div className="foundation-item">
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Mission</p>
            <h3 className="display-huge" style={{ fontSize: '3rem', marginTop: 20 }}>Simple web</h3>
            <p className="body-copy" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 20 }}>
              Our mission is to remove complexity from launch, while our vision is to make every client site look current.
            </p>
          </div>
        </div>
      </section>

      <SectionWise bg="bg-white">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 40 }}>Tech Stack</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 15 }}>
          {techStack.map(tech => (
            <span key={tech} className="pill" style={{ padding: '15px 30px', fontSize: '1.1rem', borderRadius: '999px' }}>{tech}</span>
          ))}
        </div>
      </SectionWise>

      <SectionWise bg="bg-dark">
        <h2 className="display-huge" style={{ color: '#fff', textAlign: 'center', marginBottom: 60 }}>Timeline</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {aboutTimeline.map(item => (
            <div key={item.year} style={{ padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 40, alignItems: 'center' }}>
              <span className="display-huge" style={{ fontSize: '2rem', color: 'var(--primary)', flexShrink: 0 }}>{item.year}</span>
              <div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: 10 }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWise>
      <SectionWise bg="bg-white">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 80 }}>Our Stack</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 100, flexWrap: 'wrap', paddingBottom: 100 }}>
          <div style={{ textAlign: 'center' }}>
            <Folder 
              size={1.5} 
              color="#5a74ff" 
              items={[
                <div key="1" style={{ fontWeight: 800 }}>FIGMA</div>,
                <div key="2" style={{ fontWeight: 800 }}>ADOBE</div>,
                <div key="3" style={{ fontWeight: 800 }}>CANVA</div>
              ]} 
            />
            <p className="eyebrow" style={{ marginTop: 20, color: '#000' }}>DESIGN</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Folder 
              size={1.5} 
              color="#9b4dff" 
              items={[
                <div key="1" style={{ fontWeight: 800 }}>REACT</div>,
                <div key="2" style={{ fontWeight: 800 }}>VITE</div>,
                <div key="3" style={{ fontWeight: 800 }}>GSAP</div>
              ]} 
            />
            <p className="eyebrow" style={{ marginTop: 20, color: '#000' }}>DEV</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Folder 
              size={1.5} 
              color="#4cc3ff" 
              items={[
                <div key="1" style={{ fontWeight: 800 }}>NOTION</div>,
                <div key="2" style={{ fontWeight: 800 }}>SLACK</div>,
                <div key="3" style={{ fontWeight: 800 }}>JIRA</div>
              ]} 
            />
            <p className="eyebrow" style={{ marginTop: 20, color: '#000' }}>STRATEGY</p>
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default AboutPage;