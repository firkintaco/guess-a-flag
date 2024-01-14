<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import { session} from '$lib/session.js'

	export let data;


	onMount(async () => {
		const user = await data.getAuthUser();
		const loggedIn = !!user
		session.update((current) => {
			return {
				...current,
				user: {
					uid: user.uid,
					displayName: user.displayName,
					email: user.email
				},
				loggedIn
			}
		})
	})
</script>

<div class="app bg-gray-200">
	<Header />
	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}


</style>
