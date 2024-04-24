<svelte:head>
    <title>Résumé</title>
</svelte:head>

<div class="bg-white">
    <div class="container mx-auto rounded-3xl min-h-screen">
        <div class=" mx-auto prose prose-resume max-w-none p-4">
            <!-- Heading   -->
            <h1>Fernando Nogueira</h1>
            <h2 class="grid grid-cols-2">
                <span>Ottawa, ON</span>
                <a
                    class="font-bold text-resume relative"
                    href="https://www.seofernando.com"
                >
                    www.seofernando.com
                    <div
                        class="absolute bottom-8 left-60 right-0 rotate-[25deg] text-sm text-resume"
                    >
                        Check out my personal projects!
                    </div>
                </a>
                <span>(609) 401-9906</span>
                <span>abert036@uottawa.ca</span>
            </h2>

            <hr class="border-dashed border-2 w-full" />

            <main class="flex flex-col gap-4">
                <section
                    class="rounded-xl card-compact outline grid grid-cols-1 sm:grid-cols-3"
                >
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
                        <h3 class="m-0 card-title">Skills</h3>
                        <ul class="m-0 pl-4 text-sm">
                            <li>
                                Professional Proficiency <br />
                                <ul class="m-0 text-xs">
                                    <li>
                                        Typescript/Javascript, CSS/HTML, Python,
                                        Java
                                    </li>
                                    <li>
                                        Git, Docker, AWS, S3, PostgreSQL, Github
                                        Actions, CI/CD
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Previous Experience <br />
                                <ul class="m-0 text-xs">
                                    <li>Bash, C++, Rust, C#, Lua</li>
                                    <li>
                                        Cloudflare, Firebase, GNU/Linux, VMs,
                                        GraphQL
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="p-2 l-outline">
                        <h3 class="m-0 card-title">Education</h3>
                        <div class="flex flex-wrap justify-center items-center">
                            <img
                                class="w-16 h-16 m-0 my-2"
                                src="/uottawa_logo.jpeg"
                                alt="uOttawa Logo"
                            />
                            <div>
                                <h4>University of Ottawa</h4>
                                <h5 class="ml-4 text-sm">
                                    Honours Bachelor of Science <br /> (2021 - 2025)
                                </h5>
                                <p class="m-0 ml-4">GPA: 3.2/4.0</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Professional Summary -->
                <section class="rounded-xl card-compact outline">
                    <div class="card-body">
                        <h3 class="m-0 card-title">Professional Summary</h3>
                        <p>
                            Undergraduate student at the <strong
                                >University of Ottawa</strong
                            >, pursuing an
                            <strong>
                                Honours Bachelor of Science with Major in
                                Computer Science and Minor in Statistics (French
                                Immersion Stream)
                            </strong>
                            with an expected graduation date by the summer of
                            <strong>2025</strong>. <br /> Self-taught and driven
                            by passion for technology. Focused on a mindset of continuous
                            improvement. I am a strong believer of the adoption of
                            faster, cleaner and maintainable technologies.
                        </p>
                    </div>
                </section>

                <section class="rounded-xl card-compact outline">
                    <div class="card-body">
                        <h3 class="m-0 card-title">Experience</h3>
                        <!-- 1 -->
                        <h4>
                            Full Stack Software Developer · Co-op
                            <span class="whitespace-nowrap">
                                (January 2023 - April 2023)
                            </span>
                        </h4>
                        <h5>
                            Engineering Outreach Department · University of
                            Ottawa
                        </h5>
                        <ul class="m-0">
                            <li>
                                Ported an existing <strong
                                    >NodeJS microservice</strong
                                >
                                to use
                                <strong>esbuild</strong> decreasing build times
                                by
                                <strong>80%</strong>.
                            </li>
                            <li>
                                Used <strong>JUnit</strong> for
                                <strong>Unit Tests</strong>
                                and used
                                <strong>Jest/Vitest</strong> for
                                <strong>Integration Tests</strong>. <br />
                                Later integrating them to a front-end written in
                                <strong>Angular</strong>.
                            </li>
                            <li>
                                Aided in the clean-up of a legacy codebase
                                including the removal of over 4000 linting
                                issues
                            </li>
                            <li>
                                Contributed over
                                <span class="resume-primary"
                                    >+23,000 additions</span
                                >
                                and
                                <span class="text-error">-20,000 deletions</span
                                >
                                of peer reviewed code in a 4 month period.
                            </li>
                            <li>
                                Currently writting, maintaining and tested an
                                <strong>Apache Sling</strong>
                                codebase using pgSQL and Java.
                            </li>
                        </ul>
                        <!-- 2 -->
                        <h4>
                            Avionics Developer · Extracurricular <span
                                class="whitespace-nowrap"
                            >
                                (September 2021 - Present)
                            </span>
                        </h4>
                        <h5>uOttawa Rocketry · University of Ottawa</h5>
                        <ul class="m-0">
                            <li>
                                Simplified build process of projects from using
                                git submodules to
                                <strong>Conan</strong>.
                            </li>
                            <li>
                                General maintenance of a <strong>Rust</strong
                                >/<strong>C</strong> codebase including fixing memory
                                leaks and improving code maintainability.
                            </li>
                            <li>
                                Facilitated and standardized the development
                                environment of new team members with <strong
                                    >Dev Containers</strong
                                >
                            </li>
                            <li>
                                Ported a legacy Java based ground station
                                code-base to a modern web-based one using
                                <strong>SvelteKit</strong>,
                                <strong>Postgres</strong> and
                                <strong>Hasura</strong> improving DX and UX for the
                                Ground Crew.
                            </li>
                        </ul>
                        <!-- 3 -->
                        <h4>
                            Front-End Developer · Co-op
                            <span class="whitespace-nowrap">
                                (September 2023 - December 2023)
                            </span>
                        </h4>
                        <h5>Odin Team · Trading Central</h5>
                        <ul class="m-0">
                            <li>
                                Contributed to the development of a trading
                                analysis tool called
                                <a
                                    class="text-resume"
                                    href="https://www.tradingcentral.com/tc-products/tc-options-insight"
                                    >Options Insight</a
                                >
                            </li>
                            <li>
                                Ported legacy <strong>Jenkins</strong> pipelines
                                to use newer versions of NodeJS
                            </li>
                            <li>
                                Introduced my team to <strong
                                    >End-to-End Testing</strong
                                >
                                using <strong>Playwright</strong>
                            </li>
                            <li>
                                Wrote <strong> automation scripts</strong> for development
                                environment setup and projects initialization.
                            </li>
                            <li>
                                Introduced my team to
                                <strong> git commit hooks </strong>
                                to better enforce code quality, formatting and linting.
                            </li>
                            <li>
                                Updated libraries to use newer ECMAScript
                                features.
                            </li>
                            <li>
                                Contributed over
                                <span class="resume-primary"
                                    >+80,000 additions</span
                                >
                                and
                                <span class="text-error"
                                    >-100,000 deletions</span
                                >
                                of peer reviewed code in a 4 month period.
                            </li>
                        </ul>
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

    .l-outline {
        /* Outline left only */
        box-shadow: -3px 0 0 0 #b8bdc9;
    }
</style>
