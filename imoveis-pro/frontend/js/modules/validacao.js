// ===== MÓDULO DE VALIDAÇÃO =====

const ValidacaoModule = {
    validarEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    validarTelefone: function(telefone) {
        const apenasNumeros = telefone.replace(/\D/g, '');
        return apenasNumeros.length === 11;
    },

    validarValor: function(valor) {
        const num = parseInt(valor);
        return num >= CONFIG.MIN_PRICE && num <= CONFIG.MAX_PRICE;
    },

    validarArea: function(area) {
        const num = parseFloat(area);
        return num >= CONFIG.MIN_AREA && num <= CONFIG.MAX_AREA;
    },

    validarFormulario: function(dados) {
        console.log('✓ Validando formulário');
        return true;
    }
};
