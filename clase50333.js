// Código copiado como ejemplo de la clase 50,
//
const server = require('express')();
const bodyParser = require('body-parser')

const { getAlbums, addAlbum } = require('./albums333')

server.listen(3001);
server.use(bodyParser.json());

server.get('/albums', getAlbums)
server.post('/albums', addAlbum)


// Mari exribió esto en la consola del navegador para evitar postman
// const album = { name : 'ten', band_id: 1};
// fetch('/albums', { method: 'post', body: JSON.stringify(album), headers: {'Content-Type': 'application/json'} }).then(console.log)

