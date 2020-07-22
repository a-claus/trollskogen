//---------------------------------------------
//
// Lyktstolpen
//
//---------------------------------------------
/*
När man går till den hamnar man på ruta 4

*/

wait.push("bild");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("bild") );
mapImages[mapImages.length-1].src="./img/lyktstolpe.png";

/*
kartObj.push({
    namn: "Lykstolpe",
    img: mapImages[mapImages.length-1],
    miljo: true, figur : false, info: false, floor:1,
    x:-1, y:-1,
  draw: function(){
      if (this.x == -1) {this.getPosition();}
        ctx.drawImage(this.img, this.x, this.y, 50 ,50);//, 100, 100
  }
});*/



gameObj.push(
 {
    vem: "Lyktstolpe",
    namn: "Lyktstolpe",
    vad: "figur",
    miljo: false, figur: true, info: false,
    
    index: gameObj.length,
    indexS: mapImages.length - 1,
    placeMe: false,
    moving: false,
  vaderstrack: "soder",
  draw: function(){//ctx.drawImage(mapImages[this.indexS], this.x, this.y);
    sizer = fallDrawer(this.x, this.y, this.width, this.hight, this.fall.drawer);
    ctx.drawImage(mapImages[this.indexS], sizer.x, sizer.y, sizer.width, sizer.hight);
  
      },
  move: function (){ return false;},
   x: 170, y: 170, speedX: 0,speedY: 0,floor: 1, 
   width: 50, hight:60, 
   z:[3, 4], hojd:1,
   fall: {
    on: false,
    acc: 0,
    tyngdpunkt: 1,
    drawer: 1
  },
   hitAreaX: 188, hitAreaY: 205, haWidth: 26, haHight:26, 


  /*--------------------------------
HIT
----------------------------------*/   

  //diceBonus: "iq", bonus: "iq",

  


hitAction : function(){
  if (this.blinkar == false){
   gameStatus.push(gameObj[hittad].blink);
   this.blinkar=true;
  movepause=true;}},
  c:0, blinkar: false,
blink:function(){
  if (gameObj[hittad].c == 0){setScreenImage(); }
  gameObj[hittad].c++;
  let dark = gameObj[hittad].c % 50;
  if (isEven(dark) == true){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);  
  }else
  {
    drawScreenImage();
  }
  if (gameObj[hittad].c > 79){
    console.log("inte färdg");
    /* tagit bort info om vädersträcket, vilket på nya rutor
    avgör var man hamnar. Måste lösa detta. Tänker att man ramlar på x,y
    vad man har: Får det z det fältet har, dock om manhamnar på trädtoppar 


    */
    gameStatus.push(nyruta.bind({},"jump", 4));
    //tempArray = [4, gameObj[0].vaderstrack]; //
    //gameObj[0].vaderstrack = "jump";
    return false;
  }
else{

  return true;
}
}
   

});



hitObjects++;
notWaiting("Lyktstolpe")



