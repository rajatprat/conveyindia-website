import React from "react";
import { Shield, FileText, Lock, Eye } from "lucide-react";
import { SEO } from "@/app/components/SEO";

export const Privacy = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Privacy Policy | Data Protection Standards"
        description="Learn how CONVEY and Micromap Electronic Systems Limited handle business information. Transparency regarding data integrity and Indian legal compliance."
      />

      {/* Editorial Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Data Integrity</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Privacy <span className="text-brand">Policy</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            Transparency regarding how Micromap Electronic Systems Limited handles information for our enterprise clients.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">1. Information Collection</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                We collect information necessary to provide professional wireless solutions, including business contact details, organization names, and technical requirements provided via our inquiry forms. We do not collect sensitive personal identifiable information (PII) beyond what is required for business-to-business communication.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Lock className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">2. Data Usage</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                Information provided is exclusively used to process your inquiries, provide technical support, and fulfill product orders. We do not sell or lease our database to third-party marketing organizations.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">3. Security Standards</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                Micromap Electronic Systems Limited implements industry-standard security measures to protect against unauthorized access, alteration, or disclosure of your business information.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <FileText className="w-5 h-5 text-brand" />
                <h2 className="text-xl font-black uppercase tracking-tighter text-navy">4. Compliance with Indian Law</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                This policy is governed by and construed in accordance with the Information Technology Act, 2000 and other relevant data protection guidelines issued by the Government of India.
              </p>
            </div>

            <div className="pt-16 border-t border-gray-100 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Effective Date: January 2026 | Micromap Electronic Systems Limited
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
