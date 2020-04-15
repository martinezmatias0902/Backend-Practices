const express = require('express');
const server = express();

server.get('/fotos', (req, res) => {
    res.json([
        {
            id: 1,
            titulo: 'foto uno',
            url: '/home/matiasmartinez/Imágenes/images.jpeg'
        },
        {
            id: 2,
            titulo: 'foto dos',
            url: '/home/matiasmartinez/Imágenes/index.png'
        }
    ])
});

server.listen(3000, () => {
    console.log('servido iniciado papa!')
})