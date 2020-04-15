const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
    res.status(200).send({ products: [] })
})

// app.get('/api/products/:productId', (req, res) => {

// })

app.post('/api/products', (req, res) => {                //POST sirve para subir nuestros Productos
    console.log(req.body)
    res.status(200).send({ message: 'El prodcuto se ha recibido'})
})
                                                        
// app.put('/api/product:productId', (req, res) => {               // PUT hace las actualizaciones

// })

// app.delete('/api/product/:productId', (req, res) => {

// })


app.listen(3000, () => {
    console.log('Servidor Iniciado ... ... ...')
})