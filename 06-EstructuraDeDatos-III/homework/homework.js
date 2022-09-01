"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(worth) {
  this.value = worth;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (nodo){
  var subTree = new BinarySearchTree(nodo);
  if(nodo < this.value){
    if(!this.left){
      this.left = subTree;
    } else {
      this.left.insert(nodo);
    }
  } else if(nodo >= this.value){
    if(!this.right){
      this.right = subTree;
    } else {
      this.right.insert(nodo)
    }
  }
}

BinarySearchTree.prototype.contains = function (searching){
  if(this.value === searching) return true;

  if(searching < this.value){
    if(!this.left) return false;
    else return this.left.contains(searching)
  } else {
    if(!this.right) return false;
    else return this.right.contains(searching)
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, texto){
  if(!texto || texto === 'in-order'){
    if(this.left) {
      this.left.depthFirstForEach(cb, texto)
    }
    cb(this.value)
    if(this.right){
      this.right.depthFirstForEach(cb, texto)
    }
  }
  else if(texto === 'pre-order'){
    cb(this.value)
    if(this.left){
      this.left.depthFirstForEach(cb, texto)
    }
    if(this.right){
      this.right.depthFirstForEach(cb, texto)
    }
  }
  else if(texto === 'post-order'){
    if(this.left){
      this.left.depthFirstForEach(cb, texto)
    }
    if(this.right){
      this.right.depthFirstForEach(cb, texto)
    }
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array){
  if(!array) array = [];
  if(this.left) array.push(this.left)
  if(this.right) array.push(this.right)
  cb(this.value)
  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array)
  }
} 

BinarySearchTree.prototype.size = function (){
  if(this.left && this.right) return 1 + this.left.size() + this.right.size();
  else if(this.left) return 1 + this.left.size();
  else if(this.right) return 1 + this.right.size();
  else if(!this.left && !this.right) return 1;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
