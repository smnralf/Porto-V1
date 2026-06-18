export type ProjectStatus = "Case Study" | "Prototype" | "Demo" | "Concept" | "Live";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
  features: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  year: number;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "dashboard-xauusd-concept",
    title: "Dashboard XAUUSD",
    shortDescription:
      "Fundamental analysis dashboard for XAUUSD to support understanding of gold price movements in real-time.",
    longDescription:
      "An analytical dashboard that helps traders understand the fundamental factors affecting XAUUSD (Gold/USD) price movements. This dashboard displays macroeconomic data from FRED, live prices from Yahoo Finance, and price direction predictions using machine learning in a single integrated view.",
    problem:
      "XAUUSD traders often struggle because they have to open many tabs—news, economic calendars, charts—making it complicated and delaying their decision-making.",
    solution:
      "I built a dashboard using Next.js & FastAPI to combine all macroeconomic data, live gold prices, plus price direction predictions using Random Forest in a single screen.",
    result:
      "Produced an interactive dashboard concept with the potential to drastically cut traders' research time by presenting fundamental and predictive data in one concise screen.",
    techStack: ["Next.js 16", "TypeScript", "FastAPI", "Python", "scikit-learn", "Recharts", "pandas", "yfinance"],
    features: [
      "XAUUSD fundamental data visualization",
      "Macroeconomic indicators (CPI, NFP, etc.)",
      "Real-time market sentiment (concept)",
      "Interactive dashboard",
      "Modern UI/UX design",
    ],
    screenshots: [
      "/screenshots/dashboard-xauusd-concept/preview-1.png",
      "/screenshots/dashboard-xauusd-concept/preview-2.png",
      "/screenshots/dashboard-xauusd-concept/preview-3.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2026,
    category: "Dashboard",
  },
  {
    slug: "hris",
    title: "HRIS",
    shortDescription: "A web-based Human Resource Information System for employee data management, attendance, and payroll.",
    longDescription:
      "HRIS is a web-based application built with Laravel designed to help companies manage employee data, attendance tracking, and payroll processes centrally and efficiently.",
    problem:
      "Many companies still use manual attendance and payroll systems using Excel. It's prone to errors and gives HR a headache at the end of every month.",
    solution:
      "I built a full-stack HRIS system using Laravel to automate everything—from daily attendance to automated payslips, all handled in one platform.",
    result:
      "The employee data management process became automated, reducing human error in attendance and payroll calculations, and making information access transparent for all employees.",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "AJAX", "MySQL"],
    features: [
      "Employee data management",
      "Daily attendance tracking",
      "Payroll management",
      "HR reporting dashboard",
      "Admin & employee roles",
    ],
    screenshots: [
      "/screenshots/hris/Hris1.png",
      "/screenshots/hris/HRIS2.png",
      "/screenshots/hris/Hris3.png",
      "/screenshots/hris/Hris4.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2026,
    category: "Web App",
  },
  {
    slug: "sehatin",
    title: "Sehatin",
    shortDescription: "A web-based medication schedule reminder application.",
    longDescription:
      "Sehatin is a web application that helps users remember to take their medication on time. Designed with a simple and accessible interface for all ages, including the elderly.",
    problem:
      "The elderly often forget to take their medication. Once forgotten, the effectiveness of the treatment is compromised.",
    solution:
      "Built a super simple web app that can be accessed directly from a mobile browser without installing anything, specifically to automatically remind users of their medication schedule.",
    result:
      "Produced a highly user-friendly reminder app with timely notifications, helping users (especially the elderly) to consistently stick to their medication schedule.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Medication schedule reminder",
      "Medication list management",
      "Medication history tracking",
      "Simple and intuitive interface",
      "Reminder notifications",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2025,
    category: "Web App",
  },
  {
    slug: "company-profile-demo",
    title: "Company Profile Demo",
    shortDescription: "A modern company profile website for businesses or SMEs.",
    longDescription:
      "A modern company profile website demo built with Next.js and Tailwind CSS. Perfect as a design reference for businesses or SMEs looking for a professional digital presence.",
    problem:
      "Many local SMEs still don't have a website because they think building one is expensive and complicated, resulting in lost visibility on Google.",
    solution:
      "I assembled a modern template using Next.js for blazing fast performance. SMEs can easily use it, replace text & photos, and instantly look professional.",
    result:
      "Created a high-quality base template that accelerates the process of building a professional website for SMEs, complete with a responsive design and optimal performance scores.",
    techStack: ["Next.js", "Tailwind CSS"],
    features: [
      "Modern and responsive design",
      "Home, about, services, and contact pages",
      "High performance with Next.js",
      "SEO-friendly",
      "Mobile-first design",
    ],
    screenshots: [],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Demo",
    year: 2026,
    category: "Company Profile",
  },
  {
    slug: "nextpos",
    title: "NextPos",
    shortDescription: "A web-based Point of Sale application with inventory management, cashier, sales reporting, and user authentication. Built with Laravel 12 and Tailwind CSS.",
    longDescription:
      "NextPos is a web-based POS (Point of Sale) and inventory management application built with Laravel 12. It features two user roles—an admin to manage items, inventory, and reports, and a cashier to process sales transactions. It includes authentication via Laravel Breeze and a responsive interface using Tailwind CSS.",
    problem:
      "Manual cashiers or outdated POS apps are often slow, hard to sync with warehouse inventory, and their sales reports aren't real-time.",
    solution:
      "I developed a lightweight POS application using Laravel 12 + Tailwind. It features a cashier interface for store operations and a dashboard for owners to monitor profits.",
    result:
      "The app successfully integrates the cashier and inventory modules, providing business owners with an easy way to monitor daily sales and remaining inventory in real-time from anywhere.",
    techStack: ["Laravel 12", "PHP 8.2", "Tailwind CSS", "Alpine.js", "MySQL", "Blade", "Vite"],
    features: [
      "Distinct admin & cashier roles",
      "Item and inventory management",
      "Real-time cashier transactions",
      "Comprehensive transaction history",
      "Daily & monthly sales reports",
      "Business overview dashboard",
      "User authentication (Laravel Breeze)",
    ],
    screenshots: [
      "/screenshots/nextpos/preview-1.png",
      "/screenshots/nextpos/preview-2.png",
      "/screenshots/nextpos/preview-3.png",
      "/screenshots/nextpos/preview-4.png",
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    status: "Case Study",
    year: 2024,
    category: "Web App",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
