import { Realtor } from "./server/realtor.js";

const app = new Realtor();
const chatRoom = new app.Room("/chat");
chatRoom.emit('welcome',{msg:'hi from server'},(res)=>{
    console.log(res)
    console.log(res) 
 })
 chatRoom.on('welcome',(socket)=>{
    console.log(socket)
 })
