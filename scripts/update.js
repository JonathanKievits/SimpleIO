const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const button = document.getElementById("button");
var name = "";
var socket = io();

button.addEventListener("click",()=>{
  name = document.getElementById("nameTxt").value;
  if(name == "")
    name = "Jeff";

    socket.emit('join',{username:name});
});


socket.on('newPos',(data)=>
{
  context.clearRect(0,0,800,600);
  for(var i = 0;i < data.length; i++){
    context.fillText(data[i].username,data[i].x+5,data[i].y-12);
    context.beginPath();
    context.arc(data[i].x,data[i].y,10,0,2*Math.PI);
    context.stroke();
    console.log(data[i].username);
  }
});
