//---------------------------------------------
//
// Blåbär
//
//---------------------------------------------
/*
När man äter blåbären, så repareras alla hjärtan.

*/


mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/blabar.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/blabar.png";





gameObj.push(
 {
    vem: "Blabar",
    namn: "Blabar",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "upgrade",
    index: kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
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


hitAction : function(){
 console.log("blabar");
  gameStatus = "wait";
    figurRubrik = this.vem;
    figurButton = "Plocka blåbär";
    figurText = "Blåbär är gott och hälsosamt.";
    figurImg = this.cardImg;
    figurAction = function(){gameObj[0].skada=0; leaveCard();};
    gameStatus="ruta";
},


        /*--------------------------------
BILD SPRITES on MAP
----------------------------------*/	
	//vaderstrack: "soder",
	width: 82,
	hight: 64,
  
  
  //moving: false,
    sprite: mapImages[mapImages.length-1],
    
	
	//spriteTimer: 0,
	draw: function(){
       
    	//ctx.drawImage(this.sprite, 0, 0, 100, 100, this.x, this.y, 40, 40);
              if (this.x<400){ 
                ctx.drawImage(this.sprite, this.x, this.y, 60, 60);}

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





//kartbit[13].func=loadSIS;


hitObjects++;

ajaxQueue--;