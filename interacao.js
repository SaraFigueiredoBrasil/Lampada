const ligado = document.querySelector('#turnOn');
const deligado = document.querySelector('#turnOff');
const lampada= document.querySelector ('#lamp');

function lampOn () {
    lampada.src = './img/ligada.jpg';
}

function lampOff () {
    lampada.src = './img/desligada.jpg';
}

function lampBroker () {
    lampada.src = './img/quebrada.jpg';
}

ligado.addEventListener ('click', lampOn);
deligado.addEventListener ('click', lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroker);

