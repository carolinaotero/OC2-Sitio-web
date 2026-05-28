import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';

export function Contacto() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) newErrors.name = 'El nombre es obligatorio';
    if (!email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    if (!message) newErrors.message = 'El mensaje es obligatorio';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormState('error');
      return;
    }

    setErrors({});
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F3] pt-[140px] pb-[96px] w-full relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1280px] px-6 md:px-12 mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Info */}
          <div className="flex flex-col items-start relative z-10 w-full">
            <p className="font-sans font-semibold text-[#a28c6a] text-[12px] md:text-[14px] tracking-[2.1px] uppercase leading-none m-0 mb-[24px]">
              HABLEMOS
            </p>
            
            <h1 className="font-serif font-normal text-[#5d89b4] text-[64px] md:text-[84px] tracking-[-1.6px] leading-[1.05] m-0 mb-[16px]">
              Déjanos <br />
              <span className="italic text-[#a28c6a]">tu mensaje</span>
            </h1>
            
            <div className="h-[20px] w-[66px] shrink-0 mb-[48px] md:mb-[64px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 20">
                <path d="M0 0L66 10.0182L0 20V0Z" fill="#DFCAA3" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[32px] gap-x-[48px] w-full max-w-[600px]">
              {/* Oficina */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EAE5D9] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#3c5b79] w-[18px] h-[18px] md:w-[20px] md:h-[20px]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[6px] pt-1">
                  <h4 className="font-serif text-[#5d89b4] text-[20px] md:text-[24px] leading-[1.2] m-0">Nuestra Oficina</h4>
                  <p className="font-sans text-[#3c5b79] text-[14px] md:text-[16px] leading-[1.5] m-0">
                    Nueva Costanera 3900,<br />
                    Oficina 50. Vitacura<br />
                    Santiago, Chile
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EAE5D9] flex items-center justify-center shrink-0">
                  <Mail className="text-[#3c5b79] w-[18px] h-[18px] md:w-[20px] md:h-[20px]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[6px] pt-1">
                  <h4 className="font-serif text-[#5d89b4] text-[20px] md:text-[24px] leading-[1.2] m-0">Email</h4>
                  <p className="font-sans text-[#3c5b79] text-[14px] md:text-[16px] leading-[1.5] m-0">
                    info@oc2.cl
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-[16px] items-start">
                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#EAE5D9] flex items-center justify-center shrink-0">
                  <Phone className="text-[#3c5b79] w-[18px] h-[18px] md:w-[20px] md:h-[20px]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[6px] pt-1">
                  <h4 className="font-serif text-[#5d89b4] text-[20px] md:text-[24px] leading-[1.2] m-0">Teléfono</h4>
                  <p className="font-sans text-[#3c5b79] text-[14px] md:text-[16px] leading-[1.5] m-0">
                    +562 2364 3790
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form container */}
          <div className="bg-white rounded-[16px] border border-[#e5e7eb] shadow-sm p-[32px] sm:p-[48px] relative min-h-[500px] flex flex-col w-full max-w-[500px] ml-auto mt-[40px] lg:mt-0">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-[48px] bg-white rounded-[16px] z-10"
                >
                  <div className="w-[80px] h-[80px] rounded-full bg-[#EAE5D9] flex items-center justify-center mb-[32px]">
                    <CheckCircle2 className="w-[40px] h-[40px] text-[#a28c6a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[#5d89b4] text-[32px] leading-[1.2] mb-[16px]">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-sans text-[#3c5b79] text-[16px] leading-[1.6] max-w-[320px]">
                    Nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="mt-[48px]"
                    onClick={() => {
                      setFormState('idle');
                      setErrors({});
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col h-full"
                >
                  {formState === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-[8px] p-[16px] mb-[32px] flex items-start gap-[12px]"
                    >
                      <AlertCircle className="w-[20px] h-[20px] text-red-500 shrink-0 mt-0.5" />
                      <p className="font-sans text-red-700 text-[14px] leading-[1.5] m-0">
                        Hubo un problema al enviar tu mensaje. Por favor, revisa los campos en rojo e inténtalo de nuevo.
                      </p>
                    </motion.div>
                  )}

                  <form className="flex flex-col gap-[32px] flex-grow" onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="flex flex-col gap-[8px]">
                      <label htmlFor="name" className="font-sans text-[#a28c6a] text-[11px] md:text-[12px] tracking-[1px] uppercase">
                        NOMBRE COMPLETO
                      </label>
                      <input 
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        className={`font-sans text-[#3c5b79] text-[15px] py-[8px] bg-transparent border-b ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#e5e7eb] focus:border-[#5d89b4]'} outline-none transition-colors placeholder:text-[#bdc8d4]`}
                      />
                      {errors.name && <span className="font-sans text-red-500 text-[12px] mt-1">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-[8px]">
                      <label htmlFor="email" className="font-sans text-[#a28c6a] text-[11px] md:text-[12px] tracking-[1px] uppercase">
                        EMAIL
                      </label>
                      <input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="juan@empresa.com"
                        className={`font-sans text-[#3c5b79] text-[15px] py-[8px] bg-transparent border-b ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#e5e7eb] focus:border-[#5d89b4]'} outline-none transition-colors placeholder:text-[#bdc8d4]`}
                      />
                      {errors.email && <span className="font-sans text-red-500 text-[12px] mt-1">{errors.email}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-[8px] mb-[16px]">
                      <label htmlFor="message" className="font-sans text-[#a28c6a] text-[11px] md:text-[12px] tracking-[1px] uppercase">
                        ¿EN QUÉ PODEMOS AYUDARTE?
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                        className={`font-sans text-[#3c5b79] text-[15px] py-[8px] bg-transparent border-b ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#e5e7eb] focus:border-[#5d89b4]'} outline-none transition-colors placeholder:text-[#bdc8d4] resize-none`}
                      />
                      {errors.message && <span className="font-sans text-red-500 text-[12px] mt-1">{errors.message}</span>}
                    </div>

                    <div className="mt-auto pt-[16px]">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full"
                        disabled={formState === 'loading'}
                      >
                        {formState === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}