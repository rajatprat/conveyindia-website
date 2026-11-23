import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, Network } from "lucide-react";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";
import "@/app/components/legal-page.css";

export const Sitemap = () => {
  const products = Object.values(PRODUCT_DATA);
  const categories = Array.from(new Set(products.map(product=>product.category)));
  const groups = [
    {title:"Explore CONVEY", links:[{name:"Home",path:"/"},{name:"Product catalog",path:"/products"},{name:"About us",path:"/about"},{name:"Compliance information",path:"/compliance"},{name:"Careers",path:"/careers"},{name:"Contact sales",path:"/contact"},{name:"Office locations",path:"/contact#offices"}]},
    {title:"Industry solutions",links:[{name:"Security services",path:"/industries/security-services"},{name:"Hotels & hospitality",path:"/industries/hospitality"},{name:"Manufacturing",path:"/industries/manufacturing"},{name:"Construction sites",path:"/industries/construction"},{name:"Events & venues",path:"/industries/events"}]},
    {title:"Website information",links:[{name:"Terms & conditions",path:"/terms"},{name:"Privacy policy",path:"/privacy"},{name:"Sitemap",path:"/sitemap"}]},
    ...categories.map(category=>({title:category,links:products.filter(product=>product.category===category).map(product=>({name:product.name,path:`/products/${product.id}`}))})),
  ];
  return <div className="legal-page sitemap-page"><SEO title="Sitemap | CONVEY" description="Find every CONVEY product page, industry solution, office location, and website policy in one place."/><header className="legal-header"><div className="legal-container"><div className="legal-hero-copy"><span className="legal-eyebrow">CONVEY / Find your way</span><h1>Sitemap</h1><p>A clear route to our products, industry solutions, and company information.</p><span className="legal-date">{products.length} models · {categories.length} product categories · 5 industry solutions</span></div><div className="legal-hero-panel"><Network size={42} strokeWidth={1}/><span>Everything connected.<br/>Everything in reach.</span><p>Your guide to CONVEY</p></div></div></header><div className="legal-container sitemap-body"><nav className="sitemap-grid" aria-label="Website directory">{groups.map(group=><section className="sitemap-card" key={group.title}><h2>{group.title}<span>{String(group.links.length).padStart(2,"0")}</span></h2><ul>{group.links.map(link=><li key={link.path}><Link to={link.path}>{link.name}<ArrowUpRight size={14} aria-hidden="true"/></Link></li>)}</ul></section>)}</nav><div className="sitemap-help"><p>Need help finding the right solution?</p><Link to="/contact#inquiry">Talk to our team <ArrowUpRight size={16}/></Link><a href="/sitemap.xml">XML sitemap <ArrowUpRight size={14}/></a></div></div></div>;
};
