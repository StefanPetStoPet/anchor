export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#000000] text-white pt-16 md:pt-24 pb-10 px-5 md:px-6 font-[Plus_Jakarta_Sans] overflow-hidden"
    >

      {/* SUBTLE BACKGROUND (reduced color noise) */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-white/5 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-white/5 blur-[140px] rounded-full" />
      </div>

{/* BIG CENTER LOGO BACKGROUND */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <img
    src="/images/aslogo.png"
    alt="AS Logo"
    className="
      w-[420px]
      md:w-[650px]
      lg:w-[850px]
      opacity-[0.2]
      object-contain
      select-none
    "
  />
</div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-semibold mb-3 tracking-tight">
          Contact Us
        </h2>

        <p className="text-white/50 mb-10 text-sm md:text-base max-w-md mx-auto">
          We respond to maritime inquiries and operational requests as quickly as possible.
        </p>

        {/* FORM CARD (cleaner, less glow) */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">

          <form className="flex flex-col gap-4 md:gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 md:p-4 rounded-lg bg-transparent border border-white/15 placeholder-white/40 focus:outline-none focus:border-white/40 transition text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 md:p-4 rounded-lg bg-transparent border border-white/15 placeholder-white/40 focus:outline-none focus:border-white/40 transition text-sm md:text-base"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 md:p-4 rounded-lg bg-transparent border border-white/15 placeholder-white/40 focus:outline-none focus:border-white/40 transition text-sm md:text-base"
            />

            <button
              type="submit"
              className="mt-2 bg-white text-[#0b0f1a] font-semibold py-3 rounded-lg hover:bg-white/90 transition text-sm md:text-base"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* BOTTOM BAR (simplified) */}
      <div className="relative z-10 max-w-6xl mx-auto mt-14 md:mt-20 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-4">

        <div className="text-center md:text-left">
          +382 80 233 1921
        </div>

        <div className="flex gap-6">
          <a className="hover:text-white/70 transition">Instagram</a>
          <a className="hover:text-white/70 transition">LinkedIn</a>
          <a className="hover:text-white/70 transition">Email</a>
        </div>

      </div>

    </footer>
  );
}