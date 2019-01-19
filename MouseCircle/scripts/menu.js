const MENULI = document.querySelectorAll(".main-menu li");
const MENU = document.querySelector(".main-menu");

function mouseClickOnMEnuItem(e,item,index){
  if(MENU.querySelector("#drop"+index).style.display=="block"){
    MENU.querySelector("#drop"+index).style.display = "none"
  }else{
    MENU.querySelector("#drop"+index).style.display = "block"
  }
}

function mouseClickOnNoMEnuItem(e,item,index){
  if(!e.target.matches('#li'+index)){
    MENU.querySelector("#drop"+index).style.display = "none"
  };
  console.log("Clicked");
}

MENULI.forEach(function(element,index){
  element.addEventListener("click",function(e){mouseClickOnMEnuItem(e,this,index)});
  window.addEventListener("click",function(e){mouseClickOnNoMEnuItem(e,this,index)});
});
