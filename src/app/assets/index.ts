/**
 * Centralized asset management for the CONVEY brand.
 * 
 * ENVIRONMENT NOTE: 
 * For the live preview to function in Figma Make, we use the 'figma:asset' scheme.
 * For your final PRODUCTION export (Netlify/Vercel), follow these steps:
 * 1. Download your images.
 * 2. Rename them to logo.png, c1.png, etc.
 * 3. Place them in /src/assets/
 * 4. Uncomment the "PRODUCTION IMPORTS" and comment out the "PREVIEW IMPORTS" below.
 */

// --- PREVIEW IMPORTS (Use these for the Figma Make preview) ---
import logoImg from "figma:asset/d2c64bf126bf6a00eb89cf151565b1bec20a80cf.png";
import c1Img from "figma:asset/ac032fc7491e1902338998cce7838e51da431d5f.png";
import c1PlusImg from "figma:asset/82c57f398398412b0ea538e7a4937c97eb684345.png";
import c1ProImg from "figma:asset/e1c145731917fea8155defc97b22cf5bac3bc188.png";
import c1ProNdImg from "figma:asset/589859a88d09d8313da208932980d2d6d4fc7c90.png";

/* 
// --- PRODUCTION IMPORTS (Uncomment these for Netlify/Vite build) ---
import logoImg from "@/assets/logo.png";
import c1Img from "@/assets/c1.png";
import c1PlusImg from "@/assets/c1-plus.png";
import c1ProImg from "@/assets/c1-pro.png";
import c1ProNdImg from "@/assets/c1-pro-nd.png";
*/

export const BrandAssets = {
  logo: logoImg,
};

export const ProductImages = {
  c1: c1Img,
  c1Plus: c1PlusImg,
  c1Pro: c1ProImg,
  c1ProNd: c1ProNdImg,
};
