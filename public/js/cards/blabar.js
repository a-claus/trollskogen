//---------------------------------------------
//
// Blåbär
//
//---------------------------------------------
/*
När man äter blåbären, så repareras alla hjärtan.

*/


mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/blabar.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/blabar.png";





gameObj.push(
 {
    vem: "Blåbar",
    namn: "Blåbär",
    vad: "figur",
    miljo: false, figur: true, info: false,
    action: "upgrade",
    figur: true,
    index: kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    //placeMe: true,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 175, y: 175, speedX: 0, speedY: 0, z:[3, 3.1], hojd:.1,
    width: 50, hight: 50, golv: 1,
    hitAreaX: 170,hitAreaY:170 , haWidth: 60 , haHight: 60,
    fall: {
      on: false,
      acc: 0,
      tyngdpunkt: 1,
      drawer: 1
    },
    
   
  vaderstrack: "soder",
  draw: function(){
    sizer = fallDrawer(this.x, this.y, this.width, this.hight, this.fall.drawer);
    ctx.drawImage(mapImages[this.indexS], sizer.x, sizer.y, sizer.width, sizer.hight);},
  move: function (){ return false;},

hitAction : function(){
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
  /*
  ,
    
	draw: function(){
       if (this.x < 400){ 
          ctx.drawImage(this.sprite, this.x, this.y, 60, 60);
        }
    }*/

	});


//kartbit[13].func=loadSIS;

console.log("Blåbär klar");
hitObjects++;

gameStatus.push(moveStart);

function fallDrawer(x, y, width, hight, size){
  //      this.x - (40 * this.fall.drawer/2-20), this.y - (40 * this.fall.drawer/2-20), 40 * this.fall.drawer, 40 * this.fall.drawer);
  let sizer  = {};
  let just = size * width - size; //20+
  x = x + width / 2;
  y = y + hight / 2;
  sizer.x = x - just / 2;
  sizer.y = y - just / 2;
  sizer.width = just;
  sizer.hight = just;
  return sizer;

  //return size * hojd/2-size;
}