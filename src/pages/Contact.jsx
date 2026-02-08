import React from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";
import { Send } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";

function Contact() {
  const { content, loading } = useContent();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

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
    // A bit more manual state update
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Left Content
  const leftContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="type-label font-medium text-foreground"
        >
          {form.fields.name.label}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleInputChange}
          placeholder={form.fields.name.placeholder}
          className="form-field"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="type-label font-medium text-foreground"
        >
          {form.fields.email.label}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder={form.fields.email.placeholder}
          className="form-field"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="type-label font-medium text-foreground"
        >
          {form.fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          placeholder={form.fields.message.placeholder}
          className="form-field resize-none"
        />
      </div>

      <button type="submit" className="primary-button">
        <Send className="w-5 h-5" />
        {form.submitLabel}
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
          {info.map(function (item) {
            const Icon = getIcon(item.icon);
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
          {global.socialLinks.map(function (item) {
            const Icon = getIcon(item.icon);
            return (
              <IconButton
                key={item.label}
                icon={Icon}
                theme="violet"
                href={item.url}
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
      themeName={meta.theme}
      title={meta.title}
      letter={meta.letter}
      left={leftContent}
      right={rightContent}
    />
  );
}

export default Contact;
