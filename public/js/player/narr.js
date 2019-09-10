
mapImages.push(new Image());
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
    skada: 0,
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
	speedX: 0,
	speedY: 0,
	floor: 1,
	jump: {fall:0, hojd:1, golv:1}, 
	fall: 0,

/*--------------------------------
BILD SPRITES MAP
----------------------------------*/	
	vaderstrack: "soder",
	width: 40,
	hight: 40,
	moving: false,
	
	move: function (){ 
		this.speedX = 0;
    	this.speedY = 0;  

    	if (keyMap[37] == true || moveV == true) {this.speedX = -2; this.moving = true; this.vaderstrack="vaster";}
    	if (keyMap[39] == true || moveO == true) {this.speedX = 2; this.moving = true; this.vaderstrack="oster";}
    	if (keyMap[38] == true || moveN == true) {this.speedY = -2; this.moving = true; this.vaderstrack="norr";}
    	if (keyMap[40] == true || moveS == true) {this.speedY = 2; this.moving = true; this.vaderstrack="soder";}
		if (keyMap[32] == true) {this.jump = hopp(this.jump)}
	
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
		if (this.jump.hojd != 1) {
			this.jump = gravity(this.jump);}
    	if (this.spriteTimer == 30) {this.spriteTimer = 0;}
    	if (this.spriteTimer < 15) { spriteNR = 0;}
    	if (this.spriteTimer > 14) { spriteNR = 1;}
    	if (this.moving == false) { spriteNR = 2;}
		var ctx = myGameArea.context;
    	ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3], this.x - (40 * this.jump.hojd/2-20), this.y - (40 * this.jump.hojd/2-20), 40 * this.jump.hojd, 40 * this.jump.hojd);
		this.moving = false;
		}
});
function hopp(jump){
	if (jump.hojd==jump.golv){jump.fall = 0.3; jump.hojd = 1.4}
	return jump;
}
function gravity(jump){
	//console.log(jump.hojd + " " +jump.fall);
	
if (jump.hojd > jump.golv){
	jump.fall = jump.fall - 0.05;
	jump.hojd = jump.hojd + jump.fall;}
if (jump.hojd < jump.golv){
		jump.fall = jump.fall + 0.1;
		jump.hojd = jump.hojd + jump.fall;
		if (jump.hojd > jump.golv) {jump.hojd = jump.golv; jump.fall=0}
	}
	return jump;
}
gameStatus.push(moveStart);

