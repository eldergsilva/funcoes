const carro = {
    ligado: false,
    velocidade: 0,

    exibirStatus: function () {
        const status = this.ligado ? "ligado" : "desligado";
        console.log(`Carro ${status}. Velocidade: ${this.velocidade}.`);
    },

    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            this.exibirStatus();
        }
    },

    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.exibirStatus();
        }
    },

    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade += 10;
            this.exibirStatus();
        }
    },

    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            this.exibirStatus();
        }
    }
};

 
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();