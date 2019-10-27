//---------------------------------------------
//
// Hugin och Munin
//
//---------------------------------------------
/*
De berättar för en var skatten är. Kanske ska ge annan info också.

*/


mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/hm2.png";
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/hm.png";
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
    x: 75, y: 75, speedX: 0,speedY: 0, floor: 1, 
    width: 50, hight: 50, 
    vaderstrack: "soder",
    status: 0,
  draw: function(){ctx.drawImage(mapImages[this.indexS], this.x, this.y,40,40);},
  move: function (){
  
    if (this.status == 0){
      let slump = Math.floor(Math.random()*4);
      if (inverseNSVO == gameObj[0].vaderstrack){
        slump++; 
      }

       let slump2 = Math.floor(Math.random()*200);
      if (slump == 0 || slump == 4){
        this.x = slump2 + 100;
        this.y = 400;
      }
      if (slump == 1){
        this.x = slump2 + 100;
        this.y = 0;
      }
      if (slump == 2){
        this.x = 400;
        this.y = slump2 + 100;
      }
      if (slump == 3){
        this.x = 0;
        this.y = slump2 + 100;
      }
  console.log("status" + this.status +" "+slump + this.x + this.y) ;
    }
    if (this.status == 1){
      
    }
    if (this.status == 2){
      this.fly()
    }
  },
  counter: 0,

hitAction : function(){
  gameObj[0].placeMe = true;
  gameStatus.push(this.drawRuta);
  hitIndex = this.index;
},
drawRuta: function(){
   let text;
   
  let counter = gameObj[hittad].counter;
  
  if (counter == 0)
    drawRuta("Hugin och Munin", "Vi vet allt. Vi har sett allt.", gameObj[hittad].cardImg, [{text: "Berätta var Äggblomman är!", action: gameObj[hittad].drawRuta}]);
  if (counter == 1){
    const index = getKartbitCard(0);
    let xyMap = kordinatorXY(wood.mapNR);
    let skattMap = kordinatorXY(index);
    let upp = skattMap[1] - xyMap[1]; // 2 3 -1
    let sida = skattMap[0] - xyMap[0];
    if (upp > 0) text = "Du behöver vandra " + upp + " rutor söderut, för att hitta Äggblomman.";
    if (upp < 0) text = "Du behöver vandra" + Math.abs(upp) + " rutor norrut, för att hitta Äggblomman.";
    if (upp == 0) text = "Du behöver varken vandra norrut eller söderut för att hitta Äggblomman.";
    if (sida > 0) text += " Och du behöver även vandra " + sida + " rutor österut.";
    if (sida < 0) text += "Och du behöver även vandra " + Math.abs(sida) + " rutor västerut.";
    if (sida == 0) text += "Och du behöver varken vandra västerut eller österut för att hitta Äggblomman.";
   
    drawRuta("Hugin och Munin", text, gameObj[hittad].cardImg, [{text: "Tack!", action: moveStart}]);
}
    gameObj[hittad].indexS = mapImages.length - 2;
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
	
  fly: function(){
    console.log("korpen flygen");
    let index = getIndexGameObj("HuginMunin");
    
    if (gameObj[index].x < gameObj[0].x) {gameObj[index].x-=3;} else {gameObj[index].x+=3;}
    if (gameObj[index].y  < gameObj[0].y) {gameObj[index].y-=3;} else {gameObj[index].y+=3 ;}
 

    if (gameObj[index].x < 0 || gameObj[index].x > 400 || gameObj[index].y < 0 || gameObj[index].y > 400) {
      bytPlatsMedBlank(8, "card", wood.mapNR);
      return false;}
      else {
        return true;
        //deleteObject("Alven");
      }


    }
   

});


//kartbit[13].func=loadSIS;

console.log("Hugin och Munin laddad" + gameObj[gameObj.length-1].x);
hitObjects++;

gameStatus.push(moveStart);