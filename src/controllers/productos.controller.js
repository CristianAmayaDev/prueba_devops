const productosService =
    require("../services/productos.service");

const obtenerProductos = (req, res) => {
    const productos =
        productosService.obtenerProductos();
    res.status(200).json(productos);
};

const obtenerProductoPorId = (req, res) => {
    const { id } = req.params;
    const producto =
        productosService.obtenerProductoPorId(id);

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.status(200).json(producto);
};

const crearProducto = (req, res) => {
    const nuevoProducto = req.body;
    const productoCreado =
        productosService.crearProducto(nuevoProducto);

    res.status(201).json({
        mensaje: "Producto creado correctamente",
        producto: productoCreado
    });
};

const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const productoActualizado =
        productosService.actualizarProducto(
            id,
            datosActualizados
        );

    if (!productoActualizado) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Producto actualizado correctamente",
        producto: productoActualizado
    });
};

const eliminarProducto = (req, res) => {
    const { id } = req.params;
    const productoEliminado =
        productosService.eliminarProducto(id);

    if (!productoEliminado) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Producto eliminado correctamente",
        producto: productoEliminado
    });
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};