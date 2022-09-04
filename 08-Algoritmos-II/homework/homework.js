'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array;
  
  var pivot = array[Math.floor(Math.random() * array.length)];
  var leftSide = [];
  var equals = [];
  var rightSide = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot){
      leftSide.push(array[i])
    } 
    else if (array[i] === pivot){
      equals.push(array[i])
    }
    else {
      rightSide.push(array[i])
    }
  }
  return quickSort(leftSide).concat(equals).concat(quickSort(rightSide));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
