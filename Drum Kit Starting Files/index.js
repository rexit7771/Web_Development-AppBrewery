var total_drum = document.querySelectorAll(".drum").length;
for (let index = 0; index < total_drum; index++) {
    // *Jika button di klik
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        // *Untuk mendeteksi innerhtml yang diklik nya
        var buttonInnerHTML = this.innerHTML;
        //* Memanggil function yang memainkan suara dengan parameter buttonInnerHTML
        play_audio(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    );
}

// *Jika keyboard yang sesuai ditekan
    document.addEventListener("keypress", function (event) {
        var key_press = event.key;
        //* Memanggil function yang memainkan suara dengan parameter key_press
        play_audio(key_press);
        buttonAnimation(key_press);
    });

function play_audio(input) {
    switch (input) {
            case "w":
                var drum_audio = new Audio("sounds/tom-1.mp3");
                drum_audio.play();
                break;
            case "a":
                var drum_audio = new Audio("sounds/tom-2.mp3");
                drum_audio.play();
                break;
            case "s":
                var drum_audio = new Audio("sounds/tom-3.mp3");
                drum_audio.play();
                break;
            case "d":
                var drum_audio = new Audio("sounds/tom-4.mp3");
                drum_audio.play();
                break;
            case "j":
                var drum_audio = new Audio("sounds/snare.mp3");
                drum_audio.play();
                break;
            case "k":
                var drum_audio = new Audio("sounds/crash.mp3");
                drum_audio.play();
                break;
            case "l":
                var drum_audio = new Audio("sounds/kick-bass.mp3");
                drum_audio.play();
                break;
        }
}

function buttonAnimation(currentKey) { 
    var activateButton = document.querySelector("."+currentKey);
    activateButton.classList.add("pressed");
    setTimeout(() => {
        activateButton.classList.remove("pressed");
    }, 100);
}