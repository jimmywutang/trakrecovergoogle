import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv } from "@/components/motion-div";


const faqs = [
  {
    question: "How does the recovery process work?",
    answer: "Our process begins with a free consultation and risk assessment. If we take on your case, our team of experts uses advanced tracing techniques, legal strategies, and communication with financial institutions to recover your funds. We keep you informed at every step."
  },
  {
    question: "What are your fees?",
    answer: "We operate primarily on a success-fee basis. This means we only get paid if we successfully recover your money. Our fees are a percentage of the recovered amount and will be clearly discussed and agreed upon before we begin."
  },
  {
    question: "How long does the recovery process take?",
    answer: "The duration varies greatly depending on the complexity of the case, the type of scam, and the cooperation of financial institutions. Some cases can be resolved in weeks, while others may take several months. We provide a realistic timeline after our initial assessment."
  },
  {
    question: "Is recovery guaranteed?",
    answer: "Unfortunately, no one can guarantee a 100% recovery rate. The chances of success depend on many factors, such as how quickly the scam was reported and the methods used by the scammers. However, our expertise significantly increases the probability of a successful recovery."
  },
    {
    question: "What information do I need to provide?",
    answer: "To start, we need as much detail as you can provide about the incident. This includes communication records, transaction details, websites or apps used, and any information you have about the scammer. The more information we have, the better our chances."
  },
];

export function Faq() {
  return (
    <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MotionDiv>
  );
}
