const express = require('express');
const server = express();

server.get('/ejemploJSON', (req, res) => {
    const texto = {
        nombre: 'Jhon',
        apellido: 'Doe'
    }
    res.json(texto);
});

server.get('/error', (req, res) => {
    res.statusCode = 500;
    res.json({error: 'Algo Malio Sal'});
})

server.listen(3000, () => {
    console.log('Server iniciado')
})