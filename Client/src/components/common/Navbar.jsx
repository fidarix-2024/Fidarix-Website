import { useMemo, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../../data/site';

export function LogoMark() {
  return (
    <img src="/images/common/logo.png" alt="Logo" className="h-[50px] scale-[1.6] ml-[14px] w-auto object-contain" />
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
    <header className={`fixed top-0 left-0 right-0 z-[100] pt-0 transition-all duration-[350ms] ease-out ${menuOpen ? 'bg-transparent' : 'mix-blend-difference'} ${isScrolled && !menuOpen ? 'py-2' : 'py-0'}`}>
      <div className="flex items-center justify-between w-full h-[80px] px-[40px] max-[900px]:h-[70px] max-[900px]:px-5 relative">
        <Link className="inline-flex items-center gap-[6px] min-w-0 z-[110]" to="/">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-['Space_Grotesk'] text-[1.6rem] max-[900px]:text-[1.3rem] tracking-[0.26em] uppercase text-white transition-colors duration-[400ms]">Fidarix</span>
          </span>
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className={`hidden max-[900px]:flex items-center justify-center w-[44px] h-[44px] bg-white text-black rounded-none border border-white cursor-pointer z-[120] transition-all duration-300 hover:bg-black hover:text-white`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <nav className={`min-[900px]:flex min-[900px]:items-center min-[900px]:gap-[16px] min-[900px]:justify-center min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:-translate-x-1/2 ${menuOpen ? 'fixed inset-0 bg-black/80 backdrop-blur-lg z-[105] flex flex-col items-center justify-center gap-6 pt-[70px] pb-10' : 'hidden'}`}>
          {routes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `px-[20px] py-[12px] rounded-none text-white/80 font-bold text-[1.8rem] tracking-[0.05em] transition-all duration-[300ms] hover:text-white hover:bg-white/5 min-[900px]:text-[1.15rem] min-[900px]:px-[16px] min-[900px]:py-[10px] min-[900px]:rounded-[8px] min-[900px]:font-semibold ${isActive ? 'text-white bg-white/10' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
