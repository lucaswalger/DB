// Importa a conexão com o banco de dados
const pool = require("../config/db.js")

// objeto com as funções do model
const pedidosModel = {
   async listarPedidos(){
      // função que solicita ao banco a lista de pedidos
      const sql = "SELECT * FROM pedidos"
    
      // Faz a consulta sql e guarda o resultado na variavel linhas
      const [linhas] = await pool.query(sql)

      // Retorna linhas para o controller
      return linhas
    }
}

// Exporta esse objeto pra ser utilizado em outro serviços
module.exports = pedidosModel