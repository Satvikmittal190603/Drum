for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
function handleClick()
  {
    var button=this.innerHTML;
    makeSound(button);
    ButtonAnimation(button);
  }
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    ButtonAnimation(event.key);
  });

function makeSound(key){
  switch(key){
    case 'w':var audio=new Audio('assests/sounds/tom-1.mp3');
          audio.play();
          break;
    case 'a':var audio=new Audio('assests/sounds/tom-2.mp3');
          audio.play();
          break;0
    case 's':var audio=new Audio('assests/sounds/tom-3.mp3');
          audio.play();
          break;
    case 'd':var audio=new Audio('assests/sounds/tom-4.mp3');
          audio.play();
          break;
    case 'j':var audio=new Audio('assests/sounds/crash.mp3');
          audio.play();
          break;
    case 'k':var audio=new Audio('assests/sounds/kick-bass.mp3');
          audio.play();
          break;
    case 'l':var audio=new Audio('assests/sounds/snare.mp3');
          audio.play();
          break;
  }
}

function ButtonAnimation(currentKey)
{
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}
