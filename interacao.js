
const interruptor = document.querySelector('#turnOff');
const lampada= document.querySelector ('#lamp');

function LampQuebrou(){
    return lampada.src.indexOf ('quebrada') > -1
}

function lampOn () {

    if( !LampQuebrou ()){

    lampada.src = './img/ligada.jpg';
    interruptor.textContent ='Ligado';
}}



function lampOff () {

    if( !LampQuebrou ()){
    lampada.src = './img/desligada.jpg';
}}

function lampBroker () {
    
    lampada.src = './img/quebrada.jpg';
}

function lampOnOff{
    if()
}

ligado.addEventListener ('click', lampOn,lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroker);

