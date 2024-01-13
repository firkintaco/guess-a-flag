<script>
	import { page } from '$app/stores';
	import {score} from '../stores/store.js'
	import {session} from '$lib/session.js'
	import NavLink from '../componets/nav/NavLink.svelte';
	import LogOutButton from '../componets/nav/LogOutButton.svelte';


</script>

<header class="shadow px-4 bg-[#FBFBFB]">
 <nav
  class="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <div class="ml-2">
      <a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">Guess-A-Flag</a>
    </div>
    


      <!-- Left links -->
	  <ul class="flex">
		<NavLink href="/" text="Home" />
		<NavLink href="/scores" text="Scores" />
		{#if $session}
			<NavLink href="/profile" text="Profile" />
			<LogOutButton />
		{:else}
			<NavLink href="/auth/login" text="Login" />
			<NavLink href="/auth/register" text="Register" />
		{/if}
	  </ul>
      <span class="font-bold ml-2 text-neutral-500 dark:text-neutral-200"
        >Score: {$score}</span
      >
    </div>
</nav>
</header>

