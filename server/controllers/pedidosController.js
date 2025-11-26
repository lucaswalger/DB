// Importação do model de pedidos
const pedidosModel = require("../models/pedidosModel.js")

// Cria um objeto com as funções do controller
const pedidosController = {

    // Função para solicitar ao model os pedidos
    async listar(req,res){
        try{
            // Guarda na variavel pedidos, o retorno da função listar vinda do model, que por sua vez, guardou em uma lista os pedido, e retornou
            const pedidos = await pedidosModel.listarPedidos()

            // Responde ao usuário, a lista de pedidos, convertendo para json
            res.status(200).json(pedidos)

        }
        catch(erro){
            res.status(500).json({erro: "Erro ao listar os pedidos"})
        }
    }
} 

// Exporta esse objeto para ser utilizado em outros arquivos
module.exports = pedidosController