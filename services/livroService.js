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

function insereLivro(novoLivro) {

    const livros = getTotosLivros()
    const novaListaDeLivros = [...livros, novoLivro]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

module.exports = {
    getTotosLivros,
    getLivroPorId,
    insereLivro
}