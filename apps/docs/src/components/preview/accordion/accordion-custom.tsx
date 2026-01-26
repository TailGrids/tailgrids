import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from "@/registry/core/accordion";

const items = [
  {
    id: "1",
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy on all unused items in their original packaging."
  },
  {
    id: "2",
    title: "How long does shipping take?",
    content:
      "Standard shipping typically takes 5-7 business days. Express options are available at checkout."
  },
  {
    id: "3",
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to over 50 countries worldwide. International shipping rates vary by destination."
  }
];

export function AccordionCustom() {
  return (
    <AccordionRoot className="border border-neutral-200 rounded-xl gap-0">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          className="border-0 border-b last-of-type:border-b-0 rounded-none"
        >
          <AccordionTrigger className="data-[state=open]:text-neutral-800">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
