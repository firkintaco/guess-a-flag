<script>
import {session} from '$lib/session.js'
import {score, isError, isQuestionAnswered, isCorrect} from '../stores/store.js'
export let fetchData;

const handleRestart = async () => {
        try {
            await fetch(`/api/scores?id=${$session.user ? $session.user.uid : crypto.randomUUID().toString()}&score=${$score}`, {
                method: "POST",
            })
            
        } catch (error) {
            $isError = error;
        }
        fetchData();
        $isQuestionAnswered = false;
        $score = 0;
    }
</script>

{#if !$isCorrect && $isQuestionAnswered}
    <button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4" on:click={handleRestart}>Restart</button> 
{/if}