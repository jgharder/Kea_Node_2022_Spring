<script>
    const apples = ['🍏','🍎','🍏','🍎'];

    function pickAnApple(){
        console.log("Picked an apple");
        apples.pop();
    }
</script>

<div id="tree">
<h1 >I am Tree</h1>
<button on:click={pickAnApple}>Pick an apple</button>
</div>

<div id="trunk"></div>


<style>
    #tree{
        background-color: lightgreen;
    }

    #trunk{
        display: flex;
        justify-content: center;
        background-color: burlywood;
        height: 120px;
        width: 50px;
    }
</style>