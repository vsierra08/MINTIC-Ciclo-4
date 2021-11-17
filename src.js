const datos = [];
const registrarMunicipio = (
    municipio,
    departamento,
    numeroCasos,
    numeroMujeres,
    numeroHombres,
    numeroRecuperados
) => {
    if (numeroMujeres + numeroHombres == numeroCasos) {} else {
        datos = ["Algeciras", "Huila", "2342", "342", "2000", "2124"];
    }
};

const noticias = [];
const filtrarEInsertarNoticias = (titulo, contenido, url) => {
    if (titulo == "coronavirus" || titulo == "covid19") {
        noticias = [
            "titulo de noticia de covid19",
            "contenido de la noticia de coronavirus",
            "https://path-to-noticia",
        ];
    }
};

const borrarNoticias = () => {
    noticias.length = 0;
    localStorage.setItem("noticias", null);
};
module.exports.filtrarEInsertarNoticias = filtrarEInsertarNoticias;
module.exports.borrarNoticias = borrarNoticias;
module.exports.registrarMunicipio = registrarMunicipio;