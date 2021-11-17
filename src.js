const datos = [];
const registrarMunicipio = (
    municipio,
    departamento,
    numeroCasos,
    numeroMujeres,
    numeroHombres,
    numeroRecuperados
) => {
    if ((numeroMujeres + numeroHombres) = numeroCasos) {
        window.print("Error");
    }
    var datos = ["Algeciras", "Huila", "2342", "342", "2000", "2124"];
};

const noticias = [];
const filtrarEInsertarNoticias = (titulo, contenido, url) => {

};

const borrarNoticias = () => {
    noticias.length = 0;
    localStorage.setItem('noticias', null);
};
module.exports.filtrarEInsertarNoticias = filtrarEInsertarNoticias;
module.exports.borrarNoticias = borrarNoticias;
module.exports.registrarMunicipio = registrarMunicipio;