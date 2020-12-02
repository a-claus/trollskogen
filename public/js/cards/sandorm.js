//---------------------------------------------
//
//Sandmonster
//---------------------------------------------
/*
Tänker mig att sandmonster kommer som ett spår. Attackerar om man hoppar och tar sig dit. Gör grop, som man hamnar i. Blir utspottad. Fanns ju ngt i Dune som var bra. Frågan om det kan komma fram och då ger magisk kraft.
*/

//Bilder
// xyz________________________________________
/*
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



*/

gameObj.push(
 {
    vem: "Sandorm",
    namn: "Sandorm",
    vad: "figur",
    miljo: false, figur: true, info: false,
    figur: true,
    index: gameObj.length,
   // indexS: mapImages.length - 1,
    //indexCI: cardImages.length - 1,
    moving: true,
    //cardImg: cardImages[cardImages.length-1],
    x: 80, y: 80, speedX: .5, speedY: 1.5, z: [0, .5], hojd: .5,
    width: 40 , hight: 40, 
    vaderstrack: "soder",
    status: "waiting",
    uppner:0, 
    angle: 45,
    counter: 0, speed: 0,
    slang:[],
    area : {x: 75, y:75, width:250, height: 250},
// hitArea ---
    z: [1, 1.2], hitAreaX: 0, hitAreaY: 0,
    hojd:.2,
    haWidth: 30 , haHight: 30, 
// -----------------------------

  draw: function(){
   /*
      STATUS 0: Sover
      STATUS 1: moving /attackerar
      STATUS 2: gör grop
      status 3: Fångat, spottar ut spelare

   */
   var vilkenI; hurLangt = 250; let p; let pilx;
   var ctx = myGameArea.context; let proc;
  if (this.status == "moving" || this.status == "grop") {
      for( i=0; i < this.slang.length; i++){
        this.slang[i].radie = this.slang[i].radie*.99;
        
        p = Math.abs(gameObj[0].x - this.slang[i].x + 15);
        if ( p < hurLangt ) { vilkenI = i; hurLangt = p;}
        p = Math.abs(gameObj[0].y - this.slang[i].y + 15);
        if ( p < hurLangt ) { vilkenI = i; hurLangt = p;}
        ctx.beginPath();
        ctx.arc(this.slang[i].x, this.slang[i].y, this.slang[i].radie, 0, 2 * Math.PI);
        proc = i / 100;
        ctx.fillStyle = "rgb(100, 100, 255)";
        ctx.fill();   
        this.hitAreaX = this.slang[vilkenI].x -15; 
        this.hitAreaY = this.slang[vilkenI].y -15;    
      }
      if (this.slang.length > 100) (this.slang = this.slang.slice(1, this.slang.length));
    }
    

    if (this.status == "grop"){
                  let gropp = this.gropSize;
                  if(gropp > 60) gropp = 60;    

              let innerRadius = 1, outerRadius = gropp, radius = gropp;
              var gradient = ctx.createRadialGradient(this.x, this.y, innerRadius, this.x, this.y, outerRadius);
                gradient.addColorStop(0, "rgb(140,80,20)");//)
                gradient.addColorStop(1, 'white'); //rgb("240","240","240")

                ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);

                ctx.fillStyle = gradient;
                ctx.fill();

          }    
  },

  move: function (){ 
    console.log("status", this.status);
    if (this.status == "waiting"){
      let xy = {x: gameObj[0].x, y: gameObj[0].y};
      
      if (inArea(xy, this.area) == true){
       
        //sätta position på monstret
        //sätta mål och fart
        this.goalArea = {x: xy.x-12, y: xy.y-12, width:24, height:24};
        this.status = "moving";
      }
    }
  
    if (this.status == "moving" ){
      this.x += this.speedX;
      this.y += this.speedY;
      let radie = Math.floor(Math.random() * 10) + 5;  
      this.slang.push(  {x: this.x, y: this.y, radie: radie });

      if (inArea({x: this.x, y: this.y}, this.area) == false){this.status = "changeSpeed"}
      //if (inArea({x: this.x, y: this.y}, this.goalArea) == true){this.status = "goalHit"}
       // let xywh = {x: gameObj[0].x, y: gameObj[0].y, width: 10, height: 10};
 /*for (i=0; i < this.slang.length; i++){
    if (inArea({x: this.slang[i].x, y: this.slang[i].y}, xywh) == true){this.status = "goalHit"}

 }*/
    }

    if (this.status == "changeSpeed"){
      let slumptal = Math.floor(Math.random() * 4) + 1;
      if(this.x <= this.area.x){ this.speedX  = .5*slumptal;}
      if(this.x >= this.area.x + this.area.width){ this.speedX= -.5*slumptal;}
      if(this.y <= this.area.y){ this.speedY= .5 * slumptal;}
      if(this.y >= this.area.y + this.area.height){ this.speedY= -.5*slumptal;}
      this.status = "moving";
    }
    if (this.status == "goalHit"){
      this.speedX = 0; this.speed=0;
      this.status = "grop"; 
      this.gropSize = 1;

     }
     if (this.status == "grop"){
      //let p = pythXY({x: gameObj[0].x, y: gameObj[0].y}, {x:this.slang[i].x, y:this.slang[i].y});
        let xDelta = this.x - gameObj[0].x, yDelta = this.y - gameObj[0].y; 
        if (3 < Math.abs(xDelta)) gameObj[0].x += 3/xDelta; 
        if (3 < Math.abs(yDelta)) gameObj[0].y += 3/yDelta;


      this.gropSize++;
      if (this.gropSize > 200) this.status = "final";

    }
  if (this.status == "final"){
        this.gropSize--;
      if (this.gropSize < 0) this.status = "moving";
    }


},
 
  
hitAction : function(){
  
  if (this.status == "moving"){
    this.status = "goalHit";}

  if (this.status == "grop"){
   console.log("hitArea");
 }

},

drawRuta: function(){},
});


//kartbit[13].func=loadSIS;

console.log("Sandorm" + gameObj[gameObj.length-1].x);
hitObjects++;

notWaiting("Hugin och Munin");
//gameStatus.push(moveStart);