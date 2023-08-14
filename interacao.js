const ligado = document.querySelector('#turnOnOff');
const lampada= document.querySelector ('#lamp');

function LampQuebrou(){
    return lampada.src.indexOf ('quebrada') > -1
}

function lampOn () {

    if( !LampQuebrou () || lampOff () ){

    lampada.src = './img/ligada.jpg';
}

    else  {

        if (lampOn() == true){
            return lampOff();
        }
        
    }

    


}


function lampOff () {

    if( !LampQuebrou ()){
    lampada.src = './img/desligada.jpg';
}}

function lampBroker () {
    
    lampada.src = './img/quebrada.jpg';
}

ligado.addEventListener ('click', lampOn,lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroker);

