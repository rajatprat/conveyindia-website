import React from "react";
import { useParams, Link } from "react-router";
import { CheckCircle2, Phone, Download, ShieldCheck, Zap, Battery, Radio, Globe, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEO } from "@/app/components/SEO";
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

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${product.name} | ${product.tagline}`}
        description={`${product.name}: ${product.description.substring(0, 160)}...`}
        keywords={`convey ${product.name}, license free walkie talkie specifications, pmr 446 india, professional radio features`}
        schemaData={productSchema}
      />

      {/* Hero / Visual Section */}
      <section className="pt-32 pb-24 bg-gray-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand mb-12 transition-colors">
            <ChevronLeft className="w-3 h-3 mr-2" aria-hidden="true" /> Back to Catalog
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex justify-center lg:justify-center">
              <div className="absolute inset-0 bg-brand/5 rounded-full blur-[120px] -z-10 scale-150"></div>
              <ImageWithFallback
                src={product.image}
                alt={`${product.name} license-free two-way radio`}
                className="w-full max-w-[620px] max-h-[620px] h-auto rounded-xl object-contain shadow-2xl shadow-navy/10 ring-1 ring-gray-100 transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand mb-6 block">Model Portfolio</span>
              <h1 className="text-5xl lg:text-7xl font-black text-navy tracking-tighter uppercase mb-8 leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-xl font-black text-brand uppercase tracking-widest mb-10">
                {product.tagline}
              </p>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact" className="bg-navy text-white px-10 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-navy/90 transition-all text-center">
                  Request Quote
                </Link>
                <a
                  href={product.brochureUrl || "/catalogs/convey-handheld-radios.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-100 text-navy px-10 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-3" aria-hidden="true" /> Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black text-navy uppercase tracking-tighter mb-12">Technical <span className="text-brand">Specifications</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-8">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">{spec.label}</p>
                    <p className="text-sm font-black uppercase tracking-widest text-navy">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-3xl font-black text-navy uppercase tracking-tighter mb-12">Core <span className="text-brand">Advantages</span></h2>
              <div className="space-y-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center p-6 bg-gray-50 border border-gray-100 rounded-lg group hover:border-brand/30 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand mr-4" aria-hidden="true" />
                    <span className="text-xs font-black uppercase tracking-widest text-navy">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-10">
            {[
              { label: "WPC ETA Approved", icon: Globe },
              { label: "License-Free Operation", icon: ShieldCheck },
              { label: "PMR 446 Standards", icon: Radio },
              { label: "High-Density Battery", icon: Battery },
              { label: "Instant Connection", icon: Zap }
            ].map((item) => (
              <div key={item.label} className="flex items-center space-x-4">
                <item.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Phone className="w-12 h-12 text-brand mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-4xl lg:text-5xl font-black text-navy uppercase tracking-tighter mb-8">Ready for Enterprise Deployment?</h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-12">
            Speak to our technical experts for volume pricing and authorized dealer locations near you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-brand text-navy px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-brand/90 transition-all">
              Contact Sales
            </Link>
            <a href="tel:+917619720000" className="bg-navy text-white px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-navy/90 transition-all">
              Call +91 76197 20000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
