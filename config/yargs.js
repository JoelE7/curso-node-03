const { number } = require("yargs");

const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description : "Esta es una prueba de donde paso por consola al ejecutar el app.js"
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numoer";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    description : "Esta es una prueba de donde paso un boolean por consola al ejecutar el app.js"
  })
  .check((argv, option) => {
    if (isNaN(argv.l)) {
      throw "Listar debe ser un boolean";
    }
    return true;
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    description : "Este numero define hasta donde se quiere la tabla de multiplicar"
  })
  .argv;

  module.exports = argv;