const express = require("express");
const router = express.Router();
const pedidosController = require("../controllers/pedidos.controller");

router.get("/", pedidosController.obtenerPedidos);
router.get("/:id", pedidosController.obtenerPedidoPorId);
router.post("/", pedidosController.crearPedido);
router.put("/:id", pedidosController.actualizarPedido);
router.delete("/:id", pedidosController.eliminarPedido);

module.exports = router;
