window.onresize = reportSize;

function reportSize(){
    if(window.innerHeight <= 300){
        document.getElementById('celeb').play();
        document.getElementById('ins').textContent = "touchdown.html"
    }
}