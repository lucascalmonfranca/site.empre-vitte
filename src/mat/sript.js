 cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        var nomeMaterial = this.querySelector('p').innerText;
        alert('Material selecionado: ' + nomeMaterial);
    });
}