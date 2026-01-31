export const code = `
const status = "available";
const message = "I'm currently available for new projects.";
const stack = ["React", "Node.js", "PostgreSQL", "TypeScript"];
const experience = "2+ years";

export async function getProjects() {
  const response = await fetch("/api/projects");
  const data = await response.json();
  return data;
}`;
