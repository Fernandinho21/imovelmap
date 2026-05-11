// ===== IMOVEL CONTROLLER =====

import Imovel from '../models/Imovel.js';

// Listar todos os imóveis
export async function listarImoveis(req, res) {
    try {
        const { tipo, categoria, preco_min, preco_max, page = 1, limit = 12 } = req.query;

        let filtros = { status: 'ativo' };

        if (tipo) filtros.tipo = tipo;
        if (categoria) filtros.categoria = categoria;
        if (preco_min || preco_max) {
            filtros.preco = {};
            if (preco_min) filtros.preco.$gte = preco_min;
            if (preco_max) filtros.preco.$lte = preco_max;
        }

        const skip = (page - 1) * limit;

        const imoveis = await Imovel.find(filtros)
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ criadoEm: -1 });

        const total = await Imovel.countDocuments(filtros);

        res.json({
            success: true,
            data: imoveis,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// Obter um imóvel por ID
export async function obterImovel(req, res) {
    try {
        const { id } = req.params;
        const imovel = await Imovel.findById(id);

        if (!imovel) {
            return res.status(404).json({ success: false, error: 'Imóvel não encontrado' });
        }

        res.json({ success: true, data: imovel });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// Criar novo imóvel
export async function criarImovel(req, res) {
    try {
        const { titulo, descricao, tipo, categoria, preco, area, quartos, banheiros, vagas, endereco, fotos, caracteristicas, corretor } = req.body;

        const novoImovel = new Imovel({
            titulo,
            descricao,
            tipo,
            categoria,
            preco,
            area,
            quartos,
            banheiros,
            vagas,
            endereco,
            fotos,
            caracteristicas,
            corretor
        });

        const imovelSalvo = await novoImovel.save();

        res.status(201).json({
            success: true,
            data: imovelSalvo,
            message: 'Imóvel criado com sucesso'
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

// Atualizar imóvel
export async function atualizarImovel(req, res) {
    try {
        const { id } = req.params;
        const dados = req.body;
        dados.atualizadoEm = new Date();

        const imovelAtualizado = await Imovel.findByIdAndUpdate(id, dados, { new: true });

        if (!imovelAtualizado) {
            return res.status(404).json({ success: false, error: 'Imóvel não encontrado' });
        }

        res.json({
            success: true,
            data: imovelAtualizado,
            message: 'Imóvel atualizado com sucesso'
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

// Deletar imóvel
export async function deletarImovel(req, res) {
    try {
        const { id } = req.params;
        const imovelDeletado = await Imovel.findByIdAndDelete(id);

        if (!imovelDeletado) {
            return res.status(404).json({ success: false, error: 'Imóvel não encontrado' });
        }

        res.json({
            success: true,
            message: 'Imóvel deletado com sucesso'
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// Buscar imóveis
export async function buscarImoveis(req, res) {
    try {
        const { termo, page = 1, limit = 12 } = req.query;

        const filtros = {
            $text: { $search: termo },
            status: 'ativo'
        };

        const skip = (page - 1) * limit;

        const imoveis = await Imovel.find(filtros)
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Imovel.countDocuments(filtros);

        res.json({
            success: true,
            data: imoveis,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
