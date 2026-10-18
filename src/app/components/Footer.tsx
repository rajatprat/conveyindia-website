import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, ChevronRight, Linkedin, Globe, Map } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BrandAssets } from "@/app/assets";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <ImageWithFallback 
                src={BrandAssets.logo} 
                alt="CONVEY Logo" 
                className="h-8 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Pioneering professional, license-free communication systems. Engineered for industrial resilience and government-approved compliance across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center border border-white/10 hover:border-brand hover:bg-brand/10 transition-all group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-brand" />
              </a>
              <Link to="/contact" className="w-10 h-10 bg-white/5 rounded flex items-center justify-center border border-white/10 hover:border-brand hover:bg-brand/10 transition-all group">
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-brand" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand mb-8">Navigation</h3>
            <ul className="space-y-5">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Compliance", path: "/compliance" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 text-brand opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" /> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Presence */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand mb-8">Regional Presence</h3>
            <div className="grid grid-cols-1 gap-5">
              {[
                { city: "Lucknow (HQ)", phone: "+91 76197 20000" },
                { city: "New Delhi", phone: "+91 11 26472000" },
                { city: "Mumbai", phone: "022-49711222" },
                { city: "Kolkata", phone: "033-40605663" },
                { city: "Hyderabad", phone: "+91 94151 07401" }
              ].map((office) => (
                <div key={office.city} className="flex items-center justify-between border-b border-white/5 pb-2 group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    {office.city}
                  </span>
                  <span className="text-[9px] font-medium text-gray-500 tabular-nums">
                    {office.phone}
                  </span>
                </div>
              ))}
              <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest text-brand flex items-center mt-2 group">
                <Map className="w-3 h-3 mr-2" /> View Full Addresses
              </Link>
            </div>
          </div>

          {/* Registered Office */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand mb-8">Registered HQ</h3>
            <div className="flex items-start space-x-4">
              <div className="bg-brand/10 p-2 rounded">
                <MapPin className="w-4 h-4 text-brand" />
              </div>
              <address className="text-[11px] text-gray-400 not-italic leading-relaxed font-black uppercase tracking-widest">
                <span className="text-gray-200 block mb-2 font-black uppercase tracking-widest">Micromap Electronic Systems Limited</span>
                215-217, 2nd Floor, Lekhraj Gold,<br />
                Indira Nagar, Lucknow-226016 (UP),<br />
                India
              </address>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-brand" />
                <span className="text-sm text-gray-300 font-black tracking-tight uppercase">sales@conveyindia.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-4 h-4 text-brand" />
                <span className="text-sm text-gray-300 font-black tracking-tight uppercase">+91 76197 20000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 md:mb-0">
            <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Micromap Electronic Systems Limited
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-brand transition-colors">Terms</Link>
              <Link to="/privacy" className="text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-brand transition-colors">Privacy</Link>
              <Link to="/sitemap" className="text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-brand transition-colors">Sitemap</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["WPC ETA Approved", "PMR 446 Compliant", "ISO 9001 Certified"].map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-widest text-gray-600 font-black border border-white/5 px-4 py-1.5 rounded bg-white/[0.02]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
