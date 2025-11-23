const fs = require('fs')
const { get } = require('http')

function getTotosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {

    const livros = getTotosLivros()
    const livroFiltrado = livros.filter(livro => livro.id === id) [0]

    return livroFiltrado
}

function adicionarLivro(novoLivro) {

    const livros = getTotosLivros()
    const novaListaDeLivros = [...livros, novoLivro]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function modificarLivro(modificacoes, id) {

    let livrosAtuais = getTotosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const livroAtualizado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = livroAtualizado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function apagarLivro(id) {
    
    const livros = getTotosLivros()
    const livroFiltrado = livros.filter(livro => livro.id !== id)

    fs.writeFileSync('livros.json', JSON.stringify(livroFiltrado))
}

module.exports = {
    getTotosLivros,
    getLivroPorId,
    adicionarLivro,
    modificarLivro,
    apagarLivro
}