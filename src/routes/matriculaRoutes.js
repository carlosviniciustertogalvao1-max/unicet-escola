const express = require('express');
const router = express.Router();
const MatriculaController = require('../controllers/MatriculaController');

// Definição das rotas e respetivos verbos HTTP
router.get('/', MatriculaController.listarTodos);
router.get('/:id', MatriculaController.listarPorId);
router.post('/', MatriculaController.salvar);
router.put('/:id', MatriculaController.editar);
router.delete('/:id', MatriculaController.deletar);

module.exports = router;