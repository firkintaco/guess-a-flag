<script>
    import {session} from '$lib/session.js'
    import {signOut} from 'firebase/auth';
    import {goto} from '$app/navigation'
	import {auth} from '$lib/firebase/firebase.app.js'
    	const handleLogout = async () => {
		await signOut(auth).then(()=>{
			$session = undefined;
			console.log($session)
            goto("/auth/login")
		}).catch(error=>console.log(error))
	}
</script>

<li class="mr-3">
    <button class="normal-link" on:click={handleLogout}>Logout</button>
</li>

<style>
	.active {
		@apply inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 !text-white;
	}
	.normal-link {
		@apply inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3;
	}
</style>