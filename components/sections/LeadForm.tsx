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
 * Monta a primeira mensagem do lead e abre o WhatsApp.
 * Nenhum dado é enviado a servidores: o visitante confirma o envio no próprio WhatsApp.
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
        "rounded-[2rem] border border-lilas/15 bg-noite/85 p-6 backdrop-blur-sm sm:p-10",
        className,
      )}
    >
      <h3 id="lead-form-title" className="font-display text-h3 text-balance text-luz">
        {leadForm.title}
      </h3>
      <p className="mt-3 text-small text-pretty text-luz-suave">{leadForm.intro}</p>

      <fieldset className="mt-8">
        <legend className="text-small font-medium text-luz">{leadForm.question}</legend>
        <div className="mt-4 grid gap-2">
          {painOptions.map((option) => (
            <label
              key={option.id}
              className="group flex min-h-12 cursor-pointer items-center gap-3.5 rounded-xl border border-lilas/20 px-4 py-2.5 text-small text-luz-suave transition-colors duration-300 hover:border-lilas/50 hover:text-luz has-checked:border-lilas has-checked:bg-lilas/10 has-checked:text-luz has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lilas motion-reduce:transition-none"
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={isSelected(option.id)}
                onChange={() => toggle(option.id)}
              />
              <span
                aria-hidden="true"
                className="grid size-5 shrink-0 place-items-center rounded-full border border-lilas/40 transition-colors duration-300 group-has-checked:border-lilas group-has-checked:bg-lilas motion-reduce:transition-none"
              >
                <Check
                  className="size-3 text-abismo opacity-0 transition-opacity duration-300 group-has-checked:opacity-100 motion-reduce:transition-none"
                  strokeWidth={3}
                />
              </span>
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field
          id="lead-name"
          label={leadForm.fields.name}
          autoComplete="name"
          value={details.name}
          onChange={updateField("name")}
        />
        <Field
          id="lead-business"
          label={leadForm.fields.business}
          autoComplete="organization"
          value={details.business}
          onChange={updateField("business")}
        />
        <Field
          id="lead-city"
          label={leadForm.fields.city}
          autoComplete="address-level2"
          value={details.city}
          onChange={updateField("city")}
        />
        <Field
          id="lead-segment"
          label={leadForm.fields.segment}
          autoComplete="off"
          placeholder={leadForm.segmentPlaceholder}
          value={details.segment}
          onChange={updateField("segment")}
        />
      </div>

      <button
        type="submit"
        className={buttonStyles({
          variant: "light",
          className: "mt-8 w-full sm:min-h-14 sm:text-body",
        })}
      >
        <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
        {ctas.conversation}
        <span className="sr-only"> pelo WhatsApp (abre em uma nova aba)</span>
      </button>
      <p className="mt-4 text-center text-label text-pretty text-luz-suave">{leadForm.microcopy}</p>
    </form>
  );
}

type FieldProps = Omit<ComponentProps<"input">, "id" | "className"> & {
  id: string;
  label: string;
  className?: string;
};

function Field({ id, label, className, ...inputProps }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-small text-luz-suave">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="h-12 w-full rounded-xl border border-lilas/20 bg-abismo/70 px-4 text-body text-luz transition-colors placeholder:text-luz-suave/70 hover:border-lilas/40 focus:border-lilas"
        {...inputProps}
      />
    </div>
  );
}
