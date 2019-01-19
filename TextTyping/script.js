const originalText = document.querySelector(".original-text p").innerHTML;
const textArea = document.querySelector("#text-area");
const time = document.querySelector(".timer");
const reset = document.querySelector("#reset");

console.log(originalText);

function gotNewChar(){
  console.log(textArea.value);
  if(textArea.value.lenght===1){
    setInterval(clockUp,10);
  }
};

var timer=0;
function clockUp(){
  timer ++;
  time.innerHTML = timer;
}

function resetClicked() {
  console.log("reset clicked");
};

console.log(originalText);

textArea.addEventListener("keyup",gotNewChar,false);
reset.addEventListener("click",resetClicked,false);
