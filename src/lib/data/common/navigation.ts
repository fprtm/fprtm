export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "#" },
  { title: "Approach", href: "#" },
  { title: "Work", href: "#" },
  { title: "Services", href: "#" },
  { title: "Contact", href: "#" },
];

export const navCta = {
  text: "Let's Talk",
  href: `mailto:${import.meta.env.EMAIL}`,
  icon: "lucide:arrow-right",
};
