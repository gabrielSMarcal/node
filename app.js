const express = require('express')
const rotaLivrto = require('./routers/livro')
const app = express()
const port = 8000

app.use('/livros', rotaLivrto)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})