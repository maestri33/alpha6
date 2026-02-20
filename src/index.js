const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from V7M Platform!',
    env: process.env.NODE_ENV,
    version: '1.0.0'
  });
});

// Health check - OBRIGATÓRIO pro Coolify
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', time: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 App rodando na porta ${PORT}`));
