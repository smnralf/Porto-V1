import { WHATSAPP_NUMBER } from "@/lib/utils";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  priceNote?: string;
  estimatedTimeline: string;
  includes: string[];
  forWho: string[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  highlighted?: boolean;
}

export const CONTACT_WHATSAPP = WHATSAPP_NUMBER;

export const services: Service[] = [
  {
    slug: "landing-page",
    title: "Landing Page",
    shortDescription:
      "For simple promotional pages, products, events, campaigns, or personal links.",
    longDescription:
      "A landing page is a fast and effective solution to promote your products, events, or business campaigns. With an attractive design and clear CTAs, landing pages help convert visitors into customers.",
    price: "Starting from Rp500.000",
    estimatedTimeline: "3–5 working days",
    includes: [
      "1 landing page",
      "Responsive mobile design",
      "WhatsApp CTA",
      "Basic sections",
      "1x Revision",
      "Basic deployment",
    ],
    forWho: [
      "SMEs wanting to promote a product",
      "Event organizers needing an event page",
      "Personal brands needing a premium link-in-bio",
      "Marketing campaigns requiring a quick landing page",
    ],
    faqs: [
      {
        question: "Is domain and hosting included?",
        answer:
          "Not yet. Domain and hosting costs will be agreed upon separately based on needs. I can assist with the setup process.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Estimated 3–5 working days depending on the completeness of the content provided.",
      },
      {
        question: "Can I request a design from scratch?",
        answer:
          "Yes. I will tailor the design to your brand and preferences.",
      },
    ],
    whatsappMessage:
      "Hello, I am interested in the Landing Page service. Could I get more information?",
  },
  {
    slug: "static-web-company-profile",
    title: "Static Web / Company Profile",
    shortDescription:
      "For company profiles, business portfolios, and informational websites with 3–5 pages.",
    longDescription:
      "A professional company profile website to build your business's online credibility. Display your profile, services, and business contacts in one elegant and informative website.",
    price: "Starting from Rp3.500.000",
    estimatedTimeline: "7–14 working days",
    includes: [
      "3–5 pages",
      "Modern design",
      "Responsive mobile design",
      "Basic SEO",
      "Contact form / WhatsApp integration",
      "2x Revisions",
      "Deployment",
    ],
    forWho: [
      "Businesses looking to establish a professional online presence",
      "SMEs needing a digital company profile",
      "Freelancers or consultants needing an online portfolio",
      "Organizations needing an informational website",
    ],
    faqs: [
      {
        question: "Is domain and hosting included?",
        answer:
          "Not yet. Domain and hosting costs will be discussed separately based on needs.",
      },
      {
        question: "What does basic SEO entail?",
        answer:
          "It covers meta titles, meta descriptions, heading structures, and a basic sitemap to help your website get discovered on search engines.",
      },
      {
        question: "What if I need more than 5 pages?",
        answer:
          "It can be customized. The price will adjust based on the number of additional pages.",
      },
    ],
    whatsappMessage:
      "Hello, I am interested in the Static Web / Company Profile service. Could I get more information?",
    highlighted: true,
  },
  {
    slug: "dynamic-web-admin-panel",
    title: "Dynamic Web / Admin Panel",
    shortDescription:
      "For websites with logins, dashboards, databases, and data management.",
    longDescription:
      "A complete dynamic website with a content management system, admin panel, and database. Ideal for businesses that need to manage their data independently without constantly relying on a developer.",
    price: "Starting from Rp6.500.000",
    estimatedTimeline: "14–30 working days",
    includes: [
      "Admin login",
      "Dashboard",
      "CRUD operations",
      "Database",
      "Image/file uploads",
      "Responsive layout",
      "3x Revisions",
      "Deployment",
    ],
    forWho: [
      "Businesses that need independent data management",
      "Simple online stores with product management",
      "Schools or institutions needing an information system",
      "Startups requiring a quick MVP",
    ],
    faqs: [
      {
        question: "What technologies are used?",
        answer:
          "It depends on your needs. I use Next.js, Laravel, Native PHP, or a combination depending on the requirements.",
      },
      {
        question: "Can it be integrated with a payment gateway?",
        answer:
          "Yes, but there will be an additional cost depending on the complexity of the integration.",
      },
      {
        question: "How long does the development take?",
        answer:
          "Estimated 14–30 working days depending on the complexity of the required features.",
      },
    ],
    whatsappMessage:
      "Hello, I am interested in the Dynamic Web / Admin Panel service. Could I get more information?",
  },
  {
    slug: "custom-web-app",
    title: "Custom Web App",
    shortDescription:
      "For custom systems tailored to specific business needs or workflows.",
    longDescription:
      "Custom web development solutions for specific business needs that are not met by standard solutions. From management systems and third-party API integrations to complex web applications—everything can be customized to your requirements.",
    price: "By Request",
    estimatedTimeline: "Adapts to scope",
    includes: [
      "Custom features",
      "User/Admin roles",
      "API integrations",
      "Database design",
      "Dashboard",
      "Basic documentation",
      "Scope tailored to needs",
    ],
    forWho: [
      "Businesses with specific system requirements",
      "Companies needing system-to-system integrations",
      "Startups building digital products from scratch",
      "Internal teams needing specialized tools",
    ],
    faqs: [
      {
        question: "How is the pricing determined for a custom app?",
        answer:
          "Pricing is determined after an in-depth discussion about the scope, features, timeline, and project complexity. A written proposal will be provided before work begins.",
      },
      {
        question: "Is there a warranty after the project is finished?",
        answer:
          "Yes, there is a 30-day bug-fix warranty period after the project handover.",
      },
      {
        question: "Can the project be done in phases?",
        answer:
          "Yes. The development can be split into phases/sprints based on feature priorities.",
      },
    ],
    whatsappMessage:
      "Hello, I am interested in the Custom Web App service. Can we discuss my requirements?",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
