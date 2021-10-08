
document.querySelector("ul").lastElementChild.innerHTML = "Revathi";

document.querySelector("ul").children[1].innerHTML = "padma";

document.getElementsByTagName("li")[2].style.color= "red";

document.getElementsByClassName("par")[0].children[1].style.color = "purple";

//document.getElementById("title").style.fontSize= "35px";

//document.getElementByClass("par").children[1].style.fontSize = "30px";

document.querySelector(".btn").innerHTML = "rev";

//space indicates hiracry
document.querySelector("li a").innerHTML = "google click";

document.querySelector("li a").style.color = "red";
 //id par lo ()

//document.querySelector("#par .list") //first element
//document.querySelector("li.class").innerHTML = "google click";

// document.querySelectorAll("#par .list")[2];
document.querySelector(".btn").style.backgroundColor="yellow";
//document.getElementByClass("btn").style.backgroundColor = "yellow";

//document.querySelector("button").classlist.add("invisible")
//.remove("invisible")
//apply some code in style.css

//document.querySelector("button").classlist.toggle("invisible")

document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML = "<em>Hello world</em>";

document.querySelector("h1").textContent = "hi";

document.querySelector("a").setAttribute("href","www.bing.com");


function add(num1 , num2){
  return num1+num2;
}

function mul(num1,num2){
  return num1*num2;
}

function cal(num1,num2,operator){
  return operator(num1,num2);
}
cal(2,3,add);

//objects and constuctor class

var housekeeper = {
    yearsOfExperience:15,
    name:"Revathi",
    works: ["web","sql","java","python"]

}

//constructor function

function BellBoy(name , yearsOfExperience , permit , language){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.permit = permit;
    this.language = language;
    this.clean = function(){
      //do smtg
      alert("hi");
    }
}

var bellboy = new BellBoy("Revathi",5,"yes",["French","English","Telugu"]);
console.log(bellboy.language);


//Exploring switch

var size = document.querySelectorAll(".drum").length;

for(var i =0;i<size;i++){

  document.querySelectorAll(".drum").addEventListener("click", function(){

      var buttontext = this.innerHTML;

      switch (buttontext) {

         case "w":
          var audio = new audio("sounds/tom-1.mp3");
          audio.play();
          break;
         case "a":
         var audio = new audio("sounds/tom-2.mp3");
         audio.play();
         break;

         case "m":
         var audio = new audio("sounds/tom-2.mp3");
         audio.play();
         break;

         case "d":
         var audio = new audio("sounds/tom-2.mp3");
         audio.play();
         break;


        default:
        console.log(buttontext);


      }

  });
}



//method

document.addEventListener("click",fun());

fun() is a callback function



// Example of annomyous function
           document.getElementById("btnOk")    // 1. Find the element in the DOM with the id="btnOk"
                .addEventListener(              // 2. Attach (wire) an event listener to the element in step 1
                    "click",                    // 3. Take action when the click event occurs (Ignores other events such as "mouseover", "hover")
                    function(event) {           // 4. Perform this function when the click event is detected.  This is an anomyous function because it has no name.
                        console.log(event);
                    }
                );

            // Example of callback function
            document.getElementById("btnCancel")// 1. Find the element in the DOM with the id="btnOk"
                .addEventListener(              // 2. Attach (wire) an event listener to the element in step 1
                    "click",                    // 3. Take action when the click event occurs.  (Ignores other events such as "mouseover", "hover")
                    onBtnOkClickCancel          // 4. Perform this function when the click event is detected. onBtnOkClick is referred to as a  "callback function".
                );                              // NOTE: Don't include the parenthesis or parameters as it will execute when the code is loaded by the browser.

            function onBtnOkClickCancel(event) {// This function is called when the DOM element with the id="btnOk" is clicked
                console.log(event);
            }
