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
    placeMe: true,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
  //vaderstrack: "soder",
  draw: function(){ctx.drawImage(mapImages[this.indexS], this.x, this.y);},
  move: function (){},
   x: 170, y: 170, speedX: 0,speedY: 0,floor: 1,   

  /*--------------------------------
HIT
----------------------------------*/   

  //diceBonus: "iq", bonus: "iq",

  


hitAction : function(){
   gameStatus.push(gameObj[hittad].blink);
  movepause=true;},
  c:0,
blink:function(){
  
  let dark = c % 50;
  if (isEven(dark) == true){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);  
  }


  

},
    
	
	//spriteTimer: 0,
	draw: function(){
       
    	//ctx.drawImage(this.sprite, 0, 0, 100, 100, this.x, this.y, 40, 40);
              if (this.x<400){ 
                ctx.drawImage(this.sprite, this.x, this.y);}//, 60, 60

	},
  fly: function(){
       // tror denhär gammal
       if (this.tox=!170){

        this.x = this.x + 3;
        this.y = this.y + 3;
        console.log("fly" + this.x);
      }
  }
   

});



hitObjects++;
gameStatus.push(moveStart);

//kartbit[13].func=loadSIS;


