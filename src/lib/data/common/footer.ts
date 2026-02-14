const username = import.meta.env.GITHUB_USERNAME;
const email = import.meta.env.MAIL_TO;
const linkedIn = import.meta.env.LINKEDIN;
const tiktok = import.meta.env.TIKTOK;
const fastwork = import.meta.env.FASTWORK;

export const footerData = {
  cta: {
    title: "Ready to start a project?",
    description:
      "Tell me your goals. I’ll help you turn them into a clear execution plan.",
    primaryAction: {
      text: "Start a Project",
      href: `mailto:${email}`,
      icon: "lucide:mail",
    },
    secondaryAction: {
      text: "Hire via Marketplace",
      href: `https://fastwork.id/user/${fastwork}`,
      icon: "lucide:external-link",
    },
  },
  socialLinks: [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/in/${linkedIn}`,
      icon: "lucide:linkedin",
    },
    {
      name: "GitHub",
      href: `https://github.com/${username}`,
      icon: "lucide:github",
    },
    {
      name: "Tiktok",
      href: `https://www.tiktok.com/@${tiktok}`,
      icon: "lucide:music-2",
    },
  ],
  copyright: {
    text: "© 2026 Ferry Pratama.",
  },
  repoTemplate: {
    description: "Free for personal use. Commercial use requires permission.",
    repo: {
      text: "Download Template",
      href: "https://github.com/ferrypratamaa/ferrypratama",
      icon: "lucide:github",
    },
  },
};
