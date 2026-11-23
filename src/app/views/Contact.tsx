import React from "react";
import { Phone, Mail, MapPin, UserPlus, Building2, Globe, Printer, ArrowUpRight, ArrowRight, Clock3, MessageSquare } from "lucide-react";
import { useSearchParams } from "react-router";
import "./contact.css";
import { SEO } from "@/app/components/SEO";

const offices = [
  {
    city: "Lucknow",
    type: "Head Office",
    address: "4th Floor Royal Plaza, Munshipulia, Indira Nagar, Lucknow (U.P), India - 226 016.",
    phones: ["+91 522 4010095", "+91 91519 15146"],
    fax: "4082161",
    email: "sales@conveyindia.in"
  },
  {
    city: "Delhi",
    type: "Regional Office",
    address: "7, LGF, H.No. 137, Sant Nagar, East Of Kailash, New Delhi-110065, India.",
    phones: ["+91 11 26472000", "+91 11 41651444", "+91 91408 55317"],
    fax: "+91 11 26472000",
    email: "sales@conveyindia.in"
  },
  {
    city: "Mumbai",
    type: "Regional Office",
    address: "A-424, 2nd Floor, Vashi Plaza, Plot No. 80/81, Sector 17, Vashi, Navi Mumbai - 400703.",
    phones: ["022-49711222", "+91 82990 32257"],
    email: "sales@conveyindia.in"
  },
  {
    city: "Kolkata",
    type: "Regional Office",
    address: "18-B, PNB House, 3rd Floor, Brabourne Road, Kolkata-700001 (WB), India.",
    phones: ["033-40605663", "+91 99033 72424"],
    email: "sales@conveyindia.in"
  },
  {
    city: "Hyderabad",
    type: "Regional Office",
    address: "12 Banjara Avenue, Road No 1, Banjara Hills, 6-3-248/3/4, Behind Care Hospital, Hyderabad-500034, Telangana, India.",
    phones: ["+91 94151 07401"],
    email: "sales@conveyindia.in"
  }
];

