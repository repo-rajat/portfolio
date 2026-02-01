import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@rajatgulati.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: MapPin, label: "Location", value: "New Delhi, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="type-label font-medium text-foreground">Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[hsl(var(--card-violet))] focus:ring-1 focus:ring-[hsl(var(--card-violet))] outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="type-label font-medium text-foreground">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[hsl(var(--card-violet))] focus:ring-1 focus:ring-[hsl(var(--card-violet))] outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="type-label font-medium text-foreground">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-[hsl(var(--card-violet))] focus:ring-1 focus:ring-[hsl(var(--card-violet))] outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[hsl(var(--card-violet))] to-[hsl(var(--card-violet-dark))] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[hsl(var(--card-violet)/0.3)]"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl glass-card">
            <h3 className="type-section-title text-[hsl(var(--card-violet))] mb-5">Get in Touch</h3>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card-violet)/0.2)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[hsl(var(--card-violet))]" />
                    </div>
                    <div>
                      <p className="type-caption text-muted-foreground">{item.label}</p>
                      <p className="type-body text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card">
            <h3 className="type-section-title text-[hsl(var(--card-violet))] mb-5">Follow Me</h3>

            <div className="flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-12 h-12 rounded-xl bg-[hsl(var(--card-violet)/0.2)] flex items-center justify-center hover:bg-[hsl(var(--card-violet))] transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-[hsl(var(--card-violet))] group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-[hsl(var(--card-emerald)/0.3)]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--card-emerald))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--card-emerald))]"></span>
              </span>
              <span className="type-body text-foreground font-medium">Available for freelance work</span>
            </div>
            <p className="type-body-sm text-muted-foreground mt-2">
              Currently taking on new projects. Let's discuss your ideas!
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;
