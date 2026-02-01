const token = import.meta.env.GITHUB_TOKEN;
const username = import.meta.env.GITHUB_USERNAME;

const getGithubStats = async () => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

async function getCommitStats() {
  if (!token) {
    console.warn("GITHUB TOKEN not found!");
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
      json.data.user.contributionsCollection.contributionCalendar
        .totalContributions;

    if (commits > 1000) {
      return (commits / 1000).toFixed(1) + "k";
    }
    return commits || "0";
  } catch (error) {
    console.error("Error fetching commits:", error);
    return "0";
  }
}

const totalCommits = await getCommitStats();

export const githubData = {
  profile: await getGithubStats(),
  totalCommits,
};

export { getGithubStats, getCommitStats };
