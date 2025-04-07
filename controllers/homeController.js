const getHomeInfo = (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API de ejemplo',
        endpoints: {
            sumar: {
                metodo: 'GET',
                url: '/sumar?num1=X&num2=Y',
                descripcion: 'Suma dos números recibidos por query params'
            },
            saludar: {
                metodo: 'POST',
                url: '/saludar',
                body: { "name": "Nombre" },
                descripcion: 'Saluda al nombre recibido en el body'
            },
            consumidor: {
                metodo: 'GET',
                url: '/consumidor',
                headers: { "consumidor": "NombreDepartamento" },
                descripcion: 'Identifica al consumidor por headers'
            }
        }
    });
};

module.exports = { getHomeInfo };
