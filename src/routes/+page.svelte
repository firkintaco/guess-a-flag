<script>
	import {isLoading, countries, countryId, uuid} from '../stores/store.js';
	import FlagCard from '../componets/FlagCard.svelte';
	import { onMount } from 'svelte';
	let data;
	let country;

	const fetchData = async() => {
		$isLoading = true;
		const response = await fetch("/api").then(response => response.json())
		$countries = response;
		country = $countries[0];
		$isLoading = false;
	}

	onMount(async ()=>{
		await fetchData()
	});
	console.log(data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Quess-A-Flag" />
</svelte:head>

{#if $isLoading}
	<h1>Loading</h1>
{:else}
<section class="container mx-auto">
	{#if $countries.length !== 0}
	<FlagCard country={$countries[$countryId]} fetchData={fetchData}/>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
{/if}