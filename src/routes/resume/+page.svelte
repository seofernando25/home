<svelte:head>
  <title>Résumé</title>
</svelte:head>

<div class="w-screen">
  <div class="container mx-auto bg-white shadow-2xl min-h-screen rounded-3xl">
    <div class=" mx-auto prose prose-resume max-w-none p-4 ">
      <!-- Heading   -->
      <h1>Fernando Nogueira</h1>
      <h2 class="grid grid-cols-2">
        <span>Ottawa, ON</span>
        <a class="font-bold text-resume" href="https://www.seofernando.com">
          www.seofernando.com
        </a>
        <span>(609) 401-9906</span>
        <span>abert036@uottawa.ca</span>
      </h2>

      <hr class="border-dashed border-2 w-full" />

      <main class="flex flex-col gap-4">
        <!-- Professional Summary -->
        <section class="rounded-xl card-compact outline">
          <div class="card-body">
            <h3 class="m-0 card-title">Professional Summary</h3>
            <p>
              Undergraduate student at the University of Ottawa, pursuing an
              <strong
                >Honours Bachelor of Science with Major in Computer Science and
                Minor in Statistics (French Immersion Stream)</strong
              >. Self-taught and driven by passion for technology. Focused on a
              continuous improvement mindset. I am a strong believer of the
              adoption of faster, cleaner and maintainable technologies.
            </p>
          </div>
        </section>

        <section class="rounded-xl card-compact outline">
          <div class="card-body">
            <h3 class="m-0  card-title">Experience</h3>
            <!-- 1 -->
            <h4>Full Stack Software Developer · Co-op (2023 - Present)</h4>
            <h5>Engineering Outreach Department · University of Ottawa</h5>
            <ul class="m-0">
              <li>
                Ported an existing NodeJS microservice to use
                <strong>esbuild</strong> decreasing build times by 80%.
              </li>
              <li>
                Wrote, maintained and tested API endpoints using pgSQL, Java and
                Vitest. <br /> Later integrating them to an Angular front-end.
              </li>
              <li>
                Aided in the clean-up of a legacy codebase including the removal
                of over 4000 linting issues
              </li>
              <li>
                Contributed over
                <span class="resume-primary">+23,000 additions</span>
                and
                <span class="text-error">-20,000 deletions</span>
                of peer reviewed code in a 4 month period.
              </li>
            </ul>
            <!-- 2 -->
            <h4>Avionics Developer · (2021 - Present)</h4>
            <h5>uOttawa Rocketry · University of Ottawa</h5>
            <ul class="m-0">
              <li>
                Simplified build process of a previous project from using git
                submodules to Conan.
              </li>
              <li>
                General maintenance of a C++ codebase including fixing memory
                leaks and improving code readability.
              </li>
              <li>
                Rewrote the Ground Station Telemetry Software from scratch using
                <strong>SvelteKit</strong>, <strong>ZeroMQ</strong> and
                <strong>WebSockets</strong> improving DX and UX for the Ground Crew.
              </li>
              <li>
                Facilitated and standardized the development environment of new
                team members with <strong>Dev Containers</strong>
              </li>
            </ul>
          </div>
        </section>
        <section class="rounded-xl card-compact outline grid grid-cols-2">
          <div class="p-2">
            <h3 class="m-0 card-title">Languages</h3>
            <ul class="m-0 pl-4">
              <li>Portuguese</li>
              <li>English</li>
              <li>French</li>
              <li>Spanish</li>
            </ul>
          </div>
          <div class="p-2 l-outline">
            <h3 class="m-0 card-title">Education</h3>
            <div class="flex flex-wrap justify-center">
              <img
                class="w-24 h-24 m-0 my-2 "
                src="/uottawa_logo.jpeg"
                alt="uOttawa Logo"
              />
              <div>
                <h4>University of Ottawa</h4>
                <h5 class="ml-4">
                  Honours Bachelor of Science <br /> (2021 - 2024)
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</div>

<style>
  /* A4 print styles */
  @media print {
    @page {
      margin: 1rem;
    }
  }

  .resume-primary {
    color: #34bf49;
  }

  .text-resume {
    color: #333;
  }

  .card-body {
    @apply p-2;
  }

  .edu-card {
    @apply p-2;
    @apply bg-gray-100;
    @apply rounded-xl;
  }

  .edu-card > img {
    @apply float-right;
  }

  .l-outline {
    /* Outline left only */
    box-shadow: -4px 0 0 0 #b8bdc9;
  }
</style>
