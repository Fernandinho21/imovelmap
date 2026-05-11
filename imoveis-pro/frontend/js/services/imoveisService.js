// ===== IMÓVEIS SERVICE =====

const ImoveisService = {
    imoveis: [],

    listar: async function() {
        console.log('📋 Listando imóveis');
        try {
            const response = await ApiService.get('/imoveis');
            this.imoveis = response.data || [];
            return this.imoveis;
        } catch (error) {
            console.error('Erro ao listar imóveis:', error);
            return [];
        }
    },

    obter: async function(id) {
        console.log('🏠 Obtendo imóvel:', id);
        try {
            const response = await ApiService.get(`/imoveis/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter imóvel:', error);
            throw error;
        }
    },

    criar: async function(dados) {
        console.log('➕ Criando imóvel');
        try {
            const response = await ApiService.post('/imoveis', dados);
            this.imoveis.push(response.data);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar imóvel:', error);
            throw error;
        }
    },

    atualizar: async function(id, dados) {
        console.log('✏️ Atualizando imóvel:', id);
        try {
            const response = await ApiService.put(`/imoveis/${id}`, dados);
            const index = this.imoveis.findIndex(i => i.id === id);
            if (index !== -1) {
                this.imoveis[index] = response.data;
            }
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar imóvel:', error);
            throw error;
        }
    },

    deletar: async function(id) {
        console.log('🗑️ Deletando imóvel:', id);
        try {
            await ApiService.delete(`/imoveis/${id}`);
            this.imoveis = this.imoveis.filter(i => i.id !== id);
        } catch (error) {
            console.error('Erro ao deletar imóvel:', error);
            throw error;
        }
    }
};
