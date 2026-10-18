import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/app/components/Navbar";
import { TopBar } from "@/app/components/TopBar";
import { Footer } from "@/app/components/Footer";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import { Tracking } from "@/app/components/Tracking";
import { Home } from "@/app/views/Home";
import { Products } from "@/app/views/Products";
import { ProductDetail } from "@/app/views/ProductDetail";
import { About } from "@/app/views/About";
import { Compliance } from "@/app/views/Compliance";
import { Contact } from "@/app/views/Contact";
import { Industries } from "@/app/views/Industries";
import { Terms } from "@/app/views/Terms";
import { Privacy } from "@/app/views/Privacy";
import { Sitemap } from "@/app/views/Sitemap";

// Scroll to top and handle hash links on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Tracking />
        <div className="flex flex-col min-h-screen font-sans text-gray-900 selection:bg-brand/20 selection:text-gray-900 bg-white">
          <TopBar />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/industries/:id" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
