const express = require('express');
const router = express.Router();
const EstudanteController = require('../controllers/EstudanteController');

// Definição das rotas e respetivos verbos HTTP
router.get('/', EstudanteController.listarTodos);
router.get('/:id', EstudanteController.listarPorId);
router.post('/', EstudanteController.salvar);
router.put('/:id', EstudanteController.editar);
router.delete('/:id', EstudanteController.deletar);

module.exports = router;