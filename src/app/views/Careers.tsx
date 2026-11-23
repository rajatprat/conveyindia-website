import React from "react";
import { Cpu, Network, ShieldCheck, Headphones, BriefcaseBusiness } from "lucide-react";
import { SEO } from "@/app/components/SEO";
import "./careers.css";

const departments = [
  { id: "engineering", name: "Engineering & R&D", icon: Cpu, description: "Explore the technical work behind professional communication products, from product design to testing and improvement.", areas: ["Product development", "Hardware & firmware", "Research & validation"] },
  { id: "network-engineering", name: "Telecom & Network Engineering", icon: Network, description: "Focus on the networks and infrastructure that help teams communicate reliably across sites and locations.", areas: ["Network planning", "System integration", "Deployment & configuration"] },
  { id: "production-quality", name: "Production & Quality", icon: ShieldCheck, description: "Bring attention to detail to production processes, product checks, and consistent quality.", areas: ["Production operations", "Quality assurance", "Product testing"] },
  { id: "technical-support", name: "Technical Support & Service", icon: Headphones, description: "Help customers understand, maintain, and get the most from their communication equipment.", areas: ["Technical troubleshooting", "Customer support", "Service & maintenance"] },
  { id: "sales", name: "Sales and Business Development", icon: BriefcaseBusiness, description: "Understand customer requirements and connect businesses with communication products and solutions suited to their needs.", areas: ["Customer relationships", "Business development", "Solution consultation"] },
];

export const Careers = () => {
  const [department, setDepartment] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");
  const sending = React.useRef(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current || status === "success") return;
    if (import.meta.env.DEV) { setStatus("error"); return; }
    sending.current = true;
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)));
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch { setStatus("error"); }
    finally { sending.current = false; }
  };
  return (
  <div className="careers-page">
    <SEO title="Careers | CONVEY" description="Explore career areas at CONVEY across engineering, telecom networks, production, technical support, and business development." />
    <header className="careers-hero">
      <div className="careers-container careers-hero-grid">
        <div><span className="careers-eyebrow">People / Careers</span><h1>Build your career.<br /><em>Keep people connected.</em></h1><p>Explore the teams behind CONVEY’s professional communication products and solutions. Find the area that connects with your skills and interests.</p><a className="careers-button" href="#departments">Explore departments</a></div>
        <aside className="careers-intro"><BriefcaseBusiness size={40} strokeWidth={1.4} aria-hidden="true" /><h2>Different skills.<br />A shared connection.</h2><p>Engineering, operations, service, and business development each play a part in bringing communication to the people who depend on it.</p><span>Five areas to explore</span></aside>
      </div>
    </header>
    <section className="careers-container careers-departments" id="departments" aria-labelledby="departments-heading">
      <div className="careers-section-heading"><span className="careers-eyebrow">Find your area</span><h2 id="departments-heading">Where could your skills fit?</h2><p>These departments describe areas of work at CONVEY. Specific vacancies and role requirements have not been listed here.</p></div>
      <div className="careers-grid">{departments.map(department => <article className="careers-card" key={department.id} id={department.id}><department.icon size={28} strokeWidth={1.5} aria-hidden="true" /><h3>{department.name}</h3><p>{department.description}</p><ul aria-label={`${department.name} areas of focus`}>{department.areas.map(area => <li key={area}>{area}</li>)}</ul><a href="#application" onClick={() => { setDepartment(department.name); }} aria-label={`Express interest in ${department.name}`}>Express interest</a></article>)}</div>
    </section>
    <section className="careers-container careers-application" id="application" aria-labelledby="application-heading">
      <div><span className="careers-eyebrow">Introduce yourself</span><h2 id="application-heading">Tell us about you.</h2><p>Share your details and the department you are interested in. This is an expression of interest, not an application for a confirmed vacancy.</p></div>
      <form name="convey-careers" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} aria-busy={status === "sending"}>
        <input type="hidden" name="form-name" value="convey-careers" />
        <div hidden><label>Leave this blank<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
        <fieldset disabled={status === "sending" || status === "success"}>
          <legend className="sr-only">Career interest details</legend>
          <div className="careers-form-grid">
            <label htmlFor="career-name">Full name *<input id="career-name" name="name" autoComplete="name" required maxLength={150} /></label>
            <label htmlFor="career-email">Email *<input id="career-email" name="email" type="email" autoComplete="email" required /></label>
            <label htmlFor="career-phone">Phone *<input id="career-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} /></label>
            <label htmlFor="career-department">Department *<select id="career-department" name="department" required value={department} onChange={event => setDepartment(event.target.value)}><option value="" disabled>Select a department</option>{departments.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}</select></label>
            <label htmlFor="career-experience">Experience *<select id="career-experience" name="experience" required defaultValue=""><option value="" disabled>Select your experience</option>{["Fresher", "Less than 1 year", "1–3 years", "3–5 years", "5+ years"].map(value => <option key={value}>{value}</option>)}</select></label>
            <label htmlFor="career-location">Current city *<input id="career-location" name="location" autoComplete="address-level2" required maxLength={150} /></label>
          </div>
          <label htmlFor="career-resume">Resume / portfolio link *<input id="career-resume" name="resume-url" type="url" placeholder="https://" required /><span className="careers-help">Share a publicly accessible link to your resume or portfolio. Set access to “Anyone with the link” so we can view it without signing in.</span></label>
          <label htmlFor="career-message">About you *<textarea id="career-message" name="message" rows={5} required maxLength={5000} placeholder="Tell us about your skills, relevant experience, and area of interest." /></label>
          <label className="careers-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to CONVEY using these details to respond to my career inquiry. See the <a href="/privacy">Privacy Policy</a>.</span></label>
          <button className="careers-button" type="submit">{status === "sending" ? "Sending…" : status === "success" ? "Interest submitted" : "Submit interest"}</button>
        </fieldset>
        {status === "success" && <p role="status">Thank you. Your career interest has been received.</p>}
        {status === "error" && <p role="alert">{import.meta.env.DEV ? "Submissions are available on the deployed website. This local preview has not sent your details." : "Your details could not be sent. Please try again."}</p>}
      </form>
    </section>
  </div>
);
};
