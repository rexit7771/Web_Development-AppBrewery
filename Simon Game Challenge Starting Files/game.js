
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown(function(event){
    // console.log(event.key);
    if(event.key === "a"){
        $("#level-title").html("Level " + level);
        nextSequence();
    }
});

$(".btn").click(function() {
    // console.log($(this).attr("id"));
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $("#" + userChosenColor).fadeOut(100).fadeIn(100);

    playSound(userChosenColor);
    checkAnswer(userChosenColor);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // console.log(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
    $("#level-title").html("Level " + level);
    level++;

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour) {
    $("btn").addClass("pressed");
    setTimeout(() => {
        $("btn").removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
//    console.log(gamePattern);
    for(var i = 0; i < gamePattern.length; i++){
        
    }
    if(currentLevel === gamePattern[gamePattern.length - 1]){
        console.log("Success");
        setTimeout(function() {
            nextSequence();
        }, 1000);

        userClickedPattern = [];
    } else {
        console.log("Wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("#level-title").html("Game Over, Press A Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    
}