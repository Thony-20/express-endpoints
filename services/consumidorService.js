const identificarConsumidor = (consumidor) => {
    if (!consumidor) {
      throw new Error('Header consumidor no proporcionado');
    }
    return `${consumidor} ha consumido este endpoint`;
  };
  
  module.exports = { identificarConsumidor };