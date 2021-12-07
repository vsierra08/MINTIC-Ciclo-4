

const registrarMunicipio = async (
  municipio,
  departamento,
  numeroCasos,
  numeroMujeres,
  numeroHombres,
  numeroRecuperados
) => {
  let response = await fetch(
    "https://misiontic2022upb.vercel.app/api/epidemiologic-monitor/villages",
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        municipio: municipio,
        departamento: departamento,
        numeroCasos: numeroCasos,
        numeroMujeres: numeroMujeres,
        numeroHombres: numeroHombres,
        numeroRecuperados: numeroRecuperados
      })
    }
  );
  let result = await response.json();
  return result;
}


const contadorNoticiasSPAM = async () => {

  let response = await fetch("https://misiontic2022upb.vercel.app/api/epidemiologic-monitor/news");
  let noticiasAPI = await response.json();
  //console.log("noticiasAPI=" + noticiasAPI)
  const noticiasFiltradas = []
  const noticiasSpam = [];
  for (const iterator of noticiasAPI) {
    let covid19 = new RegExp("covid19");
    let coronavirus = new RegExp("coronavirus");
    if (iterator.titulo.search(covid19) != -1 || iterator.contenido.search(covid19) != -1 || iterator.titulo.search(coronavirus) != -1 || iterator.contenido.search(coronavirus) != -1) {
      noticiasFiltradas.push(iterator);
    } else {
      noticiasSpam.push(iterator);
    }
  }
  return noticiasSpam.length;
};

module.exports.registrarMunicipio = registrarMunicipio;
module.exports.contadorNoticiasSPAM = contadorNoticiasSPAM;
