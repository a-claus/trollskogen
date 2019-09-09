
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/trollsprite.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/trollMor.png";


console.log("Troll");

gameObj.push(
 {
 	vem: "Troll",
	vad: "spelare",
	figur: true, miljo: false, info: false,
    action: "dice",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    placeMe: true,
 	
/*--------------------------------
EGENSKAPER
----------------------------------*/
 	liv: 2,
    skada: 0,
    styrka: 1,
    //iq:1,
    //magi: 0,
    //magipower: 0,
    //bag: [],
    //upgrade: [],

 /*--------------------------------
KARTA
----------------------------------*/   

	x: 180,
	y: 180,
	speedX: 0,
	speedY: 0,
	floor: 1,
	//jump: {fall:0, hojd:1, golv:1}, 
	//fall: 0,

/*--------------------------------
BILD SPRITES MAP
----------------------------------*/	
	vaderstrack: "soder",
	width: 40,
	hight: 40,
	moving: true,
	
	move: function (){ 
        var xLong = this.x - gameObj[0].x;
        var yLong = this.y - gameObj[0].y;



    if (Math.abs(xLong) > Math.abs(yLong)){
        if (xLong > 0){this.speedX = -.25; this.vaderstrack = "vaster";} 
        else {this.speedX = .25; this.vaderstrack = "oster";}
    }
    else
    {
        if (yLong > 0){this.speedY= -.25; this.vaderstrack = "norr";} 
        else {this.speedY=.25; this.vaderstrack = "soder";}
    }
	
	},
	spriteSchema:
			{ 
				norr:  [[0,0,100,100],[100,0,100,100],[200,0,100,100]],
				soder: [[0,100,100,100],[100,100,100,100],[200,100,100,100]],
				vaster: [[0,200,100,100],[100,200,100,100],[200,200,100,100]],
				oster: [[0,300,100,100],[100,300,100,100],[200,300,100,100]]
			},
	sprite: mapImages[mapImages.length-1],
	spriteTimer: 0,
	draw: function(){
        console.log("x" + this.x);
    	var spriteNR;
		this.spriteTimer++;
		
    	if (this.spriteTimer == 30) {this.spriteTimer = 0;}
    	if (this.spriteTimer < 15) { spriteNR = 0;}
    	if (this.spriteTimer > 14) { spriteNR = 1;}
    	if (this.moving == false) { spriteNR = 2;}
		var ctx = myGameArea.context;
    	ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x, this.y, 40, 40);
		this.moving = false;
        },
        hitAction : function(){
            this.T6 = 0;
        
            hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
             gameStatus.push(diceRuta); // fajtruta
        },
        drawRuta: function (){
            movepause = true;
              var buttons = [];
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
    },    
    cardImg : cardImages[cardImages.length-1],
});

hitObjects++;
gameStatus.push(moveStart);
