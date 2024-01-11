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

<section class="container mx-auto">
    <h1 class="text-2xl">Highscores</h1>
    <table class="table-auto w-full border border-separate">
        <thead>
            <tr>
                <td class="font-bold">ID</td>
                <td class="font-bold">Score</td>
            </tr>
        </thead>
        <tbody>
            {#if scores !== null}
            {#each scores as score}
                <tr class="p-2">
                    <td>{score.id}</td>
                    <td>{score.score}</td>
                    </tr>
            {/each}    
            {/if}
        </tbody>
        </table>
</section>