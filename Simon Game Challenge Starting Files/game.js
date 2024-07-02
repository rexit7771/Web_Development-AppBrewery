var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function startOver() {
    level = 0;
    gamePattern = []; 
    $(document).on("keypress", function (event) {
        nextSequence();
    })
}

function nextSequence() {
    $("#level-title").text("Level "+level);
    userClickedPattern = [];
    console.log(userClickedPattern);
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColours = buttonColours[randomNumber];
    gamePattern.push(randomChosenColours);
    $("."+randomChosenColours).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColours);
    level++;
}

function playAudio(currentColour) {
    var Sound = new Audio("sounds/"+currentColour+".mp3");
    Sound.play();
}

function checkAnswer(currentLevel) {
    if(currentLevel == gamePattern[gamePattern.length - 1]){
        // console.log(gamePattern);
        // console.log(userClickedPattern);
        // console.log("Right");
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }else{
        // console.log("Wrong");
        var gameOver = new Audio("sounds/wrong.mp3");
        gameOver.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any key to Restart");
        startOver();
    }
}

// *Animasi jika button diklik
$(".btn").on("click",function (event) {
    $("."+event.target.id).addClass("pressed");
    setInterval(() => {
        $("."+event.target.id).removeClass("pressed");
    }, 100);
    playAudio(event.target.id);
    userClickedPattern.push(event.target.id);
    checkAnswer(userClickedPattern);
});

// *Press A untuk memulai Game
$(document).on("keypress", function (event) {
    if(event.key == "a"){
        level += 1;
        $("#level-title").text("Level "+level);
        nextSequence();
    };
})