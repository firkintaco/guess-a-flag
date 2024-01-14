<script>
	import {isLoading, countries, countryId, uuid, isError, score, isQuestionAnswered} from '../stores/store.js';
	import FlagCard from '../componets/FlagCard.svelte';
	import { onMount } from 'svelte';
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

	const handleRestart = async () => {
        try {
            await fetch(`/api/scores?id=${$uuid}&score=${$score}`, {
                method: "POST",
            })
            
        } catch (error) {
            $isError = error;
        }
        fetchData();
        $isQuestionAnswered = false;
        $score = 0;
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
	<button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4" on:click={handleRestart}>Restart</button> 
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