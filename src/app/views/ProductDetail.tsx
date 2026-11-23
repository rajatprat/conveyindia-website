import React from "react";
import { useParams, Link } from "react-router";
import { CheckCircle2, Phone, Download, ShieldCheck, Radio, Globe, ChevronLeft, ArrowUpRight, ArrowRight, FileText } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEO } from "@/app/components/SEO";
import "./product-detail.css";
import { PRODUCT_DATA } from "@/app/constants/product-data";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? PRODUCT_DATA[id] : null;

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-black text-navy uppercase">Product Not Found</h1>
        <Link to="/products" className="text-brand font-black uppercase tracking-widest mt-8 inline-block">Return to Catalog</Link>
      </div>
    );
  }

  const isDmrProduct = product.category.startsWith("DMR");

  // Generate Product Schema for search engines
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.description,
    "sku": product.id,
    "mpn": product.name.replace("CONVEY ", ""),
    "brand": {
      "@type": "Brand",
      "name": "CONVEY"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "1",
      "lowPrice": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  const modelName = product.name.replace(/^CONVEY /, "");
  const highlights = ["RF Power Output", "RF Power", "Channels", "Battery", "Protection Rating", "Protection", "Duty Cycle"]
    .map((label) => product.specs.find((spec) => spec.label === label))
    .filter((spec): spec is NonNullable<typeof spec> => Boolean(spec))
    .slice(0, 3);
  const relatedProducts = Object.values(PRODUCT_DATA)
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-detail">
      <SEO title={`${product.name} | ${product.tagline}`}
        description={product.description.substring(0, 160)}
        keywords={`${product.name}, ${product.category}, professional radio specifications`}
        schemaData={productSchema} />

      <section className="pd-hero">
        <div className="pd-container">
          <div className="pd-breadcrumb">
            <Link to="/products"><ChevronLeft size={14} /> Products</Link>
            <span>/</span><span>{product.category}</span><span>/</span><strong>{modelName}</strong>
          </div>
          <div className="pd-hero-grid">
            <div className="pd-stage">
              <div className="pd-stage-top"><span className="pd-label">CONVEY / {product.category}</span><Radio size={19} /></div>
              <ImageWithFallback src={product.image} alt={`${product.name} ${product.category}`} className="pd-product-image" />
              <div className="pd-stage-bottom"><span>{modelName}</span><span>Built to keep you connected.</span></div>
            </div>
            <div className="pd-intro">
              <span className="pd-eyebrow"><span /> Professional communication</span>
              <p className="pd-brand-name">CONVEY</p>
              <h1>{modelName}</h1>
              <p className="pd-tagline">{product.tagline}</p>
              <p className="pd-description">{product.description}</p>
              <div className="pd-highlights">
                {highlights.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}
              </div>
              <div className="pd-actions">
                <Link to={`/contact?model=${encodeURIComponent(product.name)}#inquiry`} className="pd-button pd-primary">Request a quote <ArrowUpRight size={18} /></Link>
                <a href={product.brochureUrl || "/catalogs/convey-handheld-radios.pdf"} target="_blank" rel="noreferrer" className="pd-button pd-secondary"><Download size={17} /> Download brochure</a>
              </div>
              <p className="pd-help">Need help choosing? <a href="tel:+917619720000">Talk to our team <ArrowUpRight size={12} /></a></p>
            </div>
          </div>
        </div>
      </section>

      <nav className="pd-section-nav" aria-label="Product sections"><div className="pd-container"><span>{modelName}</span><div><a href="#specifications">Specifications</a><a href="#features">Key features</a>{relatedProducts.length > 0 && <a href="#related">Explore more</a>}</div><a className="pd-nav-download" href={product.brochureUrl || "/catalogs/convey-handheld-radios.pdf"} target="_blank" rel="noreferrer"><FileText size={16} /> Brochure <ArrowUpRight size={14} /></a></div></nav>

      <section className="pd-details pd-container">
        <div id="specifications" className="pd-specifications">
          <div className="pd-section-heading"><span className="pd-eyebrow">01 / The details</span><h2>Precision in every<br /><em>specification.</em></h2><p>Everything you need to plan your deployment.</p></div>
          <dl className="pd-spec-table">{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
        </div>
        <div id="features" className="pd-features">
          <div className="pd-section-heading"><span className="pd-eyebrow">02 / Capabilities</span><h2>Designed for<br /><em>the way you work.</em></h2><p>Professional features. Practical advantages.</p></div>
          <div className="pd-feature-list">{product.features.map((feature, index) => <div key={feature}><span className="pd-feature-index">{String(index + 1).padStart(2, "0")}</span><span>{feature}</span><CheckCircle2 size={18} /></div>)}</div>
          <a className="pd-document-card" href={product.brochureUrl || "/catalogs/convey-handheld-radios.pdf"} target="_blank" rel="noreferrer"><span className="pd-document-icon"><FileText size={25} /></span><div><strong>Take a closer look.</strong><span>Download the complete product brochure</span></div><ArrowUpRight size={22} /></a>
        </div>
      </section>

      {!isDmrProduct && <section className="pd-compliance"><div className="pd-container">{[{label:"WPC ETA Approved",icon:Globe},{label:"License-Free Operation",icon:ShieldCheck},{label:"PMR 446 Standards",icon:Radio}].map((item)=><span key={item.label}><item.icon size={18}/>{item.label}</span>)}</div></section>}

      {relatedProducts.length > 0 && <section id="related" className="pd-related"><div className="pd-container"><div className="pd-related-heading"><div><span className="pd-eyebrow">Keep exploring</span><h2>Find your connection.</h2></div><Link to="/products">View all products <ArrowRight size={18} /></Link></div><div className="pd-related-grid">{relatedProducts.map((item)=><Link to={`/products/${item.id}`} key={item.id} className="pd-related-card"><div><ImageWithFallback src={item.image} alt={item.name} /></div><span>{item.category}</span><h3>{item.name.replace(/^CONVEY /, "")}<ArrowUpRight size={20}/></h3><p>{item.tagline}</p></Link>)}</div></div></section>}

      <section className="pd-contact"><div className="pd-container"><div><span className="pd-eyebrow">Let’s get your team connected</span><h2>The right radio.<br /><em>The right solution.</em></h2><p>Talk to our team about your requirements, product selection,<br className="hidden sm:block" /> and volume pricing.</p></div><div className="pd-contact-actions"><Link to="/contact#inquiry" className="pd-button pd-primary">Contact sales <ArrowUpRight size={19}/></Link><a href="tel:+917619720000"><Phone size={16}/> +91 76197 20000</a></div></div></section>
    </div>
  );
};
