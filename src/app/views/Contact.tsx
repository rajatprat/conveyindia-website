import React from "react";
import { Phone, Mail, MapPin, Send, UserPlus, Building2, Globe, Printer } from "lucide-react";
import { SEO } from "@/app/components/SEO";

const offices = [
  {
    city: "Lucknow",
    type: "Head Office",
    address: "215-217, 2nd Floor, Lekhraj Gold, Indira Nagar, Lucknow-226016 (UP), India.",
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
    <div className="bg-white min-h-screen">
      <SEO 
        title="Contact Us | Authorized CONVEY Dealer Network"
        description="Get in touch with CONVEY for enterprise wireless solutions. Contact our Lucknow HQ or regional offices in Delhi, Mumbai, Kolkata, and Hyderabad."
        keywords="convey contact number, micromap lucknow address, walkie talkie dealer india, sales@conveyindia.in"
      />

      {/* Editorial Header */}
      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-brand"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Direct Connectivity</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Get In <span className="text-brand">Touch</span>
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-500 max-w-2xl">
            Enterprise communication requires precise coordination. Our technical sales team is available across India to support your mission-critical requirements.
          </p>
        </div>
      </section>

      {/* Main Inquiry Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Quick Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-12">Primary Hotline</h2>
              <div className="bg-navy p-12 rounded-xl text-white shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <Phone className="w-10 h-10 text-brand mb-8" aria-hidden="true" />
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Enterprise Support</p>
                  <p className="text-4xl font-black tracking-tighter mb-4">+91 76197 20000</p>
                  <p className="text-sm font-medium text-gray-400 mb-12 leading-relaxed">Available Monday - Saturday (10 AM - 6 PM)</p>
                  
                  <div className="pt-10 border-t border-white/10">
                    <Mail className="w-5 h-5 text-brand mb-4" aria-hidden="true" />
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Technical Sales</p>
                    <p className="text-lg font-black tracking-tighter uppercase">sales@conveyindia.in</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg group cursor-pointer hover:border-brand transition-all">
                  <UserPlus className="w-8 h-8 text-brand mb-4" aria-hidden="true" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-navy">Become a Dealer</p>
                </div>
                <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg group cursor-pointer hover:border-brand transition-all">
                  <Building2 className="w-8 h-8 text-brand mb-4" aria-hidden="true" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-navy">Corporate Sales</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7" id="inquiry">
              <div className="p-12 lg:p-16 border border-gray-100 bg-white shadow-sm rounded-xl">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand mb-12">Inquiry Form</h2>
                <form
                  name="convey-inquiry"
                  method="POST"
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  aria-busy={submitting}
                >
                  <input type="hidden" name="form-name" value="convey-inquiry" />
                  <p className="hidden">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[9px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <input id="name" name="name" required type="text" autoComplete="name" className="w-full bg-gray-50 border border-gray-100 p-4 font-medium text-sm outline-none focus:ring-1 focus:ring-brand" placeholder="Your Full Name" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-[9px] font-black uppercase tracking-widest text-gray-400">Company</label>
                      <input id="company" name="company" required type="text" autoComplete="organization" className="w-full bg-gray-50 border border-gray-100 p-4 font-medium text-sm outline-none focus:ring-1 focus:ring-brand" placeholder="Organization Name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-[9px] font-black uppercase tracking-widest text-gray-400">Phone</label>
                      <input id="phone" name="phone" required type="tel" autoComplete="tel" className="w-full bg-gray-50 border border-gray-100 p-4 font-medium text-sm outline-none focus:ring-1 focus:ring-brand" placeholder="Mobile Number" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-gray-400">Email</label>
                      <input id="email" name="email" required type="email" autoComplete="email" className="w-full bg-gray-50 border border-gray-100 p-4 font-medium text-sm outline-none focus:ring-1 focus:ring-brand" placeholder="Business Email" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="requirement" className="text-[9px] font-black uppercase tracking-widest text-gray-400">Message / Requirement</label>
                    <textarea id="requirement" name="requirement" required rows={4} className="w-full bg-gray-50 border border-gray-100 p-4 font-medium text-sm outline-none focus:ring-1 focus:ring-brand resize-none" placeholder="Describe your requirement..."></textarea>
                  </div>
                  {submitError && (
                    <p role="alert" className="rounded bg-red-50 px-4 py-3 text-xs font-bold text-red-700">
                      Something went wrong. Please email sales@conveyindia.in or try again.
                    </p>
                  )}
                  {submitted && (
                    <p role="status" className="rounded bg-green-50 px-4 py-3 text-xs font-bold text-green-700">
                      Thank you. Your inquiry has been received. Our sales team will contact you shortly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    className={`w-full py-5 rounded font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-70 ${
                      submitted ? "bg-green-600 text-white" : "bg-brand text-navy hover:bg-brand/90"
                    }`}
                  >
                    {submitted ? "Message Sent Successfully" : submitting ? "Sending Inquiry…" : "Submit Inquiry"}
                    {!submitted && !submitting && <Send className="ml-3 w-3 h-3" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Office Locations Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Our Presence <span className="text-brand">Across India</span></h2>
            <Globe className="w-10 h-10 text-brand/20" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-12 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-navy">{office.city}</h3>
                  <span className="text-[8px] font-black uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-full">{office.type}</span>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-4 h-4 text-brand mt-1 flex-shrink-0" aria-hidden="true" />
                    <address className="text-sm font-medium leading-relaxed text-gray-500 not-italic">{office.address}</address>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Contact Channels</p>
                    {office.phones.map(phone => (
                      <div key={phone} className="flex items-center space-x-4 text-navy">
                        <Phone className="w-3 h-3 text-brand" aria-hidden="true" />
                        <span className="text-xs font-black tracking-tight">{phone}</span>
                      </div>
                    ))}
                    {office.fax && (
                      <div className="flex items-center space-x-4 text-gray-400">
                        <Printer className="w-3 h-3 text-brand" aria-hidden="true" />
                        <span className="text-xs font-black tracking-tight">Fax: {office.fax}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex items-center space-x-4">
                    <Mail className="w-3 h-3 text-brand" aria-hidden="true" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-navy lowercase">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl lg:text-3xl font-black text-navy uppercase tracking-tighter leading-tight mb-8">
            "Authorized by WPC, Government of India, for wireless network solutions and services."
          </p>
          <div className="h-px w-20 bg-brand mx-auto mb-8"></div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Micromap Electronic Systems Limited</p>
        </div>
      </section>
    </div>
  );
};
