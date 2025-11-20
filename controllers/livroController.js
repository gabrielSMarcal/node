const { getTotosLivros } = require('../services/livroService')

function getLivros(req, res) {

    try {

        const livros = getTotosLivros()
        res.send(livros)

    } catch (error) {

        res.status(500)
        res.send(error.message)

    }
}

module.exports = {
    getLivros
}