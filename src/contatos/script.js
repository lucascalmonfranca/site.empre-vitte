document.addEventListener('DOMContentLoaded', function() {
    var botoes = document.querySelectorAll('.btn-contato');

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function(event) {
            var nomeContato = this.querySelector('span').innerText;
            console.log('Abrindo contato: ' + nomeContato);
        });
    }
});