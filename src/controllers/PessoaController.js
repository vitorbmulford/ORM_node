const dataBase = require("../models");

class PessoaController {
  static async getAll(req, res) {
    try {
      const listaDePessoas = await dataBase.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (erro) {
      // algum tratamento d eerro
    }
  }
}

module.exports = PessoaController;
