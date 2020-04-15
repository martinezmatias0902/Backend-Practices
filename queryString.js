//QueryString es una serie de parámetros que se pueden
//incluir adicionalmente a nuestra ruta, por ejemplo:
//127.0.0.1:3000/photos/1?size=600&author=picasso

//Siempre comienza con un ? y es un nombre y valor separados por &
//Utilizaremos req.query
const express = require('express')
const server = express();

// Nuestro array con multiples fotos
const fotos = [
    {
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952'
    },
    {
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796'
    }
   ]

server.get('/photos/:indiceFoto', (req, res) => {
    const indiceFoto = req.params.indiceFoto;
    res.json(fotos[indiceFoto])
})

server.listen(3000)