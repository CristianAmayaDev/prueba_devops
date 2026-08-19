const categoriasService =
    require("../services/categorias.service");

const obtenerCategorias = (req, res) => {
    const categorias =
        categoriasService.obtenerCategorias();
    res.status(200).json(categorias);
};

const obtenerCategoriaPorId = (req, res) => {
    const { id } = req.params;
    const categoria =
        categoriasService.obtenerCategoriaPorId(id);

    if (!categoria) {
        return res.status(404).json({
            mensaje: "Categoría no encontrada"
        });
    }

    res.status(200).json(categoria);
};

const crearCategoria = (req, res) => {
    const nuevaCategoria = req.body;
    const categoriaCreada =
        categoriasService.crearCategoria(nuevaCategoria);

    res.status(201).json({
        mensaje: "Categoría creada correctamente",
        categoria: categoriaCreada
    });
};

const actualizarCategoria = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const categoriaActualizada =
        categoriasService.actualizarCategoria(
            id,
            datosActualizados
        );

    if (!categoriaActualizada) {
        return res.status(404).json({
            mensaje: "Categoría no encontrada"
        });
    }

    res.status(200).json({
        mensaje: "Categoría actualizada correctamente",
        categoria: categoriaActualizada
    });
};

const eliminarCategoria = (req, res) => {
    const { id } = req.params;
    const categoriaEliminada =
        categoriasService.eliminarCategoria(id);

    if (!categoriaEliminada) {
        return res.status(404).json({
            mensaje: "Categoría no encontrada"
        });
    }

    res.status(200).json({
        mensaje: "Categoría eliminada correctamente",
        categoria: categoriaEliminada
    });
};

module.exports = {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
};