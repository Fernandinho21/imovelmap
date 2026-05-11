// ===== MIDDLEWARE DE VALIDAÇÃO =====

export function validarImovel(req, res, next) {
    const { titulo, descricao, tipo, categoria, preco, area } = req.body;

    const erros = [];

    if (!titulo || titulo.trim().length < 5) {
        erros.push('Título deve ter no mínimo 5 caracteres');
    }

    if (!tipo || !['aluguel', 'venda'].includes(tipo)) {
        erros.push('Tipo deve ser aluguel ou venda');
    }

    if (!categoria || !['apartamento', 'casa', 'comercial', 'terreno', 'kitnet'].includes(categoria)) {
        erros.push('Categoria inválida');
    }

    if (!preco || preco < 100) {
        erros.push('Preço deve ser no mínimo 100');
    }

    if (!area || area < 10) {
        erros.push('Área deve ser no mínimo 10m²');
    }

    if (erros.length > 0) {
        return res.status(400).json({
            success: false,
            errors: erros
        });
    }

    next();
}

export function validarCredenciais(req, res, next) {
    // Implementar validação de credenciais
    next();
}
