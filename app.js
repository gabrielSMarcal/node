const express = require('express')
const rotaLivro = require('./routers/livroRouter')
const app = express()
const port = 8000

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})