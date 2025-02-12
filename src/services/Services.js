const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async getAllRegister() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criarRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const [registrosAtualizados] = await dataSource[this.model].update(
      dadosAtualizados,
      { where: { id } }
    );

    return registrosAtualizados > 0;
  }
  async excluiRegistro(id) {
    const deletado = await dataSource[this.model].destroy({
      where: { id },
    });
    return deletado > 0;
  }
}
module.exports = Services;
