import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from "@/registry/core/accordion";

export function AccordionPreview() {
  return (
    <AccordionRoot>
      <AccordionItem>
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day return policy on all unused items in their original
          packaging.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Standard shipping typically takes 5-7 business days. Express options
          are available at checkout.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
        <AccordionContent>
          Yes, we ship to over 50 countries worldwide. International shipping
          rates vary by destination.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
}
