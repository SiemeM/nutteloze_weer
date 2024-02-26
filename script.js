document.getElementById('weerButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    const loader = document.getElementById('loader');
    const laadTekst = document.getElementById('laadTekst');
    const boodschap = document.getElementById('boodschap');

    // Verberg de initiële container en toon de loader met tekst
    container.classList.add('hidden');
    loader.classList.remove('hidden');
    laadTekst.classList.remove('hidden');

    // Na 3 seconden, verberg loader en laadtekst, toon de boodschap "Kijk naar buiten"
    setTimeout(function() {
        loader.classList.add('hidden');
        laadTekst.classList.add('hidden');
        boodschap.classList.remove('hidden');
    }, 3000);
});
