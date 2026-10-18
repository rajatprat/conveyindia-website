import React from "react";
import { Shield, FileText, Scale, AlertCircle } from "lucide-react";
import { SEO } from "@/app/components/SEO";

export const Terms = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Terms & Conditions | CONVEY Regulatory Policy"
        description="Review the legal framework for using CONVEY walkie talkies. Information on WPC regulatory compliance, intellectual property, and industrial usage terms in India."
      />

      {/* Editorial Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Legal Framework</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Terms & <span className="text-brand">Conditions</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            Governing the professional use, distribution, and procurement of CONVEY wireless communication systems.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Scale className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                By accessing this website and purchasing CONVEY products, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in India. Micromap Electronic Systems Limited reserves the right to modify these terms at any time without prior notice.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">2. Regulatory Compliance</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium mb-4">
                CONVEY license-free walkie-talkies are approved by the WPC (Wireless Planning & Coordination) Wing, Ministry of Communications, Government of India. 
              </p>
              <ul className="space-y-3">
                {[
                  "Users must operate devices within the allocated PMR 446.0 – 446.2 MHz frequency band.",
                  "Any modification to the internal circuitry or antenna of the device is strictly prohibited.",
                  "Compliance with local wireless communication laws is the sole responsibility of the end-user."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium text-gray-500">
                    <span className="text-brand mr-3">/</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">3. Intellectual Property</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                The brand name "CONVEY", its logo, product designs, and technical documentation are the exclusive intellectual property of Micromap Electronic Systems Limited Unauthorized reproduction, distribution, or commercial use of these assets is prohibited.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <AlertCircle className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">4. Limitation of Liability</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                Micromap Electronic Systems Limited shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div className="pt-16 border-t border-gray-100 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Last Updated: January 2026 | Micromap Electronic Systems Limited
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
