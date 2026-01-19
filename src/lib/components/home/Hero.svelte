<script lang="ts">
  import TextSlashList from '$lib/components/TextSlashList.svelte';
  
  const imA = [
    'FULL-STACK DEVELOPER',
    'LEARNER',
    'PROGRAMMER',
    'ARCH USER 🐧 BTW',
    'TINKERER',
    'WEB PURIST',
    'ASPIRING COMPUTER WIZARD'
  ];
</script>

<header class="hero-header">
    <div class="bg-grid"></div>
    <div class="hero-content">
        <h1>
            Fernando Nogueira <br>
            <span class="hero-muted">Software Engineer</span>
        </h1>
        <div class="hero-subtitle">
            <TextSlashList strings={imA} maxWCh={30} delay={3000}/>
        </div>
        <div class="cta-container">
            <a href="/projects" class="cta-button" style="font-size: 1rem; padding: 1rem 2rem;">
                VIEW PROJECTS
            </a>
             <a href="mailto:abert036@uottawa.ca" class="btn primary" style="font-size: 1rem; padding: 1rem 2rem;">
                GET IN TOUCH
            </a>
        </div>
    </div>
</header>