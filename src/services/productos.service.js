const productos = require("../data/productos");

const obtenerProductos = () => {
    return productos;
};

const obtenerProductoPorId = (id) => {
    return productos.find(
        producto => producto.id === Number(id)
    );
};

const crearProducto = (nuevoProducto) => {
    const nuevoId = productos.length > 0
        ? Math.max(...productos.map(p => p.id)) + 1
        : 1;

    const producto = { id: nuevoId, ...nuevoProducto };
    productos.push(producto);
    return producto;
};

const actualizarProducto = (id, datosActualizados) => {
    const indice = productos.findIndex(
        producto => producto.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    productos[indice] = {
        ...productos[indice],
        ...datosActualizados,
        id: productos[indice].id
    };

    return productos[indice];
};

const eliminarProducto = (id) => {
    const indice = productos.findIndex(
        producto => producto.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    const productoEliminado = productos.splice(indice, 1);
    return productoEliminado[0];
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
