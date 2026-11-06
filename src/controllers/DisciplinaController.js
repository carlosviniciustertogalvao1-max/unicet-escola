const db = require('../database/db');

class DisciplinaController {
  // Listar Todos
  static listarTodos(req, res) {
    db.all("SELECT * FROM disciplinas", [], (err, rows) => {
      if (err) return res.status(500).json({ erro: err.message });
      return res.status(200).json(rows);
    });
  }

  // Listar por ID
  static listarPorId(req, res) {
    const { id } = req.params;
    db.get("SELECT * FROM disciplinas WHERE id = ?", [id], (err, row) => {
      if (err) return res.status(500).json({ erro: err.message });
      if (!row) return res.status(404).json({ erro: "Disciplina não encontrada." });
      return res.status(200).json(row);
    });
  }

  // Salvar Nova Disciplina
  static salvar(req, res) {
    const { nome, cargaHoraria, codigo, curso_id } = req.body;
    if (!nome || !cargaHoraria || !codigo || !curso_id) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }

    const sql = `INSERT INTO disciplinas (nome, cargaHoraria, codigo, curso_id) VALUES (?, ?, ?, ?)`;
    db.run(sql, [nome, cargaHoraria, codigo, curso_id], function(err) {
      if (err) return res.status(500).json({ erro: err.message });

      // this.lastID retorna o ID gerado pelo banco
      return res.status(201).json({
        id: this.lastID,
        nome,
        cargaHoraria,
        codigo,
        curso_id
      });
    });
  }

  // Editar  Disciplina
  static editar(req, res) {
    const { id } = req.params;
    const { nome, cargaHoraria, codigo, curso_id } = req.body;

    const sql = `UPDATE disciplinas SET nome = ?, cargaHoraria = ?, codigo = ?, curso_id = ? WHERE id = ?`;
    db.run(sql, [nome, cargaHoraria, codigo, curso_id, id], function(err) {
      if (err) return res.status(500).json({ erro: err.message });
      if (this.changes === 0) return res.status(404).json({ erro: "Disciplina não encontrada." });
      return res.status(200).json({ id, nome, cargaHoraria, codigo, curso_id });
    });
  }

  // Deletar Disciplina
  static deletar(req, res) {
    const { id } = req.params;
    db.run("DELETE FROM disciplinas WHERE id = ?", [id], function(err) {
      if (err) return res.status(500).json({ erro: err.message });
      if (this.changes === 0) return res.status(404).json({ erro: "Disciplina não encontrada." });
      return res.status(200).json({ mensagem: "Disciplina removida com sucesso!" });
    });
  }
}
module.exports = DisciplinaController;