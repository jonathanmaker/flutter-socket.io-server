const {io} = require('../index');

io.on('connection', client => {
    console.log('cliente conectado');
     //client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('Cliente desconectado');
  });

    client.on('mensaje', (payload) =>{
      console.log('mensaje!!', payload);

      io.emit( 'mensaje', {admin: 'nuevo mensaje'} );


    });


  });



