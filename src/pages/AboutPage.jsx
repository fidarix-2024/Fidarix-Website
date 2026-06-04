import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../components/Chrome';
import Folder from '../components/Folder';
import { team, techStack, aboutTimeline, founders } from '../data/site';
import Hyperspeed from '../components/Hyperspeed';

function AboutPage() {
  const hyperspeedOptions = {
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    }
  };

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
      >
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </ImpactHero>

      <SectionWise bg="bg-burgundy">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 60 }}>
          Small team <br /> Sharp delivery
        </h2>
        <Marquee 
          items={team.map(m => m.name.toUpperCase() + " • " + m.role.toUpperCase() + " • ")} 
          speed="25s"
        />
      </SectionWise>

      <SectionWise bg="bg-white">
        <h2 className="display-huge" style={{ textAlign: 'center', marginBottom: 20 }}>Founders</h2>
        <p className="body-copy" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
          Meet the duo behind Fidarix. We combine design intuition with technical precision to build the next generation of web experiences.
        </p>
        
        <div className="founders-grid">
          {founders.map((founder) => (
            <div key={founder.name} className="founder-card">
              <div className="founder-image-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-image" />
                <div className="founder-overlay"></div>
              </div>
              <div className="founder-info">
                <span className="founder-role">{founder.role}</span>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-bio">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
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
            <p className="eyebrow" style={{ marginTop: 20, color: '#fff' }}>DESIGN</p>
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
            <p className="eyebrow" style={{ marginTop: 20, color: '#fff' }}>DEV</p>
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
            <p className="eyebrow" style={{ marginTop: 20, color: '#fff' }}>STRATEGY</p>
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default AboutPage;