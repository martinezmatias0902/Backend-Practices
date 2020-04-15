const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Esto se imprime como HTML');
    console.log('Página de Inicio... Esto me sale en la consola')
})

app.get('/contactos', function (req, res) {
    res.send('Contacto numero 214 ah sido registrado');
    console.log('Página de cursos');
})

app.listen(3000, () => {
    console.log('Servidor iniciado...')
})

// nodejs express.js
// o escribir: node express