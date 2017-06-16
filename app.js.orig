const express = require('express');
const app = express();
const server = app.listen(9000);
const io = require('socket.io')(server);

app.get('/',(req,res)=>{res.sendFile(__dirname + '/index.html');});
app.use(express.static(__dirname));
console.log("Server connection");

var SOCKET_LIST = [];
var PLAYER_LIST = [];

var Player = (id)=>{
  var self = {
    x:250,
    y:250,
    id:id,
    pressRight:false,
    pressLeft:false,
    pressUp:false,
    pressDown:false,
    maxSpd:5,
    username:"Jeff"
  }
  self.updatePosition = ()=>
  {
    if (self.pressUp)
      self.y -= self.maxSpd;
    if (self.pressLeft)
        self.x -= self.maxSpd;
    if (self.pressDown)
        self.y += self.maxSpd;
    if (self.pressRight)
      self.x += self.maxSpd;
  }
  return self;
}

io.sockets.on('connection',(socket)=>
{
  socket.id = Math.random();
  SOCKET_LIST[socket.id] = socket;

  var player = Player(socket.id);
  PLAYER_LIST[socket.id] = player;

  socket.on('disconnect',()=>{
    delete SOCKET_LIST[socket.id];
    delete PLAYER_LIST[socket.id];
  });

  socket.on('join',(data)=>{
    player.username = data.username;
  })

  socket.on('keyPress',(data)=>{
    if(data.inputId === 'up')
      player.pressUp = data.state;
    if(data.inputId === 'left')
      player.pressLeft = data.state;
    if(data.inputId === 'down')
      player.pressDown = data.state;
    if(data.inputId === 'right')
      player.pressRight = data.state;
  })
});

setInterval(()=>{
  var pack = [];
  for(var i in PLAYER_LIST){
    var player = PLAYER_LIST[i];
    player.updatePosition();
    pack.push(
      {
        x:player.x,
        y:player.y,
        username:player.username
      });
    }
    for (var i in SOCKET_LIST)
    {
      var socket = SOCKET_LIST[i];
      socket.emit('newPos',pack);
    }
},1000/60)
