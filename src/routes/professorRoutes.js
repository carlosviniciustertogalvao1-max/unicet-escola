const express = require('express');
const router = express.Router();
const Profe = require('../controllers/Profe');

// Definição das rotas e respetivos verbos HTTP
router.get('/', ProfessorController.listarTodos);
router.get('/:id', ProfessorController.listarPorId);
router.post('/', ProfessorController.salvar);
router.put('/:id', ProfessorController.editar);
router.delete('/:id', ProfessorController.deletar);

module.exports = router;