// window objects / methods / properties

// alert 
//window.alert('Tere hommikust!');
//alert('Tere hommikust!');

// prompt
//const sisend = prompt('Sisesta oma nimi');
//alert('Tere hommikust, ' + sisend + '!');

// confirm
//if(confirm('Kas oled nõus?')){
//    console.log('jah');
//} else {
//    console.log('ei');
//}

// välimõõdud
let valiKorgus = window.outerHeight;
let valiLaius = window.outerWidth;
//console.log(valiKorgus);
//console.log(valiLaius);

// sisemõõdud
let siseKorgus = window.innerHeight;
let siseLaius = window.innerWidth;
//console.log(siseKorgus);
//console.log(siseLaius);

// scroll
//scrolY = window.scrollY;
//scrolX = window.scrollX;
//console.log(scrolX);

// location objekt
let objekt = window.location;
let hostname = window.location.hostname;
let port = window.location.port;
let href = window.location.href;
let search = window.location.search;
console.log(hostname);
console.log(port);
console.log(href);
console.log(search);

// redirect
//window.location.href = 'https://khk.ee';

// reload
//window.location.reload();