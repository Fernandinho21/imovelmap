// ===== CONFIGURAÇÕES GLOBAIS =====

const CONFIG = {
    // API
    API_URL: process.env.API_URL || 'http://localhost:3000/api',
    API_TIMEOUT: 30000,

    // Paginação
    ITEMS_PER_PAGE: 12,

    // Upload
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    MAX_FILES: 10,
    ALLOWED_FORMATS: ['image/jpeg', 'image/png', 'image/webp'],

    // Mapa
    MAP_CENTER: [-23.5505, -46.6333],
    MAP_ZOOM: 12,

    // Validação
    MIN_PRICE: 100,
    MAX_PRICE: 999999999,
    MIN_AREA: 10,
    MAX_AREA: 100000,

    // Debug
    DEBUG: process.env.DEBUG || false
};

console.log('🚀 Config carregada:', CONFIG);