const encodeFormData = (formData: FormData) =>
  new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
  ).toString();

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const model = searchParams.get("model");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || submitted) return;
    setSubmitError(false);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <SEO title="Contact Us | CONVEY Sales & Support"
        description="Speak to CONVEY about professional radio communication. Contact our sales team or find an office in Lucknow, Delhi, Mumbai, Kolkata, or Hyderabad."
        keywords="convey contact number, micromap lucknow address, walkie talkie dealer india, sales@conveyindia.in" />

      <section className="ct-hero"><div className="ct-container">
        <div><span className="ct-eyebrow"><span /> Contact CONVEY</span><h1>Good communication<br />starts with <em>a conversation.</em></h1><p>From your first radio to a complete communication network,<br className="hidden sm:block" /> let’s find the right solution for your team.</p></div>
        <a href="#inquiry" className="ct-hero-link"><span className="ct-round-arrow"><ArrowRight size={24} /></span>Let’s talk about your project</a>
      </div></section>

      <section className="ct-main ct-container">
        <aside className="ct-connect">
          <span className="ct-eyebrow">Here to help you connect</span><h2>Real people.<br /><em>Reliable support.</em></h2><p>Product guidance, project requirements, or dealer partnerships. Our team is here to help you take the next step.</p>
          <div className="ct-direct-card">
            <span className="ct-card-caption"><span /> Technical sales & support</span>
            <a href="tel:+917619720000" className="ct-phone"><Phone size={21} /><span>+91 76197 20000</span><ArrowUpRight size={19} /></a>
            <div className="ct-hours"><Clock3 size={14} /><span>Monday – Saturday<br /><strong>10:00 AM – 6:00 PM</strong></span></div>
            <a href="mailto:sales@conveyindia.in" className="ct-email"><Mail size={19} /><span><small>Prefer to write?</small>sales@conveyindia.in</span><ArrowUpRight size={17} /></a>
          </div>
          <div className="ct-pathways">
            <a href="mailto:sales@conveyindia.in?subject=Dealer%20partnership%20inquiry"><UserPlus size={21}/><div><strong>Become a dealer</strong><span>Grow with the CONVEY network</span></div><ArrowUpRight size={17}/></a>
            <a href="mailto:sales@conveyindia.in?subject=Corporate%20sales%20inquiry"><Building2 size={21}/><div><strong>Corporate sales</strong><span>Solutions for teams at every scale</span></div><ArrowUpRight size={17}/></a>
          </div>
        </aside>
        <div id="inquiry" className="ct-inquiry">
          <div className="ct-form-heading"><span className="ct-form-icon"><MessageSquare size={22}/></span><div><span className="ct-eyebrow">Tell us what you need</span><h2>How can we help?</h2></div></div>
          <p className="ct-form-description">Share a few details and our sales team will get in touch.</p>
                <form
                  name="convey-inquiry"
                  method="POST"
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="ct-form"
                  aria-busy={submitting}
                >
                  <input type="hidden" name="form-name" value="convey-inquiry" />
                  <p className="hidden">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} />
                    </label>
                  </p>
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label htmlFor="name" className="ct-field-label">Full Name</label>
                      <input id="name" name="name" required type="text" autoComplete="name" className="ct-input" placeholder="Your full name" />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="company" className="ct-field-label">Company</label>
                      <input id="company" name="company" required type="text" autoComplete="organization" className="ct-input" placeholder="Your organization" />
                    </div>
                  </div>
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label htmlFor="phone" className="ct-field-label">Phone</label>
                      <input id="phone" name="phone" required type="tel" autoComplete="tel" className="ct-input" placeholder="+91" />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="email" className="ct-field-label">Email</label>
                      <input id="email" name="email" required type="email" autoComplete="email" className="ct-input" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="ct-field">
                    <label htmlFor="requirement" className="ct-field-label">Message / Requirement</label>
                    <textarea id="requirement" name="requirement" required rows={5} defaultValue={model ? `I would like to enquire about ${model}.` : ""} className="ct-input" placeholder="Tell us about your project, products of interest, or the number of radios you need…"></textarea>
                  </div>
                  {submitError && (
                    <p role="alert" className="ct-feedback ct-error">
                      Something went wrong. Please email sales@conveyindia.in or try again.
                    </p>
                  )}
                  {submitted && (
                    <p role="status" className="ct-feedback ct-success">
                      Thank you. Your inquiry has been received. Our sales team will contact you shortly.
                    </p>
                  )}
                  <p className="ct-form-note">All fields are required. We’ll use your details to respond to your inquiry.</p>
                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    className="ct-submit"
                  >
                    {submitted ? "Inquiry received" : submitting ? "Sending Inquiry…" : "Send inquiry"}
                    {!submitted && !submitting && <ArrowUpRight size={19} aria-hidden="true" />}
                  </button>
                </form>
        </div>
      </section>

      <section className="ct-offices" id="offices"><div className="ct-container">
        <div className="ct-offices-heading"><div><span className="ct-eyebrow">Local expertise. National reach.</span><h2>Closer to <em>your business.</em></h2><p>Connect with our head office or a regional team near you.</p></div><span className="ct-office-count"><Globe size={19}/> 5 offices across India</span></div>
        <div className="ct-office-grid">{offices.map((office,index)=><article className={`ct-office ${index===0 ? "ct-office-head" : ""}`} key={office.city}>
          <div className="ct-office-top"><span className="ct-office-number">0{index+1}</span><span className="ct-office-type">{office.type}</span></div>
          <h3>{office.city}<MapPin size={21}/></h3>
          <address>{office.address}</address>
          <div className="ct-office-phones">{office.phones.map(phone=><a key={phone} href={`tel:${phone.replace(/[^+0-9]/g, "")}`}><Phone size={13}/>{phone}</a>)}{office.fax && <span><Printer size={13}/>Fax: {office.fax}</span>}</div>
          <a className="ct-office-email" href={`mailto:${office.email}`}><Mail size={14}/>{office.email}</a>
          <a className="ct-directions" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}>Get directions <ArrowUpRight size={16}/></a>
        </article>)}</div>
      </div></section>

      <section className="ct-bottom"><div className="ct-container"><div className="ct-bottom-icon"><RadioIcon /></div><div><span className="ct-eyebrow">Every connection matters</span><h2>Let’s keep your team connected.</h2><p>Professional communication. Personal attention.</p></div><a href="tel:+917619720000">Talk to our team <ArrowUpRight size={18}/></a></div></section>
    </div>
  );
};

const RadioIcon = () => <Globe size={30} aria-hidden="true" />;
