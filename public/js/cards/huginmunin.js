//---------------------------------------------
//
// Hugin och Munin
//
//---------------------------------------------
/*
De berättar för en var skatten är. Kanske ska ge annan info också.

*/

wait.push("hm1", "hm2", "hm3");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("hm1") );
mapImages[mapImages.length-1].src="./img/hm2.png";

mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("hm2") );
mapImages[mapImages.length-1].src="./img/hm.png";

cardImages.push(new Image());
cardImages[cardImages.length-1].addEventListener('load', notWaiting.bind("hm3") );
cardImages[cardImages.length-1].src="./img/huginmumin.png";





gameObj.push(
 {
    vem: "HuginMunin",
    namn: "HuginMunin",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "upgrade",
    figur: true,
    index: gameObj.length, //kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 75, y: 75, speedX: 0,speedY: 0, z: [3.5, 3.8], hojd:.3,
    width: 40 , hight: 40, 
    vaderstrack: "soder",
    status: 0,
    uppner:0, 
    angle: 45,
    counter: 0, speed: 0,
  draw: function(){
   // console.log ("drawXYZ");
    if (this.status == 1 || this.status == 2 || this.status == 4) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.PI*this.angle.rad/180 ); //???
      ctx.translate(-this.x,- this.y);
      ctx.drawImage(mapImages[this.indexS-1], this.x, this.y,40,40);
      ctx.drawImage(mapImages[this.indexS-1], this.x+10, this.y+10,40,40);
      ctx.restore();
    }
    if (this.status == 3) {
      ctx.drawImage(mapImages[this.indexS], this.x, this.y,40,40);
      
    }
    }, goal: {x: 200, y:200}, egenskap: "flyger", cc: [false, false, false, false],

  move: function (){

    console.log("status",this.status);
  
    if (this.status == 0){
      this.status = 1;
      this.goal = getWhite(this.width);
      let start = Math.floor(Math.random() * 400) - 20;
      let sidval = gameObj[0].vaderstrack;
 
      
      
     // this.uppner = 1; else this.uppner = -1;
       console.log("NNN", gameObj[0].vaderstrack);
       console.log("NNN", this.goal);
      if (sidval == "norr"){
        this.x = start;
        this.y = -20;
        console.log("N");
       
      }
      if (sidval == "soder"){
        this.x = start;
        this.y = 380;
        console.log("S");
      }
      if (sidval == "oster"){
        this.x = 380;
        this.y = start;
        console.log("O");
      }
      if (sidval == "vaster"){
        this.x = -20;
        this.y = start;
        console.log("V");
      }

      this.angle = angleXY({x:this.x, y:this.y}, this.goal;

        this.speedX = -1 * Math.cos(this.angle.rad);
        this.speedY = -1 * Math.sin(this.angle.rad);
        this.speed ={x: this.speedX, y:this.speedY}; 
        //console.log("NNN", this.x, this.y);
        //console.log(this.speedX, this.speedY, this.angle);
      
    }

    if (this.status == 1){ 
      this.speedX = this.speed.x;
        this.speedY = this.speed.y;
        console.log(this.x, this.y);
        console.log(this.cc);
        if (this.x < this.goal.x){this.cc[0] = true;}
        if (this.x > this.goal.x){this.cc[1] = true;}
        if (this.y < this.goal.y){this.cc[2] = true;}
        if (this.y > this.goal.y){this.cc[3] = true;}

        if (this.cc[0] == true) {if (this.cc[1] == true) { if(this.cc[2] == true) {if (this.cc[3] == true)
          { 
            console.log("status",this.status);
            this.status = 2;
          }}}}
      // Flyger till goal
    }

     if (this.status == 2){
      this.speedX = this.speed.x;
        this.speedY = this.speed.y;
      if (getRGB(this.x + this.width / 2, this.y + this.hight / 2) != "255 255 255"){
          this.z =[1,1.3];
          this.speed.x*= -1;
          this.speed.y*= -1;
          this.egenskap = "landar"
          this.status = 3;
        }
      // Fortsätter tills den hittar ngt att landa på.
    }
     if (this.status == 3){
      console.log("status3");
      return false;
      //flyger tillbaka    
       

    }

    if (this.status == 4){
      this.speedX = this.speed.x;
        this.speedY = this.speed.y;
      if (gameObj[hittad].x < 0 || gameObj[hittad].x > 400 || gameObj[hittad].y < 0 || gameObj[hittad].y > 400) {
        bytPlatsMedBlank(8, "card", wood.mapNR);
        this.status = 5;
      }
    }
    if (this.status == 5){return false;}
    return true;
  },
 

hitAction : function(){
  gameObj[0].placeMe = true;
   wait.push("drawRuta");
  //movepause=true;
  gameStatus.push(gameObj[hittad].drawRuta);
  hitIndex = this.index;
  moveOn = false;
  
},
c:0,
drawRuta: function(){
   let text;
   
  let c = gameObj[hittad].c;
  
  if (c == 0)
    drawRuta("Hugin och Munin", "Vi vet allt. Vi har sett allt.", gameObj[hittad].cardImg, [{text: "Berätta var Äggblomman är!", action: gameObj[hittad].drawRuta}]);
  if (c == 1){
    const index = getKartbitCard(0);
    let xyMap = kordinatorXY(wood.mapNR);
    let skattMap = kordinatorXY(index);
    let upp = skattMap[1] - xyMap[1]; // 2 3 -1
    let sida = skattMap[0] - xyMap[0];
    if (upp > 0) text = "Du behöver vandra " + upp + " rutor söderut, för att hitta Äggblomman.";
    if (upp < 0) text = "Du behöver vandra" + Math.abs(upp) + " rutor norrut, för att hitta Äggblomman.";
    if (upp == 0) text = "Du behöver varken vandra norrut eller söderut för att hitta Äggblomman.";
    if (sida > 0) text += " Och du behöver även vandra " + sida + " rutor österut.";
    if (sida < 0) text += "Och du behöver även vandra " + Math.abs(sida) + " rutor västerut.";
    if (sida == 0) text += "Och du behöver varken vandra västerut eller österut för att hitta Äggblomman.";
   
    drawRuta("Hugin och Munin", text, gameObj[hittad].cardImg, [{text: "Tack!", action: gameObj[hittad].fly}]);
    gameObj[hittad].counter = "talked";
  }
    //gameObj[hittad].indexS = mapImages.length - 2;
    gameObj[hittad].c++;
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
	
  fly: function(){
    console.log("korpen flygen");
    let index = getIndexGameObj("HuginMunin");
    gameObj[hittad].egenskap= "flyger";
    gameObj[hittad].z = [4, 4.3];
    gameObj[hittad].status++;

    notWaiting(); 
  }
});


//kartbit[13].func=loadSIS;

console.log("Hugin och Munin laddad" + gameObj[gameObj.length-1].x);
hitObjects++;

notWaiting("Hugin och Munin");
//gameStatus.push(moveStart);