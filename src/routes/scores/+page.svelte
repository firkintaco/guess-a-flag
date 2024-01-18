<script>
    export let data;
    const {scores} = data;
</script>

<svelte:head>
    <title>Highscores</title>
</svelte:head>

<section class="container max-w-lg mx-auto bg-white rounded-lg p-6 shadow">
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