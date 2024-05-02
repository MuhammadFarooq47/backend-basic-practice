const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a Listenar
emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

//Raise event
emitter.emit('messageLogged', {id: 1, url: 'http://myUrl'});

//Event fire after 1000ms
setTimeout(() => {
    emitter.emit('messageLogged', {id: 2, from: 'setTimeOut'});
}, 2000)