const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async getAllRegister() {
    return dataSource[this.model].findAll();
  }
} 
module.exports = Services;
