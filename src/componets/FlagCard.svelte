<script>
	import AnswerOptionButton from "./AnswerOptionButton.svelte";
    import {isCorrect,countryId, score, isQuestionAnswered, isLoading} from '../stores/store.js';
    export let country;
    export let fetchData;
    let isAlreadyAnswered = false;
    const handleNextCountry = () => {
        $countryId++;
        $isCorrect = false;
        $score++;
        $isQuestionAnswered = false;
    }
    const handleRestart = () => {
        fetchData();
        $isQuestionAnswered = false;
        $score = 0;
    }
    
</script>

<div class="max-w-lg rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://flagcdn.com/h240/{country.code}.png" height="240" width="360" alt="{country.code}">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">What country is this?</div>
      <div class="grid gap-2 mb-2 sm:grid-cols-1 md:grid-cols-2">
        {#key country.id}
        {#each country.answerOptions as option}
            <AnswerOptionButton id={country.id} option={option} isAlreadyAnswered={isAlreadyAnswered}/>
        {/each}
        {/key}
    </div>
    {#if $isCorrect}
    <button class="w-full bg-blue-700 px-6 py-4 rounded font-bold text-white shadow" on:click={handleNextCountry}>Next country</button>
    {/if}
    {#if !$isCorrect && $isQuestionAnswered}
    <button class="w-full bg-blue-700 rounded font-bold text-white shadow px-6 py-4" on:click={handleRestart}>Restart</button> 
    {/if}
    </div>
  </div>