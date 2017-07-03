const button = document.getElementById("button");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var cw = canvas.width,
    ch = canvas.height;
var tiles = [];
var fallenTiles = [];
var datum;
var sec;
var preSec = 2;
var name = "";
var socket = io();

button.addEventListener("click",()=>{
name = document.getElementById("nameTxt").value;
if(name == "")
name = "Jeff";
socket.emit('join',{username:name});
});

for (var i = 0; i < 10; i++)
{
  for (var j = 0; j < 10; j++)
  {
    var tile = Object.create(Tile);
    tile.w = canvas.width / 10;
    tile.h = canvas.height / 10;
    tile.x = ((0 + tile.w / 2) * 2) * j;
    tile.y = ((0 + tile.h / 2) * 2) * i;
    tiles.push(tile);
  }
}
if(sec >= 57)
{

}
else
{
  preSec = sec + 3;
}


socket.on('newPos',(data)=>
{
  context.clearRect(0, 0, cw, ch);
  for (var i = 0; i < tiles.length; i++)
  {
    tiles[i].draw(context);
  }

  for (var i = 0; i < fallenTiles.length; i++)
  {
    fallenTiles[i].draw(context);
  }
  for(var i = 0;i < data.length; i++)
  {
    context.fillStyle = "#0000ff";
    context.fillText(data[i].username,data[i].x+5,data[i].y-12);
    context.beginPath();
    context.arc(data[i].x,data[i].y,10,0,2*Math.PI);
    context.stroke();
  }
})
setInterval(()=>
{
  datum = new Date();
  sec = datum.getSeconds();

  if(sec == 59)
   {
     preSec = 60;
   }
   else if(sec == 0 && preSec == 60)
   {
     preSec = 0;
   }
  if (fallenTiles.length < 100 && sec >= preSec)
  {
    var rand = Math.floor(Math.random()*tiles.length);
    var realNum = 0;
    socket.emit('setRnd',rand);
    socket.on('newPos',(data)=>{
      for (var i = 0; i < data.length; i++)
      {
        realNum = data[i].randomNumber;
        //console.log(data[i]);
      }
    });
    tiles[realNum].fall(context);
    fallenTiles.push(tiles[realNum]);
    tiles.splice(realNum,1);
    preSec = sec+1;
  }
},1000/60);
