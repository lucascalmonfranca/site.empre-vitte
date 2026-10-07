document.querySelector('.botao-voltar').addEventListener('click', function() {
    window.location.href = 'login.html';
});

function clicarBotao(nomeDoBotao) {
    alert('Você clicou em: ' + nomeDoBotao);
}

var botoes = document.querySelectorAll('button');

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        clicarBotao(this.innerText);
    });
}