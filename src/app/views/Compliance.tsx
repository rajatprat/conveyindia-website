import React from "react";
import { CheckCircle2, FileText, Globe, Radio, Award, Factory, ShieldAlert } from "lucide-react";
import { SEO } from "@/app/components/SEO";

export const Compliance = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Certifications & Compliance | WPC ETA Approved"
        description="Verify the regulatory status of CONVEY radios. All our two-way radios are WPC ETA approved and comply with PMR 446 license-free standards in India."
        keywords="WPC ETA approval, PMR 446 standards, walkie talkie license india, ministry of communications regulations"
      />

      {/* Industrial Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Regulatory Framework</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Trust & <span className="text-brand">Compliance</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            In the wireless industry, legality is as critical as hardware quality. CONVEY ensures every product is fully authorized by the Ministry of Communications, Government of India.
          </p>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-200 border border-gray-200 shadow-2xl overflow-hidden rounded-xl">
            
            {/* Core Approval Cell */}
            <div className="lg:col-span-7 bg-white p-12 lg:p-20">
              <div className="flex items-center space-x-4 mb-12">
                <Globe className="w-10 h-10 text-brand" aria-hidden="true" />
                <div>
                  <h2 className="text-3xl font-black text-navy uppercase tracking-tighter leading-none">WPC ETA Approved</h2>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-2">Ministry of Communications</p>
                </div>
              </div>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
                All CONVEY two-way radios carry valid <strong>Equipment Type Approval (ETA)</strong> issued by the Wireless Planning & Coordination (WPC) Wing. This certification ensures our hardware meets the technical standards required for operation within Indian territory.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-widest text-navy">Verified Frequency bands</span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-widest text-navy">Approved Transmission Power</span>
                </div>
              </div>
            </div>

            {/* PMR 446 Cell */}
            <div className="lg:col-span-5 bg-navy text-white p-12 lg:p-20">
              <Radio className="w-12 h-12 text-brand mb-10" aria-hidden="true" />
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-brand">PMR 446 Standards</h2>
              <p className="text-sm font-medium text-gray-400 leading-relaxed mb-12">
                Our license-free series operates on the PMR 446 frequency range. According to the Govt. of India gazette, these devices do not require any operating license or recurring fees from the user.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-[9px] font-black uppercase tracking-widest text-brand mb-2">Legal Exemption</p>
                <p className="text-xs font-bold leading-relaxed text-gray-300 italic">
                  "No license is required for the operation of low power wireless equipment in the 446 MHz band."
                </p>
              </div>
            </div>

            {/* Quality Standards Cell */}
            <div className="lg:col-span-4 bg-gray-50 p-12 lg:p-20">
              <Award className="w-10 h-10 text-navy mb-8" aria-hidden="true" />
              <h3 className="text-xl font-black uppercase tracking-tighter text-navy mb-6">ISO 9001:2015</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                Micromap Electronic Systems Limited follows stringent Quality Management Systems to ensure consistency across every batch of CONVEY hardware produced.
              </p>
            </div>

            {/* Manufacturing Cell */}
            <div className="lg:col-span-4 bg-white p-12 lg:p-20 border-l border-gray-100">
              <Factory className="w-10 h-10 text-navy mb-8" aria-hidden="true" />
              <h3 className="text-xl font-black uppercase tracking-tighter text-navy mb-6">Make In India</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                We are committed to the 'Atmanirbhar Bharat' vision, utilizing local R&D and assembly to serve the domestic mission-critical market.
              </p>
            </div>

            {/* Support Cell */}
            <div className="lg:col-span-4 bg-gray-50 p-12 lg:p-20 border-l border-gray-100">
              <ShieldAlert className="w-10 h-10 text-navy mb-8" aria-hidden="true" />
              <h3 className="text-xl font-black uppercase tracking-tighter text-navy mb-6">User Safety</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                SAR compliance and radiation safety benchmarks are maintained to ensure long-term health safety for professional operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-navy uppercase tracking-tighter mb-12">Compliance <span className="text-brand">Downloads</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "WPC ETA Certificate (Sample)", size: "450 KB" },
              { name: "PMR 446 Gazette Notification", size: "1.2 MB" }
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between p-8 bg-white border border-gray-100 rounded-xl group hover:border-brand transition-all cursor-pointer">
                <div className="flex items-center space-x-6">
                  <FileText className="w-8 h-8 text-gray-300 group-hover:text-brand transition-colors" aria-hidden="true" />
                  <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-widest text-navy">{doc.name}</p>
                    <p className="text-xs font-bold text-gray-400 mt-1">PDF Document • {doc.size}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-gray-300 group-hover:text-navy" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
