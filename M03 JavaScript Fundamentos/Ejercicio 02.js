/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
console.log(devolverString("yovana"));
console.log(devolverString("karina"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   /*var total = (x + y);
   return total;
}
console.log(suma(6, 9));*/
   return x + y;
}
console.log(suma(4, 5));


function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
console.log(resta(200, 10));


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var div = x / y;
   return div;
}
console.log(divide(8, 2));


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
console.log(multiplica(4 * 8));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
