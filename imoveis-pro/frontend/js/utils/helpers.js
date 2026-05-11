// ===== HELPERS =====

const Helpers = {
    // DOM
    getId: function(id) {
        return document.getElementById(id);
    },

    getClass: function(className) {
        return document.querySelectorAll('.' + className);
    },

    select: function(selector) {
        return document.querySelector(selector);
    },

    selectAll: function(selector) {
        return document.querySelectorAll(selector);
    },

    addClass: function(element, className) {
        element.classList.add(className);
    },

    removeClass: function(element, className) {
        element.classList.remove(className);
    },

    toggleClass: function(element, className) {
        element.classList.toggle(className);
    },

    // Storage
    setStorage: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getStorage: function(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },

    removeStorage: function(key) {
        localStorage.removeItem(key);
    },

    // Notificações
    notify: function(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        // Implementar notificação visual
    },

    // Delay
    delay: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
