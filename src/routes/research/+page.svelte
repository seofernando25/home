<script lang="ts">
    import ResearchCard from "$lib/components/ui/ResearchCard.svelte";

    const researchEntries = [
        {
            title: "From Handcrafted Features to Double Descent on CIFAR-10",
            year: "2025",
            description: "Investigates the double descent phenomenon in deep learning, comparing classical SVM with Fisher Vectors to a size varying CNN on CIFAR-10.",
            conclusion: "Results demonstrate that over-parameterized models significantly outperform both the classical baseline and critically-parameterized models, showing that implicit regularization in the over-parameterized regime yields superior generalization and inter-class discrimination.",
            repo: "https://github.com/seofernando25/CSI5155/tree/main/project/report",
            paper: "https://cdn.githubraw.com/seofernando25/CSI5155/main/project/report/main.pdf",
        },
        {
            title: "Testing the Effectiveness, Convergence, and Stability of Search-Based Hyperparameter Optimizers",
            year: "2025",
            description: "Empirical study comparing Random Search against GA and PSO for hyperparameter tuning of DTs, KNNs, and a small CNN on grayscale CIFAR-10.",
            conclusion: "Across 10 runs, methods reached similar fitness plateaus and no statistically significant differences were found (Wilcoxon p>0.05); under such tight budgets, population-based metaheuristics behaved similarly to Random Search. With budget < 2× population size, GA/PSO complexity isn't justified; Random Search is an equally effective baseline under strict evaluation limits.",
            repo: "https://github.com/AI-Enabled-Software-Testing/Hyperparameter-Tuning-Search-Project",
            paper: "https://cdn.githubraw.com/AI-Enabled-Software-Testing/Hyperparameter-Tuning-Search-Project/e6f48631/report/CSI5186_AI_Testing_Project_Report___Fernando__Kelvin.pdf"
        }
    ];
</script>

<main class="page-container">
    <header class="section-header">
        <div class="section-title-container">
            <h1>Research</h1>
            <p class="section-subtitle">Research and empirical studies.</p>
        </div>
    </header>

    <div class="page-content">
    <div class="research-list">
        {#each researchEntries as entry}
            <ResearchCard 
                title={entry.title}
                year={entry.year}
                description={entry.description}
                conclusion={entry.conclusion}
                repo={entry.repo}
                paper={entry.paper}
            />
        {/each}
    </div>
</div>
</main>

<style>
    .page-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 8rem 1.5rem 6rem;
        min-height: 100vh;
    }

    .section-header {
        padding-bottom: 4rem;
    }

    .section-title-container h1 {
        font-size: 3rem;
        font-weight: 700;
        font-family: var(--font-primary);
        letter-spacing: -0.05em;
        line-height: 1;
        padding-bottom: 1rem;
        color: var(--text-primary);
    }

    .section-subtitle {
        font-family: var(--font-mono);
        font-size: 1rem;
        color: var(--text-muted);
        line-height: 1.6;
    }

    .page-content {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0;
    }

    .research-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>
