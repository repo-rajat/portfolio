import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import IconButton from "../components/IconButton";

function Contact({ data, page }) {
  const { contact, socialLinks } = data;
  const SendIcon = contact.form.icon;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <PageLayout
      page={page}
      left={
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="type-label font-medium text-foreground"
            >
              {contact.form.fields.name.label}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={contact.form.fields.name.placeholder}
              className="form-field"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="type-label font-medium text-foreground"
            >
              {contact.form.fields.email.label}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={contact.form.fields.email.placeholder}
              className="form-field"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="type-label font-medium text-foreground"
            >
              {contact.form.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={contact.form.fields.message.placeholder}
              className="form-field resize-none"
            />
          </div>

          <button type="submit" className="primary-button">
            <SendIcon className="w-5 h-5" />
            {contact.form.submitLabel}
          </button>
        </form>
      }
      right={
        <div className="space-y-8 mt-6 lg:mt-0">
          <div className="glass-panel">
            <h3 className="type-section-title text-[hsl(var(--violet))] mb-5">
              {contact.infoTitle}
            </h3>

            <div className="space-y-4">
              {contact.info.map((item) => {
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
              {contact.followTitle}
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <IconButton
                    key={item.label}
                    icon={Icon}
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
                {contact.availability.title}
              </span>
            </div>
            <p className="type-body-sm text-muted-foreground mt-2">
              {contact.availability.description}
            </p>
          </div>
        </div>
      }
    />
  );
}

export default Contact;
