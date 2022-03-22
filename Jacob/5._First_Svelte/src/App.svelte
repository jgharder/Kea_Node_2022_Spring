<script>
	export let name;
import Dog from "./pages/Dog/Dog.svelte";
import Tree from "./pages/Tree/Tree.svelte";
</script>

<main>
	<h1>Hello {name}!</h1>
<!-- <Tree/> -->
<Dog/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:red;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>