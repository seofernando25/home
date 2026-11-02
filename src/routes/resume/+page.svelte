<script lang="ts">
    import { contactInfo, summary, skills, experiences, educations, research, awards } from '$lib/data/resume';

    function handlePrint() {
        if (typeof window !== 'undefined') {
            window.print();
        }
    }
</script>

<svelte:head>
    <title>Resume — Fernando Nogueira</title>
    <meta name="description" content="Resume of Fernando Nogueira - Full Stack & Front-End Software Developer, Avionics Developer." />
</svelte:head>

<main class="page-container">
    <!-- Screen Header -->
    <header class="section-header no-print">
        <div class="header-main">
            <div class="section-title-container">
                <h1>Resume</h1>
                <p class="section-subtitle">Curriculum Vitae & Technical Experience.</p>
            </div>
            
            <div class="action-buttons">
                <a 
                    href="/resume.pdf" 
                    download="Fernando_Nogueira_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="resume-btn resume-btn-primary"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download PDF
                </a>
                
                <button onclick={handlePrint} class="resume-btn resume-btn-outline" aria-label="Print resume">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    Print
                </button>
            </div>
        </div>
    </header>

    <!-- SCREEN VIEW (Interactive, 1400px responsive layout) -->
    <div class="screen-view no-print">
        <!-- Top Identity & Contact Banner -->
        <section class="identity-card">
            <div class="identity-info">
                <h2 class="identity-name">{contactInfo.name}</h2>
                <div class="identity-title">{contactInfo.title}</div>
            </div>
            
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="contact-label">LOC:</span>
                    <span class="contact-val">{contactInfo.location}</span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">TEL:</span>
                    <a href="tel:6094019906" class="contact-val link">{contactInfo.phone}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">MAIL:</span>
                    <a href="mailto:{contactInfo.email}" class="contact-val link">{contactInfo.email}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">WEB:</span>
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" class="contact-val link">{contactInfo.websiteDisplay}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">GH:</span>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" class="contact-val link">SeoFernando25</a>
                </div>
                <div class="contact-item">
                    <span class="contact-label">LI:</span>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="contact-val link">fernando-n</a>
                </div>
            </div>
        </section>

        <!-- Main Content 2-Column Grid -->
        <div class="resume-grid">
            <!-- Left / Main Column: Experience -->
            <div class="column-main">
                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Experience</h3>
                    </div>

                    <div class="experience-list">
                        {#each experiences as exp}
                            <article class="exp-item">
                                <div class="exp-header">
                                    <div class="exp-main-info">
                                        <div class="exp-title-row">
                                            <h4 class="exp-role">{exp.role}</h4>
                                            {#if exp.type !== exp.role}
                                                <span class="exp-tag">{exp.type}</span>
                                            {/if}
                                        </div>
                                        <div class="exp-company-info">
                                            {#if exp.team}
                                                <span>{exp.team}, {exp.company}</span>
                                            {:else}
                                                <span>{exp.company}</span>
                                            {/if}
                                        </div>
                                    </div>
                                    <div class="exp-meta">
                                        <span class="exp-period">{exp.period}</span>
                                    </div>
                                </div>

                                {#if exp.metrics && exp.metrics.length > 0}
                                    <div class="exp-metrics-text">{exp.metrics.join(', ')}</div>
                                {/if}

                                <ul class="exp-bullets">
                                    {#each exp.highlights as bullet}
                                        <li>{bullet}</li>
                                    {/each}
                                </ul>
                            </article>
                        {/each}
                    </div>
                </section>

                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Research & Awards</h3>
                    </div>

                    <div class="skills-group">
                        <div class="skills-group-label">Research</div>
                        <ul class="research-compact">
                            {#each research as item}
                                <li>
                                    <a href={`/research#${item.slug}`} class="research-link">{item.title}</a>
                                    <span class="research-meta">, {item.course}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="skills-group">
                        <div class="skills-group-label">Awards</div>
                        <ul class="research-compact">
                            {#each awards as award}
                                <li>
                                    <a href={award.link} target="_blank" rel="noopener noreferrer" class="research-link">{award.title}</a>
                                    <span class="research-meta">, {award.event} | {award.detail}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </section>
            </div>

            <!-- Right Column: Summary, Education, Skills, Languages -->
            <div class="column-side">
                <!-- Summary -->
                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Summary</h3>
                    </div>
                    <div class="card-body">
                        <p class="summary-text">{summary}</p>
                    </div>
                </section>

                <!-- Education -->
                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Education</h3>
                    </div>
                    <div class="card-body edu-body">
                        {#each educations as edu}
                            <div class="edu-entry">
                                <div class="edu-top-row">
                                    <div class="edu-logo-wrapper">
                                        <img src={edu.logo} alt="University of Ottawa" class="edu-logo" />
                                    </div>
                                    <div class="edu-heading">
                                        <h4 class="edu-inst">{edu.institution}</h4>
                                        <div class="edu-degree">{edu.degree}</div>
                                        <div class="edu-period">{edu.period}, {edu.expectedGrad}</div>
                                    </div>
                                </div>

                                <div class="edu-program">{edu.program}</div>
                            </div>
                        {/each}
                    </div>
                </section>

                <!-- Technical Skills -->
                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Skills</h3>
                    </div>
                    <div class="card-body skills-body">
                        <div class="skills-group">
                            <div class="skills-group-label">Professional</div>
                            <p class="skills-text">{skills.proficiency.join(', ')}</p>
                        </div>

                        <div class="skills-group">
                            <div class="skills-group-label">Research, Coursework & Projects</div>
                            <p class="skills-text muted">{skills.experience.join(', ')}</p>
                        </div>
                    </div>
                </section>

                <!-- Languages -->
                <section class="section-card">
                    <div class="card-header">
                        <h3 class="card-title">Languages</h3>
                    </div>
                    <div class="card-body">
                        <div class="lang-list">
                            {#each skills.languages as lang}
                                <div class="lang-row">
                                    <span class="lang-name">{lang.name}</span>
                                    <span class="lang-level">{lang.level}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

    <!-- PRINT VIEW (Tightly formatted, single-page print stylesheet) -->
    <div class="print-view print-only print-resume-page">
        <!-- Print Header -->
        <div class="p-header">
            <div class="p-header-left">
                <h1 class="p-name">{contactInfo.name}</h1>
                <div class="p-contact-line">
                    <span>{contactInfo.location}</span>
                    <span class="p-sep">|</span>
                    <span>{contactInfo.phone}</span>
                </div>
            </div>
            <div class="p-header-right">
                <div class="p-web">{contactInfo.websiteDisplay}</div>
                <div class="p-contact-links">
                    <span>{contactInfo.email}</span>
                </div>
            </div>
        </div>

        <!-- 3-Column Top Block: Languages, Skills, Education -->
        <div class="p-box p-top-box">
            <div class="p-col p-col-lang">
                <h2 class="p-col-title">Languages</h2>
                <ul class="p-lang-list">
                    {#each skills.languages as lang}
                        <li>{lang.name}</li>
                    {/each}
                </ul>
            </div>

            <div class="p-col p-col-skills">
                <h2 class="p-col-title">Skills</h2>
                <div class="p-skill-group">
                    <span class="p-skill-label">Professional</span>
                    <p class="p-skill-names">{skills.proficiency.join(', ')}</p>
                </div>
                <div class="p-skill-group">
                    <span class="p-skill-label">Research, Coursework & Projects</span>
                    <p class="p-skill-names">{skills.experience.join(', ')}</p>
                </div>
            </div>

            <div class="p-col p-col-edu">
                <div class="p-edu-title-row">
                    <h2 class="p-col-title">Education</h2>
                    <img src={educations[0].logo} alt="uOttawa" class="p-edu-logo" />
                </div>
                {#each educations as edu}
                    <div class="p-edu-entry">
                        <div class="p-edu-inst">{edu.institution}</div>
                        <div class="p-edu-degree">{edu.degree}</div>
                        <div class="p-edu-date">({edu.period}), Grad: {edu.expectedGrad}</div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Professional Summary Box -->
        <div class="p-box p-summary-box">
            <h2 class="p-sec-title">Professional Summary</h2>
            <p class="p-summary-text">{summary}</p>
        </div>

        <!-- Experience Box -->
        <div class="p-box p-exp-box">
            <h2 class="p-sec-title">Experience</h2>
            <div class="p-exp-items">
                {#each experiences as exp}
                    <div class="p-exp-entry">
                        <div class="p-exp-entry-header">
                            <span class="p-entry-role"><strong>{exp.role}</strong>{exp.type !== exp.role ? `, ${exp.type}` : ''} ({exp.period})</span>
                        </div>
                        {#if exp.team}
                            <div class="p-entry-company">{exp.team}, {exp.company}</div>
                        {:else}
                            <div class="p-entry-company">{exp.company}</div>
                        {/if}
                        <ul class="p-entry-bullets">
                            {#each exp.highlights as bullet}
                                <li>{bullet}</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Research & Awards Box -->
        <div class="p-box p-exp-box">
            <h2 class="p-sec-title">Research & Awards</h2>
            <ul class="p-entry-bullets">
                {#each research as item}
                    <li><strong>{item.title}</strong>, {item.course}</li>
                {/each}
                {#each awards as award}
                    <li><strong>{award.title}</strong>, {award.event} | {award.detail}</li>
                {/each}
            </ul>
        </div>
    </div>
</main>

<style>
    /* =========================================
       SCREEN STYLES (Interactive 1400px layout)
       ========================================= */
    .page-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 8rem 1.5rem 6rem;
        min-height: 100vh;
    }

    .section-header {
        padding-bottom: 4rem;
    }

    .header-main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media (min-width: 768px) {
        .header-main {
            flex-direction: row;
            align-items: flex-end;
        }
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

    .action-buttons {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .resume-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem 1.25rem;
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        border-radius: 0;
        transition: all 0.2s ease;
        text-decoration: none;
    }

    .resume-btn-primary {
        background-color: var(--text-primary);
        color: var(--bg-surface);
        border: 1px solid var(--text-primary);
    }

    .resume-btn-primary:hover {
        background-color: transparent;
        color: var(--text-primary);
    }

    .resume-btn-outline {
        background-color: var(--bg-surface);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
    }

    .resume-btn-outline:hover {
        border-color: var(--text-primary);
    }

    /* Screen Layout */
    .screen-view {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .identity-card {
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: space-between;
    }

    @media (min-width: 1024px) {
        .identity-card {
            flex-direction: row;
            align-items: center;
        }
    }

    .identity-name {
        font-size: 2.25rem;
        font-weight: 700;
        font-family: var(--font-primary);
        letter-spacing: -0.04em;
        color: var(--text-primary);
        line-height: 1.1;
        margin-bottom: 0.5rem;
    }

    .identity-title {
        font-family: var(--font-mono);
        font-size: 0.9375rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem 1.5rem;
        font-family: var(--font-mono);
        font-size: 0.8125rem;
    }

    @media (min-width: 640px) {
        .contact-grid {
            grid-template-columns: repeat(2, auto);
        }
    }

    @media (min-width: 1200px) {
        .contact-grid {
            grid-template-columns: repeat(3, auto);
        }
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .contact-label {
        color: var(--text-muted);
        font-weight: 700;
        letter-spacing: 0.05em;
        font-size: 0.75rem;
    }

    .contact-val {
        color: var(--text-primary);
    }

    .contact-val.link:hover {
        text-decoration: underline;
    }

    .resume-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: start;
    }

    @media (min-width: 1024px) {
        .resume-grid {
            grid-template-columns: 1.6fr 1fr;
        }
    }

    .column-main,
    .column-side {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .section-card {
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 0.75rem;
    }

    .card-title {
        font-family: var(--font-primary);
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .summary-text {
        font-size: 0.9375rem;
        line-height: 1.7;
        color: var(--text-primary);
        opacity: 0.9;
    }

    .experience-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .exp-item {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--border-color);
    }

    .exp-item:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }

    .exp-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        .exp-header {
            flex-direction: row;
            align-items: flex-start;
        }
    }

    .exp-title-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .exp-role {
        font-size: 1.125rem;
        font-weight: 700;
        font-family: var(--font-primary);
        color: var(--text-primary);
        letter-spacing: -0.01em;
    }

    .exp-tag {
        font-family: var(--font-mono);
        font-size: 0.6875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-muted);
    }

    .exp-company-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
        flex-wrap: wrap;
    }

    .exp-period {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        white-space: nowrap;
    }

    .exp-metrics-text {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .exp-bullets {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .exp-bullets li {
        font-size: 0.875rem;
        line-height: 1.6;
        color: var(--text-primary);
        opacity: 0.9;
    }

    .research-compact {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .research-compact li {
        font-size: 0.875rem;
        line-height: 1.5;
        color: var(--text-primary);
    }

    .research-link {
        color: var(--text-primary);
        font-weight: 600;
        text-decoration: none;
    }

    .research-link:hover {
        text-decoration: underline;
    }

    .research-meta {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
    }

    .edu-body {
        gap: 1.25rem;
    }

    .edu-entry {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }

    .edu-entry:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }

    .edu-top-row {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .edu-logo-wrapper {
        flex-shrink: 0;
        width: 3.5rem;
        height: 3.5rem;
        display: block;
        padding: 0;
        border: none;
        background: none;
    }

    .edu-logo {
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
        display: block;
    }

    .edu-heading {
        flex: 1;
    }

    .edu-inst {
        font-size: 1.0625rem;
        font-weight: 700;
        font-family: var(--font-primary);
        color: var(--text-primary);
    }

    .edu-degree {
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-top: 0.125rem;
    }

    .edu-period {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
    }

    .edu-program {
        font-size: 0.8125rem;
        color: var(--text-primary);
        line-height: 1.4;
    }

    .skills-body {
        gap: 1.25rem;
    }

    .skills-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .skills-group-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 0.05em;
    }

    .skills-text {
        font-size: 0.8125rem;
        line-height: 1.6;
        color: var(--text-primary);
        margin: 0;
    }

    .skills-text.muted {
        color: var(--text-muted);
    }

    .lang-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .lang-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
    }

    .lang-name {
        font-family: var(--font-primary);
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--text-primary);
    }

    .lang-level {
        font-family: var(--font-mono);
        font-size: 0.6875rem;
        color: var(--text-muted);
    }

    /* Print view is hidden on screen */
    .print-only {
        display: none !important;
    }

    /* =========================================
       PRINT STYLES (Single Page 8.5" x 11")
       ========================================= */
    @media print {
        @page {
            size: letter portrait;
            margin: 0.3in 0.4in;
        }

        *, *:before, *:after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-shadow: none !important;
        }

        :global(html),
        :global(body) {
            background: #ffffff !important;
            color: #111111 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
            font-size: 8pt !important;
            line-height: 1.25 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
        }

        :global(.site-nav),
        :global(footer),
        :global(.bg-grid),
        .no-print {
            display: none !important;
        }

        .page-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            min-height: auto !important;
        }

        .print-only {
            display: block !important;
        }

        .print-resume-page {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.35rem !important;
            box-sizing: border-box !important;
        }

        /* Print Header */
        .p-header {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            padding-bottom: 0.25rem !important;
        }

        .p-name {
            font-size: 14pt !important;
            font-weight: 700 !important;
            color: #000 !important;
            margin: 0 0 0.1rem 0 !important;
            line-height: 1.1 !important;
        }

        .p-contact-line {
            font-size: 8pt !important;
            color: #444 !important;
            display: flex !important;
            gap: 0.35rem !important;
            align-items: center !important;
        }

        .p-header-right {
            text-align: right !important;
            font-size: 8pt !important;
        }

        .p-web {
            font-weight: 700 !important;
            color: #000 !important;
        }

        .p-contact-links {
            color: #444 !important;
            margin-top: 0.1rem !important;
        }

        .p-sep {
            color: #888 !important;
        }

        /* Print Boxes */
        .p-box {
            border: 1px solid #634936 !important;
            background: #ffffff !important;
            padding: 0.35rem 0.5rem !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
        }

        /* 3-Column Top Box */
        .p-top-box {
            display: grid !important;
            grid-template-columns: 100px 1fr 140px !important;
            gap: 0.5rem !important;
            padding: 0.35rem 0.5rem !important;
        }

        .p-col {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.2rem !important;
        }

        .p-col-lang {
            border-right: 1px solid #ccc !important;
            padding-right: 0.35rem !important;
        }

        .p-col-skills {
            border-right: 1px solid #ccc !important;
            padding-right: 0.35rem !important;
        }

        .p-col-title {
            font-size: 8.5pt !important;
            font-weight: 700 !important;
            margin: 0 !important;
            color: #000 !important;
            line-height: 1.2 !important;
        }

        .p-lang-list {
            margin: 0 !important;
            padding: 0 !important;
            list-style: none !important;
            font-size: 7.5pt !important;
            line-height: 1.35 !important;
            color: #222 !important;
        }

        .p-skill-group {
            margin-bottom: 0.15rem !important;
        }

        .p-skill-label {
            font-size: 7pt !important;
            font-weight: 700 !important;
            color: #555 !important;
            display: block !important;
            margin-bottom: 0.05rem !important;
        }

        .p-skill-names {
            font-size: 7pt !important;
            margin: 0 !important;
            color: #111 !important;
            line-height: 1.25 !important;
        }

        .p-edu-title-row {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
        }

        .p-edu-logo {
            width: 18px !important;
            height: 18px !important;
            object-fit: contain !important;
        }

        .p-edu-inst {
            font-size: 7.5pt !important;
            font-weight: 700 !important;
            color: #000 !important;
            line-height: 1.2 !important;
        }

        .p-edu-degree {
            font-size: 7pt !important;
            color: #222 !important;
            line-height: 1.2 !important;
        }

        .p-edu-date {
            font-size: 6.5pt !important;
            color: #555 !important;
        }

        .p-edu-entry {
            margin-bottom: 0.2rem !important;
        }

        /* Summary Box */
        .p-sec-title {
            font-size: 8.5pt !important;
            font-weight: 700 !important;
            margin: 0 0 0.15rem 0 !important;
            color: #000 !important;
            line-height: 1.2 !important;
        }

        .p-summary-text {
            font-size: 7.25pt !important;
            margin: 0 !important;
            line-height: 1.3 !important;
            color: #222 !important;
        }

        /* Experience Box */
        .p-exp-box {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.3rem !important;
        }

        .p-exp-items {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.35rem !important;
        }

        .p-exp-entry {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.08rem !important;
        }

        .p-exp-entry-header {
            display: flex !important;
            justify-content: space-between !important;
            font-size: 7.5pt !important;
            color: #000 !important;
        }

        .p-entry-role strong {
            font-weight: 700 !important;
        }

        .p-entry-company {
            font-size: 7pt !important;
            font-style: italic !important;
            color: #555 !important;
        }

        .p-entry-bullets {
            margin: 0.08rem 0 0 0 !important;
            padding-left: 1rem !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.06rem !important;
        }

        .p-entry-bullets li {
            font-size: 6.75pt !important;
            line-height: 1.22 !important;
            color: #222 !important;
        }
    }
</style>
