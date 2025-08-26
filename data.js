import {
  PenTool,
  Code,
  Lightbulb,
  Sparkles,
  MessageSquare,
  Calendar,
} from "lucide-react";

const siteData = {
  name: "MeshSpire",
  title: "MeshSpire | A peer to peer learning platform",
  description: "Fastest and most optimized way of learning",
  heroTitle: "Generate Images, Text and Videos with AI",
  heroDescription:
    "Everything AI seamlessly integrated all the modern AI generation tools into one platform so that you can generate content with a single click.",
  servicesTitle: "Our Services",

  services: [
    {
      title: "Smart Writing Assistant",
      description:
        "Generate blogs, emails, reports, or creative stories instantly with AI-powered writing help.",
      icon: <PenTool className="w-6 h-6 text-white" />,
    },
    {
      title: "Code & Debug Support",
      description:
        "Write, optimize, and debug code in multiple programming languages with step-by-step AI assistance.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
    {
      title: "Instant Knowledge Access",
      description:
        "Get clear, accurate answers to any question across science, history, tech, and more.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
    },
    {
      title: "Creative Brainstorming",
      description:
        "Generate new ideas for projects, content, marketing, or business strategies in seconds.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
    },
    {
      title: "Seamless Communication",
      description:
        "Translate, summarize, or rewrite text for clear and effective global communication.",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
    },
    {
      title: "Personal Productivity",
      description:
        "Plan your tasks, create schedules, and get personalized recommendations to stay productive.",
      icon: <Calendar className="w-6 h-6 text-white" />,
    },
  ],

  footer: {
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Features", href: "#features" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact us", href: "#contact" },
    ],
    socialLinks: {
      github: "https://github.com/StealthSilver",
      twitter: "https://x.com/Rajat_0409",
      email: "mailto:rajat.saraswat.0409@gmail.com",
      linkedin: "https://www.linkedin.com/in/rajat-saraswat-0491a3259/",
    },
  },
};

export default siteData;
