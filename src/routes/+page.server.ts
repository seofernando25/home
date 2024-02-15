import { GITHUB_TOKEN } from "$env/static/private";

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

export async function load(e) {
    let repos: Repo[] = [];
    let totalStars = 0;
    try {
        const res = await e.fetch(
            "https://api.github.com/users/SeoFernando25/repos?per_page=100&page=1&sort=updated&direction=asc",
            {
                headers: {
                    "User-Agent": "SeoFernando25",
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                },
            }
        );
        const txt = await res.text();
        repos = JSON.parse(txt);
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
            repos: repos ?? [],
            totalStars,
        };
    } catch (error) {
        console.error(error);
        return {
            err: (error as Error).message,
            repos: repos ?? [],
            totalStars,
        };
    }
}
