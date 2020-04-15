const express = require('express')
const app = express();


const articulos = [
    {
      id: 1,
      titulo: 'Lorem ipsum',
    }, {
      id: 2,
      titulo: 'Donec tincidunt vestibulum magna',
    },
  ]

// Todos los articulos llamados devolveran el error 404

app.get('/articulo/:id', (req, res) => {
    const articulo = articulos.find(item => item.id === req.params.id);
    if (!articulo) {
      return res.status(404).send('Artículo no encontrado');
    }
    res.send(articulo);
   });

app.listen(3000);
