
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-24 px-6 bg-[#f5f5f5]">

  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <img
      src="/images/buildingLogo.png"
      className="w-full h-[500px] object-cover shadow-lg"
      alt="Tempus Services"
    />

    <motion.div
      className="absolute inset-0"
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left", backgroundColor: "#f5f5f5" }}
    />
  </div>

  {/* TEXT */}
  <div className="relative">

    {/* LOGO BACKGROUND */}
    <img
      src="/images/logor.png"
      alt="Logo"
      className="
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[80vw] h-[80vh]
        opacity-10
        pointer-events-none
        mix-blend-multiply
      "
    />

    {/* TITLE */}
    <div className="relative overflow-hidden inline-block">
      <h2 className="text-3xl md:text-4xl font-[Marcellus] text-black mb-6">
        Our Services
      </h2>

      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#f5f5f5", transformOrigin: "left" }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>

    {/* SERVICE POINTS */}
    <div className="space-y-6 text-gray-700 leading-relaxed font-[Plus_Jakarta_Sans]">

  {/* SERVICE 1 */}
  <div className="relative overflow-hidden">
    <motion.div
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformOrigin: "left",
        backgroundColor: "#f5f5f5",
      }}
      className="absolute inset-0 z-10"
    />

    <div>
      <h3 className="text-black font-semibold">Global Maritime Support</h3>
      <p>
        We provide continuous operational assistance for seafarers and shipping companies, ensuring smooth coordination across international waters.
      </p>
    </div>
  </div>

  {/* SERVICE 2 */}
  <div className="relative overflow-hidden">
    <motion.div
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left", backgroundColor: "#f5f5f5" }}
      className="absolute inset-0 z-10"
    />

    <div>
      <h3 className="text-black font-semibold">Ship Chandling Coordination</h3>
      <p>
        Acting as a trusted intermediary, we connect vessels with reliable suppliers worldwide, managing all chandling requirements efficiently and on time.
      </p>
    </div>
  </div>

  {/* SERVICE 3 */}
  <div className="relative overflow-hidden">
    <motion.div
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left", backgroundColor: "#f5f5f5" }}
      className="absolute inset-0 z-10"
    />

    <div>
      <h3 className="text-black font-semibold">Pokefi Connectivity Solutions</h3>
      <p>
        We ensure uninterrupted global internet access across 150+ countries, enabling crews to stay connected anywhere at sea without roaming barriers.
      </p>
    </div>
  </div>

  {/* SERVICE 4 */}
  <div className="relative overflow-hidden">
    <motion.div
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left", backgroundColor: "#f5f5f5" }}
      className="absolute inset-0 z-10"
    />

    <div>
      <h3 className="text-black font-semibold">Seafarer Assistance & Monitoring</h3>
      <p>
        From document tracking to real-time support, we help seafarers stay prepared, safe, and fully supported throughout their journey.
      </p>
    </div>
  </div>

</div>

    {/* BUTTON */}
    <div className="relative mt-10 inline-block">

      <a
        href="/services"
        className="
          px-9 py-3
          border border-black/70
          text-black
          uppercase text-xs tracking-[0.25em]
          transition-all duration-500 ease-out
          hover:bg-black
          hover:border-black
          hover:!text-white
          hover:tracking-[0.35em]
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
          hover:-translate-y-0.5
        "
      >
        Explore Services
      </a>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "#f5f5f5", transformOrigin: "left" }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />

    </div>

  </div>
</div>