<script>
    import {goto} from '$app/navigation';

    import {createUserWithEmailAndPassword} from 'firebase/auth';
    import {auth} from '$lib/firebase/firebase.app.js';
    import {session} from '$lib/session.js'
    let email;
    let password;
    let success = undefined

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result)=>{
            const {user} = result;
            session.update((cur) => {
              return {
                ...cur,
                user,
                loggedIn: true,
                loading: false
              }
            })
            console.log($session)
            goto('/auth/login')
          }).catch((error)=>{
            const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
            success= false;
        })
    }
</script>

<form
  class="bg-blue-500 text-center w-full md:w-1/3 px-3 py-4 text-black mx-auto rounded"
  on:submit|preventDefault={register}
>
<input
type="email"
placeholder="Email"
class="block w-full mx-auto text-sm py-2 px-3 rounded"
required
bind:value={email}
/>
<input
type="password"
placeholder="Password"
class="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
required
bind:value={password}
/>

<button type="submit" class="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full">Register</button>
{#if !success && success !== undefined}
    <div class="p-8 text-red-500 bg-red-100 mb-3">There was an error registering. Please try again.</div>
  {/if}
</form>