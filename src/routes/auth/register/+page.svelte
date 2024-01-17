<script>
    import {goto} from '$app/navigation';

    import {createUserWithEmailAndPassword} from 'firebase/auth';
    import {auth, addUserData, updateUserName} from '$lib/firebase/firebase.app.js';
    import {session} from '$lib/session.js'
    let email;
    let password;
    let displayName;
    let success = undefined

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (result)=>{
            const {user} = result;
            await addUserData(user.uid, displayName, email)
            await updateUserName(displayName, user)
            session.update((cur) => {
              return {
                ...cur,
                user: {
                displayName: user?.displayName,
                email: user?.email,
                uid: user?.uid
            },
                loggedIn: true,
              }
            })
            goto('/auth/login')
          }).catch((error)=>{
            const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
            success= false;
        })
    }
</script>

<div class="relative flex flex-col items-center md:justify-center h-screen overflow-hidden">
  <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top md:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1>
      <form class="space-y-4" on:submit|preventDefault={register}>
        <div>
              <label class="label" for="username">
                  <span class="text-base label-text">Username</span>
              </label>
              <input type="text" placeholder="Email Address"  id="username"class="w-full input input-bordered" bind:value={displayName} required/>
          </div>
          <div>
              <label class="label" for="email">
                  <span class="text-base label-text">Email</span>
              </label>
              <input type="text" placeholder="Email Address"  id="email"class="w-full input input-bordered" bind:value={email} required/>
          </div>
          <div>
              <label class="label" for="password">
                  <span class="text-base label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter Password"
                  class="w-full input input-bordered"  id="password" bind:value={password} required/>
          </div>
          <div>
              <button type="submit" class="btn btn-block">Register</button>
          </div>
      </form>
  </div>
</div>