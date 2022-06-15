//requerir paquete de node
//fs file system permite manejar los archivos en el sistema(leer documentacion de node para más info)
console.clear();

const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

console.clear();

// const [ , ,arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(process.argv);
// console.log(argv);

// console.log(base);

// const base = 3;
crearArchivoTabla(argv.b, argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
