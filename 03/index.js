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

    imprimirResumo: function () {
        let totaldeItens = 0;
        let totalAPagar = 0;

        for (const produto of this.produtos) {
            totaldeItens += produto.qtd;
            totalAPagar += (produto.precoUnit * produto.qtd) / 100;
        }

        console.log(`
    Cliente: ${this.nomeDoCliente}
    Total de itens: ${totaldeItens} itens
    Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
    },

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
}

carrinho.addProduto(novaBermuda); 
carrinho.imprimirResumo();

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();