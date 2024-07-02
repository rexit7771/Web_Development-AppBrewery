// *Select semua class drum menggunakan jQuery
$(".drum").on("click", function (event) {
    // * Memainkan suara ketika diklik
    play_audio(event.target.innerHTML);
    buttonAnimation(event.target.innerHTML);
})

// // *Jika keyboard yang sesuai ditekan
//     document.addEventListener("keypress", function (event) {
//         var key_press = event.key;
//         //* Memanggil function yang memainkan suara dengan parameter key_press
//         play_audio(key_press);
//         buttonAnimation(key_press);
//     });

$(document).on("keypress", function (event) {
    play_audio(event.key);
    buttonAnimation(event.key);
})

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
    $("."+currentKey).addClass("pressed");
    setTimeout(() => {
        $("."+currentKey).removeClass("pressed");
    }, 100);
}