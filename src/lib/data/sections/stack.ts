export const stackData = {
  title: "Tech Stack Matrix",
  description: "Advanced skills matrix & interactive project lab.",
  tabs: [
    { id: "all", label: "All Stack" },
    { id: "fullstack", label: "Fullstack Dev" },
    { id: "ai", label: "AI & Automation" },
  ],
  items: [
    // Row 1: 2+1+1
    {
      id: "react",
      name: "React.js",
      category: "fullstack",
      description: "Frontend Architecture",
      icon: "lucide:atom",
      color: "blue",
      colSpan: 2,
    },
    {
      id: "astro",
      name: "Astro",
      category: "fullstack",
      description: "Performance First",
      icon: "lucide:rocket",
      color: "orange",
    },
    {
      id: "node",
      name: "Node.js",
      category: "fullstack",
      description: "Scalable Backend",
      icon: "lucide:server",
      color: "green",
    },

    // Row 2: 1+2+1
    {
      id: "postgres",
      name: "PostgreSQL",
      category: "fullstack",
      description: "Relational Data",
      icon: "lucide:database",
      color: "blue",
    },
    {
      id: "agent",
      name: "Autonomous Agents",
      category: "ai",
      description: "Multi-Agent Systems",
      icon: "lucide:bot-message-square",
      color: "pink",
      colSpan: 2,
    },
    {
      id: "n8n",
      name: "n8n",
      category: "ai",
      description: "Workflow Automation",
      icon: "lucide:workflow",
      color: "pink",
    },

    // Row 3: 1+1+2
    {
      id: "vibecode",
      name: "Vibe Code",
      category: "ai",
      description: "AI-Assisted Dev",
      icon: "lucide:sparkles",
      color: "purple",
    },
    {
      id: "next",
      name: "Next.js",
      category: "fullstack",
      description: "SSR & Edge",
      icon: "lucide:file-code",
      color: "white",
    },
    {
      id: "openai",
      name: "OpenAI API",
      category: "ai",
      description: "LLM Integration",
      icon: "lucide:bot",
      color: "emerald",
      colSpan: 2,
    },
  ],
} as const;
