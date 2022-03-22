<script>
    import Apple from "../Tree/Apple.svelte";


    const apples = ['🍏','🍎','🍏','🍎'];

    function pickAnApple(){
        console.log("Picked an apple");
        apples.pop();
        apples = apples;
    }
</script>

<div id="flex">
<div id="tree">
<h1 >I am Tree</h1>
{#each apples as apple}
<Apple {apple}/>
{/each}

<button on:click={pickAnApple}>Pick an apple</button>
</div>

<div id="trunk"></div>

</div>
<style>
    #tree{
        background-color: lightgreen;
       width: 600px;
       border-radius: 10%;
    }

    #trunk{
        background-color: burlywood;
        height: 120px;
        width: 50px;
    }
    #flex{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>