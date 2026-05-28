import React from "react";
import { Link } from "react-router";
export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF9F3] text-center px-6" data-name="Not Found Page">
      <h1 className="font-serif text-[#5d89b4] text-5xl md:text-[80px] font-semibold mb-6">404</h1>
      <h2 className="font-sans text-[#3c5b79] text-2xl md:text-3xl mb-8">Página no encontrada</h2>
      <p className="font-sans text-[#a28c6a] max-w-md mx-auto mb-10 text-lg">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link 
        to="/" 
        className="bg-[#5d89b4] text-white hover:bg-[#4a6d90] active:bg-[#3c5b79] active:scale-[0.96] text-[16px] font-sans font-normal tracking-[0.8px] px-[32px] py-[16px] rounded-[8px] transition-all duration-200"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
