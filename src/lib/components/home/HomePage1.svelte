<script lang="ts">
  import { hrefSmoothScroll } from "$lib/directives/hrefSmoothScroll";
  import SwapProfile from "../SwapProfile.svelte";
  import TextSlashList from "../TextSlashList.svelte";

  const imA = [
    "Full-Stack Developer",
    "CompSci Student",
    "Web Developer",
    "Learner",
    "Programmer",
    "Tinkerer",
    "Svelte Enthusiast",
    "Web Purist",
    "Aspiring Computer Wizard",
  ];
</script>

<section class="flex items-center flex-col p-4 gap-4 overflow-clip">
  <div class="flex items-center flex-col w-full">
    <div
      class="card card-compact w-full  sm:w-auto sm:card-side bg-base-200 shadow-xl"
    >
      <div class="p-4 self-center pb-0">
        <SwapProfile />
      </div>
      <div class="sm:card-body p-2  ">
        <p class="font-semibold text-2xl  ">
          Hello 👋👀 <span class="whitespace-nowrap">I'm Fernando,</span>
          <!-- Center text middle -->
          <span class="justify-center flex gap-4 p-4 items-center ">
            I'm a
            <TextSlashList strings="{imA}" />
          </span>
          <!-- </div> -->
        </p>
        <div class="card-actions justify-end">
          <!-- EMAIL -->
          <a
            class="hover:text-slate-200 transition"
            href="mailto:abert036@uottawa.ca"
          >
            <i class="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Links -->
  <div class="my-auto flex flex-row gap-8">
    <!-- Github -->
    <a
      href="https://github.com/SeoFernando25"
      class="main-link hover:text-slate-200"
    >
      <i class="fab fa-github text-4xl sm:text-7xl"></i>
      Github
    </a>
    <!-- Linkedin -->
    <a
      href="https://www.linkedin.com/in/fernando-n/"
      class="main-link hover:text-slate-200"
    >
      <i class="fab fa-linkedin text-4xl sm:text-7xl"></i>
      Linkedin
    </a>
    <!-- Stack Exchange -->
    <a
      href="https://stackexchange.com/users/11740005/seofernando?tab=accounts"
      class="main-link hover:text-slate-200"
    >
      <i class="fab fa-stack-overflow text-4xl sm:text-7xl"></i>
      Stack Overflow
    </a>
    <!-- Resume -->
    <div class="tooltip tooltip-left sm:tooltip-top">
      <a href="resume" class="main-link hover:text-slate-200">
        <i class="far fa-file text-4xl sm:text-7xl"></i>
        Résumé
      </a>
    </div>
  </div>

  <!-- Scroll down arrow flex bottom -->
  <a class="mt-auto text-center" href="#the-good-stuff" use:hrefSmoothScroll>
    <p class="mb-4">Scroll down for the good stuff</p>
    <i class="fas fa-angle-down text-4xl animate-bounce mt-auto"></i>
  </a>
</section>

<style>
  section {
    height: 100vh;
    height: 100dvh;

    scroll-snap-align: start;
  }

  .main-link {
    @apply flex flex-col gap-2 text-center link-hover transition;
  }
</style>
