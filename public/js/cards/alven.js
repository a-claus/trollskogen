//---------------------------------------------
//
// ALVEN 
//
//---------------------------------------------

mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/alvsprite.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/alven.png";




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




  
  moving: false,
  vaderstrack: "soder",
  move: function (){},
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
    var buttons = [];
   /* if (this.T6 != 0){
      this.T6 += gameObj[0].iq; 
    }*/
    console.log("T6" + this.T6);
    let T6res = [7, 6, 1]; //7,4,1
    if (this.T6 >= T6res[0]) {
      this.text = "Den här staven kan säkert hjälpa dig.";
      this.getWand();
      buttons = [{action: moveFunc, text: "Taaack"}];      
    }
    else if (this.T6 >= T6res[1]){
      this.text = "...";
        buttons = [{action: diceRuta, text: "Snälla"}, {action: moveFunc, text: "Gå!"}];
       }
    else if (this.T6 >= T6res[2]){ 
        buttons = [{action: this.flyttarSig, text: "Adjö"}];
        gameObj[0].iq--; effekten("iq", "minus"); if (gameObj[0].iq < 0) gameObj[0].iq = 0;
        this.text = "Hejdå";}
    else{ 
        buttons = [{action: diceRuta, text: "Kan du hjälpa mig??"}, {action: moveFunc, text: "Gå!"}];
        gameObj[0].skada += 1;
        }
     
    
    drawDiceRuta({rubrik: this.namn, brod: this.text}, this.cardImg, buttons, this.T6);
    this.T6 = Math.floor(Math.random() * 6 + 1); 
    console.log("T6:" + this.T6);
    return true; 
},
getWand: function(){
    
    // ladda wand
    map[wood.mapNR].card = card[1];
    kartObj[0].placeMe=true;
        
        
        //gameStatus.push(ajaxwait);
        //ajaxQueue++;
        getFile("./js/cards/wand.js");
 //listOfFunc.push(deleteObject);
 // ta bort alven
     
      // från ruta 
      // och kartrutan

 map[wood.mapNum].card=1; //blank

 deleteObject("Alven");
        //gameStatus="move";
    
    },    
  cardImg : cardImages[cardImages.length-1],

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
    floor: 1,   

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

       // tror denhär gammal
      
   

});





//kartbit[13].func=loadSIS;


hitObjects++;
gameStatus.push(moveStart);
//ajaxQueue--;