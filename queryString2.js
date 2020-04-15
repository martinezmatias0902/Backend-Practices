const express = require('express');
const server = express();

// 127.0.0.1/photos?size=700

fotos = [
    {
        id: 1,
        title: 'Foto 0 papu',
        url: 'https://via.placeholder.com/600/92c952',
        size: 600
      },
      {
        id: 2,
        title: 'Foto 1',
        url: 'https://via.placeholder.com/600/771796',
        size: 700
      }
];

server.get('/photos/:indiceFoto', (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    const size = req.query.size;
    // const {indiceFoto} = req.params;                          //Obtenemos el parametro de la foto "indiceFoto"
    // const {size} = req.query;                                 // req.query contiene todos los QUERY solicitados
    const foto = fotos[indiceFoto];
    foto.size.replace('/800', `/${size}`);                
    res.json(foto);                                             
});

server.listen(3000, () => {
    console.log('Servidor Iniciado')
})