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
    ]
}

function imprimirResumoDoCarrinho(carrinho) {
    let totaldeItens = 0;
    let totalAPagar=0;
    for ( let produto of carrinho.produtos){
         totaldeItens +=produto.qtd  
         totalAPagar  += (produto.precoUnit *produto.qtd) /100   
    }
    console.log(`
    Cliente: ${carrinho.nomeDoCliente}
    Total de itens: ${totaldeItens} itens
    Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
  
 
    
    

    
 
    
       
}
imprimirResumoDoCarrinho(carrinho)

// function addProdutoAoCarrinho(carrinho,produto) {
    
// }

// addProdutoAoCarrinho(carrinho, novaBermuda);
// carrinho.imprimirResumo();


// const novoTenis = {
//     id: 3,
//     nome: "Tenis",
//     qtd: 1,
//     precoUnit: 10000
// }

// addProdutoAoCarrinho(carrinho, novoTenis);
// carrinho.imprimirResumo();