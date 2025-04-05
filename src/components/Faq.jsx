// src/components/FaqAccordion.jsx

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <section className="max-w-2xl mx-auto pt-2 px-4 mt-[-100px]">
      <h2 className="text-3xl font-bold text-center mb-2">FAQs - The Brain Brawal</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">What is The Brain Brawal?</AccordionTrigger>
          <AccordionContent>
            The Brain Brawal is an exciting quiz platform designed to challenge and sharpen your knowledge across various topics.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">How do I participate in quizzes?</AccordionTrigger>
          <AccordionContent>
            Simply sign up, choose a quiz category, and start answering questions to earn points and rank up!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">Is The Brain Brawal free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! It's completely free and always will be. Just bring your brainpower!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Faq

