//---------------------------------------------
//
// Gravsten
//
//---------------------------------------------
/*
Om någon figur tidigare dött ligger dess saker kvar här.

*/

wait.push("rip", "rip2");

mapImages.push(new Image());
cardImages.push(new Image());

mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("rip") );
cardImages[cardImages.length-1].addEventListener('load', notWaiting.bind("rip2") );

mapImages[mapImages.length-1].src="./img/rip.png";
cardImages[cardImages.length-1].src="./img/rip.png";

//findPos();


kartObj.push({
    namn: "Gravsten",
    img: mapImages[mapImages.length-1],
    miljo: true, figur : false, info: false, floor:1,
    x:-1, y:-1,
  draw: function(){
      if (this.x == -1) {this.getPosition();}
        ctx.drawImage(this.img, this.x, this.y, 50 ,50);//, 100, 100
  },
  getPosition: function(){
    let x = 200; let y = 200; let color; let i = 0;
    let incX; let incY;
    incX = Math.floor(Math.random() * 4) * 2 - 3; //0 2 4 6
    incY = Math.floor(Math.random() * 4) * 2 - 3;
      while (i < 2){
        x += incX;
        y += incY; 
        color = getRGB(x, y);

        if (color == "255 255 255") {i = 1};
        if (i == 1){
          if (color != "255 255 255"){
            i = 2;
          }
        }

      }
    this.x = x - 25; this.y = y - 25;
    gameObj[this.go].hitAreaX = this.x - 11; gameObj[this.go].hitAreaY = this.y -7;
  },
  go: gameObj.length
});


gameObj.push(
 {
    
    namn: "Gravsten", index: gameObj.length,
    miljo: false, figur: true, info: false,
    moving: false,
    cardImg: cardImages[cardImages.length-1],
    x: 175, y: 175, speedX: 0, speedY: 0, z:[3, 3.1], hojd:.1,
    width: 50, hight: 50, golv: 1,
    hitAreaX: 164,hitAreaY:168 , haWidth: 68 , haHight: 66,
    fall: {
      on: false,
      acc: 0,
      tyngdpunkt: 1,
      drawer: 1,
      
    },
  draw: function(){},
  move: function (){ return false;},
  hitAction : function(){
    
 
  //wait.push("");
  moveOn = false;
  gameStatus.push(this.drawRuta);
  hitIndex = this.index;
},
drawRuta: function(){
  const index = getIndexGameObj("Gravsten");
  let d_index;
    console.log(doeden);




  for(i=0; i < doeden.length; i++){
      if( doeden[i].ruta == wood.mapNR) d_index = i;

    }
  console.log(index, d_index);
  drawRuta("Vila i frid", "Här ligger " + doeden[d_index].namn, gameObj[index].cardImg, [{text: "Ta saker!", action: notWaiting}]);
}
  

	});




console.log("Gravsten");
hitObjects++;

notWaiting("Gravsten");

