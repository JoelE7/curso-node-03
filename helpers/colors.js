const colors = require("colors");


const blue = (texto = "Tabla del: ", base = 1, tabla = isRequired()) => {
    console.log(colors.blue("=================="))
    console.log(colors.red(texto));
    console.log(colors.blue("=================="))
    console.log(colors.rainbow(tabla));
}

var isRequired = () => { throw new Error( 'Parametro obligatorio' ); };

module.exports = {
    blue: blue,
};