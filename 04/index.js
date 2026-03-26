const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;

        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        });

        const valorEmReais = valor / 100;
        return `Deposito de R$${valorEmReais} realizado para o cliente: ${this.nome}`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }

        this.saldo -= valor;

        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });

        const valorEmReais = valor / 100;
        return `Saque de R$${valorEmReais} realizado para o cliente: ${this.nome}`;
    },
    extrato: function () {
        let relatorioHistorico = "";        
        for (let i = 0; i < this.historicos.length; i++) {
            const item = this.historicos[i];
            relatorioHistorico += `\n${item.tipo} de $${item.valor / 100}`;
        }
        return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\nHistórico:${relatorioHistorico}`;
    }
}

 
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());