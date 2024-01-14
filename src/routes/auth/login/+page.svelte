<script>
    import {signInWithEmailAndPassword} from 'firebase/auth';
    import {auth} from '$lib/firebase/firebase.app.js'
    import {goto} from '$app/navigation';
    import {session} from '$lib/session.js'
    let email;
    let password;
    let success = undefined

    const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const {user} = result;
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

<div class="relative flex flex-col items-center md:justify-center h-screen overflow-hidden">
  <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top md:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-gray-700">Login</h1>
      <form class="space-y-4" on:submit|preventDefault={login}>
          <div>
              <label class="label" for="email">
                  <span class="text-base label-text">Email</span>
              </label>
              <input type="text" placeholder="Email Address" id="email" class="w-full input input-bordered" bind:value={email} required/>
          </div>
          <div>
              <label class="label" for="password">
                  <span class="text-base label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter Password"
                  class="w-full input input-bordered" id="password" bind:value={password} required/>
          </div>
          <div>
              <button type="submit" class="btn btn-block">Login</button>
          </div>
      </form>
  </div>
</div>
