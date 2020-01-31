//---------------------------------------------
//
// Blåbär
//
//---------------------------------------------
/*
När man äter blåbären, så repareras alla hjärtan.

*/

wait.push("Blåbär", "Blabarbild", "Blabarbild2");

mapImages.push(new Image());
cardImages.push(new Image());

mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("Blabarbild") );
cardImages[cardImages.length-1].addEventListener('load', notWaiting.bind("Blabarbild2") );

mapImages[mapImages.length-1].src="./img/blabar.png";
cardImages[cardImages.length-1].src="./img/blabar.png";

//findPos();


kartObj.push({
    namn: "Blåbar",
    img: mapImages[mapImages.length-1],
    miljo: true, figur : false, info: false, floor:1,
  draw: function(){
        ctx.drawImage(this.img, 175, 175, 50 ,50);//, 100, 100
    }
});


gameObj.push(
 {
    vem: "Blåbar",
    namn: "Blåbär",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "upgrade",
    figur: true,
    index: kartObj.length,
   
    indexCI: cardImages.length - 1,
    
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 175, y: 175, speedX: 0, speedY: 0, z:[3, 3.1], hojd:.1,
    width: 50, hight: 50, golv: 1,
    hitAreaX: 164,hitAreaY:168 , haWidth: 68 , haHight: 66,
    fall: {
      on: false,
      acc: 0,
      tyngdpunkt: 1,
      drawer: 1
    },
    
   
  vaderstrack: "soder",
  draw: function(){
  //  sizer = fallDrawer(this.x, this.y, this.width, this.hight, this.fall.drawer);
   // ctx.drawImage(mapImages[this.indexS], sizer.x, sizer.y, sizer.width, sizer.hight);
 },
  move: function (){ return false;},

hitAction : function(){
  movepause = true;
  gameObj[0].placeMe = true;
  gameStatus.push(this.drawRuta);
  hitIndex = this.index;
},
drawRuta: function(){
  const index = getIndexGameObj("Blåbär");
  gameObj[0].skada = 0;
  drawRuta("Blåbär", "Blåbär är gott och hälsosamt.", gameObj[index].cardImg, [{text: "Mums!", action: moveStart}]);

},
  sprite: mapImages[mapImages.length-1]
  

	});

function getPosition(){
  let x; let y; let color; let i = 0;
  let incX; let incY;

   while (i < 2){
    x += incX;
    y += incY; 
    color = getRGB(x, y);

    if (color == "255 255 255") i = 1;
    if (i == 1){
      if (color != "255 255 255"){
        i=2;
      }
    }

   }
}


console.log("Blåbär klar");
hitObjects++;

notWaiting("Blåbär");

