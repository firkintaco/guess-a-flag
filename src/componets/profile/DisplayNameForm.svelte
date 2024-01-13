<script>
import {updateProfile} from 'firebase/auth'
import {auth} from '$lib/firebase/firebase.app.js'
import {session} from '$lib/session.js'
 let displayName = $session.user.displayName;

 const handleChange = () => {
    updateProfile(auth.currentUser, {displayName}).then(()=>$session.user.displayName = displayName).catch((error)=>console.log(error))
 }
</script>

<form on:submit|preventDefault={handleChange}>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" bind:value={displayName}/>
    <button type="submit">Set</button>
</form>

