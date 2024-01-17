<script>
	import {countries, countryId, isError, score, isQuestionAnswered} from '../../../stores/store.js';
	import FlagCard from '../../../componets/FlagCard.svelte';
	import { onDestroy, onMount } from 'svelte';
	import RestartButton from '../../../componets/RestartButton.svelte';
	import { goto } from '$app/navigation';
	export let data;
	let country;
    let isLoading = true;

	const fetchData = async() => {
        $countries = []
        $score = 0;
		isLoading = true;
		const response = await fetch("/api/continent/"+data.continent).then(response => response.json())
		$countries = response;
		country = $countries[0];
		$countryId = 0;
        if(response.error)
{
 goto("/not-found")
}		isLoading = false;
	}

	onMount(async ()=>{
            await fetchData()
            
	});
    onDestroy(()=>{
        $score = 0;
        $countries = []
        $countryId = 0;
    })
</script>

<svelte:head>
	<title>{data.continent}</title>
	<meta name="description" content="Quess-A-Flag" />
</svelte:head>

{#key data.continent}
<section class="container mx-auto">
	{#if $isError}
	<p>Error</p>
	{:else}
{#if isLoading}
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
    {/if}
</section>
{/key}
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