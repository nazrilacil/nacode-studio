// components/forms/ProjectInquiryForm.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackFormSubmit } from "@/lib/analytics";

const websiteTypes = [
  { value: "landing-page", labelKey: "pages.contact.form.websiteTypes.landing" },
  { value: "company-profile", labelKey: "pages.contact.form.websiteTypes.companyProfile" },
  { value: "web-app", labelKey: "pages.contact.form.websiteTypes.webApp" },
  { value: "school", labelKey: "pages.contact.form.websiteTypes.school" },
  { value: "ecommerce", labelKey: "pages.contact.form.websiteTypes.ecommerce" },
  { value: "maintenance", labelKey: "pages.contact.form.websiteTypes.maintenance" },
];

const budgets = [
  { value: "<1jt", labelKey: "pages.contact.form.budgets.under1" },
  { value: "2-5jt", labelKey: "pages.contact.form.budgets.between2and5" },
  { value: "5-10jt", labelKey: "pages.contact.form.budgets.between5and10" },
  { value: ">10jt", labelKey: "pages.contact.form.budgets.over10" },
];

export default function ProjectInquiryForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    websiteType: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    const requiredMsg = t("pages.contact.form.required");
    if (!form.name.trim()) e.name = requiredMsg;
    if (!form.email.trim()) e.email = requiredMsg;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("pages.contact.form.invalidEmail");
    if (!form.whatsapp.trim()) e.whatsapp = requiredMsg;
    if (!form.description.trim()) e.description = requiredMsg;
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setLoading(true);

    const message = `Halo NACODE, saya ingin konsultasi project website.

*${t("pages.contact.form.name")}:* ${form.name}
*${t("pages.contact.form.business")}:* ${form.business || "-"}
*${t("pages.contact.form.email")}:* ${form.email}
*${t("pages.contact.form.whatsapp")}:* ${form.whatsapp}
*${t("pages.contact.form.websiteType")}:* ${form.websiteType || "-"}
*${t("pages.contact.form.budget")}:* ${form.budget || "-"}

*${t("pages.contact.form.description")}:*
${form.description}`;

    trackFormSubmit("project_inquiry");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={`${t("pages.contact.form.name")} *`} error={errors.name}>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <Field label={t("pages.contact.form.business")} error={errors.business}>
          <input
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <Field label={`${t("pages.contact.form.email")} *`} error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <Field label={`${t("pages.contact.form.whatsapp")} *`} error={errors.whatsapp}>
          <input
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          />
        </Field>
        <Field label={t("pages.contact.form.websiteType")}>
          <select
            value={form.websiteType}
            onChange={(e) => setForm({ ...form, websiteType: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          >
            <option value="">{t("pages.contact.form.websiteTypePlaceholder")}</option>
            {websiteTypes.map((type) => (
              <option key={type.value} value={t(type.labelKey)}>
                {t(type.labelKey)}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("pages.contact.form.budget")}>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
          >
            <option value="">{t("pages.contact.form.budgetPlaceholder")}</option>
            {budgets.map((budget) => (
              <option key={budget.value} value={t(budget.labelKey)}>
                {t(budget.labelKey)}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field
        label={`${t("pages.contact.form.description")} *`}
        error={errors.description}
      >
        <textarea
          rows={5}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 text-[14px] text-ink focus:border-accent/50 focus:outline-none"
        />
      </Field>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-bg transition-colors hover:opacity-90 disabled:opacity-60"
      >
        {loading
          ? t("pages.contact.form.submitting")
          : t("pages.contact.form.submit")}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[11px] text-red-400">{error}</span>}
    </label>
  );
}