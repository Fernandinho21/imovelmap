// ===== APPLICATION MAIN =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Aplicação iniciada');

    // Inicializar módulos
    initApp();
});

async function initApp() {
    try {
        // Carregar dados iniciais
        console.log('📦 Carregando dados...');

        // Inicializar mapa
        if (window.MapModule) {
            MapModule.init();
        }

        // Inicializar filtros
        if (window.FilterModule) {
            FilterModule.init();
        }

        console.log('✅ Aplicação pronta');
    } catch (error) {
        console.error('❌ Erro ao inicializar:', error);
    }
}
