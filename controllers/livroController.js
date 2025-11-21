const { getTotosLivros, getLivroPorId, insereLivro, modificaLivro, apagaLivro } = require('../services/livroService')

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

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send(`ID ${id} não é considerado inválido`)
        }
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
        res.send(`Livro inserido com sucesso! ID ${novoLivro.id}`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id
        const modificacoes = req.body

        if (id && Number(id)) {
            modificaLivro(modificacoes, id)
            res.send(`Livro ${id} modificado com sucesso!`)
        } else {
            res.status(422)
            res.send(`ID ${id} não é considerado inválido`)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id

        if (id && Number(id)) {
            apagaLivro(id)
            res.send(`Livro ${id} apagado com sucesso!`)
        } else {
            res.status(422)
            res.send(`ID ${id} não é considerado inválido`)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}