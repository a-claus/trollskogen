//---------------------------------------------
//
// Hugin och Munin
//
//---------------------------------------------
/*
De berättar för en var skatten är. Kanske ska ge annan info också.

*/


mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/blabar.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/huginmumin.png";





gameObj.push(
 {
    vem: "HuginMunin",
    namn: "HuginMunin",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "upgrade",
    figur: true,
    index: kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    //placeMe: true,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 170, y: 170, speedX: 0,speedY: 0, floor: 1, 
    width: 50, hight: 50, 
  vaderstrack: "soder",
  draw: function(){ctx.drawImage(mapImages[this.indexS], this.x, this.y,50,50);},
  move: function (){},
  counter: 0,

hitAction : function(){
  gameObj[0].placeMe = true;
  gameStatus.push(this.drawRuta);
  hitIndex = this.index;
},
drawRuta: function(){
   console.log("___");
  console.log(hitIndex);
   console.log(gameObj[hitIndex].namn);
  let counter = gameObj[hitIndex].counter;

  if (counter == 0)
  drawRuta("Hugin och Munin", "Vi vet allt. Vi har sett allt.", gameObj[index].cardImg, [{text: "Berätta var Äggblomman är!", action: this.drawRuta}]);
  if (counter == 1){
    const index = getKartbitCard(0);
    drawRuta("Hugin och Munin", "Äggblomman är på " + index, gameObj[index].cardImg, [{text: "Berätta var Äggblomman är!", action: moveStart}]);
}
    this.counter++;
}
},
{

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
       
    	
              if (this.x<400){ 
                ctx.drawImage(this.sprite, this.x, this.y, 60, 60);}

	}
   

});


//kartbit[13].func=loadSIS;

console.log("Hugin och Munin laddad" + gameObj[gameObj.length-1].x);
hitObjects++;

gameStatus.push(moveStart);