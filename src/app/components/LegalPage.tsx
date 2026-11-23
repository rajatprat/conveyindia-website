import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import { SEO } from "@/app/components/SEO";
import "./legal-page.css";

export interface LegalSection { id: string; title: string; content: React.ReactNode }
export const LegalPage = ({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) => (
  <div className="legal-page">
    <SEO title={`${title} | CONVEY`} description={description} />
    <header className="legal-header"><div className="legal-container"><div className="legal-hero-copy"><span className="legal-eyebrow">CONVEY / Information</span><h1>{title}</h1><p>{description}</p><span className="legal-date">Last updated: 16 November 2026</span></div><div className="legal-hero-panel">{title.includes("Privacy") ? <ShieldCheck size={42} strokeWidth={1} /> : <FileText size={42} strokeWidth={1} />}<span>Clear information.<br/>Confident decisions.</span><p>{sections.length} sections · CONVEY website</p></div></div></header>
    <div className="legal-container legal-body"><aside><nav aria-label="On this page"><span className="legal-eyebrow">On this page</span>{sections.map((section,index)=><a href={`#${section.id}`} key={section.id}><span>{String(index+1).padStart(2,"0")}</span>{section.title}</a>)}</nav><Link className="legal-help" to="/contact">Questions? Contact our team <ArrowUpRight size={15}/></Link></aside><article>{sections.map((section,index)=><section id={section.id} key={section.id}><h2><span>{String(index+1).padStart(2,"0")}</span>{section.title}</h2>{section.content}</section>)}</article></div>
  </div>
);
