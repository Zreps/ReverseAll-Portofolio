import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import BurgerButton from './Burgerbutton';

const links = [
  { to: '#aboutme', label: 'About Me' },
  { to: '#skills', label: 'Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
  
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <div className="text-lg font-semibold tracking-wide text-slate-800">Reps.Dev</div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => {
            const NavLink = link.to.startsWith('/') ? Link : HashLink;
            return (
              <NavLink key={link.to} to={link.to} className="transition hover:text-slate-900">
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="md:hidden">
          <BurgerButton isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 shadow-md md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const NavLink = link.to.startsWith('/') ? Link : HashLink;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

