document.addEventListener('DOMContentLoaded', function() {

    var botoesComprar = document.querySelectorAll('.botao-comprar');

    for (var i = 0; i < botoesComprar.length; i++) {
        botoesComprar[i].addEventListener('click', function(event) {
            
            var card = event.target.closest('.card');

            if (!card) {
                console.error('Erro: Não foi possível encontrar o card do produto.');
                return;
            }

            var tagNome = card.querySelector('p');
            var tagImg = card.querySelector('img');
            var precoAtributo = event.target.getAttribute('data-preco');

            var nomePeca = tagNome ? tagNome.innerText : 'Produto sem nome';
            var caminhoImagem = tagImg ? tagImg.getAttribute('src') : '';
            var precoPeca = precoAtributo ? parseFloat(precoAtributo) : 0;

            var produto = {
                nome: nomePeca,
                imagem: caminhoImagem,
                preco: precoPeca
            };

            var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            carrinho.push(produto);

            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            alert(' item adicionado ao carrinho, va para o carrinho para finalizar a compra');
        });
    }

});