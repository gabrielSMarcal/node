const fs = require('fs')

function getTotosLivros(req, res) {
    return JSON.parse(fs.readFileSync('livros.json'))
}

module.exports = {
    getTotosLivros
}