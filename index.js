

function handleClick(){
    let imageName=this.className.substring(0,1);
    soundPlay(imageName);
    buttonStyle(imageName);
}   

document.addEventListener("keydown",(e)=>{
    let key=e.key;
    soundPlay(key);
    buttonStyle(key);
});

for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}

    function soundPlay(keyValue){
    let soundName="";
    switch (keyValue){
        case "w":
        soundName="sounds/crash.mp3";
        break;
        case "a":
        soundName="sounds/kick-bass.mp3";
        break;
        case "s":
        soundName="sounds/snare.mp3";
        break;
        case "d":
        soundName="sounds/tom-1.mp3";
        break;
        case "j":
        soundName="sounds/tom-2.mp3";
        break;
        case "k":
        soundName="sounds/tom-3.mp3";
        break;
        case "l":
        soundName="sounds/tom-4.mp3";
        break;

        default :
        break;
       

    }
var playAudio = new Audio(soundName);
  playAudio.play();
 
}

function buttonStyle(cName){
    var buttonPressed=document.querySelector("."+ cName);

    buttonPressed.classList.add("pressed");

    setTimeout(()=>buttonPressed.classList.remove("pressed"),150);
    
    
}




