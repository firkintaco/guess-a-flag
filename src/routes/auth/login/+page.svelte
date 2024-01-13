<script>
    import {signInWithEmailAndPassword} from 'firebase/auth';
    import {auth} from '$lib/firebase/firebase.app.js'
    import {goto} from '$app/navigation';
    import {uuid} from '../../../stores/store.js'
    import {session} from '$lib/session.js'
    let email;
    let password;
    let success = undefined

    const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const {user} = result;
        $uuid = user.uid,
        session.set({
            loggedIn: true,
            user: {
                displayName: user?.displayName,
                email: user?.email,
                uid: user?.uid
            }
        })
        console.log($session)
        goto('/profile');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
 
        success = false;
      });
  };
</script>

<div class="container">
<form
  class="bg-blue-500 text-center w-1/3 px-3 py-4 text-black mx-auto rounded"
  on:submit|preventDefault={login}
>
  <input
    type="email"
    placeholder="Email"
    class="block w-full mx-auto text-sm py-2 px-3 rounded text-black"
    required
    bind:value={email}
  />
  <input
    type="password"
    placeholder="Password"
    class="block w-full mx-auto text-sm py-2 px-3 rounded my-3 text-black"
    required
    bind:value={password}
  />
 
  <button type="submit" class="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full">Login</button>
  {#if !success && success !== undefined}
    <div class="mt-3 p-8 text-red-500 bg-red-100">There was an error logging in. Please try again.</div>
  {/if}
</form>
</div>