const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    addProduto: function (produto) {
        let itemEncontrado = null;

        for (const item of this.produtos) {
            if (item.id === produto.id) {
                itemEncontrado = item;
                break;
            }
        }

        if (itemEncontrado) {
            itemEncontrado.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },

    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (const produto of this.produtos) {
            totalDeItens += produto.qtd;
        }
        return totalDeItens;
    },

    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const produto of this.produtos) {
            totalAPagar += (produto.precoUnit * produto.qtd);
        }
        return totalAPagar; // Retorna em centavos
    },

    imprimirResumo: function () {
        const itens = this.calcularTotalDeItens();
        const total = this.calcularTotalAPagar() / 100;

        console.log(`
    Cliente: ${this.nomeDoCliente}
    Total de itens: ${itens} itens
    Total a pagar: R$ ${total.toFixed(2)}`);
    },

    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);

         
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            const valorDoItem = (produto.precoUnit * produto.qtd) / 100;
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${valorDoItem.toFixed(2)}`);
        }

        const itens = this.calcularTotalDeItens();
        const total = this.calcularTotalAPagar() / 100;

        console.log(`\nTotal de itens: ${itens} itens`);
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
    }
};

 
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();