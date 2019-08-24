//---------------------------------------------
//
// Svamp
//
//---------------------------------------------
/*
ger slumpvis bonuc. IQ, styrka, extra hjärta och gift

*/


mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/svamp.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/svamp.png";





gameObj.push(
 {
    vem: "Svamp",
    namn: "Svamp",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "dice",
    index: gameObj.length,
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
     
  diceRubrik: "Svampar",
  diceText: "De luktar ljuvligt." ,
  diceBonus: "iq", bonus: "iq",
  T6: 0,
  


hitAction : function(){
    this.T6 = 0;
    hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
     gameStatus.push(diceRuta);
},
text: "Åh, de lukar ljuvligt.",
drawRuta: function (){
    var buttons = [];
    switch (this.T6) {
      case 0:
        buttons = [{action: diceRuta, text: "Mums"}, {action: moveFunc, text: "Kan vara farligt"}];      
      break;
      case 1:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, {action: moveFunc, text: "Gå!"}];
       deadOrAlive(2);
        this.text = "AJ! AJ! AJ! Den var giftig!";
      break;
      case 2:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, { action: moveFunc, text: "Gå!"}];
        deadOrAlive(1);
        this.text = "AJ, min mage! Jag tror jag ätit för många!";
      break;
      case 3:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, { action: moveFunc, text: "Gå!"}];
        gameObj[0].skada += 1;
        effekten("magi", "add");
        this.text = "Jag tror kraften är med mig!";
      break;
      case 4:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, { action: moveFunc, text: "Gå!"}];
        gameObj[0].styrka += 1;
        effekten("styrka", "add");
        this.text = "Oj oj, jag tror minsann mina biceps väver!";
      break
      case 5:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, { action: moveFunc, text: "Gå!"}];
        gameObj[0].iq += 1;
        effekten("iq", "add");
        this.text = "Elementärt, denna svamp måste ha vattnats med vatten från Mimers Brunn!";
      break;
      case 6:
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, { action: moveFunc, text: "Gå!"}];
        gameObj[0].liv += 1;
        effekten("harts", "add");
        this.text = "Åh hjärtaness då!"; 
      break;
    }
    //diceImg = this.cardImg;
    drawDiceRuta({rubrik: this.namn, brod: this.text}, this.cardImg, buttons, this.T6);
    this.T6 = Math.floor(Math.random() * 6 + 1); 
    return false;  
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



hitObjects++;
gameStatus.push(moveStart);

//kartbit[13].func=loadSIS;


