import React from "react";

export default function BurgerButton({ isOpen = false, onToggle, className = "" }) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onToggle}
      className={`relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/90 shadow-sm transition duration-300 hover:bg-slate-50 ${className}`}
    >
      <span
        className={`h-0.5 w-6 rounded-full bg-slate-800 transition-all duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 rounded-full bg-slate-800 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-0.5 w-6 rounded-full bg-slate-800 transition-all duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
}