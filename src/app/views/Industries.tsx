import React from "react";
import { useParams, Link } from "react-router";
import { ShieldCheck, Zap, Factory, Building2, ShoppingBag, ArrowRight, CheckCircle2, ChevronRight, Play, Info } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";

const industryData = {
  "security-services": {
    name: "Security Services",
    icon: ShieldCheck,
    heroImage: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1600",
    headline: "Uninterrupted Coordination for Critical Protection",
    description: "In the security sector, a second's delay can be the difference between safety and a breach. CONVEY provides the rugged, license-free tools needed for constant situational awareness.",
    challenges: [
      "Dead zones in large complexes or parking basements.",
      "Background noise during crowd control operations.",
      "Need for discreet communication in sensitive environments.",
      "Battery life that must outlast a standard 12-hour shift."
    ],
    solutions: [
      "High-penetration signals that work through thick concrete walls.",
      "Noise-cancelling audio for clear voice even in chaotic crowds.",
      "Compact, slim designs for discreet use by plainclothes teams.",
      "High-capacity batteries (up to 2900mAh) for continuous duty."
    ],
    recommendedProducts: ["c1-pro", "c1-pro-nd"]
  },
  "hospitality": {
    name: "Hotels & Hospitality",
    icon: Building2,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
    headline: "Seamless Guest Experience Through Silent Coordination",
    description: "Exceptional service requires invisible coordination. CONVEY radios empower front-desk, housekeeping, and banquet teams to communicate instantly without disturbing the guest environment.",
    challenges: [
      "Bulky radios that look unprofessional in a luxury setting.",
      "Coordinating multi-floor operations from basement to rooftop.",
      "Audio leakage that guests might hear.",
      "Cross-departmental interference."
    ],
    solutions: [
      "India's slimmest designs that fit perfectly with professional uniforms.",
      "Clear multi-floor coverage for seamless guest requests.",
      "Earpiece-first design for silent, discreet communication.",
      "Multiple channels to segregate front-office and maintenance."
    ],
    recommendedProducts: ["c1", "c1-plus"]
  },
  "manufacturing": {
    name: "Manufacturing",
    icon: Factory,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    headline: "Rugged Reliability for the Modern Factory Floor",
    description: "The manufacturing floor is a demanding environment. CONVEY's industrial series is built to withstand dust, vibration, and heavy use while maintaining crystal-clear audio quality.",
    challenges: [
      "High ambient machine noise drowning out communication.",
      "Dust and moisture ingress damaging electronic components.",
      "Accidental drops on concrete floors.",
      "The need for hands-free operation while working with tools."
    ],
    solutions: [
      "Loud 1W audio output to cut through industrial background noise.",
      "Ruggedized tactile bodies that withstand impact and vibration.",
      "Reliable belt-clips and VOX (voice-activated) support.",
      "WPC approved frequencies that don't interfere with factory automation."
    ],
    recommendedProducts: ["c1-pro-nd", "c1-pro"]
  },
  "construction": {
    name: "Construction Sites",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600",
    headline: "Heavy-Duty Communication for Heavy-Duty Work",
    description: "Manage large construction sites with ease. From crane operators to site engineers, CONVEY provides the range and durability needed for harsh outdoor environments.",
    challenges: [
      "Extreme outdoor conditions including heat, dust, and rain.",
      "Communication range across large, sprawling site footprints.",
      "Dropping radios from heights.",
      "Operating with gloved hands."
    ],
    solutions: [
      "Built-to-last construction with reinforced frames.",
      "Extended range antennas for wide-area site coverage.",
      "High-visibility displays and large, tactile PTT buttons.",
      "Dust-resistant designs that thrive in construction environments."
    ],
    recommendedProducts: ["c1-pro-nd", "c1-pro"]
  },
  "events": {
    name: "Events & Venues",
    icon: ShoppingBag,
    heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1600",
    headline: "Instant Coordination for Flawless Execution",
    description: "From concerts to corporate exhibitions, the success of an event depends on real-time logistics. CONVEY offers easy-to-use radios that require zero training for temporary staff.",
    challenges: [
      "Frequency congestion in crowded urban areas.",
      "Managing temporary staff who aren't familiar with radio use.",
      "The need for quick deployment without licensing delays.",
      "Coordinating multiple distinct teams simultaneously."
    ],
    solutions: [
      "License-free PMR 446 frequencies for instant legal use anywhere.",
      "Simple, intuitive interfaces that anyone can use in seconds.",
      "Lightweight designs for staff who are constantly on the move.",
      "Pre-programmed channels for separate logistics and security teams."
    ],
    recommendedProducts: ["c1-plus", "c1"]
  }
};

