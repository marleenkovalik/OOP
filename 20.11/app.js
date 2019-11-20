// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task')
const text = document.querySelector('h5');

// kustutame lisaUusYlesanne väärtus
lisaUusYlesanne.value = '';

// formi saatmine
form.addEventListener('submit', syndmus);

function syndmus(e){
    // logi sündmuse tüüp
    console.log(`Sündmuse tüüp: ${e.type}`);
    // kontrollime vormi kaudu saadetud väärtust
    console.log(lisaUusYlesanne.value);
    // väljastame ülesande HTML-is
    text.innerText = lisaUusYlesanne.value;
}

  

