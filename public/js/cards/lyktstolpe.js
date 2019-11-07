//---------------------------------------------
//
// Svamp
//
//---------------------------------------------
/*
ger slumpvis bonuc. IQ, styrka, extra hjärta och gift

*/

console.log("1" + isEven(11 ));
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/lyktstolpe.png";
//cardImages.push(new Image());
//cardImages[cardImages.length-1].src="./img/svamp.png";





gameObj.push(
 {
    vem: "Lyktstolpe",
    namn: "Lyktstolpe",
    vad: "figur",
    miljo: false, figur: true, info: false,
    //action: "dice",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    //indexCI: cardImages.length - 1,
    placeMe: false,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
  vaderstrack: "soder",
  draw: function(){ctx.drawImage(mapImages[this.indexS], this.x, this.y);
             ctx.fillStyle = "red";
             ctx.globalAlpha = 0.2;
            ctx.fillRect(this.hitAreaX, this.hitAreaY, this.haWidth, this.haHight);
            ctx.globalAlpha = 1;
      },
  move: function (){},
   x: 170, y: 170, speedX: 0,speedY: 0,floor: 1, 
   width: 50, hight:50, 
   hitAreaX: 195, hitAreaY: 232, haWidth: 25, haHight:25, 

  /*--------------------------------
HIT
----------------------------------*/   

  //diceBonus: "iq", bonus: "iq",

  


hitAction : function(){
   gameStatus.push(gameObj[hittad].blink);
  movepause=true;},
  c:0,
blink:function(){
  if (gameObj[hittad].c == 0){setScreenImage();}
  gameObj[hittad].c++;
  let dark = gameObj[hittad].c % 50;
  if (isEven(dark) == true){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);  
  }else
  {
    drawScreenImage();
  }
  if (gameObj[hittad].c > 79){
    gameStatus.push(nyruta);
    tempArray = [4, gameObj[0].vaderstrack]; //
    gameObj[0].vaderstrack = "jump";
    return false;
  }
else{

  return true;
}
}
   

});



hitObjects++;
gameStatus.push(moveStart);

//kartbit[13].func=loadSIS;


