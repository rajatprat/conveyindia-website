import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight, Radio } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BrandAssets } from "@/app/assets";
import "./footer.css";

const regionalOffices = [
  { city: "Lucknow · HQ", phone: "+91 76197 20000" },
  { city: "New Delhi", phone: "+91 11 26472000" },
  { city: "Mumbai", phone: "022-49711222" },
  { city: "Kolkata", phone: "033-40605663" },
  { city: "Hyderabad", phone: "+91 94151 07401" },
];

export const Footer = () => (
  <footer className="site-footer">
    <div className="sf-container">
      <div className="sf-intro"><div><span className="sf-eyebrow"><span /> Every connection matters</span><h2>Keep your team <em>connected.</em></h2></div><Link to="/contact#inquiry" className="sf-contact-button">Let’s talk <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      <div className="sf-grid">
        <div className="sf-brand"><Link to="/" aria-label="CONVEY home"><ImageWithFallback src={BrandAssets.logo} alt="CONVEY" className="sf-logo" /></Link><p>Professional radio communication for the people who keep your business moving.</p><span className="sf-brand-note"><Radio size={16} aria-hidden="true" /> Connecting teams across India.</span></div>
        <nav aria-label="Footer navigation" className="sf-navigation"><h3>Explore CONVEY</h3>{[{name:"Home",path:"/"},{name:"Our products",path:"/products"},{name:"About us",path:"/about"},{name:"Compliance",path:"/compliance"},{name:"Careers",path:"/careers"},{name:"Contact us",path:"/contact"}].map(link=><Link key={link.path} to={link.path}>{link.name}<ArrowUpRight size={13} aria-hidden="true" /></Link>)}</nav>
        <div className="sf-offices"><h3>Our presence</h3>{regionalOffices.map(office=><a href={`tel:${office.phone.replace(/[^+0-9]/g, "")}`} key={office.city}><span>{office.city}</span><span>{office.phone}</span></a>)}<Link className="sf-address-link" to="/contact#offices">Find an office <ArrowRight size={14} aria-hidden="true" /></Link></div>
        <div className="sf-reach"><h3>Get in touch</h3><a href="mailto:sales@conveyindia.in"><Mail size={16} aria-hidden="true"/><span>sales@conveyindia.in</span></a><a href="tel:+917619720000"><Phone size={16} aria-hidden="true"/><span>+91 76197 20000</span></a><div className="sf-address"><MapPin size={16} aria-hidden="true"/><address><strong>Micromap Electronic Systems Limited</strong>4th Floor Royal Plaza, Munshipulia,<br />Indira Nagar, Lucknow (U.P),<br />India - 226 016.</address></div></div>
      </div>
      <div className="sf-bottom"><p>© {new Date().getFullYear()} Micromap Electronic Systems Limited. All rights reserved.</p><nav aria-label="Legal information"><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link><Link to="/sitemap">Sitemap</Link></nav><span>Engineered for clear communication.</span></div>
    </div>
  </footer>
);
