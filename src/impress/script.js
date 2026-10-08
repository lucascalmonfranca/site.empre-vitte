var cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        var nomeImpressora = this.querySelector('p').innerText;
        alert('Você selecionou: ' + nomeImpressora);
    });
}