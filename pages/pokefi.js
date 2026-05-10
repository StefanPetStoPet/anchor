import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PokefiPage() {

  const [search, setSearch] = useState("");

  const countries = [
    "Albania","Afghanistan","Algeria","Angola","Armenia","Azerbaijan",
    "Bosnia-Herzegovina","Belarus","Benin","Bhutan","Botswana","Burundi",
    "Cameroon","Cape Verde","Chad","Congo",
    "Djibouti",
    "Eritrea","Ethiopia",
    "Gabon","Gambia","Georgia","Ghana","Guinea",
    "Iraq","Ivory Coast",
    "Kyrgyzstan",
    "Lesotho","Liberia","Libya",
    "Macedonia","Madagascar","Malawi","Maldives","Mali","Mauritania","Mauritius","Moldova","Morocco","Mozambique",
    "Namibia","Nepal","Nigeria",
    "Palestine Autonomous",
    "Reunion","Rwanda",
    "Senegal","Swaziland","Syria",
    "Tanzania","Togo","Tunisia",
    "Uganda","Uzbekistan",
    "Zambia","Zimbabwe"
  ];

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-700">
      <Navbar disableScrollEffect />

      <main className="min-h-screen bg-[#0b0f1a] text-white font-[Plus_Jakarta_Sans]">

        {/* HERO */}
        <section className="pt-20 md:pt-24 pb-14 md:pb-20 px-5 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* LEFT TEXT */}
            <div>

              <div className="mb-4 inline-block px-3 md:px-4 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm">
                Main importers for Europe
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
                Pokefi
              </h1>

              <p className="mt-5 md:mt-6 text-white/70 text-sm md:text-lg leading-relaxed">
                Portable global WiFi hotspot designed for travelers and seafarers.
              </p>

              <ul className="mt-5 md:mt-6 space-y-2 md:space-y-3 text-white/80 text-sm md:text-base">
                <li>• Works in 170+ countries worldwide</li>
                <li>• Connect up to 8 devices at the same time</li>
                <li>• Secure and stable internet without roaming SIM cards</li>
              </ul>

              <div className="mt-6 md:mt-8 text-white/70 leading-relaxed">

                <button
                  onClick={() => window.open("https://www.everlong.biz/pokefi-seafarers", "_blank")}
                  className="mt-2 px-5 md:px-6 py-3 bg-white text-[#0a1a33] rounded-lg font-semibold text-sm md:text-base hover:bg-white/90 transition"
                >
                  More Details
                </button>

                <p className="mt-4 text-sm md:text-base">
                  Use promo code{" "}
                  <span className="text-white font-semibold">TSA102309</span>{" "}
                  and get{" "}
                  <span className="text-white font-semibold">10% discount</span>
                </p>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/pokefidevice.jpg"
                alt="Pokefi device"
                className="w-full max-w-xs md:max-w-md rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

          </div>
        </section>

        {/* INFO SECTION */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            Why use Pokefi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-white/80">

            {[
              "No SIM swapping needed when traveling",
              "Flat global internet cost",
              "Stable connection optimized automatically",
              "Long validity packages (1–10 years)",
              "No roaming fees",
              "Secure connection anywhere",
              "Works on land and at sea",
              "Easy plug-and-play setup"
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition text-sm md:text-base"
              >
                <span className="text-white font-semibold mr-2">{i + 1}.</span>
                {text}
              </div>
            ))}

          </div>
        </section>

        {/* PRICE */}
        <section className="text-center py-14 md:py-10 px-5 md:px-6">

          <button
            onClick={() => window.open("https://www.everlong.biz/pokefi-seafarers", "_blank")}
            className="px-10 md:px-20 lg:px-60 py-4 md:py-5 bg-white text-base md:text-2xl text-[#0a1a33] rounded-lg font-semibold hover:bg-white/90 transition w-full md:w-auto"
          >
            More Details
          </button>

          <p className="mt-4 font-semibold text-sm md:text-base">
            FREE DELIVERY
          </p>

        </section>

        {/* COUNTRIES LIST */}
        <section className="px-5 md:px-6 py-10 md:py-10">

          <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl p-5 md:p-6">

            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Countries with additional delivery cost
            </h3>

            <input
              type="text"
              placeholder="Search your country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none text-black text-sm md:text-base"
            />

            <div className="h-[35vh] md:h-[40vh] overflow-y-auto text-sm leading-relaxed pr-2">

              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, i) => (
                  <div
                    key={i}
                    className="py-1 border-b border-gray-200 last:border-none"
                  >
                    {country}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No country found</p>
              )}

            </div>

          </div>

        </section>

      </main>
      <Footer />
    </div>
  );
}