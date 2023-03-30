// Github Repos reduced type
type Repo = {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  fork: boolean;
};

export const load = async (e) => {
  let repos: Repo[] = [];
  let totalStars = 0;
  try {
    const res = await e.fetch(
      "https://api.github.com/users/SeoFernando25/repos"
    );
    repos = await res.json();
    // Filter out forks
    repos = repos.filter((repo) => !repo.fork);
    // Sort by updated date
    repos = repos.sort((a, b) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB.getTime() - dateA.getTime();
    });
    // Sort by created date
    repos = repos.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB.getTime() - dateA.getTime();
    });

    // Sort by stars
    repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    let totalStars = repos.reduce(
      (acc, curr) => acc + curr.stargazers_count,
      0
    );
    return {
      err: null,
      repos,
      totalStars,
    };
  } catch (error) {
    console.error(error);
    return {
      err: (error as Error).message,
      repos,
      totalStars,
    };
  }
};
