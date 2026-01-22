<script lang="ts">
  import { onMount } from 'svelte';
  
  let isMenuOpen = $state(false);
  let isDark = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  onMount(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark = false;
        document.documentElement.classList.remove('dark');
    }
  });
</script>

<nav class="site-nav">
    <div class="nav-container">
        <div class="nav-left">
            <a href="/" class="logo">
                <img src="/favicon.webp" alt="Fernando" class="logo-image">
            </a>

            <div class="desktop-menu">
                <a href="/" class="menu-item">
                    <span class="menu-number">01</span>
                    <span class="menu-label">Home</span>
                </a>
                <a href="/projects" class="menu-item">
                    <span class="menu-number">02</span>
                    <span class="menu-label">Projects</span>
                </a>
                <a href="/blog" class="menu-item">
                    <span class="menu-number">03</span>
                    <span class="menu-label">Blog</span>
                </a>
                <a href="/research" class="menu-item">
                    <span class="menu-number">04</span>
                    <span class="menu-label">Research</span>
                </a>
            </div>
        </div>

        <div class="cta-buttons">
            <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
                {#if isDark}
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                {:else}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                {/if}
            </button>

            <div class="divider"></div>

            <a href="https://github.com/SeoFernando25" class="cta-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>

            <div class="divider"></div>

            <a href="mailto:abert036@uottawa.ca" class="cta-button">
                Contact
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>

        <button class="mobile-menu-btn" onclick={toggleMenu} aria-label="Open menu">
             {#if isMenuOpen}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             {:else}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
             {/if}
        </button>
    </div>

    <div class="mobile-menu {isMenuOpen ? 'open' : ''}" id="mobile-menu">
        <a href="/" class="mobile-menu-link" onclick={toggleMenu}>01 Home</a>
        <a href="/projects" class="mobile-menu-link" onclick={toggleMenu}>02 Projects</a>
        <a href="/blog" class="mobile-menu-link" onclick={toggleMenu}>03 Blog</a>
        <a href="/research" class="mobile-menu-link" onclick={toggleMenu}>04 Research</a>
        
        <div class="mobile-divider"></div>
        
        <div class="mobile-theme-row">
            <span class="mobile-theme-label">Theme</span>
            <button class="mobile-theme-btn" onclick={toggleTheme}>
                 {#if isDark}
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                {:else}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                {/if}
            </button>
        </div>

        <a href="mailto:abert036@uottawa.ca" class="mobile-menu-link">Contact</a>
    </div>
</nav>

<style>
    .site-nav {
        position: fixed;
        width: 100%;
        z-index: 100;
        background-color: var(--bg-primary);
        opacity: 0.95;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        height: var(--nav-height);
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .nav-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1.5rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-left {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: var(--text-primary);
        transition: opacity 0.2s, color 0.3s ease;
    }

    .logo-image {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
        display: block;
    }

    .desktop-menu {
        display: none;
        align-items: center;
        gap: 2.5rem;
    }

    @media (min-width: 1024px) {
        .desktop-menu {
            display: flex;
        }
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        text-decoration: none;
        transition: color 0.2s;
    }

    .menu-number {
        font-family: var(--font-mono);
        font-size: 0.625rem;
        color: var(--text-muted);
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    .menu-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
        color: var(--text-muted);
        transition: color 0.3s ease;
    }

    .menu-item:hover .menu-number,
    .menu-item:hover .menu-label {
        color: var(--text-primary);
    }

    .theme-toggle {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.3s ease;
    }

    .theme-toggle:hover {
        color: var(--text-primary);
    }

    .mobile-menu-btn {
        display: block;
        background: none;
        border: none;
        color: var(--text-primary);
        cursor: pointer;
        padding: 0;
    }

    @media (min-width: 1024px) {
        .mobile-menu-btn {
            display: none;
        }
    }

    .mobile-menu {
        position: absolute;
        top: 4rem;
        left: 0;
        width: 100%;
        background-color: var(--bg-primary);
        border-bottom: 1px solid var(--border-color);
        padding: 1.5rem;
        display: none;
        flex-direction: column;
        gap: 1.5rem;
        transition: background-color 0.3s ease, border-color 0.3s ease;
        z-index: 100;
    }

    .mobile-menu.open {
        display: flex;
    }

    .mobile-menu-link {
        font-size: 0.875rem;
        font-family: var(--font-mono);
        text-transform: uppercase;
        color: var(--text-primary);
        text-decoration: none;
    }

    .mobile-theme-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-width: 0;
    }

    .mobile-theme-label {
        font-size: 0.875rem;
        font-family: var(--font-mono);
        text-transform: uppercase;
        color: var(--text-muted);
        flex-shrink: 0;
    }

    .mobile-theme-btn {
        color: var(--text-primary);
        padding: 0.5rem;
        border: 1px solid var(--border-color);
        background: none;
        border-radius: 4px;
        cursor: pointer;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cta-buttons {
        display: none;
        align-items: center;
        gap: 1.5rem;
    }

    @media (min-width: 1024px) {
        .cta-buttons {
            display: flex;
        }
    }

    .cta-link {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        text-decoration: none;
        transition: color 0.3s ease;
        padding: 0.25rem;
    }

    .cta-link:hover {
        color: var(--text-primary);
    }

    .cta-button {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        padding: 0.5rem 1.25rem;
        font-size: 0.75rem;
        font-family: var(--font-mono);
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .cta-button:hover {
        opacity: 0.9;
    }

    .divider {
        height: 1rem;
        width: 1px;
        background-color: var(--border-color);
        transition: background-color 0.3s ease;
    }

    .mobile-divider {
        height: 1px;
        background-color: var(--border-color);
        width: 100%;
    }
</style>