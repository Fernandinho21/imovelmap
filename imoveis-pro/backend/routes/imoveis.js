// ===== ROTAS DE IMÓVEIS =====

import express from 'express';
import {
    listarImoveis,
    obterImovel,
    criarImovel,
    atualizarImovel,
    deletarImovel,
    buscarImoveis
} from '../controllers/imovelController.js';

const router = express.Router();

// Rotas
router.get('/', listarImoveis);
router.get('/busca', buscarImoveis);
router.get('/:id', obterImovel);
router.post('/', criarImovel);
router.put('/:id', atualizarImovel);
router.delete('/:id', deletarImovel);

export default router;
