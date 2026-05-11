// ===== MODELO DE IMÓVEL =====

import mongoose from 'mongoose';

const imovelSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        enum: ['aluguel', 'venda'],
        required: true
    },
    categoria: {
        type: String,
        enum: ['apartamento', 'casa', 'comercial', 'terreno', 'kitnet'],
        required: true
    },
    preco: {
        type: Number,
        required: true,
        min: 100
    },
    area: {
        type: Number,
        required: true,
        min: 10
    },
    quartos: {
        type: Number,
        default: 0,
        min: 0
    },
    banheiros: {
        type: Number,
        default: 0,
        min: 0
    },
    vagas: {
        type: Number,
        default: 0,
        min: 0
    },
    endereco: {
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String,
        latitude: Number,
        longitude: Number
    },
    fotos: [{
        url: String,
        descricao: String
    }],
    caracteristicas: [String],
    corretor: {
        nome: String,
        email: String,
        telefone: String,
        creci: String
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'vendido', 'alugado'],
        default: 'ativo'
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    atualizadoEm: {
        type: Date,
        default: Date.now
    }
});

// Índices
imovelSchema.index({ titulo: 'text', descricao: 'text', bairro: 'text' });
imovelSchema.index({ tipo: 1 });
imovelSchema.index({ categoria: 1 });
imovelSchema.index({ preco: 1 });
imovelSchema.index({ 'endereco.cidade': 1 });
imovelSchema.index({ 'endereco.bairro': 1 });

export default mongoose.model('Imovel', imovelSchema);
