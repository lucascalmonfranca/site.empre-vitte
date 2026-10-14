document.addEventListener('DOMContentLoaded', function() {

    var botoesDownload = document.querySelectorAll('.btn-download');

    for (var i = 0; i < botoesDownload.length; i++) {
        botoesDownload[i].addEventListener('click', function(event) {
            var card = event.target.closest('.card');

            var nomeItem = card.querySelector('p').innerText;
            var imagemItem = card.querySelector('img').getAttribute('src');
            var nomeArquivo = event.target.getAttribute('data-arquivo');

            var dataAtual = new Date();
            var dataFormatada = dataAtual.toLocaleDateString('pt-BR') + ' às ' + dataAtual.toLocaleTimeString('pt-BR');

            var historico = JSON.parse(localStorage.getItem('historico_downloads')) || [];

            var novoDownload = {
                nome: nomeItem,
                imagem: imagemItem,
                arquivo: nomeArquivo,
                data: dataFormatada
            };

            historico.push(novoDownload);
            localStorage.setItem('historico_downloads', JSON.stringify(historico));

            alert('Download de "' + nomeItem + '" iniciado e guardado no seu histórico!');
        });
    }

});