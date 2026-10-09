function carregarCarrinho() {
    var listaContainer = document.getElementById('lista-produtos');
    var valorTotalElemento = document.getElementById('valor-total');
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    listaContainer.innerHTML = '';
    var total = 0;


    for (var i = 0; i < carrinho.length; i++) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';

        var precoFormatado = carrinho[i].preco ? carrinho[i].preco.toFixed(2).replace('.', ',') : '0,00';
        total += carrinho[i].preco || 0;

        itemDiv.innerHTML = `
            <img src="${carrinho[i].imagem}" alt="Produto">
            <p>${carrinho[i].nome}</p>
            <span class="preco-item">R$ ${precoFormatado}</span>
        `;

        listaContainer.appendChild(itemDiv);
    }

    valorTotalElemento.innerText = total.toFixed(2).replace('.', ',');
}

document.getElementById('btn-limpar').addEventListener('click', function() {
    localStorage.removeItem('carrinho');
    carregarCarrinho();
    alert('Carrinho limpo');
});

document.getElementById('btn-finalizar').addEventListener('click', function() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length === 0) {
        alert('Seu carrinho está sem nenhum item');
    } else {
        alert('Compra realizada, va para o seu perfil para o acompanhamento');
        localStorage.removeItem('carrinho');
        carregarCarrinho();
    }
});

carregarCarrinho();