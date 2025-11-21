const { Router } = require('express')
const { getLivros, getLivro, postLivro } = require('../controllers/livroController')
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Teste de PATCH na rota de livros')
})


router.delete('/', (req, res) => {
    res.send('Teste de DELETE na rota de livros')
})

module.exports = router