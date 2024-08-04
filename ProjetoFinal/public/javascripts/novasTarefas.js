function atualizaHoraData(){
    const agora = new Date();
    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    document.getElementById('dataeHora').textContent = dataFormatada;
}

    setInterval(atualizaHoraData, 1000);

    atualizaHoraData();