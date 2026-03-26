const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar:function (valor){
     this.saldo +=valor
    contaBancaria.historicos.push({tipo:"Depósito",valor})
    console.log(`Deposito de R$${valor} realizado para o cliente: ${this.nome}`);
    
    const saldoEmReais = contaBancaria.saldo / 100;
    console.log(`Saldo atual: R$ ${saldoEmReais.toFixed(2)}`);
    } 
    }

    contaBancaria.depositar(1000)
    contaBancaria.depositar(1150)
console.log(    contaBancaria.historicos
);
    