import React from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";
import { Send, MessageCircle, ArrowRight } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";
import PrimaryButton from "../components/PrimaryButton";

function Contact() {
  const { content, loading } = useContent();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [showForm, setShowForm] = React.useState(false);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        Loading...
      </div>
    );
  }

  const { contact, global } = content;
  const { meta, form, info, availability } = contact;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Left Content
  const leftContent = (
    <div className="space-y-12">
      <div className="animate-in fade-in slide-in-from-left-4 duration-700 space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2">
            Let's talk{" "}
            <span className="text-[hsl(var(--violet))]">instantly.</span>
          </h2>
          <p className="text-white/50 max-w-lg leading-relaxed text-lg">
            The fastest way to get a response. Usually active during IST
            business hours for quick brainstorming or project talk.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href={`https://wa.me/${info.find((i) => i.label === "Phone")?.value?.replace(/\D/g, "") || "919876543210"}?text=${encodeURIComponent("Hi Rajat, I visited your portfolio and would like to connect for a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between gap-4 p-6 rounded-3xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all duration-500 overflow-hidden max-w-md shadow-2xl"
            style={{ boxShadow: "0 0 50px -12px rgba(34, 197, 94, 0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex items-center gap-5 relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-500 shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)] group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-white text-xl">WhatsApp Me</p>
                <p className="text-sm text-green-500/60 font-medium tracking-wide">
                  Click to open chat instantly
                </p>
              </div>
            </div>

            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {showForm && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8 pt-4 border-t border-white/5 mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white/90">
                  Email Inquiry
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-xs font-bold uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors"
                >
                  Close Form
                </button>
              </div>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="form-field !bg-white/[0.03] !border-white/10 focus:!border-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="form-field !bg-white/[0.03] !border-white/10 focus:!border-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What can I help you with?"
                    className="form-field !bg-white/[0.03] !border-white/10 focus:!border-white/30 resize-none"
                  />
                </div>
              </form>
            </div>
          )}

          <div className="mobile-sticky-bar lg:mt-6">
            {!showForm ? (
              <PrimaryButton
                onClick={() => setShowForm(true)}
                theme="violet"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
                tooltipTitle="Detailed Inquiry"
                tooltipDesc="Opens a formal contact form for project proposals, partnership opportunities, or detailed technical questions."
              >
                Email Inquiry
              </PrimaryButton>
            ) : (
              <PrimaryButton
                type="submit"
                form="contact-form"
                theme="violet"
                className="w-full"
                icon={<Send className="w-4 h-4" />}
                tooltipTitle="Professional Outreach"
                tooltipDesc="Sends your message directly to my primary inbox. I review all inquiries and typically respond within 24-48 hours with a detailed reply."
              >
                Send Inquiry
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Right Content
  const rightContent = (
    <div className="space-y-6 mt-6 lg:mt-0">
      <div className="glass-panel !p-5">
        <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-4">
          Connect Info
        </h3>

        <div className="grid gap-1">
          {info.map(function (item) {
            const Icon = getIcon(item.icon);
            const isLocation = item.label === "Location";
            let href = undefined;
            if (item.label === "Phone")
              href = `tel:${item.value.replace(/\D/g, "")}`;
            if (item.label === "Email") href = `mailto:${item.value}`;

            const badgeContent = (
              <>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 group-hover:text-[hsl(var(--violet))] group-hover:border-[hsl(var(--violet)/0.3)] group-hover:bg-[hsl(var(--violet)/0.1)] transition-all">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] text-white/90 font-medium truncate">
                    {item.value}
                  </p>
                </div>
              </>
            );

            if (isLocation) {
              return (
                <div key={item.label} className="flex items-center gap-3 p-2">
                  {badgeContent}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={href}
                className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-white/[0.03] transition-colors group"
              >
                {badgeContent}
              </a>
            );
          })}
        </div>
      </div>

      <div className="glass-panel !p-5">
        <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-4">
          Follow Me
        </h3>

        <div className="flex gap-3">
          {global.socialLinks.map(function (item) {
            const Icon = getIcon(item.icon);
            return (
              <IconButton
                key={item.label}
                icon={Icon}
                theme="violet"
                href={item.url}
                aria-label={item.label}
                size="sm"
              />
            );
          })}
        </div>
      </div>

      <div className="glass-panel !p-5 border border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--emerald))] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(var(--emerald))]"></span>
          </span>
          <span className="text-sm text-white/90 font-medium">
            {availability.title}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      themeName={meta.theme}
      title={meta.title}
      letter={meta.letter}
      left={leftContent}
      right={rightContent}
    />
  );
}

export default Contact;
