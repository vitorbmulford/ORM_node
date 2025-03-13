"use strict";
const { Model } = require("sequelize");
const isCpfValido = require("../../utils/validaCpfHelper.js");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docente_id",
      });
      Pessoa.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: { status: "matriculado" },
        as: "aulasMatriculadas",
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: "O campo nome deve ter no minímo 3 caracteres e no maximo 30",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "formato do email invalido",
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          cpfValido: (cpf) => {
            if (!isCpfValido(cpf)) throw new Error("numero de CPF inválido");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        todosOsRegistros: {
          where: {},
        },
      },
    }
  );
  return Pessoa;
};
