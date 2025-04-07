const generarSaludo = (nombre) => {
    if (!nombre || typeof nombre !== 'string') {
      throw new Error('Nombre no válido');
    }
    return `¡Hola pedazo de mierda si tu, ${nombre}!`;
  };
  
  module.exports = { generarSaludo };