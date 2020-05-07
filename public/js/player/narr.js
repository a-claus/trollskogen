

wait.push("narrBild");

mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("narrBild") );
mapImages[mapImages.length-1].src="./img/prinsSprite.png";


console.log("Narr");

gameObj.unshift(
 {
 	vem: "Narren",
	vad: "spelare",
	figur: true,
	miljo: false,
	info: false,
	
 	
/*--------------------------------
EGENSKAPER
----------------------------------*/
 	liv: 2,
    skada: -.5,
    styrka: 1,
    iq:3,
    magi: 2,// 0,
    magipower: 1,
    bag: [],
    upgrade: [],

 /*--------------------------------
KARTA
----------------------------------*/   

	x: 180,
	y: 180,
	z: [4, 4.3], golv: 1,
	speedX: 0,
	speedY: 0,
	jump: {fall:0, hojd:1, golv:1}, 
	

/*--------------------------------
BILD SPRITES MAP
----------------------------------*/	
	vaderstrack: "soder",
	width: 40,
	hight: 40,
	halvaWidth: 20,
	halvaHight: 20,
	moving: false,
	hojd: .3,
	fall: {
		on: false,
		acc: 0,
		tyngdpunkt: 1,
		drawer: 1,
		hardLandning:.5
	},
	
	move: function (){ 
		this.speedX = 0;
    	this.speedY = 0; 
    	let moving=false; 
    	if (keyMap[37] == true || moveV == true) {this.speedX = -2; this.moving = true; moving = true; this.vaderstrack="vaster";}
    	if (keyMap[39] == true || moveO == true) {this.speedX = 2; this.moving = true; moving = true; this.vaderstrack="oster";}
    	if (keyMap[38] == true || moveN == true) {this.speedY = -2; this.moving = true; moving = true; this.vaderstrack="norr";}
    	if (keyMap[40] == true || moveS == true) {this.speedY = 2; this.moving = true; moving = true; this.vaderstrack="soder";}
		if (keyMap[32] == true) {keyMap[32] == false; this.jump = hopp(this.jump.fall);}
		return moving;
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
    	if (this.moving == false) { spriteNR = 2;}
		var ctx = myGameArea.context;
		ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x - (40 * this.fall.drawer/2-20), this.y - (40 * this.fall.drawer/2-20), 40 * this.fall.drawer, 40 * this.fall.drawer);

		this.moving = false;
		}
});

	
function hopp(jump){

	if (jump.acc == 0 && jump.on == false){
		
		console.log("----------------hoppla-------------------------");
		
		jump.on = true;
		jump.acc = 0.25;//0.4
		return jump;
	}
	return jump;
	
}

gameStatus.push(function() {return mapChange("jump", 81)} );

//gameStatus.push(moveStart);
//gameStatus.push(mapChange.bind(this, "jump", 81, "Narr"));
//gameStatus.push(mapChange.bind(this, "jump", 81, "Narr"));
 
   console.log(gameObj); 
   console.log("Klar Narr"); 