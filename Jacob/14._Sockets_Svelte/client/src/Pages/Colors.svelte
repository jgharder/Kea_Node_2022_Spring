<script>
  import io from "socket.io-client";

  const socket = io();

  socket.on("changecolor",({data})=>{
      document.body.style.backgroundColor = data;
  })

  function changeColor(event) {
    console.log(event.target.value);
    socket.emit("colorChanged", { data: event.target.value });
  }
</script>

<input type="color" on:change={changeColor} />
