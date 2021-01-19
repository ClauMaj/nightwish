
const express = require('express');
const app = express();
const socket = require('socket.io');

app.set('view engine','ejs');
// app.set('views','views');
app.use(express.static('public'));


app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));



let server = app.listen (3000, () => {
    console.log("Server is running on port 3000");
});

let io = socket(server);
io.on('connection' , (socket) => {
    console.log('Client connected!!');
    io.emit('msgFromServer', "You are connected!");
    socket.on('msgFromClient', (msgClient) => {
        io.emit('msgFromServer', msgClient)
    })
})