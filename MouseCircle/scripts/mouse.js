const BODY = document.querySelector("body");
const CIRCLE = BODY.querySelector(".circle");

function onMouseMove(event) {
    CIRCLE.style.left = window.innerWidth-event.clientX-31;
    CIRCLE.style.top = window.innerHeight-event.clientY-31;
}

function onMouseMoveNew(event,offsetx=0,offsety=0,circle) {
    circle.style.left = window.innerWidth-event.clientX-31-offsetx;
    circle.style.top = window.innerHeight-event.clientY-31-offsety;
}

function mouseEnterCircle(e,circle) {
  circle.style.background = "yellow" ;
  circle.style.borderColor = "yellow"
}

var circleCnt = 0;

function addCircleOnClick(e) {
    var newCircle = document.createElement("div");
    var circleClass = document.createAttribute("class");
    var circleId = document.createAttribute("id");
    circleClass.value = "circle";
    circleId.value = "circle"+circleCnt;

    newCircle.setAttributeNode(circleClass);
    newCircle.setAttributeNode(circleId);

    console.log(newCircle);

    BODY.appendChild(newCircle);
    var newCircleElem = document.querySelector("#circle"+circleCnt);
    var offsetx=Math.floor(Math.random() * 101+100);
    var offsety=Math.floor(Math.random() * 101+100);
    BODY.addEventListener("mousemove",function(e){onMouseMoveNew(e,offsetx,offsety,newCircleElem)},true);
    circleCnt++;
}

BODY.addEventListener("mousemove",onMouseMove,false);

CIRCLE.addEventListener("mouseover", function(e) {mouseEnterCircle(e,this)});
CIRCLE.addEventListener("mouseleave", function() {this.style = ""});

CIRCLE.addEventListener("click",addCircleOnClick,false) ;
