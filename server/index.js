require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

const cors = require("cors")
// Middleware para resolver o cors
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)

// Middelware para lidar com os jsons 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Criação das Rotas Padrões
const usuarioRouter = require("./routes/usuarioRouter.js")
const clientesRouter = require("./routes/clientesRouter.js")
const categoriaRouter = require("./routes/categoriaRouter.js")
const produtosRouter = require("./routes/produtosRouter.js")
// const pedidosRouter = require ("./routes/pedidosRouter.js")

app.use("/usuarios", usuarioRouter)
app.use("/clientes", clientesRouter)
app.use("/produtos", produtosRouter)
app.use("/categoria", categoriaRouter)
// app.use("/pedidos", pedidosRouter)

// Rota padrão do servidor
app.get("/", (req, res) => {
  res.json("Oi, bem vindo")
});

// Traz as configurações do banco
const pool = require("./config/db.js")

// Cria uma conexão teste com o banco
pool.getConnection((erro, conexao) => {
  // Se deu erro, avisa e encerra a tentativa
  if (erro) {
    console.log("Erro ao tentar conectar com o banco de dados")
    process.exit(1);
  }

  //   Se deu certo, também avisa e para a conexão
  console.log("Conectado com o banco de dados com sucesso!")
  conexao.release();
  //   Se o banco de dados estiver ativo, ai sim o servidor será iniciado
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

  })
})