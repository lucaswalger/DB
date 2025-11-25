require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const cors = require('cors')
// Middleware para resolver cors
app.use(cors({
    origin: "*",
    credentials: true
}))

// Rota padrão do servidor
app.get('/', (req,res) => {
    res.json('Ola, bem vindo')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})