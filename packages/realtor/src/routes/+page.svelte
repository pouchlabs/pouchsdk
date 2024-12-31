<script>
    import {CreateClient} from "$lib/client/realtor.js";
    const chatRoom = CreateClient("ws://localhost:5554/chat");
    chatRoom.on("welcome",(s)=>{
        console.log(s)
    })
    chatRoom.onConnected(async(res)=>{
     chatRoom.emit("welcome",{},()=>{
        
     })
    })
</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
