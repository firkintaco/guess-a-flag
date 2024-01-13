<script>
import {countryId, isCorrect, score, isQuestionAnswered} from '../stores/store.js'
const handleNextCountry = () => {
        $countryId++;
        $isCorrect = false;
        $score++;
        $isQuestionAnswered = false;
    }
</script>

{#if $isCorrect}
    <button class="w-full bg-green-800 px-6 py-4 rounded font-bold text-white shadow" on:click={handleNextCountry}>Next country</button>
{/if}