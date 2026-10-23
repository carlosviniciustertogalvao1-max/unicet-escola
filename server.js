const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');

const app = express();
const PORT = 3000;

// Middleware global para interpretar JSON nas requisições
app.use(express.json());

// Encaminha todas as chamadas iniciadas por /estudantes para o router modular
app.use('/estudantes', estudanteRoutes);

// Rota raiz para conferência básica
app.get('/', (req, res) => {
  res.send('API Escola online e em funcionamento.');
});

// Abertura do servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});