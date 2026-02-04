import React from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

function Contact() {
  const themeName = "violet";
  const title = "get in touch";
  const letter = "C";

  // State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  function handleInputChange(e) {
    // A bit more manual state update
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const socialLinks = [
    { id: "github", label: "GitHub", icon: Github, href: "#" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: "#" },
    { id: "twitter", label: "Twitter", icon: Twitter, href: "#" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@rajatgulati.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { icon: MapPin, label: "Location", value: "New Delhi, India" },
  ];

  const availability = {
    title: "Available for freelance work",
    description: "Currently taking on new projects. Let's discuss your ideas!",
  };

  const formFields = {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "your@email.com" },
    message: { label: "Message", placeholder: "Tell me about your project..." }
  };

  // Left Content
  const leftContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="type-label font-medium text-foreground"
        >
          {formFields.name.label}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleInputChange}
          placeholder={formFields.name.placeholder}
          className="form-field"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="type-label font-medium text-foreground"
        >
          {formFields.email.label}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder={formFields.email.placeholder}
          className="form-field"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="type-label font-medium text-foreground"
        >
          {formFields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          placeholder={formFields.message.placeholder}
          className="form-field resize-none"
        />
      </div>

      <button type="submit" className="primary-button">
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );

  // Right Content
  const rightContent = (
    <div className="space-y-8 mt-6 lg:mt-0">
      <div className="glass-panel">
        <h3 className="type-section-title text-[hsl(var(--violet))] mb-5">
          Get in Touch
        </h3>

        <div className="space-y-4">
          {contactInfo.map(function(item) {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4">
                <IconButton icon={Icon} theme="violet" size="sm" />
                <div>
                  <p className="type-caption text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="type-body text-foreground font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-panel">
        <h3 className="type-section-title text-[hsl(var(--violet))] mb-5">
          Follow Me
        </h3>

        <div className="flex gap-4">
          {socialLinks.map(function(item) {
            return (
              <IconButton
                key={item.label}
                icon={item.icon}
                theme="violet"
                href={item.href}
                aria-label={item.label}
              />
            );
          })}
        </div>
      </div>

      <div className="glass-panel border border-[hsl(var(--emerald)/0.3)]">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--emerald))] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--emerald))]"></span>
          </span>
          <span className="type-body text-foreground font-medium">
            {availability.title}
          </span>
        </div>
        <p className="type-body-sm text-muted-foreground mt-2">
          {availability.description}
        </p>
      </div>
    </div>
  );

  return (
    <PageLayout
        themeName={themeName}
        title={title}
        letter={letter}
        left={leftContent}
        right={rightContent}
    />
  );
}

export default Contact;
