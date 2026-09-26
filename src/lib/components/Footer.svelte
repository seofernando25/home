<footer>
    <div class="footer-content">
        <div class="footer-brand">
            <a href="/" class="logo">
                <img src="/favicon.webp" alt="Fernando Nogueira" class="footer-logo">
            </a>
            <div class="footer-socials">
                <a href="https://x.com/seofernando" class="footer-social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><path d="M28 28L18.6145 14.0124L18.6305 14.0255L27.0929 4H24.265L17.3713 12.16L11.8968 4H4.48021L13.2425 17.0593L13.2414 17.0582L4 28H6.82792L14.4921 18.9215L20.5834 28H28ZM10.7763 6.18182L23.9449 25.8182H21.7039L8.52468 6.18182H10.7763Z" fill="currentColor"></path></svg>
                </a>
                <a href="https://github.com/SeoFernando25" class="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/fernando-n/" class="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:abert036@uottawa.ca" class="footer-social-link" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
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
                <a href="https://x.com/seofernando" class="footer-link">X / Twitter</a>
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

    .footer-social-link {
        color: var(--text-muted);
        width: 1.5rem;
        height: 1.5rem;
        transition: color 0.2s;
    }

    .footer-social-link:hover {
        color: var(--text-primary);
    }

    .footer-social-link svg,
    .footer-social-link .github-icon {
        display: block;
        width: 100%;
        height: 100%;
    }

    .footer-social-link .github-icon {
        fill: currentColor;
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