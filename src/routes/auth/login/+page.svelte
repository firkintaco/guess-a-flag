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

<form
  class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12"
  on:submit|preventDefault={login}
>
  <input
    type="email"
    placeholder="Email"
    class="px-4 py-2 border border-gray-300 rounded-md"
    required
    bind:value={email}
  />
  <input
    type="password"
    placeholder="Password"
    class="px-4 py-2 border border-gray-300 rounded-md"
    required
    bind:value={password}
  />
 
  <button type="submit" class="default-action">Login</button>
  {#if !success && success !== undefined}
    <div class="p-8 text-red-500 bg-red-100">There was an error logging in. Please try again.</div>
  {/if}
</form>