const { getTotosLivros, getLivroPorId, insereLivro } = require('../services/livroService')

function getLivros(req, res) {

    try {
        const livros = getTotosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {

    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {

    try {        
        const novoLivro = req.body
        insereLivro(novoLivro)
        res.status(201)
        res.send('Livro inserido com sucesso!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro
}