import React from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BrandAssets } from "@/app/assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = React.useState<string | null>(null);
  const location = useLocation();

  const productDropdown = [
    {
      name: "Wireless",
      path: "/products",
      children: [
        {
          name: "Two Way",
          path: "/products",
          children: [
            {
              name: "DMR",
              path: "/products",
              children: [
                {
                  name: "Portable Radio",
                  path: "/products/c1-dp",
                  children: [
                    { name: "C1-DP", path: "/products/c1-dp" },
                    { name: "C1-DP2", path: "/products/c1-dp2" },
                    { name: "C1-DP3", path: "/products/c1-dp3" },
                    { name: "C1-DP4", path: "/products/c1-dp4" },
                    { name: "C1-DP5", path: "/products/c1-dp5" },
                    { name: "C1-DP6 Ex", path: "/products/c1-dp6-ex" },
                    { name: "C1-DP7 Ex", path: "/products/c1-dp7-ex" },
                    { name: "C1-DP8", path: "/products/c1-dp8" },
                  ],
                },
                {
                  name: "Mobile Radio",
                  path: "/products/c1-dm",
                  children: [
                    { name: "C1-DM", path: "/products/c1-dm" },
                    { name: "C1-DM2", path: "/products/c1-dm2" },
                    { name: "C1-DM3", path: "/products/c1-dm3" },
                    { name: "C1-DM4", path: "/products/c1-dm4" },
                    { name: "C1-DM5", path: "/products/c1-dm5" },
                  ],
                },
                {
                  name: "Repeater",
                  path: "/products/c1-dr-800",
                  children: [
                    { name: "C1-DR 800", path: "/products/c1-dr-800" },
                    { name: "C1-DS 800", path: "/products/c1-ds-800" },
                    { name: "C1-DR 8000", path: "/products/c1-dr-8000" },
                    { name: "C1-DR 8001", path: "/products/c1-dr-8001" },
                    { name: "C1-DR 8002", path: "/products/c1-dr-8002" },
                    { name: "C1-DR 8003", path: "/products/c1-dr-8003" },
                  ],
                },
              ],
            },
            {
              name: "Analog",
              path: "/products/c1",
              children: [
                { name: "CONVEY C1", path: "/products/c1" },
                { name: "CONVEY C1 Plus", path: "/products/c1-plus" },
                { name: "CONVEY C1 Pro", path: "/products/c1-pro" },
                { name: "CONVEY C1 Pro (ND)", path: "/products/c1-pro-nd" },
                { name: "Tokimo Rio Lite", path: "/products/tokimo-rio-lite" },
                { name: "Tokimo Rio", path: "/products/tokimo-rio" },
                { name: "Tokimo Rio+", path: "/products/tokimo-rio-plus" },
                { name: "Tokimo Rio (N)", path: "/products/tokimo-rio-n" },
                { name: "Tokimo Rio Advance", path: "/products/tokimo-rio-advance" },
              ],
            },
          ],
        },
        { name: "POC", path: "/products" },
        { name: "Secured", path: "/products" },
      ],
    },
    { name: "Telecommunication", path: "/contact" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products", children: productDropdown },
    { name: "About Us", path: "/about" },
    { name: "Compliance", path: "/compliance" },
    { name: "Contact", path: "/contact" },
  ];

  React.useEffect(() => {
    setOpenDesktopMenu(null);
    setIsOpen(false);
  }, [location.pathname, location.search]);

  type ProductMenuItem = {
    name: string;
    path: string;
    children?: ProductMenuItem[];
  };

  const renderMegaColumn = (item: ProductMenuItem) => (
    <div key={item.name} className="min-w-0 rounded border border-gray-100 bg-white p-5">
      <Link
        to={item.path}
        onClick={() => setOpenDesktopMenu(null)}
        className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4 text-xs font-black uppercase tracking-[0.2em] text-navy transition-colors hover:text-brand"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-brand" />
        {item.name}
      </Link>
      {item.children && (
        <div className="space-y-4">
          {item.children.map((child, childIndex) => (
            <div key={child.name} className="rounded bg-gray-50 p-4">
              <Link
                to={child.path}
                onClick={() => setOpenDesktopMenu(null)}
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-gray-800 transition-colors hover:text-brand"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-navy text-[10px] text-white">
                  {childIndex + 1}
                </span>
                {child.name}
              </Link>
              {child.children && (
                <div className="mt-4 space-y-3 border-l-2 border-brand/40 pl-4">
                  {child.children.map((grandChild) => (
                    <div key={grandChild.name}>
                      <Link
                        to={grandChild.path}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="inline-flex items-center rounded bg-white px-3 py-2 text-[11px] font-black uppercase tracking-wider text-gray-700 shadow-sm ring-1 ring-gray-100 transition-colors hover:text-brand"
                      >
                        {grandChild.name}
                      </Link>
                      {grandChild.children && (
                        <div className="mt-3 grid grid-cols-2 gap-2 rounded border border-brand/20 bg-brand/5 p-3">
                          {grandChild.children.map((leaf) => (
                            <Link
                              key={leaf.name}
                              to={leaf.path}
                              onClick={() => setOpenDesktopMenu(null)}
                              className="block rounded bg-white px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-700 shadow-sm transition-colors hover:bg-brand hover:text-navy"
                            >
                              {leaf.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderDesktopMenu = (items: ProductMenuItem[]) => (
    <div className="absolute left-1/2 top-full z-50 w-[min(1040px,calc(100vw-48px))] -translate-x-1/2 pt-3">
      <div className="rounded border border-gray-100 bg-white p-3 shadow-2xl shadow-navy/10">
        <div className="mb-3 rounded bg-navy px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white">
          Product Categories
        </div>
        <div className="grid grid-cols-[1.45fr_0.55fr] gap-3">
        {items.map(renderMegaColumn)}
        </div>
      </div>
    </div>
  );

  const renderMobileMenu = (items: ProductMenuItem[], level = 0) => (
    <div className={clsx(level === 0 ? "mt-2 space-y-1" : "ml-4 border-l border-gray-100 pl-3")}>
      {items.map((item) => (
        <div key={item.name}>
          <Link
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="block rounded px-4 py-3 text-[11px] font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 hover:text-navy"
          >
            {item.name}
          </Link>
          {item.children && renderMobileMenu(item.children, level + 1)}
        </div>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <ImageWithFallback 
                src={BrandAssets.logo} 
                alt="CONVEY Logo" 
                className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-7"
                onMouseEnter={() => setOpenDesktopMenu(link.name)}
                onMouseLeave={() => setOpenDesktopMenu(null)}
                onFocus={() => setOpenDesktopMenu(link.name)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenDesktopMenu(null);
                  }
                }}
              >
                <Link
                  to={link.path}
                  onClick={(event) => {
                    if (link.children) {
                      event.preventDefault();
                      setOpenDesktopMenu(openDesktopMenu === link.name ? null : link.name);
                    }
                  }}
                  className={clsx(
                    "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand relative flex items-center gap-1 pb-1",
                    location.pathname === link.path 
                      ? "text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand" 
                      : "text-gray-500"
                  )}
                >
                  {link.name}
                  {link.children && <ChevronDown className="h-3 w-3 text-brand" />}
                </Link>
                {link.children && openDesktopMenu === link.name && renderDesktopMenu(link.children)}
              </div>
            ))}
            <Link
              to="/contact#inquiry"
              className="bg-navy text-white px-8 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-navy transition-all shadow-xl shadow-navy/5 active:scale-95 flex items-center group"
            >
              Contact Sales
              <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="text-navy hover:text-brand transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-4 py-4 rounded font-black uppercase tracking-widest text-xs",
                    location.pathname === link.path
                      ? "bg-brand/10 text-brand"
                      : "text-gray-600 hover:bg-gray-50 hover:text-navy"
                  )}
                >
                  {link.name}
                </Link>
                {link.children && renderMobileMenu(link.children)}
              </div>
            ))}
            <Link
              to="/contact#inquiry"
              onClick={() => setIsOpen(false)}
              className="block bg-brand text-navy px-4 py-5 rounded font-black uppercase tracking-widest text-xs text-center mt-6 shadow-lg shadow-brand/20"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
