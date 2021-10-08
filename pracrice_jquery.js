
//both scriot tags in head
/*
$(document).ready(function(){
  $("h1").css("color","red");
});
*/

//both in end

$("h1").addClass("big-title margin-50");

//$("h1").removeClass("big-title");
//$("h1").hasClass("big-title");

$("button").text("revathi");

$("button").html("<em> i am revathi</em>");

$("button:eq(2)").text("I am the 3rd button");

$("img").attr("src","abc");

$("h1").click(function(){
  $("h1").css("color","purple");
});


$("button").click(function(){
  $("h1").css("color","grey");
});

$("input").keydown(function(e){
  $("h1").text(e.key);
});


$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
});

$("h1").before("<button>ni</button>");

$("h1").after("<button>n1</buuton>");

//prepand and append
//

$("h1").hide();
$("h1").show();
$("h1").toggle();
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();
$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();



.animate({opacity:0.5});
margin:20;


$("h1").slideUp().slideDown().animate({opacity:0.5});
