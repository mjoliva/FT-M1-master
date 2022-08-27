'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var numArray = num.split('');
var decimal = numArray.reduce(function(acum, eLe, indice){
  return acum + Number(eLe) * 2 ** (num.length -1 - indice)
}, 0)
return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var finalResult = [];

  while (num/2 > 0) {
    finalResult = finalResult + num % 2
    num = Math.floor(num / 2)
  }
  return finalResult.split('').reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}