const fs = require("fs");
const { blue } = require('./colors')

const crearArchivoTabla = async (base = 5, argv = false,hasta = 10) => {
  try {
    let salida = "";
    let nombreArchivo = `Tabla-${base}.txt`;
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (argv) {
      blue(nombreArchivo,base,salida);
    }

    fs.writeFileSync("./salida/" +nombreArchivo, salida);

    return nombreArchivo;
  } catch (err) {
    throw err;
  }

  //fs.writeFile te crea un archivo en la direccion que pongas de acuerdo al primer parametro
  //que recibe el path y al final el nombre y extension del archivo,
  //el segundo parametro es el contenido que va a recibir,
  //y como tercer parametro un callback que se ejecutara en caso de que haya un error
  // fs.writeFile(`../Tabla-${base}.txt`,salida,(err)=>{
  //     if(err) throw err;

  //     console.log(`Tabla-${base}.txt creado`);
  // });
};

module.exports = {
  crearArchivoTabla: crearArchivoTabla,
};
