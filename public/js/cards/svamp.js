//---------------------------------------------
//
// Svamp
//
//---------------------------------------------
/*
ger slumpvis bonuc. IQ, styrka, extra hjärta och gift

*/

wait.push("svampbild1", "svampbild2");

mapImages.push(new Image());
cardImages.push(new Image());


mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("svampbild1"));
cardImages[cardImages.length-1].addEventListener('load', notWaiting.bind("svampbild2"));


mapImages[mapImages.length-1].src="./img/svamp.png";
cardImages[cardImages.length-1].src="./img/svamp.png";


kartObj.push({
  namn: "Svamp",
  img: mapImages[mapImages.length-1],
  miljo: true, figur : false, info: false, floor: 1,
  draw: function(){
    ctx.drawImage(this.img, 175, 175, 50 ,50);
  }
});


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
    hitAreaX: 175, hitAreaY: 175 , haWidth: 50 , haHight: 50,
  
  move: function (){},
   x: 170, y: 170, speedX: 0,speedY: 0, z:[1, 1.1], hojd: .1,

  /*--------------------------------
HIT
----------------------------------*/   
     
  diceRubrik: "Svampar",
  diceText: "De luktar ljuvligt." ,
  //diceBonus: "iq", bonus: "iq",
  T6: 0,
  


hitAction : function(){
    this.T6 = 0;
    hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
    gameStatus.push(diceRuta);
      
    wait.push("MM");
    moveOn = false;
    console.log("svamp!");
     //   gameStatus.push(this.drawRuta);
       

},
text: "Åh, de luktar ljuvligt.",
drawRuta: function (){
    var buttons = []; var life = true;
    switch (this.T6) {
      case 0:
        buttons = [{action: diceRuta, text: "Mums"}, {action: notWaiting, text: "Kan vara farligt"}];      
      break;
      case 1:
       life = deadOrAlive(2);
        gameObj[hittad].text = "AJ! AJ! AJ! Den var giftig!";
      break;
      case 2:
        life = deadOrAlive(1);
        gameObj[hittad].text = "AJ, min mage! Jag tror jag ätit för många!";
      break;
      case 3:
        gameObj[0].skada += 1;
        effekten("magi", "add");
        gameObj[hittad].text = "Jag tror kraften är med mig!";
      break;
      case 4:
        gameObj[0].styrka += 1;
        effekten("styrka", "add");
        gameObj[hittad].text = "Oj oj, jag tror minsann mina biceps väver!";
      break
      case 5:
        gameObj[0].iq += 1;
        effekten("iq", "add");
        gameObj[hittad].text = "Elementärt, denna svamp måste ha vattnats med vatten från Mimers Brunn!";
      break;
      case 6:
        
        gameObj[0].liv += 1;
        effekten("harts", "add");
        gameObj[hittad].text = "Åh hjärtaness då!"; 
      break;
    }

    if (life == true){
      if (this.T6 != 0){
        buttons = [{action: diceRuta, text: "Vågar man ta en till?"}, {action: notWaiting, text: "Gå!"}];
    }}
    if (life == false){return false;}
    //diceImg = this.cardImg;
    drawDiceRuta({rubrik: this.namn, brod: gameObj[hittad].text}, gameObj[hittad].cardImg, buttons, this.T6);
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
    if (this.hittaPlats == true){
      let hp = getWhite(this.width);}
    return false;
  }
   

});
hitObjects++;

notWaiting("Svamp");

//gameStatus.push(moveStart);

//kartbit[13].func=loadSIS;


