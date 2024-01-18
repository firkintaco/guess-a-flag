<script>
import {session} from '$lib/session.js'
	import toast from 'svelte-french-toast';
import {score, isError, isQuestionAnswered, isCorrect} from '../stores/store.js'
export let fetchData;

const handleRestart = async () => {
    if($session?.user?.uid){
        try {
            await fetch(`/api/scores`, {
                method: "POST",
                body: JSON.stringify({userId: $session.user.uid, displayName: $session.user.displayName, score: $score})
            })
            toast.success("Score saved.")
            
        } catch (error) {
            $isError = error;
            toast.error(error)
            console.log(error)
        }
    }
        fetchData();
        $isQuestionAnswered = false;
        $score = 0;
    }
</script>

    <button class="w-full bg-red-700 rounded font-bold text-white shadow px-6 py-4" on:click={handleRestart}>Restart</button> 