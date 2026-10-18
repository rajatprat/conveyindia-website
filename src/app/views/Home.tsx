import React from "react";
import { Link } from "react-router";
import { ShieldCheck, Zap, Factory, Building2, ShoppingBag, CheckCircle2, ChevronRight, Globe, Radio as RadioIcon, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";
import { Industry } from "@/app/types/product";

export const Home = () => {
  const industries: Industry[] = [
    { 
      name: "Security Services", 
      slug: "security-services",
      icon: ShieldCheck, 
      desc: "Guarding critical assets with uninterrupted voice communication.",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Hotels & Hospitality", 
      slug: "hospitality",
      icon: Building2, 
      desc: "Seamless guest service coordination across large properties.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Manufacturing", 
      slug: "manufacturing",
      icon: Factory, 
      desc: "Coordinating production floors and hazardous industrial zones.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Construction Sites", 
      slug: "construction",
      icon: Zap, 
      desc: "Reliable range and rugged durability for site management.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Events & Venues", 
      slug: "events",
      icon: ShoppingBag, 
      desc: "Crowd control and logistics for large-scale public events.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  const featuredProducts = [
    PRODUCT_DATA["c1-dp"],
    PRODUCT_DATA["c1-dp8"],
    PRODUCT_DATA["c1-dm3"],
    PRODUCT_DATA["c1-dr-8000"],
    PRODUCT_DATA["c1-pro"],
    PRODUCT_DATA["tokimo-rio-advance"],
  ].filter(Boolean);

  return (
    <div className="flex flex-col overflow-x-hidden relative">
      <SEO 
        title="CONVEY | License-Free Two-Way Radios & Wireless Solutions India"
        description="India's leading brand for professional, license-free walkie talkies. WPC ETA approved PMR 446 radios for enterprise, security, and industrial use."
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-110"
            src="https://www.youtube.com/embed/HNc6ZXNBd8E?autoplay=1&mute=1&loop=1&playlist=HNc6ZXNBd8E&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="CONVEY wireless communication video"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-navy/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/35 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-7rem)] items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <div className="max-w-3xl text-left">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-6 border-l-4 border-brand pl-4">
                Connecting Future...
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight uppercase">
                India’s Leading <br/>
                <span className="text-brand">License-Free</span> <br/>
                Wireless Solutions
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl font-medium">
                Professional two-way radios for security, hospitality, industry & events. Reliable communication for mission-critical operations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/products"
                  className="bg-brand text-navy px-10 py-5 rounded font-black uppercase tracking-widest text-sm hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95 text-center block"
                >
                  View Products
                </Link>
                <Link
                  to="/contact#inquiry"
                  className="bg-white text-navy px-10 py-5 rounded font-black uppercase tracking-widest text-sm hover:bg-white/90 transition-all shadow-xl shadow-navy/20 active:scale-95 text-center block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights row */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "License-Free PMR 446", icon: ShieldCheck },
              { label: "WPC ETA Approved", icon: CheckCircle2 },
              { label: "Industrial Grade Design", icon: Factory },
              { label: "Pan-India Presence", icon: Globe }
            ].map((item) => (
              <div key={item.label} className="flex items-center space-x-4 border-l border-white/10 pl-6">
                <item.icon className="w-6 h-6 text-brand" aria-hidden="true" />
                <span className="text-xs font-black uppercase tracking-widest leading-tight text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4">Core Markets</h2>
              <h3 className="text-4xl font-black text-navy tracking-tight uppercase leading-tight">Industry Specific <br/><span className="text-brand">Communication Solutions</span></h3>
            </div>
            <p className="mt-6 md:mt-0 text-gray-500 font-medium text-sm max-w-xs md:text-right">
              Tailored for mission-critical operations where reliability is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div 
                key={industry.name}
                className="group relative bg-gray-50 rounded-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-brand/30"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={`${industry.name} wireless communication scenario`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-brand p-3 rounded shadow-lg shadow-brand/20">
                    <industry.icon className="w-5 h-5 text-navy" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-10 relative">
                  <h3 className="text-xl font-black text-navy mb-4 uppercase tracking-tighter">{industry.name}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">{industry.desc}</p>
                  <Link 
                    to={`/industries/${industry.slug}`}
                    className="flex items-center text-[10px] font-black uppercase tracking-widest text-brand group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4 text-left">The Portfolio</h2>
              <h3 className="text-4xl font-black text-navy tracking-tight uppercase">Professional Two-Way Radios</h3>
            </div>
            <Link to="/products" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand transition-colors flex items-center">
              View All Models <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-[450px] relative bg-white flex items-end justify-center p-8 transition-colors group-hover:bg-gray-50/50">
                  <ImageWithFallback
                    src={product.image}
                    alt={`${product.name} license-free radio`}
                    className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105 pointer-events-none drop-shadow-lg"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-black/5 blur-xl rounded-[100%] -z-10"></div>
                </div>
                
                <div className="p-10 bg-white flex-1 flex flex-col border-t border-gray-50">
                  <h3 className="text-2xl font-black text-navy mb-8 uppercase tracking-tighter leading-tight">{product.name}</h3>
                  <ul className="space-y-5 mb-10 flex-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500 font-medium leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-brand mr-3 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products/${product.id}`}
                    className="flex items-center justify-center w-full bg-navy text-white py-5 rounded text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-navy transition-all shadow-xl shadow-navy/10 active:scale-95"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-brand text-navy px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95"
            >
              View All Products
              <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-brand font-black uppercase tracking-[0.4em] text-[10px] mb-6">Compliance & Network</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight tracking-tight uppercase">WPC ETA APPROVED & <br/>PAN-INDIA PRESENCE</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                Convey radios are fully compliant with Ministry of Communications regulations. With a robust dealer network, we ensure reliable support across every major industrial hub in India.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <span className="block text-3xl font-black text-white mb-2 uppercase">WPC</span>
                  <p className="text-[10px] font-black text-brand uppercase tracking-widest">ETA Approved</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <span className="block text-3xl font-black text-white mb-2 uppercase">PMR 446</span>
                  <p className="text-[10px] font-black text-brand uppercase tracking-widest">License-Free</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Lucknow", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Kolkata"].map((city) => (
                  <span key={city} className="bg-gray-800 px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest text-gray-300 border border-white/10">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 relative">
              <div className="bg-brand/10 p-1 rounded-2xl border border-white/10">
                <div className="bg-gray-800 rounded-xl p-12 text-center border border-white/5">
                  <RadioIcon className="w-16 h-16 text-brand mx-auto mb-8" aria-hidden="true" />
                  <blockquote className="text-2xl text-gray-200 font-bold italic mb-8">
                    "India’s leading organization in wireless communication, serving mission-critical sectors with regulatory excellence."
                  </blockquote>
                  <div className="h-px w-16 bg-brand mx-auto mb-6"></div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Micromap Electronic Systems Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
