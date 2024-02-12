/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      return true;
   } else {
      return false;
   }
}
console.log(sonIguales(3, 3));
console.log(sonIguales(3, '3'));   // === evalua valor y tipo de dato

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) {
      return true;
   } else {
      return false;
   }
}
console.log(tienenMismaLongitud('hola', 'hola'));



function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      return true;
   } else {
      return false;
   }
}
console.log(menosQueNoventa(100));


function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:

   if (num > 50) {
      return true;
   } else {
      return false;
   }
}
console.log(mayorQueCincuenta(20));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}
console.log(esPar(20));


function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:

   if (num % 2 !== 0) {
      return true;
   } else {
      return false;
   }
}
console.log(esImpar(22));





/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
