function carregarHistorico() {
    var container = document.getElementById('lista-historico');
    var historico = JSON.parse(localStorage.getItem('historico_downloads')) || [];

    container.innerHTML = '';


    for (var i = 0; i < historico.length; i++) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item-historico';

        itemDiv.innerHTML = `
            <img src="${historico[i].imagem}" alt="Icone">
            <div class="info-historico">
                <p>${historico[i].nome}</p>
                <span>Baixado em: ${historico[i].data}</span>
                <span>Ficheiro: ${historico[i].arquivo}</span>
            </div>
        `;

        container.appendChild(itemDiv);
    }
}

document.getElementById('btn-limpar-historico').addEventListener('click', function() {
    localStorage.removeItem('historico_downloads');
    carregarHistorico();
    alert('Histórico de downloads apagado');
});

carregarHistorico();