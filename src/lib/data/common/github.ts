const token = import.meta.env.GITHUB_TOKEN;
const username = import.meta.env.GITHUB_USERNAME;

const getGithubStats = async () => {
  if (!token || !username) {
    console.warn("GITHUB_TOKEN or GITHUB_USERNAME not found!");
    return null;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
};

async function getCommitStats() {
  if (!token || !username) {
    console.warn("GITHUB_TOKEN or GITHUB_USERNAME not found!");
    return "0";
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
                query{
                    user(login: "${username}"){
                        contributionsCollection{
                            contributionCalendar{
                                totalContributions
                            }
                        }
                    }
                }
                `,
      }),
    });
    const json = await response.json();
    const commits =
      json.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions;

    if (!commits) return "0";
    if (commits > 1000) {
      return (commits / 1000).toFixed(1) + "k";
    }
    return String(commits);
  } catch (error) {
    console.error("Error fetching commits:", error);
    return "0";
  }
}

// Fetch data with fallback values
const totalCommits = await getCommitStats();
const profile = await getGithubStats();

export const githubData = {
  profile: profile || { name: username || "Developer", public_repos: 0 },
  totalCommits,
};

export { getGithubStats, getCommitStats };
