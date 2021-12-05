const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/epidemiologic-monitor/news", (req, res) => {
    res.send(news);
});
app.get("/api/epidemiologic-monitor/villages", (req, res) => {
    res.send(villages);
});
app.post("/api/epidemiologic-monitor/villages", (req, res) => {
    console.log(req.body);
    villages.push(req.body);
    res.send(villages);
});


var villages = [{
        "id": 1,
        "municipio": "Medellín",
        "departamento": "Antioquia",
        "numeroCasos": 412988,
        "numeroMujeres": 220818,
        "numeroHombres": 192170,
        "numeroRecuperados": 401502
    },
    {
        "id": 2,
        "municipio": "Guarne",
        "departamento": "Antioquia",
        "numeroCasos": 5210,
        "numeroMujeres": 2709,
        "numeroHombres": 2501,
        "numeroRecuperados": 5065
    },
    {
        "id": 3,
        "municipio": "Itaguí",
        "departamento": "Antioquia",
        "numeroCasos": 49044,
        "numeroMujeres": 25953,
        "numeroHombres": 23091,
        "numeroRecuperados": 48114
    },
    {
        "id": 4,
        "municipio": "Turbaco",
        "departamento": "Antioquia",
        "numeroCasos": 49044,
        "numeroMujeres": 25953,
        "numeroHombres": 23091,
        "numeroRecuperados": 48114
    },
    {
        "id": 5,
        "municipio": "Bello",
        "departamento": "Antioquia",
        "numeroCasos": 49044,
        "numeroMujeres": 25953,
        "numeroHombres": 23091,
        "numeroRecuperados": 48114
    }
];
var news = [{
        "titulo": "Un título de covid19",
        "contenido": "cualquier contenido",
        "url": "http://url/noticia.php"
    },
    {
        "titulo": "Otro título de coronavirus",
        "contenido": "cualquier contenido",
        "url": "http://url/noticia.php"
    },
    {
        "titulo": "Otro título de pandemia",
        "contenido": "cualquier contenido de covid19",
        "url": "http://url/noticia.php"
    },
    {
        "titulo": "Otro título de futbol",
        "contenido": "cualquier contenido con Messi",
        "url": "http://url/noticia.php"
    },
    {
        "titulo": "Otro título de fúlbol",
        "contenido": "cualquier contenido que dice a a Messi le dió coronavirus",
        "url": "http://url/noticia.php"
    }
];
module.exports = app;