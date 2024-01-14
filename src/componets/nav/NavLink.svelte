<script>
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    export let href;
    export let text;
</script>

<li>
    <button on:click={()=>goto(href)} class:active="{$page.url.pathname == href}">{text}</button>
  </li>

  <style>
    button {
      @apply mx-1
    }
</style>