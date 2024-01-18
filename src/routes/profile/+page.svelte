<script>
    import {session} from '$lib/session.js'
	import DisplayNameForm from '../../componets/profile/DisplayNameForm.svelte';
    import profilepic from "$lib/images/profile.png"
</script>

<svelte:head>
    <title>Profile Page</title>
</svelte:head>

<section class="container mx-auto max-w-lg bg-white p-6 rounded shadow">
    <div class="flex flex-col md:flex-row justify-evenly align-center items-center">
    <img src={profilepic} alt="profilepic" class="max-w-sm rounded" width="128"/>
    <div class="p-2">
    <h1>Hello <span class="font-bold text-lg">{$session?.user?.displayName}</span>!</h1>
    <p><span class="font-bold">Name</span>: {$session?.user?.displayName}</p>
    <p><span class="font-bold">Email</span>: {$session?.user?.email}</p>
    <!-- <DisplayNameForm /> -->
</div>
</div>
</section>