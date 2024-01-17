<script>
    import { onMount } from 'svelte';
	import { isLoading } from '../../stores/store';
    let scores = [];
    onMount(async ()=>{
        $isLoading = true;
        const response = await fetch('/api/scores').then(response => response.json())
        scores = response;
        $isLoading = false;
    })
</script>

<svelte:head>
    <title>Highscores</title>
</svelte:head>

<section class="container max-w-md mx-auto">
    <h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Highscores</h2>
    <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">

    {#if scores !== null}
    {#each scores as score}
    <li>
        <span class="font-semibold text-gray-900 dark:text-white">{score.displayName ? score.displayName : score.userId}</span> with <span class="font-semibold text-gray-900 dark:text-white">{score.score}</span> points
        </li>
        {/each}    
        {/if}
        </ol>
</section>