document.onkeydown = (event)=>{
  if (event.keyCode === 87) //W key
    socket.emit('keyPress',{inputId:'up',state:true});
  if (event.keyCode === 65) //A key
    socket.emit('keyPress',{inputId:'left',state:true});
  if (event.keyCode === 83) //S key
    socket.emit('keyPress',{inputId:'down',state:true});
  if (event.keyCode === 68) //D key
    socket.emit('keyPress',{inputId:'right',state:true});
}

document.onkeyup = (event)=>{
  if (event.keyCode === 87) //W key
    socket.emit('keyPress',{inputId:'up',state:false});
  if (event.keyCode === 65) //A key
    socket.emit('keyPress',{inputId:'left',state:false});
  if (event.keyCode === 83) //S key
    socket.emit('keyPress',{inputId:'down',state:false});
  if (event.keyCode === 68) //D key
    socket.emit('keyPress',{inputId:'right',state:false});
}
