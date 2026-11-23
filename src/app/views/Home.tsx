import React from "react";
import { HeroVideo } from "@/app/components/HeroVideo";
import { Link } from "react-router";
import { ShieldCheck, Zap, Factory, Building2, ShoppingBag, CheckCircle2, ChevronRight, Globe, Radio as RadioIcon, ArrowRight, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";
import "./home-industries.css";
import "./home-portfolio.css";
import "./home-network.css";
import { Industry } from "@/app/types/product";

export const Home = () => {
  const [portfolioFilter, setPortfolioFilter] = React.useState("All models");
  const industries: Industry[] = [
    { 
      name: "Security Services", 
      slug: "security-services",
      icon: ShieldCheck, 
      desc: "Guarding critical assets with uninterrupted voice communication.",
      image: "/images/industries/handheld.webp"
    },
    { 
      name: "Hotels & Hospitality", 
      slug: "hospitality",
      icon: Building2, 
      desc: "Seamless guest service coordination across large properties.",
      image: "/images/industries/hospitality.webp"
    },
    { 
      name: "Manufacturing", 
      slug: "manufacturing",
      icon: Factory, 
      desc: "Coordinating production floors and hazardous industrial zones.",
      image: "/images/industries/handheld.webp"
    },
    { 
      name: "Construction Sites", 
      slug: "construction",
      icon: Zap, 
      desc: "Reliable range and rugged durability for site management.",
      image: "/images/industries/construction.webp"
    },
    { 
      name: "Events & Venues", 
      slug: "events",
      icon: ShoppingBag, 
      desc: "Crowd control and logistics for large-scale public events.",
      image: "/images/industries/service.webp"
    },
  ];

  const portfolioProducts = Object.values(PRODUCT_DATA);

  return (
    <div className="flex flex-col overflow-x-hidden relative">
      <SEO 
        title="CONVEY | License-Free Two-Way Radios & Wireless Solutions India"
        description="India's leading brand for professional, license-free walkie talkies. WPC ETA approved PMR 446 radios for enterprise, security, and industrial use."
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-navy" aria-label="CONVEY introduction video">
        <h1 className="sr-only">CONVEY professional radio communication</h1>
        <HeroVideo />
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
      <section className="home-industries" aria-labelledby="industry-solutions-heading">
        <div className="hi-container">
          <div className="hi-heading">
            <div><span className="hi-eyebrow"><span /> Built around your world</span><h2 id="industry-solutions-heading">Industry Specific<br /><em>Communication Solutions</em></h2></div>
            <p>Different environments. One clear connection.<br />Keep your people in sync with communication<br className="hi-desktop-break" /> built for the way your industry works.</p>
          </div>
          <div className="hi-grid">
            {industries.map((industry, index) => (
              <Link to={`/industries/${industry.slug}`} key={industry.slug} className={`hi-card ${index === 0 ? "hi-card-featured" : ""}`}>
                <ImageWithFallback src={industry.image} alt={`${industry.name} wireless communication scenario`} className="hi-image" loading="lazy" />
                <div className="hi-shade" />
                <div className="hi-card-top"><span className="hi-icon"><industry.icon size={19} aria-hidden="true" /></span><span className="hi-number">0{index + 1} / INDUSTRIES</span></div>
                <div className="hi-card-content">
                  <span className="hi-card-kicker">{["Protect. Coordinate. Respond.", "Every guest. Every detail.", "Keep operations moving.", "From ground up. In sync.", "Behind every seamless event."][index]}</span>
                  <h3>{industry.name}</h3>
                  <p>{industry.desc}</p>
                  <span className="hi-card-link">Explore solutions <span><ArrowUpRight size={18} aria-hidden="true" /></span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hi-bottom"><div><span className="hi-bottom-icon"><RadioIcon size={20} aria-hidden="true" /></span><p>Your industry. Your challenges. <strong>Let’s find your solution.</strong></p></div><Link to="/contact#inquiry">Talk to a specialist <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="home-portfolio" aria-labelledby="portfolio-heading">
        <div className="hp-container">
          <div className="hp-heading"><div><span className="hp-eyebrow"><span /> The portfolio</span><h2 id="portfolio-heading">Professional<br /><em>Two-Way Radios</em></h2></div><div><p>From the front line to the control room.<br />Find the radio that keeps your team connected.</p><Link to="/products">Explore the full catalog <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
          <div className="hp-toolbar"><div role="group" aria-label="Filter radios">{["All models", "Portable", "Mobile", "Repeaters", "Analog"].map((category)=><button type="button" key={category} aria-pressed={portfolioFilter === category} onClick={()=>setPortfolioFilter(category)} className={portfolioFilter === category ? "hp-filter-active" : ""}>{category}</button>)}</div><span>The complete CONVEY range</span></div>
          <div className="hp-grid">
            {portfolioProducts.filter((product)=>portfolioFilter === "All models" || product.category === ({Portable:"DMR Portable Radio",Mobile:"DMR Mobile Radio",Repeaters:"DMR Repeater",Analog:"Analog Portable Radio"} as Record<string,string>)[portfolioFilter]).slice(0, 5).map((product)=>{
              const keySpecs = ["RF Power Output", "RF Power", "Channels"].map(label=>product.specs.find(spec=>spec.label===label)).filter((spec): spec is NonNullable<typeof spec> => Boolean(spec)).slice(0,2);
              return <Link to={`/products/${product.id}`} key={product.id} className="hp-card">
                <div className="hp-visual"><span className="hp-category">{product.category}</span><span className="hp-visual-arrow"><ArrowUpRight size={17} aria-hidden="true"/></span><ImageWithFallback src={product.image} alt={product.name} className="hp-product-image" loading="lazy" /></div>
                <div className="hp-card-body"><span className="hp-brand">CONVEY</span><h3>{product.name.replace(/^CONVEY /, "")}</h3><p className="hp-tagline">{product.tagline}</p>
                  {keySpecs.length > 0 && <dl className="hp-card-specs">{keySpecs.map(spec=><div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>}
                  <ul>{product.features.slice(0,2).map(feature=><li key={feature}><CheckCircle2 size={14} aria-hidden="true"/>{feature}</li>)}</ul>
                  <span className="hp-card-link">Explore this model <ArrowRight size={17} aria-hidden="true"/></span>
                </div>
              </Link>;
            })}
            <div className="hp-advice"><span className="hp-advice-icon"><RadioIcon size={27} aria-hidden="true"/></span><span className="hp-eyebrow">Made for your team</span><h3>Not sure which<br />radio is right<br /><em>for you?</em></h3><p>Tell us about your environment, team size, and coverage needs. We’ll help you find the right fit.</p><Link to="/contact#inquiry">Let’s find your solution <ArrowUpRight size={18} aria-hidden="true"/></Link></div>
          </div>
          <div className="hp-bottom"><p>A closer look at every detail.<span>Browse complete specifications, features, and product brochures.</span></p><Link to="/products">View all products <ArrowRight size={17} aria-hidden="true"/></Link></div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="home-quote" aria-label="The CONVEY commitment">
        <blockquote>“Keeping your people connected.<br /><em>Keeping your business moving.</em>”</blockquote>
        <span>CONVEY · Professional communication</span>
      </section>

    </div>
  );
};
