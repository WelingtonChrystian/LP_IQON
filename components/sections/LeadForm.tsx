"use client";

import { Check, MessageCircle } from "lucide-react";
import { useState, type ChangeEvent, type ComponentProps, type FormEvent } from "react";
import { useDiagnostic } from "@/components/diagnostic/DiagnosticProvider";
import { buttonStyles } from "@/components/ui/button";
import { leadForm } from "@/content/contact";
import { painOptions } from "@/content/pains";
import { ctas } from "@/content/site";
import { cn } from "@/lib/cn";
import { composeLeadMessage, whatsappHref, type LeadDetails } from "@/lib/whatsapp";

/**
 * Monta a mensagem e abre o WhatsApp com os gargalos identificados.
 */
export function LeadForm({ className }: { className?: string }) {
  const { selected, isSelected, toggle } = useDiagnostic();
  const [details, setDetails] = useState<Required<LeadDetails>>({
    name: "",
    business: "",
    city: "",
    segment: "",
  });

  const updateField = (field: keyof LeadDetails) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDetails((current) => ({ ...current, [field]: value }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const href = whatsappHref(composeLeadMessage(selected, details));
    const whatsappWindow = window.open(href, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.href = href;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="lead-form-title"
      className={cn(
        "w-full min-w-0 rounded-2xl border border-lilas/20 bg-noite-card/85 p-4 sm:p-7 backdrop-blur-sm shadow-xs",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-lilas/15 pb-4">
        <div className="min-w-0 flex-1 pr-2">
          <h3 id="lead-form-title" className="font-sans text-h4 font-medium text-luz">
            {leadForm.title}
          </h3>
          <p className="mt-1 text-small text-luz-suave text-pretty">{leadForm.intro}</p>
        </div>
        <MessageCircle className="size-5 text-lilas shrink-0" />
      </div>

      <fieldset className="mt-5 w-full min-w-0">
        <legend className="text-label font-medium uppercase tracking-wider text-lilas-claro">
          {leadForm.question}
        </legend>
        <div className="mt-2.5 grid gap-2 max-h-64 overflow-y-auto pr-1.5 w-full min-w-0 [scrollbar-width:thin] [scrollbar-color:rgba(185,154,240,0.35)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-lilas/35 [&::-webkit-scrollbar-track]:bg-transparent">
          {painOptions.map((option) => (
            <label
              key={option.id}
              className="group flex cursor-pointer items-start gap-2.5 rounded-lg border border-lilas/15 bg-noite/40 p-2.5 text-xs sm:text-small text-luz-suave transition-colors hover:border-lilas/40 hover:text-luz has-checked:border-lilas has-checked:bg-lilas/10 has-checked:text-luz select-none w-full min-w-0"
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={isSelected(option.id)}
                onChange={() => toggle(option.id)}
              />
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-lilas/30 transition-colors group-has-checked:border-lilas group-has-checked:bg-lilas"
              >
                <Check
                  className="size-2.5 text-abismo opacity-0 transition-opacity group-has-checked:opacity-100"
                  strokeWidth={3}
                />
              </span>
              <span className="min-w-0 flex-1 leading-snug break-words text-pretty">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 w-full min-w-0">
        <Field
          id="lead-name"
          label={leadForm.fields.name}
          autoComplete="name"
          value={details.name}
          onChange={updateField("name")}
          placeholder="Seu nome"
        />
        <Field
          id="lead-business"
          label={leadForm.fields.business}
          autoComplete="organization"
          value={details.business}
          onChange={updateField("business")}
          placeholder="Sua empresa"
        />
        <Field
          id="lead-segment"
          label={leadForm.fields.segment}
          value={details.segment}
          onChange={updateField("segment")}
          placeholder={leadForm.segmentPlaceholder}
        />
        <Field
          id="lead-city"
          label={leadForm.fields.city}
          autoComplete="address-level2"
          value={details.city}
          onChange={updateField("city")}
          placeholder="Sua cidade"
        />
      </div>

      <div className="mt-6 border-t border-lilas/15 pt-4">
        <button
          type="submit"
          className={buttonStyles({ variant: "light", size: "md", className: "w-full cursor-pointer" })}
        >
          {ctas.conversation}
        </button>
        <p className="mt-2.5 text-center text-label text-luz-suave/80 text-pretty">
          {leadForm.microcopy}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: ComponentProps<"input">["onChange"];
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-label font-medium text-luz-suave uppercase tracking-wider">
        {label}
      </label>
      <input
        type="text"
        id={id}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-xl border border-lilas/20 bg-noite/50 px-3 py-2 text-small text-luz placeholder:text-luz-suave/40 focus:border-lilas focus:outline-none focus:ring-1 focus:ring-lilas transition-colors"
      />
    </div>
  );
}
