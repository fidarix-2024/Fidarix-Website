import { useMemo, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../../data/site';

export function LogoMark() {
  return (
    <img src="/images/common/FIDARIX Logo Final.png" alt="Logo" className="h-[46px] scale-[1.5] ml-[10px] mr-[4px] w-auto object-contain" />
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = useMemo(
    () => navItems.filter((item) => item.path !== '/home'),
    [],
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] pt-0 transition-all duration-[350ms] ease-out mix-blend-difference ${isScrolled ? 'py-2' : 'py-0'}`}>
      <div className="flex items-center justify-between w-full h-[80px] px-[40px] max-[900px]:flex-col max-[900px]:h-auto max-[900px]:p-[16px_20px] max-[900px]:gap-[12px] relative">
        <Link className="inline-flex items-center gap-[10px] min-w-0 group" to="/">
          <LogoMark />
          <span className="flex flex-col leading-none mt-1">
            <span className="font-['Inter'] font-extrabold text-[1.5rem] tracking-tight uppercase text-white transition-colors duration-[400ms] group-hover:text-white/90">Fidarix</span>
          </span>
        </Link>

        {/* Mobile hamburger button */}
        <button
          className={`hidden max-[900px]:inline-grid grid-rows-[repeat(3,6px)] gap-[6px] w-[44px] h-[40px] p-[6px] items-center justify-items-center bg-white/5 border border-white/5 rounded-full text-white cursor-pointer transition-all duration-200 hover:bg-white/10 hover:-translate-y-[1px] ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-[22px] h-[2.5px] bg-current rounded-[2px] transition-all duration-300 opacity-100 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2.5px] bg-current rounded-[2px] transition-all duration-300 opacity-100 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-[22px] h-[2.5px] bg-current rounded-[2px] transition-all duration-300 opacity-100 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        <nav className={`min-[900px]:flex min-[900px]:items-center min-[900px]:gap-[16px] min-[900px]:flex-wrap min-[900px]:justify-center min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:-translate-x-1/2 ${menuOpen ? 'flex flex-col gap-[10px] w-full pb-[8px]' : 'hidden'}`}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `px-[16px] py-[10px] rounded-[8px] text-white/90 font-semibold text-[1.15rem] tracking-[0.02em] transition-all duration-[180ms] hover:text-white max-[900px]:text-[0.95rem] max-[900px]:px-[12px] max-[900px]:py-[8px] ${isActive ? 'text-white font-bold' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
