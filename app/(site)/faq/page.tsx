import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqPage() {
  return (
    <section className="container flex h-[90vh] w-screen flex-col items-center justify-center">
      <Accordion type="single" collapsible className="w-full max-w-lg">
        {siteConfig.faq.map((f) => (
          <AccordionItem key={f.title} value={f.title}>
            <AccordionTrigger>{f.title}</AccordionTrigger>
            <AccordionContent>{f.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
