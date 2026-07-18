document.addEventListener('DOMContentLoaded', () => {
    console.log("Strona załadowana – system gotowy!");

    // Tu będziemy dopisywać logikę formularza, 
    // efekty scrollowania i inne interakcje.
    
    const przycisk = document.querySelector('.btn');
    
    if (przycisk) {
        przycisk.addEventListener('click', () => {
            console.log("Kliknięto przycisk w Hero!");
        });
    }
});