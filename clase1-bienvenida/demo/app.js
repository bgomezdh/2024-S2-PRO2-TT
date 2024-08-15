/* modulo nativo */

const os = require('os');

/* console.log(os.version());
 */
/* modulo de terceros */
const moment = require('moment');

/* console.log( moment().format("MMM Do YY"));
 */
/* modulos propios */
const calculadora = require('./my__modules/calculadora');

let resultado = calculadora.multiplicar(5,40);

console.log(resultado);


