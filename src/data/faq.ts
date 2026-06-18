export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Does the price include domain and hosting?",
    answer:
      "Not yet. The listed price is for the website development service. Domain and hosting costs will be discussed separately based on your needs and preferences. I can assist with the selection and setup process.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Each package includes a specific number of revisions. Additional revisions beyond the limit can be discussed with an agreed-upon extra fee.",
  },
  {
    question: "How long does the development take?",
    answer:
      "It depends on the package and complexity. A landing page usually takes 3–5 working days, a company profile 7–14 working days, and dynamic web apps 14–30 working days. The exact timeline will be confirmed after our initial discussion.",
  },
  {
    question: "Do you provide maintenance after the website is finished?",
    answer:
      "Yes. Maintenance services are available optionally for an agreed monthly fee. This covers content updates, regular backups, and minor bug fixes.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Absolutely. All custom requirements can be discussed before the project begins. Pricing will be adjusted according to the complexity of the requested features.",
  },
  {
    question: "Can you design from scratch?",
    answer:
      "Yes. I will discuss design references, brand colors, and your visual preferences to create a fitting design. If you already have your own design (Figma/XD), we can use that directly.",
  },
];
