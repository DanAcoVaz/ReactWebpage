const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const pgp = require('pg-promise')();
const cn = {
    host: "localhost",
    port: "5432",
    database: 'blog',
    user: 'postgres',
    password: '0304Danyl8',
    allowExitOnIdle: true
}
const db = pgp(cn);

// Endpoints 
app.get('/posts', (req, res) => {
    db.any('SELECT * FROM public."POST";')
    .then((data) => res.json(data))
    .catch((error) => console.log('ERROR: ', error));
})

app.get('/posts/:id_post', (req, res) => {
    db.one('SELECT * FROM public."POST" WHERE id_post=$1', [req.params.id_post])
    .then((data) => res.json(data))
    .catch((error) => console.log('ERROR:', error));
})

app.listen(8000, ()=>{
    console.log('Servidor corriendo en el puerto 8000');
})