const originalText = document.querySelector(".original-text p").innerHTML;
const textArea = document.querySelector("#text-area");
const time = document.querySelector(".timer");
const reset = document.querySelector("#reset");

function timeHand(num) {
  if(num<10){
    return "0"+num;
  };
  return num;
}

var timer=[0,0,0,0];
var timerPointer;
function timerUp(){
  let timeShow ;
  timer[0] ++;
  timer[1] = Math.floor(timer[0]-(Math.floor(timer[0]/100)*100));
  timer[2] = Math.floor(timer[0]/100)%60;
  timer[3] = Math.floor(Math.floor(timer[0]/100)/60);

  timeShow = timeHand(timer[3]) + ":" + timeHand(timer[2]) + ":" + timeHand(timer[1]);

  time.innerHTML = timeShow;
}


function gotNewChar(){
  console.log(textArea.value);
  if(textArea.value===originalText.slice(0,textArea.value.length)){
    textArea.style.borderColor="green";
    if(textArea.value===originalText){
      console.log("match");
      clearInterval(timerPointer);
    }
  } else {
    textArea.style.borderColor="red";
    console.log("Not match");
  }
};

function gotKeyPress(){
  if(textArea.value==="" & timerPointer==null){
    timerPointer = setInterval(timerUp,10);
  }
}

function resetClicked() {
  console.log("reset clicked");
  clearInterval(timerPointer);
  timerPointer = null;
  timer = [0,0,0,0];
  time.innerHTML = "00:00:00";
  textArea.value = "";
  textArea.style = "";
};

console.log(originalText);

textArea.addEventListener("keyup",gotNewChar,false);
textArea.addEventListener("keypress",gotKeyPress,false);
reset.addEventListener("click",resetClicked,false);
