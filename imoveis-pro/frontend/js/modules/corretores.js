// ===== MÓDULO DE CORRETORES =====

const CorreetoresModule = {
    corretores: [],

    listar: async function() {
        console.log('👥 Listando corretores');
        try {
            const response = await ApiService.get('/corretores');
            this.corretores = response.data;
            return this.corretores;
        } catch (error) {
            console.error('Erro ao listar corretores:', error);
            return [];
        }
    },

    obter: function(id) {
        return this.corretores.find(c => c.id === id);
    },

    criar: async function(dados) {
        console.log('➕ Criando corretor');
        try {
            const response = await ApiService.post('/corretores', dados);
            this.corretores.push(response.data);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar corretor:', error);
            throw error;
        }
    }
};
