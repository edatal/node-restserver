const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuarioPatch, usuarioDelete  } = require('../controllers/usuarios');

const router = Router();

//Get
router.get('/', usuarioGet);

//Post
router.post('/', usuarioPost);

//Put
router.put('/:id', usuarioPut);

//Delete
router.delete('/', usuarioPatch);

//Patch
router.patch('/', usuarioDelete);

module.exports = router;