import { ButtonLink, ImpactHero, SectionWise, Marquee } from '../../components/common/Layout';
import Folder from '../../components/Folder';
import { team, techStack, aboutTimeline, founders } from '../../data/site';
import Hyperspeed from '../../components/Hyperspeed';

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
    <div className="min-h-screen bg-black text-white flex flex-col">
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
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-[60px]">
          Small team <br /> Sharp delivery
        </h2>
        <Marquee
          items={team.map(m => m.name.toUpperCase() + " • " + m.role.toUpperCase() + " • ")}
          speed="25s"
        />
      </SectionWise>

      <SectionWise bg="bg-white">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-5">Founders</h2>
        <p className="text-white/60 text-[1.03rem] leading-[1.7] text-center max-w-[600px] mx-auto mb-[60px]">
          Meet the duo behind Fidarix. We combine design intuition with technical precision to build the next generation of web experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder) => (
            <div key={founder.name} className="relative border border-white/8 rounded-[48px] bg-white/[0.03] p-8 md:p-10 shadow-[0_28px_80px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden group">
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-white/8 mb-6">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60"></div>
              </div>
              <div className="relative z-20 text-left">
                <span className="text-xs font-extrabold text-primary uppercase tracking-[0.22em] mb-2 block">{founder.role}</span>
                <h3 className="font-['Space_Grotesk'] text-white font-medium text-3xl tracking-tight mb-4">{founder.name}</h3>
                <p className="text-white/60 text-sm leading-[1.6]">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWise>

      <section className="bg-wise-burgundy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-t border-b border-white/10">
          <div className="p-10 md:p-20 bg-wise-burgundy transition-all hover:bg-white/5 text-left">
            <p className="text-xs font-extrabold text-white/50 uppercase tracking-[0.22em]">Story</p>
            <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white mt-5 uppercase tracking-tight">The studio</h3>
            <p className="text-white/70 text-[1.03rem] leading-[1.7] mt-5">
              Fidarix started as a small production studio and evolved into a brand-led web partner for founders who care about aesthetics.
            </p>
          </div>
          <div className="p-10 md:p-20 bg-wise-burgundy transition-all hover:bg-white/5 text-left">
            <p className="text-xs font-extrabold text-white/50 uppercase tracking-[0.22em]">Mission</p>
            <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white mt-5 uppercase tracking-tight">Simple web</h3>
            <p className="text-white/70 text-[1.03rem] leading-[1.7] mt-5">
              Our mission is to remove complexity from launch, while our vision is to make every client site look current.
            </p>
          </div>
        </div>
      </section>

      <SectionWise bg="bg-white">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-10">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map(tech => (
            <span key={tech} className="bg-white/6 text-white/80 text-lg px-[30px] py-[15px] rounded-full font-bold transition-transform hover:-translate-y-0.5">{tech}</span>
          ))}
        </div>
      </SectionWise>

      <SectionWise bg="bg-dark">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-[60px]">Timeline</h2>
        <div className="max-w-[800px] mx-auto flex flex-col">
          {aboutTimeline.map(item => (
            <div key={item.year} className="py-10 border-b border-white/10 flex gap-10 items-center text-left">
              <span className="text-[2.5rem] font-extrabold text-primary flex-shrink-0">{item.year}</span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2.5">{item.title}</h4>
                <p className="text-white/60 m-0 leading-[1.6]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWise>

      <SectionWise bg="bg-white">
        <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold tracking-tight leading-[0.9] uppercase text-center text-white mb-20">Our Stack</h2>
        <div className="flex justify-center gap-16 md:gap-24 flex-wrap pb-24">
          <div className="text-center flex flex-col items-center">
            <Folder
              size={1.5}
              color="#5a74ff"
              items={[
                <div key="1" style={{ fontWeight: 800 }}>FIGMA</div>,
                <div key="2" style={{ fontWeight: 800 }}>ADOBE</div>,
                <div key="3" style={{ fontWeight: 800 }}>CANVA</div>
              ]}
            />
            <p className="text-xs font-extrabold text-white uppercase tracking-[0.22em] mt-5">DESIGN</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Folder
              size={1.5}
              color="#9b4dff"
              items={[
                <div key="1" style={{ fontWeight: 800 }}>REACT</div>,
                <div key="2" style={{ fontWeight: 800 }}>VITE</div>,
                <div key="3" style={{ fontWeight: 800 }}>GSAP</div>
              ]}
            />
            <p className="text-xs font-extrabold text-white uppercase tracking-[0.22em] mt-5">DEV</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Folder
              size={1.5}
              color="#4cc3ff"
              items={[
                <div key="1" style={{ fontWeight: 800 }}>NOTION</div>,
                <div key="2" style={{ fontWeight: 800 }}>SLACK</div>,
                <div key="3" style={{ fontWeight: 800 }}>JIRA</div>
              ]}
            />
            <p className="text-xs font-extrabold text-white uppercase tracking-[0.22em] mt-5">STRATEGY</p>
          </div>
        </div>
      </SectionWise>
    </div>
  );
}

export default AboutPage;
