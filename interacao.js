
const interruptor = document.querySelector('#turnOnOff');
const lampada= document.querySelector ('#lamp');

function LampQuebrou(){
    return lampada.src.indexOf ('quebrada') > -1
}

function lampOn () {

    if( !LampQuebrou ()){

    lampada.src = './img/ligada.jpg';
    
}}



function lampOff () {

    if( !LampQuebrou ()){
    lampada.src = './img/desligada.jpg';
    interruptor.textContent = 'Ligar';
}
}

function lampBroker () {
    
    lampada.src = './img/quebrada.jpg';
}

function lampOnOff() {
    if( interruptor.textContent == 'Ligar'){
        lampOn();
        interruptor.textContent = 'Desligar';
    }
    else{
        lampOff();
        interruptor.textContent = 'Ligar';
    }
}

interruptor.addEventListener ('click', lampOnOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroker);

