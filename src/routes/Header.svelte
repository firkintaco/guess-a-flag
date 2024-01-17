<script>
	import { page } from '$app/stores';
	import {score} from '../stores/store.js'
	import {session} from '$lib/session.js'
	import NavLink from '../componets/nav/NavLink.svelte';
	import LogOutButton from '../componets/nav/LogOutButton.svelte';
	import { onMount } from 'svelte';

	const getContinents = async () => {
		return await fetch('/api/continent').then((response) => response.json());
	};
	
</script>

<header class="shadow px-4 bg-base-100">
<div class="navbar">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</div>
		<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
			<NavLink href="/" text="Home" />
			<NavLink href="/scores" text="Scores" />
			<li>
				<span>Continents</span>
				<ul class="p-2">
				{#await getContinents()}
						<li>Loading</li>
					{:then continents} 
					{#each continents as continent}
						<NavLink href={continent.href} text={continent.name} />
					{/each}
						
					{/await}
				</ul>
			</li>
		  <li>
			<span>{$session?.user?.displayName ? $session.user.displayName : "User"}</span>
			<ul class="p-2">
				{#if $session?.loggedIn}
				<NavLink href="/profile" text="Profile" />
				<LogOutButton />
			{:else}
				<NavLink href="/auth/login" text="Login" />
				<NavLink href="/auth/register" text="Register" />
			{/if}
			</ul>
		  </li>
		</ul>
	  </div>
	  <a class="btn btn-ghost text-xl font-logoFont" href="/">Guess-A-Flag</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1">
		<NavLink href="/" text="Home" />
		<li>
			<details>
				<summary>Continents</summary>
				<ul class="p-2 z-[1]">
					{#await getContinents()}
						<li>Loading</li>
					{:then continents} 
					{#each continents as continent}
						<NavLink href={continent.href} text={continent.name} />
					{/each}
						
					{/await}
			</ul>
			</details>
			</li>
		<NavLink href="/scores" text="Scores" />
		<li>
		  <details>
			<summary>{$session?.user?.displayName ? $session.user.displayName : "User"}</summary>
			<ul class="p-2 z-[1]">
				{#if $session?.loggedIn}
				<NavLink href="/profile" text="Profile" />
				<LogOutButton />
			{:else}
				<NavLink href="/auth/login" text="Login" />
				<NavLink href="/auth/register" text="Register" />
			{/if}
			</ul>
		  </details>
		</li>
	  </ul>
	</div>
	<div class="navbar-end">
	  <span class="btn">Score: {$score}</span>
	</div>
  </div>
</header>

