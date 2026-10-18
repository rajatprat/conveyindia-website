import React from "react";
import { ShieldCheck, Target, Award, Users, CheckCircle2, Factory, Globe } from "lucide-react";
import { SEO } from "@/app/components/SEO";

export const About = () => {
  const values = [
    { 
      title: "Quality First", 
      icon: ShieldCheck, 
      desc: "100% compliance with WPC and Ministry of Communications guidelines for all hardware." 
    },
    { 
      title: "R&D Driven", 
      icon: Target, 
      desc: "Continuous innovation in slim-profile wireless technology for Indian industrial conditions." 
    },
    { 
      title: "Pan-India Support", 
      icon: Globe, 
      desc: "A robust network of authorized service centers and regional offices across major cities." 
    },
    { 
      title: "Trust & Legacy", 
      icon: Award, 
      desc: "Micromap's 30+ year heritage in electronic systems powering the CONVEY brand's reliability." 
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="About CONVEY | Micromap Electronic Systems Limited"
        description="Learn about the legacy of CONVEY and Micromap. Leading the Indian wireless communication market with innovative, license-free solutions since 1995."
      />

      {/* Editorial Header */}
      <section className="pt-32 pb-24 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Corporate Legacy</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Micromap <br/><span className="text-brand">& Convey</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            Established with a vision to revolutionize the Indian wireless landscape, Micromap Electronic Systems Limited has been at the forefront of mission-critical communication for over three decades.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-8">The Mission</h2>
              <h3 className="text-4xl font-black text-navy tracking-tighter uppercase leading-tight mb-8">
                Democratizing Professional <br/>
                <span className="text-brand">Wireless Communication</span>
              </h3>
              <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                <p>
                  CONVEY was born from a simple realization: Indian enterprises needed professional-grade communication tools that were rugged, reliable, and compliant with national regulations—without the complexity of expensive licensing.
                </p>
                <p>
                  Today, our license-free (PMR 446) solutions empower thousands of businesses across the hospitality, security, manufacturing, and event management sectors.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-12 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-center text-center">
                <span className="text-5xl font-black text-navy mb-2">30+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand">Years Experience</span>
              </div>
              <div className="p-12 bg-navy rounded-xl flex flex-col justify-center text-center text-white">
                <span className="text-5xl font-black text-brand mb-2">500+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Dealer Network</span>
              </div>
              <div className="p-12 bg-brand rounded-xl flex flex-col justify-center text-center text-navy">
                <span className="text-5xl font-black mb-2">100%</span>
                <span className="text-[10px] font-black uppercase tracking-widest">WPC Compliant</span>
              </div>
              <div className="p-12 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-center text-center">
                <Users className="w-10 h-10 text-navy mx-auto mb-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4">Core Principles</h2>
            <h3 className="text-4xl font-black text-navy tracking-tighter uppercase">How we define excellence</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-12 hover:bg-gray-50/50 transition-colors">
                <value.icon className="w-8 h-8 text-brand mb-8" aria-hidden="true" />
                <h4 className="text-xl font-black uppercase tracking-tighter text-navy mb-6">{value.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Strip */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Factory className="w-12 h-12 text-brand mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-3xl lg:text-4xl font-black text-navy uppercase tracking-tighter mb-8 leading-tight">
            Infrastructure authorized by WPC, Ministry of Communications, Government of India.
          </h2>
          <div className="h-px w-20 bg-brand mx-auto mb-8"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Headquartered in Lucknow (UP), serving Bharat.</p>
        </div>
      </section>
    </div>
  );
};
