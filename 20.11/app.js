// sündmused

const kustutaKoik = document.querySelector('.clear-tasks');
kustutaKoik.addEventListener('click', vajutaNupp); 

function vajutaNupp(e){
    let sisu = e;
    // target
    sisu = e.target;
    sisu = e.target.id;
    sisu = e.target.className;
    sisu = e.target.classList;

    // tüüp
    sisu = e.type;

    // sündmuse koordinaadid browseri akna suhtes
    sisu = e.clientY
    sisu = e.clientX
    console.log(sisu);

        // sündmuse koordinaadid elemendi suhtes
        sisu = e.offsetY
        sisu = e.offsetX
        console.log(sisu);
}

  

