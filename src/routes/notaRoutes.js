const express = require('express');
const router = express.Router();
const NotaRoutes = require('../controllers/NotaRoutes');

// Definição das rotas e respetivos verbos HTTP
router.get('/', NotaRoutes.listarTodos);
router.get('/:id', NotaRoutes.listarPorId);
router.post('/', NotaRoutes.salvar);
router.put('/:id', NotaRoutes.editar);
router.delete('/:id', NotaRoutes.deletar);

module.exports = router;