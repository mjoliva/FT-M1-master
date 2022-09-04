'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array;
  
  var pivot = array[Math.floor(Math.random() * array.length)];
  var leftArray = [];
  var equals = [];
  var rightArray = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot){
      leftArray.push(array[i])
    } 
    else if (array[i] === pivot){
      equals.push(array[i])
    }
    else {
      rightArray.push(array[i])
    }
  }
  return quickSort(leftArray).concat(equals).concat(quickSort(rightArray));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length === 1) return array;

  var half = Math.floor(array.length / 2);
  var leftArray = array.slice(0, half);
  var rightArray = array.slice(half);

  return merge(mergeSort(leftArray), mergeSort(rightArray))

}

function merge(leftArray, rightArray){
  var left = 0;
  var right = 0;
  var mergeArray = [];

  while(left < leftArray.length && right < rightArray.length){
    if(leftArray[left] < rightArray[right]){
      mergeArray.push(leftArray[left])
      left++;
    } 
    else {
      mergeArray.push(rightArray[right])
      right++;
    }
  }
  return mergeArray.concat(leftArray.slice(left)).concat(rightArray.slice(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
