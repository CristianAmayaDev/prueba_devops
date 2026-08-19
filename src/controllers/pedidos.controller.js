const pedidosService =
    require("../services/pedidos.service");

const obtenerPedidos = (req, res) => {
    const pedidos =
        pedidosService.obtenerPedidos();
    res.status(200).json(pedidos);
};

const obtenerPedidoPorId = (req, res) => {
    const { id } = req.params;
    const pedido =
        pedidosService.obtenerPedidoPorId(id);

    if (!pedido) {
        return res.status(404).json({
            mensaje: "Pedido no encontrado"
        });
    }

    res.status(200).json(pedido);
};

const crearPedido = (req, res) => {
    const nuevoPedido = req.body;
    const pedidoCreado =
        pedidosService.crearPedido(nuevoPedido);

    res.status(201).json({
        mensaje: "Pedido creado correctamente",
        pedido: pedidoCreado
    });
};

const actualizarPedido = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const pedidoActualizado =
        pedidosService.actualizarPedido(
            id,
            datosActualizados
        );

    if (!pedidoActualizado) {
        return res.status(404).json({
            mensaje: "Pedido no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Pedido actualizado correctamente",
        pedido: pedidoActualizado
    });
};

const eliminarPedido = (req, res) => {
    const { id } = req.params;
    const pedidoEliminado =
        pedidosService.eliminarPedido(id);

    if (!pedidoEliminado) {
        return res.status(404).json({
            mensaje: "Pedido no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Pedido eliminado correctamente",
        pedido: pedidoEliminado
    });
};

module.exports = {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};
