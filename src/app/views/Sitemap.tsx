import React from "react";
import { Link } from "react-router";
import { ChevronRight, Radio, Package, Building2, Mail, MapPin } from "lucide-react";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";

export const Sitemap = () => {
  const productLinks = Object.values(PRODUCT_DATA).map((product) => ({
    name: `${product.name} (${product.category})`,
    path: `/products/${product.id}`,
  }));

  const sections = [
    {
      title: "Main Navigation",
      icon: Radio,
      links: [
        { name: "Home", path: "/" },
        { name: "Products Catalog", path: "/products" },
        { name: "About Micromap", path: "/about" },
        { name: "Certifications & Compliance", path: "/compliance" },
        { name: "Contact Us & Regional Offices", path: "/contact" }
      ]
    },
    {
      title: "Product Range",
      icon: Package,
      links: productLinks
    },
    {
      title: "Corporate & Legal",
      icon: Building2,
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Sitemap | CONVEY Wireless Solutions"
        description="Navigate through the CONVEY website. Find our full product range of license-free walkie talkies, compliance documents, and regional office locations."
      />

      {/* Editorial Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">System Architecture</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Site<span className="text-brand">map</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            A comprehensive index of CONVEY's digital ecosystem and corporate information.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title} className="p-10 border border-gray-100 rounded-xl bg-gray-50/20">
                <div className="flex items-center space-x-4 mb-10">
                  <section.icon className="w-5 h-5 text-brand" />
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-navy">{section.title}</h2>
                </div>
                <ul className="space-y-6">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-xs font-bold text-gray-500 hover:text-brand transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 text-brand opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            <div className="bg-white p-12">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-8 flex items-center">
                 <Mail className="w-4 h-4 mr-3" /> Technical Assistance
               </h3>
               <p className="text-sm font-black uppercase tracking-widest text-navy mb-2">+91 76197 20000</p>
               <p className="text-xs font-bold text-gray-400">sales@conveyindia.in</p>
            </div>
            <div className="bg-white p-12">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand mb-8 flex items-center">
                 <MapPin className="w-4 h-4 mr-3" /> Global Headquarters
               </h3>
               <p className="text-sm font-bold text-gray-400 leading-relaxed">
                 Micromap Electronic Systems Limited<br/>
                 Lucknow, Uttar Pradesh, India
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
