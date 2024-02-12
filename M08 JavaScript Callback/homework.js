/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   console.log(nombre)
   var nombreMayus = '';

   var primeraLetra = nombre.charAt(0).toUpperCase()
   console.log(primeraLetra)


   for (var i = 1; i < nombre.length; i++) {
      nombreMayus = nombreMayus + nombre[i]
      console.log(nombreMayus);
   }

   nombre = primeraLetra + nombreMayus;
   console.log(nombre)
   return nombre;
}

console.log(mayuscula("jane"))




function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}





function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:


   return cb(num1, num2);
}


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:



   var resultado = arrayOfNumbers.reduce(function (suma, num) {
      return suma + num
   }, 0)
   cb(resultado)
}




function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   array.forEach(cb)
}

/*2DA OPCION 
for (var i = 1; i <array.length; i++) {
cb(array[i])
}*/




function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:


   //OPCION 1
   var nuevoArray = array.map(function (elemento) {
      return cb(elemento);
   })
   return nuevoArray;
}

/* OPCION 2

   nuevoArray = []
   for (var i = 0; i < array.length; i++) {
      nuevoArray.push(cb(array[i]))
   }
   return nuevoArray;
}*/






function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:


   // OPCION 1
   var nuevoArray = [];

   for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === "a") {
         nuevoArray.push(arrayOfStrings[i])
      }
   }
   return nuevoArray;
}

/*OPCION 2
var nuevoArray = arrayOfStrings.filter(function (elemento) {
   return elemento[0] === "a"
})
return nuevoArray;
}*/


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
