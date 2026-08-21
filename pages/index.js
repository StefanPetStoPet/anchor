"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from "framer-motion";
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
  text: "From last-minute port requirements to supplier coordination, their team keeps everything moving without unnecessary delays.",
  author: "Port Operations Coordinator, Meridian Marine Logistics",
},
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);



  const rotatingWords = [
  "free time",
  "smooth operations",
  "global coverage",
  "crew coordination",
  "fleet efficiency",
];

const [wordIndex, setWordIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setWordIndex((prev) => (prev + 1) % rotatingWords.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

const longestWord = rotatingWords.reduce(
  (longest, word) =>
    word.length > longest.length ? word : longest,
  ""
);



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
  className={`relative min-h-[100vh] md:min-h-screen flex  overflow-hidden ${
    darkMode ? 'bg-black' : 'bg-black'
  }`}
>
  {/* 🎥 VIDEO BACKGROUND */}
  <img
  src="/images/marina2.png"
  alt="Marina"
  className="absolute top-0 left-0 w-full h-full object-cover"
/>

  {/* 🌑 DARK OVERLAY (luxury cinematic look) */}
  <div className="absolute inset-0 bg-blue-300/1"></div>

  {/* CONTENT */}
<div
  className="relative z-10 w-full text-left px-6 md:px-12 lg:px-16"
  style={{
    paddingTop: 'clamp(90px, 20vh, 190px)',
  }}
>
  {/* H1, paragraph, CTA */}


  <h1
  className="
    font-[Plus_Jakarta_Sans]
    text-4xl sm:text-5xl md:text-6xl
    leading-[1.05]
    tracking-wide
    text-white
    max-w-4xl
  "
  style={{
    transform: "scaleX(1.02)",
    transformOrigin: "left",
    textShadow: "0 10px 30px rgba(0,0,0,0.6)",
  }}
>
  Finding ways to say{" "}
  
  <span className="font-bold">
    yes
  </span>{" "}
  
  to your{" "}

  {/* ROTATING WORDS */}
  <span
  className="
    inline-block
    relative
    overflow-hidden
    align-bottom
    h-[1.1em]
  "
  style={{
    width: `${longestWord.length}ch`,
  }}
>
  <AnimatePresence mode="sync">
    <motion.span
      key={rotatingWords[wordIndex]}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        absolute
        left-0
        top-0
        font-bold
        whitespace-nowrap
      "
    >
      {rotatingWords[wordIndex]}
    </motion.span>
  </AnimatePresence>
</span>
</h1>

  <p className="mt-5 max-w-xl text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
    We handle the operational details behind the scenes, from ship supply and connectivity to crew support, keeping vessels connected, coordinated, and moving efficiently.
  </p>

  



</div>

{/* GOALS SECTION */}
<div
  className="
    absolute bottom-0 left-0
    z-20
    w-full
    min-h-[10vh]
    px-[5%] md:px-[7%]
    pt-0 pb-3 md:py-3
    text-[#034545]
    font-[Plus_Jakarta_Sans]
  "
  style={{
  background:
    'linear-gradient(90deg, #064B6D4d 0%, #07ABAB4d 100%)',
}}
>

  {/* SECTION TITLE */}
  <h2 className="text-white text-base md:text-xl font-[Plus_Jakarta_Sans] font-semibold mb-3">
    What goals can we help you achieve?
  </h2>


  {/* CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

    {/* CARD 1 — GLOBAL MARITIME SUPPORT */}
<div
  className="
    group
    relative
    overflow-hidden
    bg-white/95
    rounded-2xl
    flex items-stretch
    border border-white/60
    shadow-[0_8px_25px_rgba(3,69,69,0.10)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_14px_30px_rgba(3,69,69,0.16)]
  "
>
  {/* GREEN ACCENT LINE */}
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#064B6D] to-[#07ABAB]" />

  {/* ICON PANEL */}
  <div
    className="
      shrink-0
      w-16 md:w-[72px]
      bg-gradient-to-br from-[#064B6D]/10 to-[#07ABAB]/20
      flex items-center justify-center
      border-r border-[#07ABAB]/10
      transition-all duration-300
      group-hover:from-[#064B6D]/15
      group-hover:to-[#07ABAB]/25
    "
  >
    <Icon
      icon="lucide:goal"
      width={36}
      height={36}
      className="text-[#064B6D]"
    />
  </div>

  {/* TEXT */}
  <div className="flex flex-col justify-center px-4 py-3 md:px-5 md:py-3.5">
    <h3 className="font-semibold text-sm md:text-[15px] text-[#034545] tracking-tight">
      Operations feel fragmented
    </h3>

    <p className="mt-0.5 text-[10px] md:text-xs text-[#034545]/60 leading-relaxed">
      We connect vessels, suppliers, and ports to keep operations moving smoothly.
    </p>
  </div>
</div>


{/* CARD 2 — SHIP CHANDLING */}
<div
  className="
    group
    relative
    overflow-hidden
    bg-white/95
    rounded-2xl
    flex items-stretch
    border border-white/60
    shadow-[0_8px_25px_rgba(3,69,69,0.10)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_14px_30px_rgba(3,69,69,0.16)]
  "
>
  {/* GREEN ACCENT LINE */}
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#064B6D] to-[#07ABAB]" />

  {/* ICON PANEL */}
  <div
    className="
      shrink-0
      w-16 md:w-[72px]
      bg-gradient-to-br from-[#064B6D]/10 to-[#07ABAB]/20
      flex items-center justify-center
      border-r border-[#07ABAB]/10
      transition-all duration-300
      group-hover:from-[#064B6D]/15
      group-hover:to-[#07ABAB]/25
    "
  >
    <Icon
      icon="fluent:savings-24-regular"
      width={36}
      height={36}
      className="text-[#064B6D]"
    />
  </div>

  {/* TEXT */}
  <div className="flex flex-col justify-center px-4 py-3 md:px-5 md:py-3.5">
    <h3 className="font-semibold text-sm md:text-[15px] text-[#034545] tracking-tight">
      Operational costs keep adding up
    </h3>

    <p className="mt-0.5 text-[10px] md:text-xs text-[#034545]/60 leading-relaxed">
      We streamline ship supply and sourcing to reduce unnecessary costs.
    </p>
  </div>
</div>


{/* CARD 3 — CONNECTIVITY */}
<div
  className="
    group
    relative
    overflow-hidden
    bg-white/95
    rounded-2xl
    flex items-stretch
    border border-white/60
    shadow-[0_8px_25px_rgba(3,69,69,0.10)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_14px_30px_rgba(3,69,69,0.16)]
  "
>
  {/* GREEN ACCENT LINE */}
  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#064B6D] to-[#07ABAB]" />

  {/* ICON PANEL */}
  <div
    className="
      shrink-0
      w-16 md:w-[72px]
      bg-gradient-to-br from-[#064B6D]/10 to-[#07ABAB]/20
      flex items-center justify-center
      border-r border-[#07ABAB]/10
      transition-all duration-300
      group-hover:from-[#064B6D]/15
      group-hover:to-[#07ABAB]/25
    "
  >
    <Icon
      icon="icon-park-solid:connect-address-two"
      width={36}
      height={36}
      className="text-[#064B6D]"
    />
  </div>

  {/* TEXT */}
  <div className="flex flex-col justify-center px-4 py-3 md:px-5 md:py-3.5">
    <h3 className="font-semibold text-sm md:text-[15px] text-[#034545] tracking-tight">
      Port calls create too much pressure
    </h3>

    <p className="mt-0.5 text-[10px] md:text-xs text-[#034545]/60 leading-relaxed">
      We coordinate port, crew, and supplier needs when timing matters most.
    </p>
  </div>
</div>

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
    className={`
      group
      relative
      z-10
      overflow-hidden
      min-h-[180px]
      p-5 md:p-6
      flex flex-col
      gap-3
      rounded-2xl

      bg-[#0a183e]/90
      backdrop-blur-md
      border border-white/10

      text-white

      shadow-[0_12px_35px_rgba(10,24,62,0.20)]

      transition-all duration-300
      hover:-translate-y-1
      hover:bg-[#0a183e]/95
      hover:border-white/20
      hover:shadow-[0_18px_40px_rgba(10,24,62,0.30)]

      ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}
    `}
  >

    {/* SUBTLE NAVY GRADIENT */}
    <div
      className="
        absolute
        inset-0
        pointer-events-none
        bg-gradient-to-br
        from-[#0a183e]
        via-[#0a183e]/80
        to-[#0a183e]/55
      "
    />

    {/* ACCENT LINE */}
    <div
      className="
        absolute
        left-0
        top-0
        h-full
        w-[3px]
        bg-[#0a183e]
        opacity-70
      "
    />

    {/* SUBTLE LIGHT */}
    <div
      className="
        absolute
        -right-16
        -top-16
        w-32
        h-32
        rounded-full
        bg-white/[0.04]
        blur-2xl
        pointer-events-none
      "
    />

    {/* CONTENT */}
    <div className="relative z-10 flex flex-col h-full gap-3">

      {/* TOP ROW */}
      <div className="flex items-center justify-between">

        {/* STARS */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, starIndex) => (
            <div
              key={starIndex}
              className="
                w-6 h-6
                rounded-md
                bg-white/[0.07]
                border border-white/[0.08]
                flex items-center justify-center
              "
            >
              <Icon
                icon="mdi:star"
                width={13}
                height={13}
                className="text-white/70"
              />
            </div>
          ))}
        </div>

        {/* QUOTE */}
        <Icon
          icon="lucide:quote"
          width={22}
          height={22}
          className="text-white/15"
        />
      </div>

      {/* REVIEW */}
      <p
        className="
          text-xs md:text-sm
          leading-relaxed
          text-white/75
          max-w-md
        "
      >
        {r.text}
      </p>

      {/* AUTHOR */}
      <div className="mt-auto pt-3 border-t border-white/10">
        <p
          className="
            text-[10px] md:text-xs
            font-medium
            tracking-wide
            text-white/45
          "
        >
          {r.author}
        </p>
      </div>

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


