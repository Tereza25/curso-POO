import Titular from "./titular.js";

class Dependente extends Titular {
  constructor (nome, cpf, limiteCartao, categoria = "dependente", ativo = true) {
    super(nome, cpf, limiteCartao, categoria, ativo)
  }
}

const novoDependente = new Dependente ("Andre", "00066688877", 2000);

console.log(novoDependente);

console.log(novoDependente.exibirInfo());

