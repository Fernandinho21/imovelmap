// ===== VALIDADORES =====

const Validadores = {
    email: function(valor) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(valor);
    },

    telefone: function(valor) {
        const apenasNumeros = valor.replace(/\D/g, '');
        return apenasNumeros.length === 11;
    },

    cpf: function(valor) {
        valor = valor.replace(/\D/g, '');
        if (valor.length !== 11) return false;
        // Validar CPF aqui
        return true;
    },

    cnpj: function(valor) {
        valor = valor.replace(/\D/g, '');
        if (valor.length !== 14) return false;
        // Validar CNPJ aqui
        return true;
    },

    url: function(valor) {
        try {
            new URL(valor);
            return true;
        } catch {
            return false;
        }
    },

    numPositivo: function(valor, min = 0, max = Infinity) {
        const num = parseFloat(valor);
        return !isNaN(num) && num >= min && num <= max;
    }
};
