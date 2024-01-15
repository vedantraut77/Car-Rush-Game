 var bluecar = document.getElementById("red_car");
 var redcar = document.getElementById("green_car");
 var result = document.getElementById("result");
 var score = document.getElementById("score");
 var game = document.getElementById("game");
 var carDriftAudio = document.getElementById("myAudio");
 var gameOverAudio = document.getElementById("myAudio1")
 var counter = 0;

 bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3))*130)
    bluecar.style.left = random+"px";
    counter++; 
 })

 window.addEventListener("keydown",function(e){
    carDriftAudio.play()
    if(e.keyCode == "39")
    {
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
         if(redcarleft<260)
         {
            redcar.style.left = (redcarleft+130)+"px";
         }
    };
    if(e.keyCode == "37"){
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
        if(redcarleft>0)
        {
          redcar.style.left = (redcarleft-130)+"px";  
        }
    }
 })

 setInterval(function Gameover(){
   var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
   var bluecarleft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
   var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
   if((bluecarleft === redcarleft)&&(bluecarTop>250)&&(bluecarTop<450)){
      gameOverAudio.play()
      result.style.display="block";
      game.style.display ="none";
      score.innerHTML = `Your score is ${counter}`;
      counter = 0;
   }

 },10)

