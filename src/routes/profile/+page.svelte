<script>
    import {session} from '$lib/session.js'
	import DisplayNameForm from '../../componets/profile/DisplayNameForm.svelte';
</script>

<svelte:head>
    <title>Profile Page</title>
</svelte:head>

<section>
    <h1>Here comes profile page</h1>
    <p>Your ID: {$session.user.uid}</p>
    <p>DisplayName: {$session.user.displayName}</p>
    <DisplayNameForm />
</section>