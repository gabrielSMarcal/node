const { Router, response } = require('express')
const router = Router()

router.get('/', (req, res) => {
    try {
        throw new Error('Teste')
        res.send('Hello World from Moon!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
})

router.patch('/', (req, res) => {
    res.send('Teste de PATCH na rota de livros')
})

router.post('/', (req, res) => {
    res.send('Teste de POST na rota de livros')
})

router.delete('/', (req, res) => {
    res.send('Teste de DELETE na rota de livros')
})

module.exports = router