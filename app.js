const cors = require('cors')
const express = require('express')
const rotaLivro = require('./routers/livroRouter')
const rotaFavoritos = require('./routers/favoritosRouter')


const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavoritos)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})