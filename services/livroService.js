const fs = require('fs')
const { get } = require('http')

function getTotosLivros(req, res) {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {

    const livros = getTotosLivros()

    const livroFiltrado = livros.filter(livro => livro.id === id) [0]
    return livroFiltrado
}

module.exports = {
    getTotosLivros,
    getLivroPorId
}