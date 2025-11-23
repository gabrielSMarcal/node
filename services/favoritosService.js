const fs = require('fs')
const { get } = require('http')
const { getTotosLivros } = require('./livroService')

function getTotosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function removerFavorito(id) {
    const favoritos = getTotosFavoritos()
    const favoritosAtualizados = favoritos.filter(favorito => favorito.id !== id)

    fs.writeFileSync('favoritos.json', JSON.stringify(favoritosAtualizados))
}

function adicionarFavorito(id) {
    const livros = getTotosLivros()
    const favoritos = getTotosFavoritos()
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [ ...favoritos, livroInserido ]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTotosFavoritos,
    removerFavorito,
    adicionarFavorito
}