// ===== MÓDULO DE FILTROS =====

const FilterModule = {
    filtros: {
        tipo: '',
        preco_min: 0,
        preco_max: 0,
        area_min: 0,
        area_max: 0,
        localizacao: ''
    },

    init: function() {
        console.log('🔍 Inicializando filtros');
        this.atualizarFiltros();
    },

    atualizarFiltros: function(novosFiltros) {
        Object.assign(this.filtros, novosFiltros);
        console.log('✓ Filtros atualizados:', this.filtros);
        this.aplicar();
    },

    aplicar: function() {
        console.log('🔄 Aplicando filtros');
        // Filtrar imóveis
    },

    limpar: function() {
        this.filtros = {
            tipo: '',
            preco_min: 0,
            preco_max: 0,
            area_min: 0,
            area_max: 0,
            localizacao: ''
        };
        console.log('✓ Filtros limpos');
        this.aplicar();
    }
};
