import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className = "", variant = "secondary", ...props }: ButtonProps) {
  const baseStyles = "relative flex items-center justify-center px-[24px] py-[12px] rounded-[8px] font-sans text-[16px] font-normal tracking-[0.8px] whitespace-nowrap leading-none transition-all duration-200 ease-out active:scale-[0.96] active:duration-100 active:ease-in-out disabled:pointer-events-none disabled:scale-100";
  
  const variants = {
    primary: "bg-[#5d89b4] text-white hover:bg-[#4a6d90] active:bg-[#3c5b79] disabled:bg-[#bed0e1] disabled:text-white",
    secondary: "border border-[#dfcaa3] text-[#5d89b4] bg-transparent hover:bg-[#dfcaa3] hover:text-white hover:border-[#dfcaa3] active:bg-[#a28c6a] active:border-[#a28c6a] active:text-white disabled:border-[#bdc8d4] disabled:text-[#bdc8d4] disabled:bg-transparent"
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
