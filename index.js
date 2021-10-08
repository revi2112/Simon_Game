let gamePattern =[];
let userClickedPattern = [];
let buttonColours = ["red","blue","green","yellow"];
let level = 0;

var started = false;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    newSequence();
    started = true;
  }
});

function newSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randam = Math.floor(Math.random()*4);

  var randomChosenColor = buttonColours[randam];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

$(".btn").click(function(){
  userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var path = "sounds/"+name+".mp3";
  var audio = new Audio();
  audio.src = path;
  audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        newSequence();
      },1000);
    }
  }else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over Press Any key To Restart");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    startOver();
  }

}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
