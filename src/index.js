module.exports = function towelSort (matrix) {
    if(!matrix){return []}
    let a = 0;
      for(let i = 0; i < matrix.length; i++){
      i%2?matrix[i].reverse():0;
    }
    a = matrix.flat();
  return a;
}
