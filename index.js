
function playsound(keyboard_key){
    switch(keyboard_key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;    
        

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(keyboard_key);
    }

}
var all_buttons = document.querySelectorAll(".drum");
var len = all_buttons.length;
for(var i = 0 ;i<len;i++){

    all_buttons[i].addEventListener('click',function () {
        var buttonhtml = this.innerHTML;
        playsound(buttonhtml);
        
    });
}

document.addEventListener("keypress",function (KeyPress){
    var key = KeyPress.key;
    playsound(key);
    
})