export const Industries = () => {
  const { id } = useParams();
  const industry = industryData[id as keyof typeof industryData];

  if (!industry) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-black text-navy uppercase">Industry Not Found</h1>
        <Link to="/" className="text-brand font-black uppercase tracking-widest mt-8 inline-block">Back to Home</Link>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="bg-white">
      <SEO 
        title={`${industry.name} Wireless Communication Solutions`}
        description={`Specialized wireless communication for ${industry.name}. Resolve ${industry.challenges[0]} with CONVEY's WPC approved, license-free walkie talkies.`}
        keywords={`${industry.name.toLowerCase()} communication, license free radio for ${industry.name.toLowerCase()}, industrial wireless solutions`}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={industry.heroImage} 
            alt={`${industry.name} industrial setting`} 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-brand p-3 rounded shadow-lg shadow-brand/20">
                <Icon className="w-6 h-6 text-navy" aria-hidden="true" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Industrial Vertical</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1] mb-8 tracking-tighter uppercase">
              {industry.name} <br/>
              <span className="text-brand">Wireless Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              {industry.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8">The Perspective</h2>
              <p className="text-3xl font-black text-navy uppercase tracking-tighter leading-tight mb-12">
                "{industry.description}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-6 flex items-center">
                    <Info className="w-4 h-4 mr-2" aria-hidden="true" /> Sector Challenges
                  </h3>
                  <ul className="space-y-4">
                    {industry.challenges.map((item, i) => (
                      <li key={i} className="text-sm font-medium text-gray-500 flex items-start">
                        <span className="text-red-600 mr-3">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-brand mb-6 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" aria-hidden="true" /> Convey Edge
                  </h3>
                  <ul className="space-y-4">
                    {industry.solutions.map((item, i) => (
                      <li key={i} className="text-sm font-medium text-navy flex items-start">
                        <CheckCircle2 className="w-3 h-3 text-brand mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100 relative">
                <div className="absolute -top-6 -right-6 bg-brand w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-8 h-8 text-navy ml-1" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-navy uppercase tracking-tighter mb-6">Expert Consultation</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                  Not sure which model fits your specific site layout? Our technical team offers free site surveys and signal testing for enterprise clients.
                </p>
                <Link to="/contact" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-brand hover:translate-x-2 transition-transform">
                  Request Site Survey <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4">Optimized Hardware</h2>
            <h3 className="text-4xl font-black text-navy uppercase tracking-tighter">Recommended for {industry.name}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industry.recommendedProducts.map((prodId) => {
              const product = PRODUCT_DATA[prodId];
              return (
                <Link 
                  key={prodId}
                  to={`/products/${prodId}`}
                  className="group bg-white p-8 rounded-xl border border-gray-100 flex items-center space-x-8 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="w-32 h-32 flex-shrink-0">
                    <ImageWithFallback 
                      src={product.image} 
                      alt={`Convey ${product.name} wireless radio`} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-navy uppercase tracking-tighter mb-2">{product.name}</h4>
                    <p className="text-[10px] font-black text-brand uppercase tracking-widest mb-4">{product.tagline}</p>
                    <span className="inline-flex items-center text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-navy">
                      View Technical Specs <ChevronRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Ready to deploy <span className="text-brand">Convey</span> in your {industry.name.toLowerCase()}?
          </h2>
          <p className="text-gray-400 font-medium uppercase tracking-widest text-xs mb-12 max-w-2xl mx-auto">
            Get a tailored quote for your organization including volume discounts and enterprise support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-brand text-navy px-10 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-white transition-colors">
              Request Quote
            </Link>
            <Link to="/products" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
              Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
