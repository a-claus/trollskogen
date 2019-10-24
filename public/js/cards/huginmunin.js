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
   console.log("___" + hittad);
  console.log(hitIndex);
   
  let counter = gameObj[hittad].counter;
  console.log(gameObj[hittad].namn);
  if (counter == 0)
  drawRuta("Hugin och Munin", "Vi vet allt. Vi har sett allt.", gameObj[hittad].cardImg, [{text: "Berätta var Äggblomman är!", action: gameObj[hittad].drawRuta}]);
  if (counter == 1){
    const index = getKartbitCard(0);
    let xyMap = kordinatorXY(wood.mapNR);
    let skattMap = kordinatorXY(index);
    let upp = skattMap[1] - xyMap[1]; // 2 3 -1
    let sida = skattMap[0] - xyMap[0];
    drawRuta("Hugin och Munin", "Äggblomman är på " + index, gameObj[hittad].cardImg, [{text: "Tack!", action: moveStart}]);
}
    gameObj[hittad].counter++;
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