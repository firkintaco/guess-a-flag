<script>
    import {session} from '$lib/session.js'
    import {signOut} from 'firebase/auth';
    import {goto} from '$app/navigation'
	import {auth} from '$lib/firebase/firebase.app.js'
    	const handleLogout = async () => {
		await signOut(auth).then(()=>{
			$session = undefined;
            goto("/auth/login")
		}).catch(error=>console.log(error))
	}
</script>

<li>
    <button on:click={handleLogout}>Logout</button>
</li>

