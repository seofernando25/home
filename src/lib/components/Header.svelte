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
                <span class="logo-text">FERNANDO</span>
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
                <a href="/about" class="menu-item">
                    <span class="menu-number">03</span>
                    <span class="menu-label">About</span>
                </a>
                <a href="/blog" class="menu-item">
                    <span class="menu-number">04</span>
                    <span class="menu-label">Blog</span>
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

            <a href="https://github.com/SeoFernando25" class="cta-link" aria-label="GitHub">GITHUB</a>

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
        <a href="/about" class="mobile-menu-link" onclick={toggleMenu}>03 About</a>
        <a href="/blog" class="mobile-menu-link" onclick={toggleMenu}>04 Blog</a>
        
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