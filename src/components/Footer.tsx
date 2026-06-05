import { Link } from "react-router";
import { Linkedin } from "lucide-react";
import svgPaths from "../imports/Footer/svg-vj1pojqz5i";

export function Footer() {
  const navLinks = [
    { name: "nosotros", path: "/nosotros" },
    { name: "servicios", path: "/servicios" },
    { name: "clientes", path: "/clientes" },
    { name: "equipo", path: "/equipo" },
    { name: "máximas", path: "/maximas" },
  ];

  return (
    <footer className="bg-[#F5EFE3] w-full" data-name="Footer">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[48px]">
        {/* Top Spacer - corresponds to Margin component in design */}
        <div className="h-[49px] w-full" />

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8 pt-12 pb-[24px] w-full">
          {/* Left Column: Logo & Contact Info */}
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            {/* Logo */}
            <div className="w-[73px] h-[24px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 24">
                <g id="Logo">
                  <path d={svgPaths.p3d6feec0} fill="#4F82AD" />
                  <path d={svgPaths.p758d200} fill="#4F82AD" />
                  <path d={svgPaths.p101f0a80} fill="#4F82AD" />
                  <path d={svgPaths.p1a2fdc00} fill="#4F82AD" />
                </g>
              </svg>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[7.5px] w-full max-w-[360px]">
              {/* Phone */}
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[14px] h-[14px]" fill="none" viewBox="0 0 10.6667 10.6667">
                    <path d={svgPaths.p3c8609c0} fill="#5D89B4" />
                  </svg>
                </div>
                <p className="font-sans font-normal text-[#5D89B4] text-[14px] leading-[22px] m-0">
                  +562 2384 9780
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[16px] h-[12.5px]" fill="none" viewBox="0 0 12 9.33334">
                    <path d={svgPaths.p3155b200} fill="#5D89B4" />
                  </svg>
                </div>
                <p className="font-sans font-normal text-[#5D89B4] text-[14px] leading-[22px] m-0">
                  info@oc2.cl
                </p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-[8px]">
                <div className="w-[16px] shrink-0 flex items-center justify-center">
                  <svg className="block w-[11px] h-[14px]" fill="none" viewBox="0 0 9.46155 12.0128">
                    <path d={svgPaths.p3f5537c0} fill="#5D89B4" />
                  </svg>
                </div>
                <p className="font-sans font-normal text-[#5D89B4] text-[14px] leading-[22px] m-0 whitespace-nowrap">
                  Nueva Costanera 3300, Oficina 33, Vitacura
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Navigation & Social */}
          <div className="flex flex-col gap-8 lg:gap-[32px] w-full lg:w-auto items-start lg:items-end">
            {/* Links */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-[48px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans font-medium text-[#5D89B4] text-[14px] uppercase tracking-[1.4px] leading-none hover:text-[#DFCAA3] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-[24px] text-[#5D89B4]">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/oc2-consultor%C3%ADa-comunicaciones/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-[24px] h-[24px]" strokeWidth={1.5} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="flex flex-col w-full pt-[24px] pb-10">
          <div className="w-full border-t border-[#A28C6A] pt-[33px]">
            <p className="font-sans font-normal text-[#5D89B4] text-[10px] leading-[16.25px] m-0">
              © 2026 OC2 Consultoría en Comunicaciones
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
