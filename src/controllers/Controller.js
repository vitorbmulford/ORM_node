class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.getAllRegister();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}
module.exports = Controller;
