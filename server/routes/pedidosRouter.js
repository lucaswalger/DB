const express = require("express");
const router = express.Router()

// Importação do controller
const pedidosController = require("../controllers/pedidosController.js")

// criando rotas
router.get("/", pedidosController.listar)


// // Pegar um só pedido
// router.get("/:id", pedidosController.listarUmPedido)

// // Criar um pedido
// router.post("/", pedidosController.criarPedido)

module.exports = router