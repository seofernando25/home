<script lang="ts">
    import SocialButton from "$lib/components/ui/SocialButton.svelte";

    const name = "Fernando Nogueira";
    const tagline = "Software Engineer & Aspiring Wizard";
    const avatarSrc = "/favicon.webp";
</script>

<section class="hero-profile">
    <div class="hero-inner">
        <div class="hero-layout">
            <div class="avatar-wrapper">
                <img src={avatarSrc} alt={name} class="avatar" />
            </div>
            
            <div class="profile-content">
                <h1 class="name">{name}</h1>
                <p class="tagline">{tagline}</p>
                
                <div class="social-row">
                    <SocialButton href="https://github.com/SeoFernando25" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </SocialButton>
                    <SocialButton href="https://www.linkedin.com/in/fernando-n/" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </SocialButton>
                    <SocialButton href="mailto:abert036@uottawa.ca" aria-label="Email">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </SocialButton>
                </div>
            </div>
        </div>
        
        <div class="description">
            <p>I'm a Master's Student at the Faculty of Engineering in the University of Ottawa, Canada.</p>
            <p>My main interests are focused on Telemetry intelligence, Machine Learning and System Architecture.</p>
            <p>I like to build tools, break things, and occasionally fix them.</p>
            <p>I use Arch btw.</p>
        </div>
    </div>
</section>

<style>
    .hero-inner {
        max-width: 56rem; /* 4xl */
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        position: relative;
        z-index: 10;
    }

    .hero-layout {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        width: 100%;
    }

    @media (min-width: 768px) {
        .hero-layout {
            flex-direction: row;
            align-items: center;
        }
    }

    .avatar-wrapper {
        flex-shrink: 0;
    }

    .avatar {
        width: 8rem;
        height: 8rem;
        border-radius: 9999px;
        border: 1px solid var(--border-color);
        background-color: var(--bg-surface);
        object-fit: cover;
    }


    .name {
        font-size: 2.25rem; /* text-4xl */
        font-weight: 700;
        font-family: var(--font-primary);
        color: var(--text-primary);
        letter-spacing: -0.025em;
        line-height: 1.25ch;
    }

    @media (min-width: 768px) {
        .name {
            font-size: 3rem; /* text-5xl */
        }
    }

    .tagline {
        font-family: var(--font-mono);
        font-size: 1.125rem; /* text-lg */
        color: var(--text-muted);
        margin-bottom: 1rem;
    }

    .social-row {
        display: flex;
        gap: 1rem;
    }

    .description p {
        font-family: var(--font-primary);
        color: var(--text-primary);
        opacity: 0.8;
        margin-bottom: 1.25rem;
    }

</style>
