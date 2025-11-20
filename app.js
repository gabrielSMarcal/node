const express = require('express')
const rotaLivrto = require('./rotas/livro')
const app = express()
const port = 8000

app.use('/livros', rotaLivrto)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})