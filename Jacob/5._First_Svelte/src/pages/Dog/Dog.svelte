<script>
import Nametag from "../../components/Nametag/Nametag.svelte";

  const jonas = {
    name: "Jonas",
    age: 10,
    address: "på gaden",
  };
</script>

<h1 
id="dog" 
on:mouseover={() => console.log("Bite")} 
on:focus
>
🐶
</h1>

<Nametag nametagInfo={jonas}/>
<!-- <p>Name: {jonas.name} <br>adress: {jonas.address} <br> age: {jonas.age}</p>
 -->


<style>
  #dog {
    font-size: 200px;
  }
</style>
