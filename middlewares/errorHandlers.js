const handle404 = (req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        sugerencia: 'Visita GET / para ver los endpoints disponibles'
    });
};

module.exports = { handle404 };