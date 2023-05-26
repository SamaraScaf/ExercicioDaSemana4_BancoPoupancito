class Conta {
    #balance;
    #password;
  constructor(balance, password) {
    this.#balance = balance;
    this.#password = password;
  }
  deposito(value, password) {
    if (password == this.#password) {
      this.#balance += value;
      return `Seu saldo é ${this.#balance}`;
    } else {
      return "Senha incorreta";
    }
  }
  retirada(value, password) {
    if (password == this.#password) {
      if (value <= this.#balance) {
        this.#balance -= value;
        return `Seu saldo é ${this.#balance}`;
      } else {
return "Saldo insuficiente";
      }
    } else {
      return "Senha incorreta";
    }
  }
  extrato(password) {
    if (password == this.#password) {
      return `Seu saldo atual é ${this.#balance}`;
    } else {
      return "Senha incorreta";
    }
  }
}
const contaCorrente = new Conta(1250, 1234);

console.log(contaCorrente.deposito(530, 1234));
console.log(contaCorrente.retirada(290, 1234));
console.log(contaCorrente.deposito(1200,1111)); //senha incorreta
console.log(contaCorrente.extrato(1234));