// el comando "npm init" lo utilizaremos para comenzar, esto nos creara el 
//package.json y nos dirá cual es el archivo principal

const express = require('express');
const app = express();

//Configuraciones
// se agregan con .set
app.set('nombreDeLaApp', 'Mi primer server');

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//MIDDLEWARES
app.use(function (req, res, next) {
    console.log('request url: ' + req.url);         // Me muestra en consola que URL's visita el cliente.
    next();                                         // Si no agrego esto next() mí servidor no me va a mostrar ninguna 
});                                                 // ruta porque se va a trabar en la línea de código 11-12

app.use((req, res, next) => {
    console.log('Ha pasado por esta función');      //Los middlewares se ejecutan cada vez que el usuario realiza un req a 
    next();                                         // nuestras rutas
});

function interceptar (req, res, next) {
    res.send('You shall not pass little-boy!');
    // next();
}


//RUTAS
app.get('/', (req, res) => {
    // res.end('Hello World');                     // devuelve ese texto en forma HTML
    res.render('usado.ejs')
})

// AGregué el comando "START" en el package.json... Si excribo "node start" en consola
// este servidor se levanta automaticamente.

app.get('/login', (req, res) => {
    res.end('Logueate')
})

app.get('/interceptar', interceptar, (req, res) => {
    res.send('Esta es la clave de mi HomeBanking *********');
    console.log('interceptado');
})

app.get('*', (req, res) => {                    //"*" significa: Todas las rutas (que no declaré)
    res.end('Archivo no encontrado')
})



app.listen(3000, () => {
    console.log('Servidor Iniciado');
    console.log('Nombre de la App: ', app.get('nombreDeLaApp'))
})