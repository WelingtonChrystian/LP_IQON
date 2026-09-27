import { painOptions } from "@/content/pains";
import { site, whatsappMessages } from "@/content/site";

export type LeadDetails = {
  name?: string;
  business?: string;
  segment?: string;
  city?: string;
};

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Monta a primeira mensagem do lead: saudação, dados preenchidos e dificuldades marcadas.
 * Campos vazios ficam de fora e cada bloco é separado por uma linha em branco.
 */
export function composeLeadMessage(selectedPainIds: readonly string[], details: LeadDetails = {}) {
  const { fields, painsHeading } = whatsappMessages;
  const blocks: string[] = [whatsappMessages.default];

  const filledDetails = (
    [
      [fields.name, details.name],
      [fields.business, details.business],
      [fields.segment, details.segment],
      [fields.city, details.city],
    ] as const
  ).flatMap(([label, value]) => {
    const trimmed = value?.trim();
    return trimmed ? [`${label}: ${trimmed}`] : [];
  });

  blocks.push(...filledDetails);

  const selected = painOptions.filter((option) => selectedPainIds.includes(option.id));

  if (selected.length > 0) {
    blocks.push(
      selected.length === 1 ? painsHeading.one : painsHeading.many,
      selected.map((option) => `• ${option.label}`).join("\n"),
    );
  }

  return blocks.join("\n\n");
}
