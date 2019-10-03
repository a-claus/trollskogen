
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/trollsprite.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/trollMor.png";

if (-1 == bagger.findIndex(zz => zz.namn == "Kudde")) tempArray.push("Kudde");
if (-1 == bagger.findIndex(zz => zz.namn == "Piska")) tempArray.push("Piska");
if (-1 == bagger.findIndex(zz => zz.namn == "Klubba")) tempArray.push("Klubba");

if (tempArray.length > 0){
 temp = Math.floor(tempArray.length * Math.random()); 
 sakImg.push(new Image());
  if (tempArray[temp] == "Kudde") sakImg[sakImg.length-1].src = "./img/kudde.png";
  if (tempArray[temp] == "Piska") sakImg[sakImg.length-1].src = "./img/piska.png";
  if (tempArray[temp] == "Klubba")sakImg[sakImg.length-1].src = "./img/klubba.png";
}

                  

/*
Vildvittror
    - Strid - ?
    - Belöning - ?
    - Antal alltid flera, varje gång olika
    - move - kurvaktiga banor, snabba attackerar bakifrån. Framifrån undviker. Ger halv skada vid träff.
*/ 


console.log("Vildvittror");

gameObj.push(
 {
  namn: "Vildvittra",
 	vem: "Vildvittra",
	vad: "monster",
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
  vinst: tempArray[temp],
  angle: Math.floor(Math.random*360),
  angleChange: 0,
	
	move: function (){ //15 grader
        let xChange = Math.floor((Math.random*10));
        let lastAngle = this.angle;
        //if (45 < this.angle < 135) let v = "N";
        //if (135 < this.angle < 225) let v = "V";
        //if (225 < this.angle  < 315) let v = "S";
        //if (315 < this.angle  || this.angle < 45) let v = "O";
//kantundvikning
        var kant = [this.y, 400 - this.y, this.x, 400 - this.x];
        var minst = 50; vs = [];
        for (var i = 0; i < 4; i++){
          if (minst > kant[i]) {minst = kant[i]; vs.push(i);} 
        }
        let gradChange = 1;
        if (vs.length > 1) gradChange = 2; 
        
        if ( vs[0]==0) {//norr
          if (this.angle <= 90) gradChange = -15 * gradChange; else if (this.angle >= 90) gradChange = 15 * gradChange;
        }  
        if (vs[0] == 1) {
          if (this.angle <= 180) gradChange = -15 * gradChange; else if (this.angle <= 360) this.angle +=15;} //syd
        if (vs[0] == 2) {
          if (this.angle >= 90) this.angle -=15; else if (this.angle =< 270)  this.angle +=15;}  // vast
        if (vs[0] == 3) {
          if (0 =< this.angle < 175) this.angle +=15; else this.angle -=15;}// ost
        

        let attackAngle = angle (0, this.index);

//info om hur spelare är vänd
        let attack = [0,0,0,0];
        if (gameObj[0].vaderstrack == "Norr" )  { if (180 < attackAngle) attack[0] = 1; }
        if (gameObj[0].vaderstrack == "Soder" ) { if (attackAngle < 180) attack[1] = 1; }
        if (gameObj[0].vaderstrack == "Vast" )  { if (attackAngle < 90 || attackAngle > 270) attack[2] = 1; }
        if (gameObj[0].vaderstrack == "Ost" )   { if (90 < attackAngle < 270) attack[3] = 1; }


        //kalkylera avstånd till spelare.
        let avstand = pyth(0, this.index);
            //Om nära vrida sig mot spelare ifall rygg.
            //Om nära vrida sig från spelare ifall rygg.

            //Om mellan vrida sig från kant
            //Om nära kant vrida sig in i banan.
            //Om långt ifrån vrida sig mot spelare ifall rygg.
            //Om långt ifrån vrida sig mot spelare ifall rygg.

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
           gameObj[0].placeMe = true;
        
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
        if (enemy.T6 != 0){
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
                    enemy.T6=0;
                    drawCombatRuta({rubrik: "Stenklump", brod: "Det ligger ngt där"}, gameOver, buttons);
                    console.log("gggg");
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
            
      },
      getSak: function(){
            
        
    },    
    putInBag: function(){
            console.log(this.vinst);
            bagger.push(new Sak());
            var post = bagger[bagger.length-1];
            post.namn = this.vinst;
            console.log(bagger[bagger.length-1].namn);
            post.img = sakImg[sakImg.length-1];
        if (this.vinst == "Kudde"){
           post.dragFunc = function(){console.log("Rapp")};
            post.do = function() {};
            post.undo = function() {};}
        if (this.vinst == "Piska"){
            post.dragFunc = function(){console.log("Rapp")};
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
