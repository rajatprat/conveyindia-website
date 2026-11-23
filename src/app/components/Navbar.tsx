import React from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, ArrowDownRight, Menu, X, ArrowRight, ArrowUpRight, Radio, Truck, Network, ShieldCheck, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BrandAssets } from "@/app/assets";
import { PRODUCT_DATA } from "@/app/constants/product-data";
import "./navbar.css";

const dmrCategories = [
  { name: "Portable Radio", category: "DMR Portable Radio", filter: "portable-radio", icon: Radio, description: "Digital handheld radios" },
  { name: "Mobile Radio", category: "DMR Mobile Radio", filter: "mobile-radio", icon: Truck, description: "Vehicle & base installations" },
  { name: "Repeater", category: "DMR Repeater", filter: "repeater", icon: Network, description: "Extend your radio coverage" },
  { name: "Systems", category: "systems", filter: "systems", icon: Network, description: "Flexible multi-hop networking" },
];
const analogCategories = [
  { name: "Portable Radio", category: "Analog Portable Radio", filter: "analog", icon: Radio, description: "Compact everyday radios" },
];
const modelsFor = (category: string) => Object.values(PRODUCT_DATA).filter(product => category === "systems" ? product.id === "c1-dr-800" : product.category === category);
const inquiryFor = (name: string) => `/contact?model=${encodeURIComponent(name)}#inquiry`;

