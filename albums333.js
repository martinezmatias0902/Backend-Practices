const Sequelize = require('sequelize');

const db = new Sequelize('mysql://root:@localhost:3306/acamica');
db.authenticate().then(console.log).catch(console.log.bind(null, 'Error!'))

module.exports = {
    getAlbums: (req, res) => db.query('SELECT * FROM albums').then(([ rows ]) => res.status(200).json(rows)),
    validateAlbum: (req, res, next) => next(),
    addAlbum: (req, res) => 
        db.query('INSERT INTO albums (name, band_id) VALUES (:name, :band_id)', { replacements: req.body })
            .then(result => {
                console.log(result)
                res.status(201).end()
            })
            .catch(error => {
                console.log(error)
                res.status(400).send('Invalid data')
            })
}