const { getTotosFavoritos, insereFavorito, adicionarFavorito, removerFavorito } = require("../services/favoritosService")


function getFavoritos(req, res) {

    try {
        const favoritos = getTotosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {

    try {       
        const id = req.params.id

        if (id && Number(id)) {
            adicionarFavorito(id)
            res.status(201)
            res.send(`Livro inserido com sucesso!`)
        } else {
            res.status(422)
            res.send('ID inválido!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try{
        const id = req.params.id

        if (id && Number(id)) {
            removerFavorito(id)
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
    getFavoritos,
    postFavorito,
    deleteFavorito
}