alert("Hello vas");
function clicked(){
    alert("I got cliked");
}

function sound(){
    var button= this.innerHTML;
    switch(button){
        case 'w':
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case 'a':
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;
        case 's':
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        case 'd':
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case 'j':
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case 'k':
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;
        case 'l':
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;
        default:
            alert('No Key');
    }
}
var mylength=document.querySelectorAll(".set .drum").length
for(let i=0;i<=mylength-1;i++){
    document.querySelectorAll(".set .drum")[i].addEventListener("click",sound);
    // εδω εαν ειχα clicked() απλα θα μου εβγαζε το alert. Δηλαδη δεν πρεπει να εχω παρενθεση
}