<script lang="ts">
    import SocialButton from "$lib/components/ui/SocialButton.svelte";
</script>

<footer>
    <div class="footer-content">
        <div class="footer-brand">
            <a href="/" class="logo">
                <img src="/favicon.webp" alt="Fernando Nogueira" class="footer-logo">
            </a>
            <div class="footer-socials">
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

        <div class="footer-links">
            <div class="footer-column">
                <span class="footer-column-label">Site</span>
                <a href="/" class="footer-link">Home</a>
                <a href="/projects" class="footer-link">Projects</a>
                <a href="/blog" class="footer-link">Blog</a>
            </div>
            
            <div class="footer-column">
                <span class="footer-column-label">Connect</span>
                 <a href="https://github.com/SeoFernando25" class="footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/fernando-n/" class="footer-link">LinkedIn</a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p class="footer-copyright">
            © {new Date().getFullYear()} Fernando Nogueira. All rights reserved.
        </p>
    </div>
</footer>

<style>
    footer {
        background-color: var(--bg-primary);
        border-top: 1px solid var(--border-color);
        padding: 4rem 1.5rem 3rem;
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .footer-content {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    @media (min-width: 1024px) {
        .footer-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
    }

    .footer-brand {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .footer-logo {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        display: block;
    }

    .footer-socials {
        display: flex;
        gap: 1.5rem;
    }

    .footer-links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        flex: 1;
        max-width: 800px;
    }

    @media (min-width: 768px) {
        .footer-links {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer-column-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .footer-link {
        font-size: 0.875rem;
        color: var(--text-muted);
        transition: color 0.2s;
    }

    .footer-link:hover {
        color: var(--text-primary);
    }

    .footer-bottom {
        max-width: 1400px;
        margin: 3rem auto 0;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
    }

    .footer-copyright {
        font-size: 0.75rem;
        color: var(--text-muted);
        font-family: var(--font-mono);
    }
</style>