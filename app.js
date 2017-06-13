const express = require('express');
const app = express();
const server = app.listen(9000);
const io = require('socket.io')(app);

app.use(epress.static(__dirname));
app.get('/',(req,res)=>{res.sendFile(__dirname + '/index.html');});
