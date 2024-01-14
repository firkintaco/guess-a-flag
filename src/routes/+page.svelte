<script>
	import {isLoading, countries, countryId, isError, score, isQuestionAnswered} from '../stores/store.js';
	import FlagCard from '../componets/FlagCard.svelte';
	import { onMount } from 'svelte';
	import RestartButton from '../componets/RestartButton.svelte';
	let data;
	let country;

	const fetchData = async() => {
		$isLoading = true;
		const response = await fetch("/api").then(response => response.json())
		$countries = response;
		country = $countries[0];
		$countryId = 0;
		$isLoading = false;
	}

	onMount(async ()=>{
		await fetchData()
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Quess-A-Flag" />
</svelte:head>

<section class="container mx-auto">
	{#if $isError}
	<p>Error</p>
	{/if}
{#if $isLoading}
	<h1 class="text-center">Loading</h1>
{:else}
	{#if $countryId >= $countries.length}
	<h1 class="text-center">Refresh page to start again!</h1>
	<RestartButton fetchData={fetchData}/>
	{:else}
		{#if $countries.length !== 0}
			<FlagCard country={$countries[$countryId]} fetchData={fetchData}/>
		{/if}
	{/if}
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

</style>