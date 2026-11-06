const express = require('express');
const estudanteRoutes = require('./src/routes/estudanteRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');
const disciplinaRoutes = require('./src/routes/disciplinaRoutes');
const matriculaRoutes = require('./src/routes/matriculaRoutes');


const app = express();
const PORT = 3000;

// Middleware global para interpretar JSON nas requisições
app.use(express.json());

// Encaminha todas as chamadas iniciadas por /estudantes para o router modular
app.use('/estudantes', estudanteRoutes);
app.use('/cursos', cursoRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/matriculas', matriculaRoutes);

// Rota raiz para conferência básica
app.get('/', (req, res) => {
  res.send('API Escola online e em funcionamento.');
});

// Abertura do servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});