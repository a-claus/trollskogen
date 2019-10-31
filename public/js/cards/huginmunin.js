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
    index: gameObj.length, //kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 75, y: 75, speedX: 0,speedY: 0, floor: 1, 
    width: 40 , hight: 40, 
    vaderstrack: "soder",
    status: 0,
    hojd: 5, uppner:0, 
    angle: 45,
    //counter: 0,
  draw: function(){
    if (this.status == 1) {
       ctx.save();
      ctx.translate(this.x, this.y);
     
       ctx.rotate(Math.PI*this.angle/180 );
       ctx.translate(-this.x,- this.y);
      ctx.drawImage(mapImages[this.indexS-1], this.x, this.y,40,40);
      ctx.drawImage(mapImages[this.indexS-1], this.x+10, this.y+10,40,40);
      ctx.restore();
      
      
      
    }
    if (this.status == 2) {
      ctx.drawImage(mapImages[this.indexS], this.x, this.y,40,40);
      ctx.drawImage(mapImages[this.indexS], this.x+20, this.y+20,40,40);
    }
  },
  move: function (){
  
    if (this.status == 0){
      this.status++;
      let slump = Math.floor(Math.random()*4);
      if (inverseNSVO == gameObj[0].vaderstrack){
        slump++; 
      }
      let slump2 = Math.floor(Math.random()*200);
      if (slump2 < 100) this.uppner = 1; else this.uppner = -1;
      
      if (slump == 0 || slump == 4){
        this.x = slump2 + 100;
        this.y = 380;
        this.speedX= 1 * this.uppner;
        this.speedY=-1;
      }
      if (slump == 1){
        this.x = slump2 + 100;
        this.y = -20;
        this.speedX=1 * this.uppner;
        this.speedY=1;
      }
      if (slump == 2){
        this.x = 380;
        this.y = slump2 + 100;
        this.speedX=-1;
        this.speedY=1 * this.uppner;
      }
      if (slump == 3){
        this.x = -20;
        this.y = slump2 + 100;
        this.speedX=1;
        this.speedY=1 * this.uppner;
      }
      if (this.speedY == 1) this.vaderstrack = "s"; else this.vaderstrack = "n";
      if (this.speedX == 1) this.vaderstrack += "o"; else this.vaderstrack += "v";
 // console.log("status" + this.status +" "+slump + this.x + this.y) ;
      if (this.vaderstrack=="nv") this.angle = -45;
      if (this.vaderstrack=="no") this.angle = 45;
      if (this.vaderstrack=="sv") this.angle = -135;
      if (this.vaderstrack=="so") this.angle = 135;
}

    if (this.status == 1){
       let walker = findwall(pointOfpic(this.index));
      if (walker.go == 1){
        this.hojd=1;
      }
      
    }
    if (this.status == 2){
      //this.fly()
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
    //gameObj[hittad].indexS = mapImages.length - 2;
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