'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export function FaqSection() {
    const faqs = [
        {
            q: "Do I need to be a LabVIEW or Python expert?",
            a: "No. TestFlow reduces scripting overhead and makes workflows reusable and team-friendly."
        },
        {
            q: "What instruments do you support?",
            a: "We support common lab instruments via SCPI-based control. In the demo, we confirm your exact models and setup."
        },
        {
            q: "How long does it take to see value?",
            a: "Most teams automate 1–2 high-frequency tests first, then expand across the validation suite."
        },
        {
            q: "Is this secure? What about deployment?",
            a: "We support security-conscious teams. Deployment options can match your environment (details in the demo)."
        },
        {
            q: "Can my whole team reuse flows?",
            a: "Yes. Flows are designed to be shared, reviewed, and improved so knowledge stays with the team."
        },
        {
            q: "How do we start?",
            a: "Book a short demo. We’ll map one real test workflow from your lab and show the end-to-end automation."
        }
    ]

    return (
        <section className="py-24 bg-black text-white border-t border-white/5" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                        Questions Engineers Ask Before Trying It
                    </h2>
                </div>

                <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg px-6 bg-zinc-900/50">
                            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-purple-400 transition-colors py-6">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 pb-6 text-base leading-relaxed">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>


            </div>
        </section>
    )
}
