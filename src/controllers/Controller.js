
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
  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(
        Number(id)
      );

      if (!umRegistro) {
        return res.status(400).json({ mensagem: "Id não encontrado" });
      }
      return res.status(200).json(umRegistro);
    } catch {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
  async criaNovo(req, res) {
    try {
      const dadosParaCriacao = req.body;
      const novoRegistroCriado = await this.entidadeService.criarRegistro(
        dadosParaCriacao
      );

      if (!novoRegistroCriado) {
        return res.status(400).json({ mensagem: "Erro ao criar" });
      }

      return res.status(201).json(novoRegistroCriado); 
      
    } catch (error) {
      console.error("Erro ao criar registro:", error);
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: "Registro não foi atualizado" });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
      console.error("Erro ao atualizar registro:", erro);
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res
        .status(200)
        .json({ mensagem: `Id ${id} deletado com sucesso` });
    } catch {
      res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}

module.exports = Controller;
