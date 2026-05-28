import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import imgCard from '../imports/Equipo/6c504bd57cdf23d383ee0d74847ac3af45cfa524.png';

// ── Inline SVGs ─────────────────────────────────────────────────────────────

function FlechaSVG() {
  return (
    <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L27 4.00729L0 8V0Z" fill="#DFCAA3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24Z" fill="#5D89B4" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.6668 20.6666H17.1054V14.6007C17.1054 12.9376 16.4734 12.0082 15.1571 12.0082C13.725 12.0082 12.9769 12.9753 12.9769 14.6007V20.6666H9.54461V9.11109H12.9769V10.6676C12.9769 10.6676 14.0088 8.75805 16.461 8.75805C18.9121 8.75805 20.6668 10.2548 20.6668 13.3504V20.6666ZM5.44995 7.59798C4.28085 7.59798 3.3335 6.6432 3.3335 5.46565C3.3335 4.2881 4.28085 3.33331 5.44995 3.33331C6.61904 3.33331 7.56583 4.2881 7.56583 5.46565C7.56583 6.6432 6.61904 7.59798 5.44995 7.59798ZM3.67768 20.6666H7.25663V9.11109H3.67768V20.6666Z" fill="white" />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────

export type Member = {
  name: string;      // Nombre + Apellido1 + Apellido2 — usado en la modal
  nameCard: string;  // Nombre + Apellido1 — usado en las cards
  role: string;
  img: string;
  imgModal: string;
  trayectoria: string;
  formacion: string;
  contacto: string;
  linkedin: string;
};

export function mapMember(m: {
  nombre: string;
  apellido1: string;
  apellido2?: string;
  cargo: string;
  trayectoria: string;
  formacion: string;
  foto: string;
  foto_modal?: string;
  contacto?: string;
  linkedin?: string;
}): Member {
  const photo = m.foto || imgCard;
  const photoModal = m.foto_modal || photo;
  const nameParts = [m.nombre, m.apellido1, m.apellido2].filter(Boolean);
  const cardParts = [m.nombre, m.apellido1].filter(Boolean);
  return {
    name: nameParts.join(' '),
    nameCard: cardParts.join(' '),
    role: m.cargo,
    img: photo,
    imgModal: photoModal,
    trayectoria: m.trayectoria || '',
    formacion: m.formacion || '',
    contacto: m.contacto || '',
    linkedin: m.linkedin || '',
  };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Parse "• item\n• item\n" into ['item', 'item'] */
function parseBullets(text: string): string[] {
  return text
    .split('\n')
    .map(line => line.replace(/^[•\-]\s*/, '').trim())
    .filter(Boolean);
}

// ── MemberCard ───────────────────────────────────────────────────────────────

export function MemberCard({ member, onClick }: { member: Member; onClick: (m: Member) => void }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-start relative w-full cursor-pointer group"
      onClick={() => onClick(member)}
    >
      <div className="bg-[#bdc8d4] h-[220px] sm:h-[300px] lg:h-[344px] overflow-hidden relative rounded-[8px] w-full">
        <img
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          src={member.img}
        />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Newsreader',sans-serif] font-medium text-[#3c5b79] text-[16px] sm:text-[22px] lg:text-[28px] leading-[1.2] m-0">
          {member.nameCard}
        </p>
        <p className="font-sans font-semibold text-[#a28c6a] text-[12px] sm:text-[13px] lg:text-[14px] tracking-[1px] sm:tracking-[2.1px] uppercase leading-none m-0">
          {member.role}
        </p>
      </div>
    </div>
  );
}

// ── MemberModal ──────────────────────────────────────────────────────────────

export function MemberModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  useEffect(() => {
    if (!member) return;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [member, onClose]);

  if (!member) return null;

  const trayectoriaBullets = parseBullets(member.trayectoria);
  const formacionBullets = parseBullets(member.formacion);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#5D89B4]/85 backdrop-blur-[12px]"
        onClick={onClose}
      />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative bg-[#fbf9f3] w-full max-w-[1120px] h-auto max-h-[90vh] md:min-h-[656px] rounded-[8px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
      >
        {/* Left: Photo */}
        <div className="hidden md:block w-1/3 min-w-[240px] max-w-[400px] shrink-0 bg-[#bdc8d4] relative overflow-hidden">
          <img
            src={member.imgModal}
            alt={member.name}
            className="absolute h-[838px] left-[50%] -translate-x-[50%] top-0 max-w-none object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-8 sm:p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6 w-full max-w-[720px]"
          >
            {/* Role badge + close */}
            <div className="flex items-center justify-between w-full">
              <div className="border border-[#dfcaa3] rounded-[32px] px-[16px] py-[8px]">
                <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
                  {member.role}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-[40px] h-[40px] border border-[#dfcaa3] rounded-full flex items-center justify-center text-[#5d89b4] text-[16px] font-sans hover:bg-[#dfcaa3]/20 transition-colors shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Name + arrow */}
            <div className="flex flex-col gap-3">
              <h2 className="font-serif font-medium text-[#5d89b4] text-[40px] leading-[1.2] tracking-[-0.8px] m-0">
                {member.name}
              </h2>
              <FlechaSVG />
            </div>

            {/* Trayectoria */}
            {trayectoriaBullets.length > 0 && (
              <div className="flex flex-col gap-[14px]">
                <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
                  Trayectoria
                </p>
                <div className="w-full h-[1px] bg-[#dfcaa3]" />
                <ul className="flex flex-col gap-[10px] list-none m-0 p-0">
                  {trayectoriaBullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-[12px]">
                      <span className="mt-[8px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#dfcaa3]" />
                      <span className="font-sans font-light text-[#3c5b79] text-[16px] leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Formacion */}
            {formacionBullets.length > 0 && (
              <div className="flex flex-col gap-[14px]">
                <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
                  Formación
                </p>
                <div className="w-full h-[1px] bg-[#dfcaa3]" />
                <ul className="flex flex-col gap-[10px] list-none m-0 p-0">
                  {formacionBullets.map((item, i) => {
                    const dashIdx = item.indexOf(' - ');
                    return (
                      <li key={i} className="flex items-start gap-[12px]">
                        <span className="mt-[8px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#dfcaa3]" />
                        <span className="font-sans font-light text-[16px] leading-[1.6]">
                          {dashIdx !== -1 ? (
                            <>
                              <span className="font-semibold text-[#a28c6a]">{item.slice(0, dashIdx)}</span>
                              <span className="font-light text-[#3c5b79]">{item.slice(dashIdx)}</span>
                            </>
                          ) : (
                            <span className="font-light text-[#3c5b79]">{item}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Contacto — solo socias */}
            {(member.contacto || member.linkedin) && (
              <div className="flex flex-col gap-[14px]">
                <p className="font-sans font-semibold text-[#a28c6a] text-[14px] tracking-[2.1px] uppercase leading-none m-0">
                  Contacto
                </p>
                <div className="w-full h-[1px] bg-[#dfcaa3]" />
                <div className="flex items-center gap-[12px]">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {member.contacto && (
                    <a
                      href={`mailto:${member.contacto}`}
                      className="flex flex-col gap-[2px] group w-fit"
                    >
                      <p className="font-sans font-medium text-[#5d89b4] text-[14px] tracking-[1.4px] uppercase leading-none m-0">
                        {member.contacto}
                      </p>
                      <div className="w-full h-[1px] bg-[#5d89b4] transition-transform duration-300 origin-left scale-x-100 group-hover:scale-x-0" />
                    </a>
                  )}
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
