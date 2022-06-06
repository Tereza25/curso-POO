export default class Titular {
  constructor(nome, cpf, limiteCartao, categoria, ativo) {
    this.nome = nome;
    this.cpf = cpf;
    this.limiteCartao = limiteCartao;
    this.categoria = categoria;
    this.ativo = ativo;
  }

  exibirInfo() {
    return `Nome: ${this.nome}, limite: ${this.limiteCartao}, catão ativo: ${this.ativo}.`
  }
}

const novoTitular = new Titular ("Tereza", "0009988877", 5000, "titular", true);

console.log(novoTitular);
console.log(novoTitular.exibirInfo());
