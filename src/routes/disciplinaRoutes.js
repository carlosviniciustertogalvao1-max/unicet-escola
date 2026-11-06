const express = require('express');
const router = express.Router();
const DisciplinaController = require('../controllers/DisciplinaController');

// Definição das rotas e respetivos verbos HTTP
router.get('/', DisciplinaController.listarTodos);
router.get('/:id', DisciplinaController.listarPorId);
router.post('/', DisciplinaController.salvar);
router.put('/:id', DisciplinaController.editar);
router.delete('/:id', DisciplinaController.deletar);

module.exports = router;