<script>
    import {isCorrect, isQuestionAnswered } from '../stores/store.js'
    export let id;
    export let option;
    
    let buttonColor = "bg-blue-700"
    const checkAnswer = async () => {
        if($isQuestionAnswered){
            console.log($isQuestionAnswered);
        } else {
        const response = await fetch(`/api?id=${id}&answer=${option}`).then((response) => response.json());
        if(response.correct){
            buttonColor = "bg-green-700"
        } else {
            buttonColor = "bg-red-700"
        }
        $isQuestionAnswered = true;
        $isCorrect = response.correct;
    }
    }
</script>

<button class="shadow p-2 {buttonColor} min-w-full rounded text-white font-bold" on:click={checkAnswer}>{option}</button>