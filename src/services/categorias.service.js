const categorias = require("../data/categorias");

const obtenerCategorias = () => {
    return categorias;
};

const obtenerCategoriaPorId = (id) => {
    return categorias.find(
        categoria => categoria.id === Number(id)
    );
};

const crearCategoria = (nuevaCategoria) => {
    const nuevoId = categorias.length > 0
        ? Math.max(...categorias.map(c => c.id)) + 1
        : 1;

    const categoria = { id: nuevoId, ...nuevaCategoria };
    categorias.push(categoria);
    return categoria;
};

const actualizarCategoria = (id, datosActualizados) => {
    const indice = categorias.findIndex(
        categoria => categoria.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    categorias[indice] = {
        ...categorias[indice],
        ...datosActualizados,
        id: categorias[indice].id
    };

    return categorias[indice];
};

const eliminarCategoria = (id) => {
    const indice = categorias.findIndex(
        categoria => categoria.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    const categoriaEliminada = categorias.splice(indice, 1);
    return categoriaEliminada[0];
};

module.exports = {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
};