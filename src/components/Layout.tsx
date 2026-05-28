import { Link, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/TopNavBar/svg-90xrfr98tx";
import { Footer } from "./Footer";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "NOSOTROS", path: "/nosotros" },
    { name: "SERVICIOS", path: "/servicios" },
    { name: "CLIENTES", path: "/clientes" },
    { name: "EQUIPO", path: "/equipo" },
    { name: "MÁXIMAS", path: "/maximas" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F7F6F2] text-[#333]">
      {/* Backdrop — closes mobile menu on outside click */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[49] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <header
        className="fixed top-[16px] left-[24px] right-[24px] mx-auto max-w-[1400px] z-50 bg-[#ffffff]/85 backdrop-blur-[10px] rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-[24px] py-[16px]"
      >
        <div className="flex items-center justify-between w-full lg:grid lg:grid-cols-[auto_1fr_auto]">
          {/* Left: Logo */}
          <Link to="/" className="group h-[24px] relative shrink-0 w-[73px] z-10" aria-label="Inicio">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.205 36">
              <g className="fill-[#5D89B4] group-hover:fill-[#DFCAA3] transition-colors duration-200">
                <path d={svgPaths.p3b048900} />
                <path d={svgPaths.pa023cc0} />
                <path d={svgPaths.p39a9c300} />
                <path d={svgPaths.p3e1d3e80} />
              </g>
            </svg>
          </Link>

          {/* Center: Desktop Nav Links + LinkedIn */}
          <nav className="hidden lg:flex items-center justify-center gap-[48px]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const textColor = isActive ? "text-[#5D89B4]" : "text-[#a28c6a]";

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative font-sans font-medium ${textColor} text-[16px] tracking-[1.4px] uppercase hover:text-[#5D89B4] transition-colors duration-300 ease-out leading-none py-1`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#5D89B4] origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                </Link>
              );
            })}
            <a
              href="https://www.linkedin.com/company/oc2-consultor%C3%ADa-comunicaciones/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn OC2"
              className="flex items-center justify-center text-[#a28c6a] hover:text-[#5D89B4] transition-colors duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.44444 22H19.5556C20.9056 22 22 20.9056 22 19.5556V2.44444C22 1.09441 20.9056 0 19.5556 0H2.44444C1.09441 0 0 1.09441 0 2.44444V19.5556C0 20.9056 1.09441 22 2.44444 22ZM18.9444 18.9444H15.6798V13.384C15.6798 11.8595 15.1005 11.0075 13.8938 11.0075C12.5811 11.0075 11.8953 11.8941 11.8953 13.384V18.9444H8.74907V8.35185H11.8953V9.77867C11.8953 9.77867 12.8413 8.02823 15.0891 8.02823C17.3359 8.02823 18.9444 9.40025 18.9444 12.2379V18.9444ZM4.99563 6.96484C3.92396 6.96484 3.05556 6.08962 3.05556 5.0102C3.05556 3.93078 3.92396 3.05556 4.99563 3.05556C6.06731 3.05556 6.9352 3.93078 6.9352 5.0102C6.9352 6.08962 6.06731 6.96484 4.99563 6.96484ZM3.37106 18.9444H6.65176V8.35185H3.37106V18.9444Z" fill="currentColor"/>
              </svg>
            </a>
          </nav>

          {/* Right: Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-10">
            <Link
              to="/contacto"
              className="hidden lg:flex bg-[#5d89b4] text-white hover:bg-[#4a6d90] active:bg-[#3c5b79] active:scale-[0.96] text-[16px] font-sans font-normal tracking-[0.8px] px-[24px] py-[12px] rounded-[8px] transition-all duration-200 ease-out active:duration-100 active:ease-in-out leading-none"
            >
              Contacto
            </Link>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-[30px] h-[30px] text-[#5D89B4]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X size={32} strokeWidth={2} />
              ) : (
                <div className="flex flex-col gap-[6px] w-[26px]">
                  <div className="h-[2.5px] w-full bg-[#5D89B4] rounded-full" />
                  <div className="h-[2.5px] w-full bg-[#5D89B4] rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -10, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
              }}
              className="absolute top-full left-0 w-full mt-[16px] bg-white drop-shadow-[0px_4px_5px_rgba(66,71,78,0.4)] rounded-[8px] flex flex-col gap-[24px] items-start px-[16px] py-[32px] lg:hidden z-40"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const textColor = isActive ? "text-[#5D89B4]" : "text-[#a28c6a]";
                
                return (
                  <motion.div
                    key={link.path}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`font-sans font-medium ${textColor} text-[16px] tracking-[1.4px] uppercase whitespace-nowrap block w-full`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                <a
                  href="https://www.linkedin.com/company/oc2-consultor%C3%ADa-comunicaciones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn OC2"
                  className="flex items-center text-[#a28c6a] hover:text-[#5D89B4] transition-colors duration-300"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.44444 22H19.5556C20.9056 22 22 20.9056 22 19.5556V2.44444C22 1.09441 20.9056 0 19.5556 0H2.44444C1.09441 0 0 1.09441 0 2.44444V19.5556C0 20.9056 1.09441 22 2.44444 22ZM18.9444 18.9444H15.6798V13.384C15.6798 11.8595 15.1005 11.0075 13.8938 11.0075C12.5811 11.0075 11.8953 11.8941 11.8953 13.384V18.9444H8.74907V8.35185H11.8953V9.77867C11.8953 9.77867 12.8413 8.02823 15.0891 8.02823C17.3359 8.02823 18.9444 9.40025 18.9444 12.2379V18.9444ZM4.99563 6.96484C3.92396 6.96484 3.05556 6.08962 3.05556 5.0102C3.05556 3.93078 3.92396 3.05556 4.99563 3.05556C6.06731 3.05556 6.9352 3.93078 6.9352 5.0102C6.9352 6.08962 6.06731 6.96484 4.99563 6.96484ZM3.37106 18.9444H6.65176V8.35185H3.37106V18.9444Z" fill="currentColor"/>
                  </svg>
                </a>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="w-full mt-2"
              >
                <Link
                  to="/contacto"
                  className="bg-[#5d89b4] flex justify-center text-white text-[16px] font-sans font-normal tracking-[0.8px] px-[24px] py-[12px] rounded-[8px]"
                >
                  Contacto
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
