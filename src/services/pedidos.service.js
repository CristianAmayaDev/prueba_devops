const pedidos = require("../data/pedidos");

const obtenerPedidos = () => {
    return pedidos;
};

const obtenerPedidoPorId = (id) => {
    return pedidos.find(
        pedido => pedido.id === Number(id)
    );
};

const crearPedido = (nuevoPedido) => {
    const nuevoId = pedidos.length > 0
        ? Math.max(...pedidos.map(p => p.id)) + 1
        : 1;

    const pedido = { id: nuevoId, ...nuevoPedido };
    pedidos.push(pedido);
    return pedido;
};

const actualizarPedido = (id, datosActualizados) => {
    const indice = pedidos.findIndex(
        pedido => pedido.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    pedidos[indice] = {
        ...pedidos[indice],
        ...datosActualizados,
        id: pedidos[indice].id
    };

    return pedidos[indice];
};

const eliminarPedido = (id) => {
    const indice = pedidos.findIndex(
        pedido => pedido.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    const pedidoEliminado = pedidos.splice(indice, 1);
    return pedidoEliminado[0];
};

module.exports = {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};
