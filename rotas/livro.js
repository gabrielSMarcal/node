const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World from Moon!')
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