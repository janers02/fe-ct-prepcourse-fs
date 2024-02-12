/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:

   //return num**2;       tambièn se puede asì o
   return Math.pow(num, 2)
}
console.log(elevarAlCuadrado(12));


function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:

   //return num**3;       //tambièn se puede asì o
   return Math.pow(num, 3);
}
console.log(elevarAlCubo(5));



function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:

   //return num**exponent     o tambièn
   return Math.pow(num, exponent);
}
console.log(elevar(3, 2));


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);   //tambien se puede almacenar en variable
}
console.log(redondearNumero(1.589));



function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:

   return Math.ceil(num);
}
console.log(redondearHaciaArriba(4.28));


function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
}
console.log(numeroRandom());


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
