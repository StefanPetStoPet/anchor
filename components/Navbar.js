import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ disableScrollEffect = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  if (disableScrollEffect) return; // 👈 THIS LINE

  const handleScroll = () => {
    setScrolled(window.scrollY > 500);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [disableScrollEffect]);

  return (
    <>
      <nav
  className={`fixed top-0 left-0 w-full z-50 border-b-2 border-white/30 transition-colors duration-500 backdrop-blur-lg
  ${
    disableScrollEffect
      ? 'bg-blue-900/10'   // 👈 ALWAYS TOP STYLE
      : scrolled
      ? 'bg-[#0a1a33]'     // normal scroll behavior
      : 'bg-blue-900/10'
  }`}
>
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* LEFT SIDE */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/aslogo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
            <span className="text-white text-base md:text-3xl tracking-wide font-[Plus_Jakarta_Sans]">
              Anchor Support Agency
            </span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-10">

            <Link href="/chandlers" className="!text-white text-base md:text-xl tracking-wide hover:opacity-80 transition font-[Plus_Jakarta_Sans]">
              Chandlers
            </Link>

            <Link href="/pokefi" className="!text-white text-base md:text-xl tracking-wide hover:opacity-80 transition font-[Plus_Jakarta_Sans]">
              Pokefi
            </Link>

            <Link href="/services" className="!text-white text-base md:text-xl tracking-wide hover:opacity-80 transition font-[Plus_Jakarta_Sans]">
              Services
            </Link>

            <img
              src="/images/crnag.png"
              alt="Language"
              className="h-5 w-auto cursor-pointer"
            />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* SIDE MENU */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] bg-[#0b0f1a] transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col px-8 py-10 gap-8`}
        >
          <button
            className="self-end text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <Link href="/chandlers" className="!text-white text-xl">
            Chandlers
          </Link>

          <Link href="/pokefi" className="!text-white text-xl">
            Pokefi
          </Link>

          <Link href="/services" className="!text-white text-xl">
            Services
          </Link>
        </div>
      </div>
    </>
  );
}