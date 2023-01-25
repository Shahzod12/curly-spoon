x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "empty";
draw_apple = "set";
speak_data = "empty";
to_number ="empty"
function preload() {
function loadImage(apple)
}
to_number Number(content);
if (Number.isInteger(to_number));
if true statusbar ="Started drawing apple"
else statusbar ="The speech has not recognized a number"
screen_width = window.innerWidth;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}


function setup() {
 
}

function draw() {
  if()
  { 
    for(var i = 1; i <=to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "set";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
