// Adaptar index.js para exportar app (para testes)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'Alpha6 API - V7M Platform',
    env: process.env.NODE_ENV,
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    time: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

const PORT = process.env.PORT || 3000;

// Só inicia servidor se não estiver em teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`🚀 Alpha6 rodando na porta ${PORT}`));
}

module.exports = app;
