// ===== FORMATADORES =====

const Formatadores = {
    moeda: function(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(valor);
    },

    numero: function(valor, decimais = 2) {
        return parseFloat(valor).toLocaleString('pt-BR', {
            minimumFractionDigits: decimais,
            maximumFractionDigits: decimais
        });
    },

    telefone: function(valor) {
        valor = valor.replace(/\D/g, '');
        if (valor.length <= 2) return valor;
        if (valor.length <= 7) return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
    },

    data: function(valor) {
        return new Date(valor).toLocaleDateString('pt-BR');
    },

    endereco: function(rua, numero, bairro, cidade) {
        return `${rua}, ${numero} - ${bairro}, ${cidade}`;
    }
};
