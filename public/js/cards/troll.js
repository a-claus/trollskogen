
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
     	var spriteNR;
        this.spriteTimer++;
      
		
    	if (this.spriteTimer == 30) {this.spriteTimer = 0;}
    	if (this.spriteTimer < 15) { spriteNR = 0;}
    	if (this.spriteTimer > 14) { spriteNR = 1;}
        //if (this.moving == false) { spriteNR = 2;}
        //console.log("ST" + this.spriteTimer);
		var ctx = myGameArea.context;
    	ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x, this.y, 40, 40);
		this.moving = false;
        },
        hitAction : function(){
            this.T6 = [0,0];
        
            hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
            // gameStatus.push(diceRuta); // fajtruta
              gameStatus.push(this.drawRuta); // fajtruta
        },
        T6 : 0,
        drawRuta: function (){
            let enemy = gameObj[hitIndex];
            let player = gameObj[0];
            movepause = true;
            var buttons = [];
            console.log("T6" + this.T6);
        if (gameObj[hitIndex].T6 != 0){
            let T6res = player.T6 - enemy.T6 + player.styrka - enemy.styrka;
            if (T6res > 0) {
               enemy.skada++;
            }
            if (T6res == 0) {
                enemy.skada+=.5;
                player.skada+=.5;
            }
            if (T6res < 0) {
               player.skada++;
            }
        }
        else{ 
          buttons = [{action: diceRuta, text: "Slåss"}, {action: moveFunc, text: "Fly"}];
          
          }
          drawCombatRuta({rubrik: "Lill-Troll", brod: "Its war"}, gameObj[hitIndex].cardImg, buttons, gameObj[hitIndex].T6);
          enemy.T6[0] = Math.floor(Math.random() * 6 + 1); 
          enemy.T6[1] = Math.floor(Math.random() * 6 + 1); 
          console.log("T6:" + this.T6);
          return false; 
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
