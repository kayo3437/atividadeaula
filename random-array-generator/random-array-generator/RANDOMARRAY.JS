/**

 * 
 * @param {number} size
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 */
function generateRandomArray(size, min, max) {
    if (size <= 0) {
      throw new Error('O tamanho do array deve ser um número positivo.');
    }
    if (min > max) {
      throw new Error('O valor mínimo não pode ser maior que o valor máximo.');
    }
  
    const result = [];
    for (let i = 0; i < size; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      result.push(randomNum);
    }
    return result;
  }
  
  module.exports = generateRandomArray;
  