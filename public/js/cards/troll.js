
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/trollsprite.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/trollMor.png";

if (-1 == bagger.findIndex(zz => zz[namn] == "Kudde")) tempArray.push("Kudde");
if (-1 == bagger.findIndex(zz => zz[namn] == "Piska")) tempArray.push("Piska");
if (-1 == bagger.findIndex(zz => zz[namn] == "Klubba")) tempArray.push("Klubba");

if (tempArray.length > 0){
 temp = Math.floor(tempArray.length * Math.random()); 
 sakImg.push(new Image());
  if (tempArray[temp] == "Kudde") sakImg[sakImg.length-1].src = "./img/kudde.png";
  if (tempArray[temp] == "Piska") sakImg[sakImg.length-1].src = "./img/piska.png";
  if (tempArray[temp] == "Klubba")sakImg[sakImg.length-1].src = "./img/klubba.png";
}

                  




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
  vinst: temp,
	
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
           
        
            hitIndex = this.index; //xyz borde reggas senare med tanke att gameObj kan ändras efter laddning
            // gameStatus.push(diceRuta); // fajtruta
              gameStatus.push(this.drawRuta); // fajtruta
        },
        //T6 :0,
        drawRuta: function (){
            movepause = true;
            let enemy = gameObj[hitIndex];
            let player = gameObj[0];
            movepause = true;
            var buttons = [];
            console.log("T6:" + gameObj[hitIndex].T6 );
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
        
        //check liv
        aliveOrNot(0);
            //om någon död
                
                if (aliveOrNot(hitIndex) == false){
                    buttons = [{action: gameObj[hitIndex].getSak, text: "Ta sak"}];
                    drawCombatRuta({rubrik: "Stenklump", brod: "Det ligger ngt där"}, rip, buttons);

                }
                if(aliveOrNot(0) == false){

                }
                if(aliveOrNot(hitIndex) == true && aliveOrNot(0) == true){
                  buttons = [{action: diceRuta, text: "Slåss"}, {action: moveFunc, text: "Fly"}];
                  drawCombatRuta({rubrik: "Lill-Troll", brod: "Its war"}, enemy.cardImg, buttons);
                  player.T6 = 6 * Math.random() + 1; 
                  enemy.T6 = 6 * Math.random() + 1; 
                  player.T6 = Math.floor(player.T6); 
                  enemy.T6 = Math.floor(enemy.T6); 
                buttons = [{action: diceRuta, text: "Slåss"}, {action: moveFunc, text: "Fly"}];
          
          
          drawCombatRuta({rubrik: "Lill-Troll", brod: "Its war"}, enemy.cardImg, buttons);
          player.T6 = 6 * Math.random() + 1; 
          enemy.T6 = 6 * Math.random() + 1; 
          console.log("T6a:" + enemy.T6 );
          player.T6 = Math.floor(player.T6); 
          enemy.T6 = Math.floor(enemy.T6); 
          }
          console.log(gameStatus);

          return false; 
          //return true;  
      },
      getSak: function(){
            map[wood.mapNum].card = 1; //blank
            gameStatus.push(putEquipmentToBag, move);
            this.floor=-1;
        
    },    
    putInBag: function(){
            console.log(this.vinst);
            bagger.push(new Sak());
            var post = bagger[bagger.length-1];
            post.namn = this.vinst;
            post.img = sakImg[sakImg.length-1];
        if (this.vinst == "Kudde"){
           post.dragFunc = function(){};
            post.do = function() {};
            post.undo = function() {};}
        if (this.vinst == "Piska"){
            post.dragFunc = function(){};
            post.do = function() {};
            post.undo = function() {};}
        if (this.vinst == "Klubba"){
            post.dragFunc = function(){};
            post.do = function() {gameObj[0].styrka++;};
            post.undo = function() {gameObj[0].styrka--;};}
        }, 
    cardImg : cardImages[cardImages.length-1],
});

hitObjects++;
gameStatus.push(moveStart);
