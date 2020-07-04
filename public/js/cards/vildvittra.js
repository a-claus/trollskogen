

wait.push("vildvittra_b");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("vildvittra_b"));

mapImages[mapImages.length-1].src="./img/bird.png";

                  

/*
_________________________________
Vildvittror
    - Strid - ?
    - Belöning - ?
    - Antal alltid flera, varje gång olika
    - move - kurvaktiga banor, snabba attackerar bakifrån. Framifrån undviker. Ger halv skada vid träff.
_______________________________________________
*/ 


console.log("Vildvittror");
for(i = 0; i<4  ; i++)
gameObj.push(
 {
  namn: "Vildvittra",
 	vem: "Vildvittra",
	vad: "monster",
  effekt: true,
	figur: false, miljo: false, info: false,
    action: "dice",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    
    placeMe: true,
 	
/*--------------------------------
EGENSKAPER
----------------------------------*/
 	  liv: 2,
    skada: 0,
    styrka: 1,
    count: 0,
    

 /*--------------------------------
KARTA
----------------------------------*/   

	x: 120 + i * 30,
	y: 120 + i * 30,
	speedX: 0,
	speedY: 0,
  z: [1, 1.2], hojd:.2,
	

/*--------------------------------
BILD SPRITES MAP
----------------------------------*/	
	vaderstrack: "soder",
	width: 40,
	hight: 40,
	moving: true,
  
  //angle: Math.floor(Math.random*360),
  angle: 10 + i * 10,
  angleChange: 0,
  turn: {status: false, ur: "true", end: 0},
  
  turner: 0,
	
	move: function (){ //15 grader
    //this.x = 275;
   // console.log(this.angle + "ajaj" + this.x + " "+ this.y);
        let xChange = Math.floor((Math.random*10));
        let lastAngle = this.angle;
       
//kantundvikning
        var kant = [this.y, 400 - this.y, this.x, 400 - this.x];
        var minst = 50; vs = -1;
      if (this.turn.status == false)
        {
          for (var i = 0; i < 4; i++){
           // console.log("angel:" + this.angle);
            if (minst > kant[i]) {minst = kant[i]; vs = i; } 
          }

          
          if (vs == 0) {//norr
            if (180 <= this.angle && this.angle <= 270) {
              this.turn.status = true;
              this.turn.ur = false;
              this.turn.end = "soder";
            } else if (270 <= this.angle && this.angle <= 360){
              this.turn.status = true;
              this.turn.ur = true;
              this.turn.end = "soder";
            }
            else
              {this.turn.status = false;}
          }
          if (vs == 1) {//soder
            if (90 <= this.angle && this.angle <= 180) {
              this.turn.status = true;
              this.turn.ur = true;
              this.turn.end = "norr";
            } else if (0 <= this.angle && this.angle<= 90){
              this.turn.status = true;
              this.turn.ur = false;
             this.turn.end = "norr";
            }  
             else
              {this.turn.status = false;}
          }
          if (vs == 2) {//vast
            if (180 <= this.angle && this.angle <= 270) {
              this.turn.status = true;
              this.turn.ur = true;
              this.turn.end = "oster";
            } else if (90 <= this.angle && this.angle<= 180){
              this.turn.status = true;
              this.turn.ur = false;
              this.turn.end = "oster";
            }  
             else
              {this.turn.status = false;}
          }
          if (vs == 3) {//ost
            if (0 <= this.angle && this.angle <= 90) {
              this.turn.status = true;
              this.turn.ur = true;
              this.turn.end = "vaster";
            } else if (270 <= this.angle && this.angle <= 360){
              this.turn.status = true;
              this.turn.ur = false;
              this.turn.end = "vaster";
            } 
             else
              {this.turn.status = false;} 
          }
          this.turner = this.angle;
        }  
      

       if (this.turn.status == true){
          if (this.turn.ur == true)
            {
              this.angle += 5; 
              this.turner+= 5; 
            } 
            else {
              this.angle -= 5; 
              this.turner-= 5; 
            }
         
        }
        let slump = Math.floor(Math.random()*3);
        if (this.angle >= 360) this.angle -= 360;
        if (this.angle < 0) this.angle += 360;
        if (45 < this.angle  && this.angle < 135 && slump==0) this.vaderstrack = "soder";
        if (135 < this.angle  && this.angle  < 225 && slump==0) this.vaderstrack = "vaster";
        if (225 < this.angle  && this.angle < 315 && slump==0) this.vaderstrack = "norr";
        if (315 < this.angle  || this.angle < 45 && slump==0) this.vaderstrack = "oster";
        if (this.vaderstrack==this.turn.end){this.turn.status = false;}
       let attackAngle = angle (0, this.index);
       if (attackAngle < 0){attackAngle+=360;}
        

          let diff = Math.floor(  attackAngle - this.angle);
           // console.log(Math.abs(attackAngle) + "-" +  "=" + diff);

        let attack = true;

        if (gameObj[0].vaderstrack == "norr" )  { if (35 < attackAngle && attackAngle < 145) attack = false; }
        if (gameObj[0].vaderstrack == "soder" ) { if (215 < attackAngle && attackAngle < 325) attack = false; }
        if (gameObj[0].vaderstrack == "oster" )  { if (125 < attackAngle && attackAngle < 235) attack = false; }
        if (gameObj[0].vaderstrack == "vaster" )   { if (0 < attackAngle && attackAngle < 55 || 305 < attackAngle && attackAngle < 360) attack = false; }
        if (attack==true){
         // console.log("attack:" + gameObj[0].vaderstrack);
          if (diff > 0 && diff < 100)  {this.angle += 3;}
          if (diff > -100 && diff < 0) {this.angle -= 3;}
        } else if(attack==false){
       //   console.log("oh no");
          if (diff > 30 && diff < 70)  {this.angle -= 1;}
          if (diff > -70 && diff < 30) {this.angle += 1;}
        }

        //kalkylera avstånd till spelare.
        //let avstand = pyth(0, this.index);
        // var xLong = this.x + gameObj[0].x;
       // var yLong = this.y + gameObj[0].y;



    this.speedY =  1*Math.sin(this.angle * Math.PI/180) ;
    this.speedX =  1*Math.cos(this.angle * Math.PI/180);

    
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    return true;
	
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

      var ctx = myGameArea.context;
      //console.log(this.angle)
      ctx.save();
      ctx.translate(this.x, this.y);
       ctx.rotate( Math.PI*this.angle/180 );
        //   ctx.drawImage(this.sprite, this.spriteSchema[this.vaderstrack][spriteNR][0], this.spriteSchema[this.vaderstrack][spriteNR][1], this.spriteSchema[this.vaderstrack][spriteNR][2], this.spriteSchema[this.vaderstrack][spriteNR][3] this.x, this.y, 40, 40);

      ctx.drawImage(this.sprite, 0, 0, 40, 40);
  ctx.restore();


        //if (this.moving == false) { spriteNR = 2;}
        //console.log("ST" + this.spriteTimer);
		
     
		this.moving = false;

   //  ctx.fillStyle = "blue";
   //ctx.fillText(this.vss[0], this.vss[1],this.vss[2]);
        },
        hitAction : function(){
          console.log("hit");
          this.count++;
          if (this.count==20)this.count=0;
          if (this.count==1){
          gameObj[0].skada += .5;
          if (alive(0) == false){
            
           moveOn = false;
           gameStatus.push(death);
         }
          }

        },
      
      getSak: function(){
            
        
    },    
    putInBag: function(){}, 
    cardImg : cardImages[cardImages.length-1],
});




hitObjects++;
notWaiting("Vildvittra");
