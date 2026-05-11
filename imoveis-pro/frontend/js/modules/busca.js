// ===== MÓDULO DE BUSCA =====

const BuscaModule = {
    termo: '',
    resultados: [],

    buscar: function(termo) {
        this.termo = termo;
        console.log('🔎 Buscando:', termo);
        // Fazer busca
        return this.resultados;
    },

    limpar: function() {
        this.termo = '';
        this.resultados = [];
        console.log('✓ Busca limpa');
    }
};
