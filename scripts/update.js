var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d");

var socket = io()

socket.on('newPos',(data)=>
{
  context.clearRect(0,0,800,600);
  for(var i = 0;i < data.length; i++){
  context.fillText(data[i].number,data[i].x-2.8,data[i].y+2.5);
  context.beginPath();
  context.arc(data[i].x,data[i].y,10,0,2*Math.PI);
  context.stroke();
  }
});
