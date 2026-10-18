import React from "react";
import { Link, useSearchParams } from "react-router";
import { CheckCircle2, ChevronRight, Factory, Filter, Zap } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEO } from "@/app/components/SEO";
import { PRODUCT_DATA } from "@/app/constants/product-data";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const products = Object.values(PRODUCT_DATA);
  const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];
  const categoryParam = searchParams.get("category");
  const categoryAliases: Record<string, string> = {
    analog: "Analog Portable Radio",
    "portable-radio": "DMR Portable Radio",
    "mobile-radio": "DMR Mobile Radio",
    repeater: "DMR Repeater",
    dmr: "DMR Portable Radio",
    "two-way": "All",
    wireless: "All",
  };
  const resolvedCategory = categoryParam ? categoryAliases[categoryParam] || categoryParam : null;
  const filter =
    resolvedCategory && categories.includes(resolvedCategory) ? resolvedCategory : "All";

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter((product) => product.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Products | License-Free Walkie Talkies"
        description="Explore the full range of CONVEY professional two-way radios. From ultra-slim OLED models to rugged industrial series, all WPC ETA approved for use in India."
        keywords="convey c1, convey c1 plus, convey c1 pro, license free walkie talkie india, professional radio catalog"
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand mb-4 block">Product Catalog</span>
              <h1 className="text-5xl lg:text-7xl font-black text-navy tracking-tighter uppercase leading-[0.9]">
                Professional <br/><span className="text-brand">Wireless Portfolio</span>
              </h1>
            </div>
            <div className="mt-8 md:mt-0 flex items-center space-x-8">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Status</p>
                <p className="text-xs font-black uppercase tracking-widest text-navy">WPC ETA Approved</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Type</p>
                <p className="text-xs font-black uppercase tracking-widest text-navy">License-Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-4 h-4 text-brand" aria-hidden="true" />
              <div className="flex space-x-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      if (cat === "All") {
                        setSearchParams({});
                      } else {
                        setSearchParams({ category: cat });
                      }
                    }}
                    className={`px-6 py-2 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                      filter === cat ? "bg-navy text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400 hidden md:block">
              Showing {filteredProducts.length} professional models
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden mb-10 relative border border-gray-100 transition-all duration-700 group-hover:shadow-2xl group-hover:border-brand/30">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <ImageWithFallback
                      src={product.image}
                      alt={`Convey ${product.name} Professional Two-Way Radio`}
                      className="w-full h-full rounded-lg object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest text-navy border border-gray-100">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-black text-navy tracking-tighter uppercase">{product.name}</h2>
                    <ChevronRight className="w-6 h-6 text-brand opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {product.specs.slice(0, 3).map((spec) => (
                      <span key={spec.label} className="text-sm font-medium text-gray-500 flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-brand mr-2" aria-hidden="true" /> {spec.value}
                      </span>
                    ))}
                  </div>
                  <div className="h-px w-full bg-gray-100 group-hover:bg-brand/30 transition-colors"></div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-black text-brand uppercase tracking-[0.2em]">PMR 446 Compliant</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">WPC Approved</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "No License Required", desc: "Operates on pre-programmed PMR 446 channels per Govt of India guidelines.", icon: CheckCircle2 },
              { title: "Instant Connectivity", desc: "Out-of-the-box communication with zero technical setup required.", icon: Zap },
              { title: "Enterprise Grade", desc: "Built for 24/7 industrial use with high-density batteries.", icon: Factory }
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-brand mb-6" aria-hidden="true" />
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
