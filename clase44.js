const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// app.use((req, res, next) => {
//     res.send('Ruta accedida: ' + req.path);
//     next();
// })

app.use(bodyParser.json());

app.post('/contacto', (req, res) => {
    res.body(req.body)
})

app.get('/demo', (req, res) => {
    res.send('Menu')
})

app.get('/hola/:nombre', (req, res) => {
    res.send({ message: `Hola ${req.params.nombre}!` })
})

app.listen(3000, () => {
    console.log('Servidor Iniciado ... ... ...')
})