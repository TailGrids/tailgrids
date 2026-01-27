import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from "@/registry/core/accordion";

export function AccordionStyleFive() {
  return (
    <AccordionRoot variant="style_five">
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
    </AccordionRoot>
  );
}
