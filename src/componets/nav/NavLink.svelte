<script>
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    export let href;
    export let text;
</script>

<li class="mr-3">
    <button class="normal-link" on:click={()=>goto(href)} class:active="{$page.url.pathname == href}">{text}</button>
  </li>

  <style>
	.active {
		@apply inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 !text-white;
	}
	.normal-link {
		@apply inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3;
	}
</style>