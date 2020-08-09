let button = document.getElementById('trollButton');

window.onload = function() {
    document.getElementById("audio").play();
    document.getElementById("blocker").style.display="none";
}

let chase = 0
let flag = false;

function changePos(){
    if(flag)return;
    document.documentElement.style.setProperty('--posX', Math.random()*100+'%');
    document.documentElement.style.setProperty('--posY', Math.random()*100+'%');
    chase++;
    if(chase == 5)
        window.alert('Dicen que el que persevera, alcanza');
    if(chase == 25){
        window.alert('Pero me parece que ya es hora de ponerse creativos, ¿no crees?');
        document.getElementById('switch').style.visibility='initial';
    }
    if(chase == 40)
        window.alert('Dude, creeme, así no es');
}

function clicked(){
    window.alert('Solo soy un bebé que baila');
}

function lightsOn(){
    if(document.body.style.backgroundColor == 'black'){
        document.body.style.backgroundColor = 'white';
        document.getElementById('img1').style.visibility='hidden';
        document.getElementById('img2').style.visibility='hidden';
        document.getElementById('tv').style.background='white';
        document.getElementById('troll-button').textContent="Presioname :("
        flag = true;
        document.getElementById('audio').volume=0;
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.getElementById('img1').style.visibility='initial';
        document.getElementById('img2').style.visibility='initial';
        document.getElementById('tv').style="background-image:url('Assets/tv.gif');background-repeat: no-repeat;background-size: 100% 100%;";
        document.getElementById('troll-button').textContent="Presioname :)"
        flag = false;
        document.getElementById('audio').volume=1;
    }
}