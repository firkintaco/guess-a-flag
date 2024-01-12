<script>
	import { page } from '$app/stores';
	import {score} from '../stores/store.js'
</script>

<header class="shadow px-4 bg-[#FBFBFB]">
 <nav
  class="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <div class="ml-2">
      <a class="text-xl text-neutral-800 dark:text-neutral-200" href="/"
        >Guess-A-Flag</a
      >
    </div>
    


      <!-- Left links -->
	  <ul class="flex">
		<li class="mr-3">
		  <a class="normal-link" href="/" class:active="{$page.url.pathname == "/"}">Home</a>
		</li>
		<li class="mr-3">
		  <a class="normal-link" href="/scores" class:active="{$page.url.pathname.includes("/scores")}">Scores</a>
		</li>
	  </ul>
      <span class="font-bold ml-2 text-neutral-500 dark:text-neutral-200"
        >Score: {$score}</span
      >
    </div>
</nav>
</header>


<style>
	.active {
		@apply inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 !text-white;
	}
	.normal-link {
		@apply inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3;
	}
</style>