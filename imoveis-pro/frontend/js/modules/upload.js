// ===== MÓDULO DE UPLOAD =====

const UploadModule = {
    files: [],

    init: function() {
        console.log('📸 Inicializando upload');
    },

    validarArquivos: function(files) {
        if (files.length > CONFIG.MAX_FILES) {
            return 'Máximo de ' + CONFIG.MAX_FILES + ' fotos';
        }

        for (let file of files) {
            if (file.size > CONFIG.MAX_FILE_SIZE) {
                return 'Arquivo muito grande: ' + file.name;
            }
            if (!CONFIG.ALLOWED_FORMATS.includes(file.type)) {
                return 'Formato não permitido: ' + file.name;
            }
        }

        return null;
    },

    adicionarArquivos: function(files) {
        const erro = this.validarArquivos(files);
        if (erro) {
            console.error(erro);
            return false;
        }

        this.files = Array.from(files);
        console.log('✓ Arquivos adicionados:', this.files.length);
        return true;
    },

    enviarArquivos: async function() {
        console.log('⬆️ Enviando arquivos...');
    }
};
