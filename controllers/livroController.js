function getLivros(req, res) {

    try {

        throw new Error('Teste')
        res.send('Hello World from Moon!')

    } catch (error) {

        res.status(500)
        res.send(error.message)

    }
}

module.exports = {
    getLivros
}