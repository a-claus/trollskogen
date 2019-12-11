
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/prinsSprite.png";




console.log("Prins");

gameObj.unshift(
 {

 	vem: "Prinsen",
	vad: "spelare",
	img: figurImg[0],
	figur: true,
	miljo: false,
	info: false,
	
 	
/*--------------------------------
EGENSKAPER
----------------------------------*/
 	liv: 3,
    skada: 0,
    styrka: 3,
    iq:1,
    magi: 0,
    magipower: 0,
    bag: [],
    upgrade: [],
    T6:0,

 /*--------------------------------
KARTA
----------------------------------*/   

	x: 180,
	y: 180,
	area: [this.x + 10, this.y + 10, this.x + 30, this.y + 30],
	speedX: 0,
	speedY: 0,
	floor: 1,
	jump: {fall:0, hojd:1, golv:1}, 
	fall: 0,

/*--------------------------------
BILD SPRITES MAP
----------------------------------*/	
	vaderstrack: "soder",
	width: 40,//40,
	hight: 40,//40,
	halvaWidth: 20,
	halvaHight: 20,

	moving: false,
	z: 1,
	fall: {
		on: false,
		acc: 0,
		ZunderZero: 1,
		drawer: 1
	},
	
	move: function (){ 
		this.speedX = 0;
    	this.speedY = 0;  

    	if (keyMap[37] == true || moveV == true) {this.speedX = -2; this.moving = true; this.vaderstrack="vaster";}
    	if (keyMap[39] == true || moveO == true) {this.speedX = 2; this.moving = true; this.vaderstrack="oster";}
    	if (keyMap[38] == true || moveN == true) {this.speedY = -2; this.moving = true; this.vaderstrack="norr";}
    	if (keyMap[40] == true || moveS == true) {this.speedY = 2; this.moving = true; this.vaderstrack="soder";}
		if (keyMap[32] == true) {keyMap[32] == false; this.fall = hopp(this.fall)}
	
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
	//	if (this.jump.hojd != 1) {
	//		this.jump = gravity(this.jump);}
    	if (this.spriteTimer == 30) {this.spriteTimer = 0;}
    	if (this.spriteTimer < 15) { spriteNR = 0; }
    	if (this.spriteTimer > 14) { spriteNR = 1; }
    	if (this.moving == false) { spriteNR = 2; }
		var ctx = myGameArea.context;
    	ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x - (40 * this.fall.drawer/2-20), this.y - (40 * this.fall.drawer/2-20), 40 * this.fall.drawer, 40 * this.fall.drawer);
		//ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x - this.halvaWidth - (40 * this.jump.hojd/2-20), this.y - this.halvaHight -(40 * this.jump.hojd/2-20), 40 * this.jump.hojd, 40 * this.jump.hojd);
		this.moving = false;
		}
});

function hopp(jump){
	console.log("----------------hoppla-------------------------");
	if (jump.acc == 0){
		
		jump.on = true;
		jump.acc = 0.4;
		return jump;
	}
	return jump;
	
}

console.log("Prins klar");

