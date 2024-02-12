/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:

   /*MI FORMA
    if (x > y) {
       return x;
    } else if (x === y) {
       return x || y;
    } else {
       return y;
    }
 }
 console.log(obtenerMayor(1000, 1000));*/



   /*O ASI USANDO MATH
   return Math.max(x, y)*/


   //O ASÌ MAS REDUCIDO
   if (x === y) return y;
   else if (x > y) return x;
   else return y;
}
console.log(obtenerMayor(1, 6));
console.log(obtenerMayor(5, 5));
console.log(obtenerMayor(20, 11));





function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:

   if (edad >= 18) {
      return "Allowed";
   } else {
      return "Not allowed";
   }
}

console.log(mayoriaDeEdad(18))


function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:

   /*OPCION IF/ELSE
      if (status === 2) return "Away";
   else if (status === 1) return "Online";
   else return "Offline";
}
console.log(conection(1))*/

   //OPCION SWITCH
   switch (status) {
      case 1:
         return "Online";
      case 2:
         return "Away";
      default:
         return "Offline";
   }
}
console.log(conection(2));



function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:

   switch (idioma) {
      case "aleman":
         return "Guten Tag!";
      case "mandarin":
         return "Ni Hao!";
      case "ingles":
         return "Hello!";
      default:
         return "Hola!"
   }
}
console.log(saludo("aleman"))
console.log(saludo("mandarin"))
console.log(saludo("ingles"))
console.log(saludo("italiano"))
console.log(saludo())


function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:

   switch (color) {
      case "blue":
         return "This is blue";
      case "red":
         return "This is red";
      case "green":
         return "This is green";
      case "orange":
         return "This is orange";
      default:
         return "Color not found";
   }
}
console.log(colors("red"))




function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num === 10 || num === 5) return true;
   else return false;
}
console.log(esDiezOCinco(10))
console.log(esDiezOCinco(5))
console.log(esDiezOCinco(800))
console.log(esDiezOCinco("hooo"))

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:

   if (num < 50 && num > 20) return true;
   else return false;
}
console.log(estaEnRango(21))


function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:

   /*1ERA OPCION
   if (num % 1 === 0) return true;
   else return false;*/

   //2DA OPCION
   //return num===Math.round(num)
   return Math.round(num) === num
}
console.log(esEntero(5.8))



/* EJEMPLOS DE REDONDEO
console.log(Math.round(5.9565))
console.log(Math.ceil(3.24592))
console.log(Math.floor(5.9665))
 
---------------------------------------
var num = 2.7607;
console.log(parseFloat(num));
console.log(parseFloat(num * 10, 10) / 10);
console.log(parseInt(num * 10, 10) / 10);*/



function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:

   if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
   else if (num % 3 === 0) return "fizz";
   else if (num % 5 === 0) return "buzz";
   else return false;
}
console.log(fizzBuzz(15))


function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:

   if (num1 > num2 && num1 > num3 && num1 > 0) return "Numero 1 es mayor y positivo";
   else if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
   else if (num3 > num1 && num3 > num2) {
      num3++;
      return num3;
   } else if (num1 === 0 && num2 === 0 && num3 === 0) return "Error"
   else return false

}
console.log(operadoresLogicos(20, 15, 10))
console.log(operadoresLogicos(-14, 10, 12))
console.log(operadoresLogicos(2, 4, 6))
console.log(operadoresLogicos(0, 0, 0))
console.log(operadoresLogicos(50, 80, 60))



function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   
   if (num <= 0 || num === 1) return false;

   for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return true;
}

console.log(esPrimo(4))




function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:

   /*1era forma
   if (valor) return "soy verdadero"
   else return "soy falso"*/

   //2da forma
   if (valor === true) return "Soy verdadero";
   else return "Soy falso";
}
console.log(esVerdadero("true."))


function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:


   if (num >= 100 && num <= 999) return true;
   else return false;
}
console.log(tieneTresDigitos(672))
console.log(tieneTresDigitos(545544))
console.log(tieneTresDigitos("doi"))


function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:

   var contador = 0;

   do {
      num = num + 5;
      contador++;
   } while (contador < 8) {
      return num;
   }
}
console.log(doWhile(2))

/*usando while
i = 0
while (i < 9)
   num += 5
i++
return num
}*/


console.log(doWhile(2))


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
