import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaShip, FaBoxOpen, FaGlobe, FaPhoneAlt, FaFilePdf } from 'react-icons/fa';

export default function ChandlersPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-700">

      <Navbar disableScrollEffect />

      <main className="min-h-screen bg-[#0b0f1a] text-white font-[Plus_Jakarta_Sans]">

        {/* HERO */}
        <section className="pt-20 md:pt-24 pb-14 md:pb-20 px-5 md:px-16">
          <div className="max-w-6xl mx-auto text-center">

            <div className="mb-4 inline-block px-3 md:px-4 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm">
              Global Ship Chandling Network
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
              Ship Chandlers
            </h1>

            <p className="mt-5 md:mt-6 text-white/70 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed px-2">
              We collaborate with trusted ship chandlers worldwide to deliver
              essential provisions, equipment, and spare parts directly to vessels —
              ensuring fast, reliable, and efficient supply chains for seafarers.
            </p>

          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto px-5 md:px-6 py-10 md:py-12 text-center">

          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            Ship Chandlers play a vital role in maritime operations. Our mission is to
            simplify and optimize this process by connecting vessels with reliable suppliers
            globally, ensuring every ship is fully equipped and operational at all times.
          </p>

          <p className="mt-5 md:mt-6 text-white/70 leading-relaxed text-sm md:text-base">
            We are not just improving logistics — we are enhancing the entire maritime experience,
            allowing seafarers to focus on their work with confidence and peace of mind.
          </p>

        </section>

        {/* FEATURES */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            What We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

            {[
              {
                icon: <FaBoxOpen />,
                title: "Global Supplies",
                text: "Food, equipment, spare parts and everything vessels need delivered worldwide."
              },
              {
                icon: <FaShip />,
                title: "Port Coordination",
                text: "Efficient delivery coordination across major international ports."
              },
              {
                icon: <FaGlobe />,
                title: "Worldwide Network",
                text: "Strong partnerships with trusted suppliers in key maritime hubs."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition"
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* PORTS / LOCATIONS */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            Our Global Locations
          </h2>

          <div className="space-y-8 md:space-y-10">

            {[
              {
                name: "Valencia",
                img: "https://wpassets.porttechnology.org/wp-content/uploads/2022/04/13143329/iStock-1346405632.jpg",
                phone: "+34 678 33 90 92",
                pdf: "/docs/qingdao.pdf"
              },
              {
                name: "Singapore",
                img: "https://resources.news.e.abb.com/images/2021/6/3/0/Singapore_landscape.jpg",
                phone: "+65 9058 6855",
                pdf: "/docs/qingdao.pdf"
              },
              {
                name: "Qingdao",
                img: "https://us.123rf.com/450wm/daizuoxin/daizuoxin1712/daizuoxin171200209/91223138-china-qingdao-ciudad-escena-nocturna.jpg?ver=6",
                phone: "+86 135 7326 2222",
                pdf: "/docs/qingdao.pdf"
              },
              {
                name: "Dubai",
                img: "/images/dub.jpg",
                phone: "+971 50 672 6097",
                pdf: "/docs/dubai.pdf"
              }
            ].map((port, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >

                {/* IMAGE */}
                <img
                  src={port.img}
                  className="w-full h-[180px] md:h-[250px] object-cover"
                  alt={port.name}
                />

                {/* TEXT */}
                <div className="p-5 md:p-6">

                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {port.name}
                  </h3>

                  <p className="text-white/70 text-xs md:text-sm mb-4">
                    Your order is our priority. Contact our local partners directly
                    or request supplies through our global coordination team.
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white text-[#0a1a33] rounded-lg font-semibold text-xs md:text-sm hover:bg-white/90 transition">
                      <FaPhoneAlt /> {port.phone}
                    </button>

                    {port.pdf && (
                      <a
                        href={port.pdf}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 border border-white/30 rounded-lg text-xs md:text-sm hover:bg-white/10 transition"
                      >
                        <FaFilePdf /> PDF
                      </a>
                    )}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="text-center py-14 md:py-20 px-5 md:px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6">
            Need Supplies for Your Vessel?
          </h2>

          <p className="text-white/70 mb-6 md:mb-8 text-sm md:text-base">
            Contact us and we will connect you with the nearest trusted ship chandlers.
          </p>

        </section>

      </main>

      <Footer />

    </div>
  );
}