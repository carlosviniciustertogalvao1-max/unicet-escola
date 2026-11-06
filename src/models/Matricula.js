class Matricula {
  constructor(id, estudante_id, curso_id, dataMatricula, numeroMatricula, status) {
    this.id = id;
    this.estudante_id = estudante_id;
    this.curso_id = curso_id;
    this.dataMatricula = dataMatricula;
    this.numeroMatricula = numeroMatricula;
    this.status = status;
  }
}

module.exports = Matricula;