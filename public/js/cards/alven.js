//---------------------------------------------
//
// ALVEN 
//
//---------------------------------------------
console.log("Alven");

mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/alvsprite.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/alven.png";
sakImg.push(new Image());
sakImg[sakImg.length-1].src = "./img/wand.png";




gameObj.push(
 {
    vem: "Alven",
    namn: "Alven",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "dice",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    placeMe: true,
//



  
  moving: false,
  vaderstrack: "soder",
  cardImg : cardImages[cardImages.length-1],
  move: function (){return false;},
  hitAction : function(){
    this.T6 = 0;

    hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
     gameStatus.push(diceRuta);
},
  
  flyttarSig: function(){
       
        gameStatus.push(gameObj[getIndexGameObj("Alven")].fly);
        gameStatus.push(moveFunc);
        return false;
    },
    text: "Har inte du gått aningens vilse, lille porslinsdocka?" ,
drawRuta: function (){
  movepause = true;
    var buttons = []; let bonus = 0;
   if (this.T6 != 0){
      bonus += gameObj[0].iq; 
    }
    console.log("T6" + this.T6);
    let T6res = [7, 4, 1]; //7,4,1
    if (this.T6 + bonus >= T6res[0]) {
      this.text = "Den här staven kan säkert hjälpa dig.";
      this.getWand();
      buttons = [{action: moveFunc, text: "Taaack"}];      
    }
    else if (this.T6 + bonus >= T6res[1]){
      this.text = "...";
        buttons = [{action: diceRuta, text: "Snälla"}, {action: moveFunc, text: "Gå!"}];
       }
    else if (this.T6 + bonus >= T6res[2]){ 
        buttons = [{action: this.flyttarSig, text: "Adjö"}];
        bonus =-1;
        this.text = "Hejdå";}
    else{ 
        buttons = [{action: diceRuta, text: "Kan du hjälpa mig??"}, {action: moveFunc, text: "Gå!"}];
        
        }
     
    const index = getIndexGameObj("Alven");
    drawDiceRuta({rubrik: this.namn, brod: this.text}, gameObj[index].cardImg, buttons, bonus);
    this.T6 = Math.floor(Math.random() * 6 + 1); 
    if (bonus==-1){gameObj[0].iq--; effekten("iq", "minus"); if (gameObj[0].iq < 0) gameObj[0].iq = 0;}
    
    return false; 
},
getWand: function(){
/*---------------------------------------------
    wanden

Staven vrider rutor slumpvis. Kostar en magikraft.
 
 ----------------------------------------------*/    
    map[wood.mapNum].card = 1; //blank
gameStatus.push(putEquipmentToBag, move);
this.floor=-1;
 //deleteObject("Alven");
        
    
    },  
  putInBag: function(){
    bagger.push(new Sak());
    var post = bagger[bagger.length-1];
    post.namn = "Wand";
    post.img = sakImg[sakImg.length-1];
    post.dragFunc = function(){ 
     console.log("mp" + gameObj[0].magipower);
      if (gameObj[0].magipower > 1){
        
      gameObj[0].magipower--;
      var slump = Math.floor(Math.random()*2);
      for (var i=0; i<4; i++) {
          if (wood[NSVO[i]]>=99) wood[NSVO[i]] -= 100;
          if (wood[NSVO[i]] < 0) wood[NSVO[i]] = 1; 
        }

        var temp = wood[NSVO[0]];
        if (slump==0){
        wood[NSVO[0]]=wood[NSVO[2]]; // N=V
        wood[NSVO[2]]=wood[NSVO[1]]; // V=S
        wood[NSVO[1]]=wood[NSVO[3]]; // S=0
        wood[NSVO[3]]=temp; // O=N
        console.log(wood);}
        else{
        wood[NSVO[0]]=wood[NSVO[3]];
        wood[NSVO[3]]=wood[NSVO[1]];
        wood[NSVO[1]]=wood[NSVO[2]];
        wood[NSVO[2]]=temp;
      
    }
    

      map[wood.mapNR].norr = wood.norr;
      map[wood.mapNR].vast = wood.vast;
      map[wood.mapNR].ost = wood.ost;
      map[wood.mapNR].soder = wood.soder;
    }

    };
    post.do = function() {};
    post.undo = function() {};

  },  

  bonus: "iq", 
  diceRubrik: "Alven",
 //"Har du gått vilse?",
  diceBonus: "iq",
  

 
 
 
  /*--------------------------------
KARTA
----------------------------------*/   

    x: 170,
    y: 170,
    speedX: 0,
    speedY: 0,
    z: 1, hojd:.5,  

  /*--------------------------------
HIT
----------------------------------*/   





        /*--------------------------------
BILD SPRITES on MAP
----------------------------------*/	
	//vaderstrack: "soder",
	width: 60,
	hight: 60,
  
  
  //moving: false,
    sprite: mapImages[mapImages.length-1],
    
	
  //spriteTimer: 0,
  move: function(){return:false;},
	draw: function(){
       ctx.drawImage(this.sprite, this.x, this.y, 60, 60);

	},
  fly: function(){
    console.log("alven flyttarSig");
    let index = getIndexGameObj("Alven");
    
    if (gameObj[index].x < gameObj[0].x) {gameObj[index].x-=3;} else {gameObj[index].x+=3;}
    if (gameObj[index].y  < gameObj[0].y) {gameObj[index].y-=3;} else {gameObj[index].y+=3 ;}
    // om utanför spelplan tabort alven, flytta till tom ruta.

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


hitObjects++;
gameStatus.push(moveStart);
//ajaxQueue--;