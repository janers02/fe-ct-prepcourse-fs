/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   //console.log(array);    // para mostrar lo que contiene el array
   return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var nuevoArray = [];
   for (i = 0; i < array.length; i++) {
      nuevoArray.push(array[i] + 1);
   }
   return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   console.log(palabras.join(" "))
   return palabras.join(" ")
}
dePalabrasAFrase(["Hello", "world", "holaaaa"])



function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}



/*TAMBIEN SE PUEDE HACER CON:    EL METODO INCLUDES

return array.includes(elemento)*/




function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:



   var suma = 0;
   for (var i = 0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i]
   }
   return suma;
}
console.log(agregarNumeros([1, 2, 3, 6]))


/*        TAMBIEN PODEMOS HACER ESTE EJERCICIO USANDO REDUCE

var nuevo= arrayOfNums.reduce(function (suma, elemento) {
  return acumulador + elemento
},0)
*/



function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return agregarNumeros(resultadosTest) / resultadosTest.length
}



function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   for (var i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > arrayOfNums[i + 1]) {
         return arrayOfNums[i]
      }
   }
}


/*       TAMBIEN PODEMOS HACER ESTE EJERCICIO USANDO METODO MAX

return Math.max(...arrayOfNums)*/




function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   console.log(arguments)

   if (arguments.length === 0) return 0;

   var multiplicar = 1;
   for (var i = 0; i < arguments.length; i++) {
      multiplicar = multiplicar * arguments[i]
   }
   return multiplicar
}
console.log(multiplicarArgumentos(5, 4, 3, 9))




function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador = contador + 1;
      }
   }
   return contador;
}

console.log(cuentoElementos(1, 40, 50, 2))

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"
   else return "Es dia laboral"
}
console.log(diaDeLaSemana(5))



function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:


   //console.log(num.charAt(3))   el console log puede ir aqui para ver si funciona el charAt
   num = num.toString()
   // console.log(num.charAt(3))  el console log tambien  puede ir aqui para ver si funciona el charAt

   if (num.charAt(0) === '9') return true;
   else return false;
}
console.log(empiezaConNueve(854))




function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) return true
      else return false
   }
}



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:


   var nuevoArray = []

   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         nuevoArray.push(array[i])
      }
   }

   if (nuevoArray.length === 3) return nuevoArray;
   else return "No se encontraron los meses pedidos"
}



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:


   var i = 0;
   var nuevoArray = []

   while (i <= 10) {
      var multiplicar = i * 6;
      nuevoArray.push(multiplicar);
      i++;
   }
   return nuevoArray;
}
console.log(tablaDelSeis())



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var nuevoArray = [];

   for (var i = 0; i < array.length; i++) {

      if (array[i] > 100) nuevoArray.push(array[i])
   }
   return nuevoArray;

}

/****    TAMBIEN SE PUEDE HACER ESTE EJERCICIO USANDO EL METODO DEL ARRAY :  FILTER  

var nuevoArray = array.filter(elemento => elemento > 100);
return nuevoArray;
*/




/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var array = [];
   var i = 0;

   while (i < 10) {

      num = num + 2;
      if (num === i) break;
      array.push(num)
      i++;
   }
   if (i < 10) return "Se interrumpió la ejecución";
   return array;
}

console.log(breakStatement(5))






function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:


   var array = [];
   var i = 0;

   while (i < 10) {
      i++;
      if (i === 5) continue;
      num = num + 2;
      array.push(num)
   }
   return array;
}
console.log(continueStatement(5))



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
