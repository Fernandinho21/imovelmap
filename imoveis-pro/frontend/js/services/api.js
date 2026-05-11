// ===== API SERVICE =====

const ApiService = {
    baseURL: CONFIG.API_URL,

    async request(method, endpoint, data = null) {
        try {
            const url = this.baseURL + endpoint;
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getToken()
                },
                timeout: CONFIG.API_TIMEOUT
            };

            if (data) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    get(endpoint) {
        return this.request('GET', endpoint);
    },

    post(endpoint, data) {
        return this.request('POST', endpoint, data);
    },

    put(endpoint, data) {
        return this.request('PUT', endpoint, data);
    },

    delete(endpoint) {
        return this.request('DELETE', endpoint);
    },

    getToken() {
        return localStorage.getItem('authToken') || '';
    }
};
