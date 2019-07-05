require('./config/config'); // al ser este el primer archivo, cuando empiece a ejecutar nuestra app va a leer y ejecutar lo que esteé en config.js 

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // cuando vea un "app.use" son middlewares, son unas funciones que se van a disparar c/vez que pase por aqui el codigo 

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'Debe colocar el nombre'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let civ = req.params.id; // este id es el mismo del id de app.put

    res.json({
        civ
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});