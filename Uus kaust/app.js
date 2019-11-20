// document meetodid
// single element selectors

sisu = document.querySelector('#title'); // id järgi
sisu = document.querySelector('.card-title'); // klassi nime järgi
sisu = document.querySelector('h5'); // elemendi järgi

// stiili muutmine
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'orange';
console.log(sisu);

// multiply elements selectors

let sisu = document.getElementsByClassName('collection-item');
console.log(sisu);
console.log(sisu 0 );
sisu[0].style.color = 'red';
sisu[2].textContent = 'Õpi Arvutivõrgud';

const nimekirjaElemendid = document.querySelector('ul');
console.log(nimekirjaElemendid);