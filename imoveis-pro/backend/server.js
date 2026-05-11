// ===== SERVER ENTRY POINT =====

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import imoveisRouter from './routes/imoveis.js';

// Configurações
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Conectar banco de dados
connectDB();

// Rotas
app.use('/api/imoveis', ioveisRouter);

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota padrão
app.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo à API de Imóveis',
        version: '1.0.0',
        endpoints: {
            imoveis: '/api/imoveis',
            health: '/health'
        }
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('❌ Erro:', err);
    res.status(err.status || 500).json({
        error: err.message,
        status: err.status || 500
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        path: req.path
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

export default app;
