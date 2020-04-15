const express = require('express');
const bodyParser = require('body-parser');
const server = express();

//Agregamos el middleware para hacer parsing del contenido JSON del body de la petición
server.use(bodyParser.json());

//Este endpoint va a retornar la llamada con el contenido del body
server.post('/contacto', (req, res) => {
    res.json(req.body);
})

server.listen(3000, '0.0.0.0', () => {
console.log(`Server iniciado en http://127.0.0.1:3000`);
});