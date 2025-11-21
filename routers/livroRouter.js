const { Router } = require('express')
const { getLivros, getLivro, postLivro, patchLivro } = require('../controllers/livroController')
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)


router.delete('/', (req, res) => {
    res.send('Teste de DELETE na rota de livros')
})

module.exports = router