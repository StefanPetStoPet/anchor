import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaShip, FaWifi, FaTools, FaGlobe, FaUsers, FaClipboardCheck } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-700">

      <Navbar disableScrollEffect />

      <main className="min-h-screen bg-[#0b0f1a] text-white font-[Plus_Jakarta_Sans]">

        {/* HERO */}
        <section className="pt-20 md:pt-24 pb-14 md:pb-20 px-5 md:px-16">
          <div className="max-w-6xl mx-auto text-center">

            <div className="mb-4 inline-block px-3 md:px-4 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm">
              Marine Support Agency
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
              Our Services
            </h1>

            <p className="mt-5 md:mt-6 text-white/70 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
              We provide reliable global maritime support for ship owners, operators,
              and seafarers — combining logistics, technology, and human support.
            </p>

          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

            {[
              {
                icon: <FaShip />,
                title: "Ship Chandling",
                text: "Global coordination of marine supplies, provisions, and equipment delivered directly to vessels."
              },
              {
                icon: <FaWifi />,
                title: "Connectivity Solutions",
                text: "Reliable global internet access for crews through advanced Pokefi technology."
              },
              {
                icon: <FaTools />,
                title: "Technical Support",
                text: "Maintenance coordination and technical assistance for vessels worldwide."
              },
              {
                icon: <FaGlobe />,
                title: "Global Logistics",
                text: "Efficient coordination across ports, suppliers, and agencies worldwide."
              },
              {
                icon: <FaUsers />,
                title: "Crew Support",
                text: "Helping seafarers with documentation, communication, and daily needs."
              },
              {
                icon: <FaClipboardCheck />,
                title: "Operational Assistance",
                text: "Ensuring smooth vessel operations through planning and real-time support."
              }
            ].map((service, i) => (
              <div
                key={i}
                className="
                  bg-white/5 border border-white/10 rounded-2xl
                  p-5 md:p-6
                  hover:bg-white/10 transition
                  hover:-translate-y-1
                  min-h-[160px]
                "
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-white">
                  {service.icon}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {[
              "Global presence and trusted partner network",
              "Fast and reliable service delivery",
              "Tailored solutions for each vessel",
              "24/7 support for crews and operators",
              "Transparent pricing and communication",
              "Experienced maritime professionals"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition text-sm md:text-base"
              >
                <span className="font-semibold">{i + 1}.</span> {item}
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-14 md:py-20 px-5 md:px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6">
            Need Support?
          </h2>

          <p className="text-white/70 mb-6 md:mb-8 text-sm md:text-base">
            Contact us today and let us support your vessel operations globally.
          </p>

        </section>

      </main>

      <Footer />

    </div>
  );
}