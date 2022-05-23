<script>
  import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
  import Colors from "./Pages/Colors.svelte";

  import { onMount } from "svelte";
  let username = false;
  onMount(async () => {
    const response = await fetch("/api/fetchuser");
    const { data } = await response.json();
    username = data;
  });
</script>

<main>
  {#if username === false}
    <div id="loading">Loading...</div>
  {:else if username}
	<Colors/>
  {:else}
    <UserRegistration />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
