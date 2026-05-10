"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrbitingCircles from '@/components/OrbitingCircles';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaRocket, FaCheckCircle, FaBookOpen, FaHeart } from 'react-icons/fa';
import Link from "next/link";
import { Icon } from "@iconify/react";

const pastelColors = {
  lightBlue: '#A3CEF1',
  lightGreen: '#A8D5BA',
  lightPurple: '#C4A3E0',
  lightPink: '#F7C6C7',
  lightYellow: '#F9E79F',
};

const services = [
  {
    title: "Global Maritime Support",
    desc: "Continuous operational assistance ensuring smooth coordination across international waters.",
  },
  {
    title: "Ship Chandling Coordination",
    desc: "We connect vessels with trusted suppliers worldwide, handling all requirements efficiently.",
  },
  {
    title: "Pokefi Connectivity",
    desc: "Reliable internet access across 150+ countries, keeping crews connected without roaming limits.",
  },
  {
    title: "Seafarer Assistance",
    desc: "Document tracking and real-time support to keep seafarers safe and fully prepared.",
  },
];

const reviews = [
  {
    text: "Reliable, fast, and truly global support. They’ve transformed how we manage our fleet operations.",
    author: "Fleet Manager, EU Shipping Co.",
  },
  {
    text: "Connectivity works exactly where others fail. Our crews finally stay connected worldwide.",
    author: "Operations Lead, Maritime Group",
  },
  {
    text: "Their coordination and responsiveness are unmatched in the industry.",
    author: "Captain, International Vessel",
  },
  {
    text: "Connectivity works exactly where others fail. Our crews finally stay connected worldwide.",
    author: "Operations Lead, Maritime Group",
  },
  {
    text: "Their coordination and responsiveness are unmatched in the industry.",
    author: "Captain, International Vessel",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // update class on root when dark mode toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);



  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f5f5f5] text-gray-700'}`}>
     
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <section
  className={`relative min-h-[100vh] md:min-h-screen flex items-center justify-center pt-16 overflow-hidden ${
    darkMode ? 'bg-black' : 'bg-black'
  }`}
>
  {/* 🎥 VIDEO BACKGROUND */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
<source src="/videos/shipVid222.mp4" type="video/mp4" />
  </video>

  {/* 🌑 DARK OVERLAY (luxury cinematic look) */}
  <div className="absolute inset-0 bg-black/25"></div>

  {/* CONTENT */}
  <div className="relative z-10 w-[90%] md:w-4/5 text-center">

  <h1
    className="
      font-[Plus_Jakarta_Sans]
      text-3xl sm:text-4xl md:text-7xl
      leading-tight tracking-wide
      text-white
    "
    style={{
      transform: 'scaleX(1.06)',
      textShadow: '0 10px 30px rgba(0,0,0,0.6)',
    }}
  >
    Your Base of Solutions
  </h1>

  <p className="mt-3 md:mt-1 text-white/80 text-xs sm:text-sm md:text-base tracking-wide">
    Just One Click Away
  </p>

  {/* CTA */}
  <div className="mt-6 md:mt-10 flex justify-center">
    <a
      href="#contact"
      className="
        inline-flex items-center justify-center
        px-7 md:px-9 py-2.5 md:py-3
        bg-white/90 text-black
        uppercase text-[10px] md:text-xs tracking-[0.25em]
        transition-all duration-500 ease-out
        hover:bg-white
        hover:tracking-[0.35em]
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
        hover:-translate-y-0.5
      "
    >
      Contact us
    </a>
  </div>

</div>
</section>





      <main>
        {/* Project section */}

  <section className="w-full flex justify-center py-16 md:py-24 bg-white relative overflow-hidden">

  <div className="w-[90%] flex flex-col gap-24 relative z-10">

    {/* TOP */}
    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start relative">

      {/* LEFT TEXT */}
      <div className="max-w-2xl pr-6 relative z-20">
        <h2 className="text-[#0b0f1a] text-2xl md:text-6xl font-[Marcellus] leading-tight">
          Reducing operational friction <br />
          across maritime logistics
        </h2>

        <p className="text-[#0b0f1a]/70 mt-6 text-sm md:text-base leading-relaxed">
          We address coordination gaps between vessels, suppliers, and communication systems that often lead to delays, miscommunication, and service interruptions at sea. Our work focuses on synchronizing ship supply chains, maintaining stable onboard connectivity, and providing structured support for crew operations where standard channels fail or become fragmented.
        </p>
      </div>

      {/* RIGHT REVIEWS (BACK TO ORIGINAL SCALE) */}
      <div className="relative grid grid-cols-2 gap-10 pr-0 z-10">

        {/* GRID BACKGROUND (FULL HEIGHT + EDGE OVERSHOOT) */}
        <div className="absolute inset-[-120px_-120px_-30px_-30px] z-0 opacity-[0.12] pointer-events-none">

          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #0b0f1a 1.5px, transparent 1.5px),
                linear-gradient(to bottom, #0b0f1a 1.5px, transparent 1.5px)
              `,
              backgroundSize: "55px 55px",
            }}
          />

          {/* LEFT OVERSHOOT (horizontal lines extend visually) */}
          <div className="absolute left-0 top-0 w-14 h-full bg-gradient-to-r from-[#0b0f1a]/10 to-transparent" />

          {/* TOP OVERSHOOT */}
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-[#0b0f1a]/10 to-transparent" />

        </div>

        {reviews.slice(0, 4).map((r, i) => (
          <div
            key={i}
            className={`relative z-10 bg-[#0a183e] text-white p-6 rounded-xl shadow-xl text-sm leading-relaxed min-h-[190px] flex flex-col gap-3
            ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}
            `}
          >

            {/* STARS */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-white flex items-center justify-center rounded-sm"
                >
                  <Icon icon="mdi:star" className="text-[#1e3a8a] text-xs" />
                </div>
              ))}
            </div>

            <p>"{r.text}"</p>

            <div className="text-xs opacity-80 mt-auto">
              {r.author}
            </div>

          </div>
        ))}

      </div>

    </div>

    {/* SERVICES (UNCHANGED) */}
    <div className="relative">

      <div className="grid md:grid-cols-4 gap-10 relative z-10">

        {services.map((s, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">

            <div className="w-16 h-16 rounded-full border border-[#0b0f1a]/20 bg-white flex items-center justify-center z-10">
              <Icon
                icon={
                  i === 0
                    ? "lucide:globe"
                    : i === 1
                    ? "lucide:anchor"
                    : i === 2
                    ? "lucide:wifi"
                    : "lucide:users"
                }
                className="text-[#0b0f1a]"
                width={26}
              />
            </div>

            <div className="mt-6 max-w-[220px]">
              <h3 className="text-[#0b0f1a] font-semibold text-lg">
                {s.title}
              </h3>

              <p className="text-[#0b0f1a]/70 text-sm mt-2">
                {s.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* ROUTE LINE (TOP + FULL WIDTH FEEL) */}
      <div className="absolute top-8 left-0 w-full flex items-center px-10 z-0">
        <div className="w-full h-[2px] bg-[#1e3a8a]/55" />
      </div>

    </div>

  </div>

</section>

<section className="w-full flex flex-col items-center py-14 bg-[#0b0f1a]">

  {/* TITLE */}
  <h2 className="text-black text-3xl md:text-6xl mb-10 font-[Marcellus]">
    Choose service you need:
  </h2>
<div className="hidden md:flex w-full justify-center">
  <div className="w-[80%] h-[420px] relative flex overflow-hidden rounded-xl">

    {/* BACKGROUND IMAGE (default) */}
    <div className="absolute inset-0">
      <img
        src="/images/hoverBg.jpg"
        className="w-full h-full object-cover"
        alt="background"
      />
      <div className="absolute inset-0 bg-black/25" />
    </div>

    {/* ===================== */}
    {/* CARD 1 - GOALS */}
    {/* ===================== */}
    <Link href="/services" className="group flex-1 relative flex items-center justify-center text-center">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <img
          src="/images/services.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-white px-6">
        <h2 className="text-4xl font-semibold">Services</h2>

        {/* DEFAULT TEXT */}
        <p className="text-sm opacity-80 mt-2 group-hover:hidden">
          Supporting seafarers globally with innovative and reliable solutions designed to simplify life at sea.
        </p>

        {/* HOVER TEXT */}
        <p className="text-sm opacity-90 mt-2 hidden group-hover:block">
          We aim to create a seamless support network for seafarers by combining technology, logistics, and personalized assistance to improve everyday life at sea.
        </p>
      </div>
    </Link>

    {/* ===================== */}
    {/* CARD 2 - POKEFI */}
    {/* ===================== */}
    <Link href="/pokefi" className="group flex-1 relative flex items-center justify-center text-center">
  
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
    <img
      src="/images/pokefiDevice.webp"
      className="w-full h-full object-cover"
      alt=""
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>

  <div className="relative z-10 text-white px-6">
    <h2 className="text-4xl font-semibold">Devices</h2>

    {/* DEFAULT TEXT */}
    <p className="text-sm opacity-80 mt-2 group-hover:hidden">
      Stay connected anywhere at sea with fast, secure internet across 150+ countries.
    </p>

    {/* HOVER TEXT */}
    <p className="text-sm opacity-90 mt-2 hidden group-hover:block">
      Pokefi provides uninterrupted global connectivity without roaming fees or SIM changes, ensuring reliable high-speed internet wherever your journey takes you.
    </p>
  </div>

</Link>
    {/* ===================== */}
    {/* CARD 3 - CHANDLERS */}
    {/* ===================== */}
    <Link href="/chandlers" className="group flex-1 relative flex items-center justify-center text-center">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <img
          src="/images/shipchandling.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-white px-6">
        <h2 className="text-4xl font-semibold">Supply</h2>

        {/* DEFAULT TEXT */}
        <p className="text-sm opacity-80 mt-2 group-hover:hidden">
          Marine supply coordination and global support for shipping operations.
        </p>

        {/* HOVER TEXT */}
        <p className="text-sm opacity-90 mt-2 hidden group-hover:block">
          We act as a trusted intermediary between ship owners and global suppliers, coordinating ship chandling services worldwide to ensure vessels receive everything they need, anywhere in the world.
        </p>
      </div>
    </Link>

  </div>
</div>
  {/* ===================== */}
{/* MOBILE ONLY SECTION */}
{/* ===================== */}
<div className="w-[80%] mx-auto flex flex-col gap-6 md:hidden mt-10">

  {/* CARD 1 */}
  <div className="relative h-[280px] rounded-xl overflow-hidden shadow-md">

    <img
      src="/images/services.jpg"
      className="absolute inset-0 w-full h-full object-cover"
      alt="services"
    />
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
      <h2 className="text-2xl font-semibold">Services</h2>
      <p className="text-sm opacity-90 mt-2">
        Supporting seafarers globally with logistics, coordination and operational assistance designed for life at sea.
      </p>
    </div>

  </div>

  {/* CARD 2 */}
  <div className="relative h-[280px] rounded-xl overflow-hidden shadow-md">

    <img
      src="/images/pokefiDevice.webp"
      className="absolute inset-0 w-full h-full object-cover"
      alt="devices"
    />
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
      <h2 className="text-2xl font-semibold">Devices</h2>
      <p className="text-sm opacity-90 mt-2">
        Reliable global connectivity across 150+ countries, ensuring uninterrupted communication for crews at sea.
      </p>
    </div>

  </div>

  {/* CARD 3 */}
  <div className="relative h-[280px] rounded-xl overflow-hidden shadow-md">

    <img
      src="/images/shipchandling.jpg"
      className="absolute inset-0 w-full h-full object-cover"
      alt="supply"
    />
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-white p-6 flex flex-col justify-end h-full">
      <h2 className="text-2xl font-semibold">Supply</h2>
      <p className="text-sm opacity-90 mt-2">
        Coordinating global ship chandling and supply operations to ensure vessels receive what they need, on time, anywhere.
      </p>
    </div>

  </div>

</div>
</section>




      </main>

      <Footer />
    </div>
  );
}


