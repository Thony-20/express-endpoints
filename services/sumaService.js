const sumarNumeros = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Los parámetros deben ser números válidos');
    }
    return num1 + num2;
  };
  
  module.exports = { sumarNumeros };