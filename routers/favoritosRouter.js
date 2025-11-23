const { Router } = require('express')
const { getFavoritos, postFavorito, deleteFavorito } = require('../controllers/favoritosController')

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)
module.exports = router