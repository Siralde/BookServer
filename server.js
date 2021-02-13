//Data Base Module
const mongoose = require('mongoose');

//Server Module
const app = require('express')();
const server = require('http').createServer(app);
const io = require("socket.io") (server, {cors:{origin: "*"}});

//Book Handler Module
const Book = require('./models/book');

io.on('connection', socket => {

    socket.on('books', () => {
        Book.find( {} ).then( book => {
            socket.emit('bookList', book);
        });
    })

    socket.on('changeName', (data) => {
        const { _id, newName } = data;
        Book.findByIdAndUpdate(_id, {name: newName}, (err, result) =>{console.log(result)});
    })

    socket.on('changeDescription', (data) => {
        const { _id, newDescription } = data;
        Book.findByIdAndUpdate(_id, {description: newDescription}, (err, result) =>{ console.log(result) });
    })

    socket.on('disconnect', () => {
        console.log('User left');
    })
})

mongoose.connect( process.env.MONGO_HOME, { useNewUrlParser: true } )
        .then( () => {
            server.listen(5000, () => console.log(`Server has started on Port: ${process.env.PORT}`));
        })