const pages = [{name:"Home",path:"/"},{name:"About us",path:"/about"},{name:"Compliance",path:"/compliance"},{name:"Careers",path:"/careers"},{name:"Contact",path:"/contact"}];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const [productFamily, setProductFamily] = React.useState("Wireless Systems");
  const [wirelessSection, setWirelessSection] = React.useState("Two-Way Radio");
  const [radioTechnology, setRadioTechnology] = React.useState("DMR");
  const location = useLocation();
  const navRef = React.useRef<HTMLElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const mobileRef = React.useRef<HTMLButtonElement>(null);
  const close = () => { setProductsOpen(false); setMobileOpen(false); setSolutionsOpen(false); };

  React.useEffect(close, [location.pathname, location.search, location.hash]);
  React.useEffect(() => {
    const onPointer = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) close(); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (productsOpen) { setProductsOpen(false); triggerRef.current?.focus(); }
        else if (mobileOpen) { setMobileOpen(false); mobileRef.current?.focus(); }
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onPointer); document.removeEventListener("keydown", onKey); };
  }, [productsOpen, mobileOpen]);

  const renderCategory = (category: typeof dmrCategories[number], technology: string) => {
    const models = modelsFor(category.category);
    const destination = category.filter === "systems" ? "/products/c1-dr-800" : models.length ? `/products?category=${category.filter}` : inquiryFor(`${technology} ${category.name}`);
    return <div className="nm-category" key={category.filter}>
      <Link className="nm-category-title" to={destination} onClick={close}><span><category.icon size={18} aria-hidden="true" /></span><div><strong>{category.name}</strong><small>{category.description}</small></div><ArrowUpRight size={14} aria-hidden="true" /></Link>
      {models.length ? <ul>{models.map(product=><li key={product.id}><Link to={`/products/${product.id}`} aria-current={location.pathname===`/products/${product.id}` ? "page" : undefined} onClick={close}>{product.name.replace(/^CONVEY /, "")}<ArrowUpRight size={12} aria-hidden="true" /></Link></li>)}</ul> : <Link to={destination} className="nm-category-inquiry" onClick={close}>Enquire about this range <ArrowUpRight size={13} /></Link>}
    </div>;
  };

  const renderInquiry = (name: string, icon: React.ReactNode) => <div className="nm-inquiry-panel">{icon}<span className="nm-inquiry-label">{name === "Telecommunication Systems" ? "Products / Telecommunication Systems" : `Wireless Systems / ${name}`}</span><h3>{name}</h3><p>Speak to our team about your requirements.</p><Link to={inquiryFor(name)} onClick={close}>Enquire about {name} <ArrowUpRight size={16}/></Link></div>;

  const renderMobileTechnology = (technology: string, categories: typeof dmrCategories) => <details className="nm-mobile-technology" key={technology}><summary>{technology}<ChevronDown size={14}/></summary>{categories.map(category=>technology === "Analog" ? <Link className="nm-mobile-inquiry-link" key={category.filter} to={`/products?category=${category.filter}`} onClick={close}>{category.name}</Link> : <details className="nm-mobile-category" key={category.filter}><summary><category.icon size={16}/>{category.name}<ChevronDown size={14}/></summary><div>{renderCategory(category, technology)}</div></details>)}</details>;


  const renderTelecom = () => <div className="nm-telecom-grid"><section><h3>Router</h3>{["IP MPLS", "5G Routers"].map(name => <Link key={name} to={inquiryFor(name)} onClick={close}>{name}</Link>)}</section><section><h3><Link to={inquiryFor("5G Handset")} onClick={close}>5G Handset</Link></h3></section></div>;
  const solutions = [{name:"Dispatcher",label:"Dispatcher"},{name:"NMS",label:"NMS (Network Management System)"},{name:"EMS",label:"EMS (Element Management System)"},{name:"RDAC",label:"RDAC"}];
  React.useEffect(() => { setSolutionsOpen(false); }, [location.pathname, location.search, location.hash]);
  return <nav className="main-navbar" ref={navRef} aria-label="Main navigation">
    <div className="nm-container">
      <Link to="/" className="nm-logo" aria-label="CONVEY home" onClick={close}><ImageWithFallback src={BrandAssets.logo} alt="CONVEY" /></Link>
      <div className="nm-desktop">
        <Link className="nm-nav-link" aria-current={location.pathname==='/'?'page':undefined} to="/">Home</Link>
        <div className="nm-products-wrap" onMouseEnter={()=>setProductsOpen(true)} onMouseLeave={()=>setProductsOpen(false)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setProductsOpen(false);}}>
          <button ref={triggerRef} type="button" className={`nm-nav-link nm-products-trigger ${productsOpen?'nm-open':''}`} aria-expanded={productsOpen} aria-controls="products-dropdown" onClick={()=>setProductsOpen(open=>!open)} onKeyDown={event=>{if(event.key==='ArrowDown'){event.preventDefault();setProductsOpen(true);requestAnimationFrame(()=>navRef.current?.querySelector<HTMLAnchorElement>('#products-dropdown a')?.focus());}}}>Products <ChevronDown size={13} aria-hidden="true" /></button>
          {productsOpen && <div className="nm-dropdown nm-hierarchy" id="products-dropdown">
            <div className="nm-dropdown-heading"><div><span>THE CONVEY RANGE</span><h2>Find your connection.</h2><p className="nm-menu-guidance">Choose a range, then select a model to see its specifications.</p></div><Link to="/products" onClick={close}>Explore all products <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="nm-family-layout"><div className="nm-families" role="group" aria-label="Product families"><span className="nm-choice-label">Choose a range</span>{[{name:"Wireless Systems",icon:Radio},{name:"Telecommunication Systems",icon:Globe}].map(family=><button type="button" key={family.name} aria-pressed={productFamily===family.name} onClick={()=>setProductFamily(family.name)}><family.icon size={18}/><span>{family.name}</span><ArrowRight size={14}/></button>)}</div>
            <div className="nm-family-content">{productFamily === "Wireless Systems" ? <>
              <div className="nm-wireless-sections" role="group" aria-label="Wireless radio sections"><span className="nm-choice-label">Choose a solution</span>{["Two-Way Radio","POC","Secured"].map(section=><button type="button" key={section} aria-pressed={wirelessSection===section} onClick={()=>setWirelessSection(section)}>{section}</button>)}</div>
              {wirelessSection === "Two-Way Radio" ? <><div className="nm-technology-bar"><span className="nm-choice-label">Choose DMR or Analog</span><div role="group" aria-label="Radio technology">{["DMR","Analog"].map(technology=><button type="button" key={technology} aria-pressed={radioTechnology===technology} onClick={()=>setRadioTechnology(technology)}>{technology}</button>)}</div></div><p className="nm-model-guidance">Choose a radio type below · Select a model to view details <ArrowDownRight size={13} aria-hidden="true" /></p><div className={`nm-category-grid ${radioTechnology === "Analog" ? "nm-three-columns" : ""}`}>{(radioTechnology === "DMR" ? dmrCategories : analogCategories).map(category=>renderCategory(category,radioTechnology))}</div></> : renderInquiry(wirelessSection,wirelessSection === "POC" ? <Radio size={30}/> : <ShieldCheck size={30}/>)}
            </> : renderTelecom()}</div></div>
            <div className="nm-dropdown-bottom"><div><span>Products / {productFamily}{productFamily === "Wireless Systems" ? ` / ${wirelessSection}` : ""}{productFamily === "Wireless Systems" && wirelessSection === "Two-Way Radio" ? ` / ${radioTechnology}` : ""}</span></div><Link to="/contact#inquiry" onClick={close}>Help me choose <ArrowRight size={14}/></Link></div>
          </div>}

        </div>
        <div className="nm-solutions" onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setSolutionsOpen(false);}} onKeyDown={event=>{if(event.key === "Escape") {setSolutionsOpen(false); event.currentTarget.querySelector("button")?.focus();}}}>
          <button type="button" className="nm-nav-link" aria-expanded={solutionsOpen} aria-controls="solutions-dropdown" onClick={()=>{setSolutionsOpen(value=>!value);setProductsOpen(false);}}>Solutions <ChevronDown size={13}/></button>
          {solutionsOpen && <div className="nm-solutions-dropdown" id="solutions-dropdown">{solutions.map(solution=><Link key={solution.name} to={inquiryFor(solution.label)} onClick={()=>{close();setSolutionsOpen(false);}}>{solution.label}</Link>)}</div>}
        </div>
      {pages.slice(1).map(page=><Link className="nm-nav-link" aria-current={location.pathname===page.path?'page':undefined} key={page.path} to={page.path}>{page.name}</Link>)}
        <Link className="nm-sales" to="/contact#inquiry">Contact sales <ArrowUpRight size={15} aria-hidden="true" /></Link>
      </div>
      <button type="button" ref={mobileRef} className="nm-mobile-toggle" aria-label={mobileOpen?"Close navigation":"Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={()=>setMobileOpen(open=>!open)}>{mobileOpen?<X size={26}/>:<Menu size={26}/>}</button>
    </div>
    {mobileOpen && <div className="nm-mobile" id="mobile-navigation"><Link to="/" onClick={close}>Home</Link>
      <details className="nm-mobile-products"><summary>Products <ChevronDown size={16}/></summary><p className="nm-mobile-guidance">Tap a category to expand it, then choose a model.</p><Link to="/products" onClick={close} className="nm-mobile-all">View all products <ArrowRight size={15}/></Link>
        <details className="nm-mobile-family"><summary><Radio size={17}/>Wireless Systems<ChevronDown size={14}/></summary>
          <details className="nm-mobile-section"><summary>Two-Way Radio<ChevronDown size={14}/></summary>{renderMobileTechnology("DMR",dmrCategories)}{renderMobileTechnology("Analog",analogCategories)}</details>
          <Link className="nm-mobile-inquiry-link" to={inquiryFor("POC")} onClick={close}>POC<ArrowUpRight size={14}/></Link><Link className="nm-mobile-inquiry-link" to={inquiryFor("Secured")} onClick={close}>Secured<ArrowUpRight size={14}/></Link>
        </details>
        <details className="nm-mobile-family"><summary><Globe size={17}/>Telecommunication Systems<ChevronDown size={14}/></summary>{renderTelecom()}</details>
      </details>
      <details className="nm-mobile-family"><summary>Solutions<ChevronDown size={14}/></summary>{solutions.map(solution=><Link className="nm-mobile-inquiry-link" key={solution.name} to={inquiryFor(solution.label)} onClick={close}>{solution.label}</Link>)}</details>
      {pages.slice(1).map(page=><Link to={page.path} key={page.path} onClick={close}>{page.name}</Link>)}<Link to="/contact#inquiry" className="nm-sales" onClick={close}>Contact sales <ArrowUpRight size={16}/></Link></div>}

  </nav>;
};
