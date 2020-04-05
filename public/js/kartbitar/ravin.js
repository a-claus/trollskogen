
//---------------------------------------------
//
// RAVIN
//
//---------------------------------------------

console.log("---Ravin---")
wait.push("Ravinbild");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("Ravinbild") );
mapImages[mapImages.length-1].src = "./img/stup1.png";




coAct = "ravin";
//console.log(kartObj);
//kartObj.shift();
//console.log(kartObj);
kartObj.push({
 	vem: "ravin",
    namn: "ravin",
    vad: "kartbit",
    floor: 1,
    miljo: true,
    figur: false,
    info: false,
    img: mapImages[mapImages.length-1],
   
   
  draw: function(){
    	var ctx = myGameArea.context;
				ctx.drawImage(this.img, 0, 0, 400, 400);
		}
});

gameObj.push(new ObstacleKub(0, 0, [1, 3.2], 150, 150)); //NV
gameObj.push(new ObstacleKub(225, 0, [1, 3.2], 175, 100));//NO
gameObj.push(new ObstacleKub(275, 100, [1, 3.2], 25, 25));//NO
gameObj.push(new ObstacleKub(300, 100, [1, 3.2], 100, 50));//NO
gameObj.push(new ObstacleKub(0, 250, [1, 3.2], 100, 150));//SV
gameObj.push(new ObstacleKub(50, 300, [1, 3.2], 50, 100));//SV
gameObj.push(new ObstacleKub(100, 324, [1, 3.2], 50, 75));//SV
gameObj.push(new ObstacleKub(250, 300, [1, 3.2], 50, 100));//SO
gameObj.push(new ObstacleKub(300, 300, [1, 3.2], 100, 100));//SO
gameObj.push(new ObstacleKub(300, 250, [1, 3.2], 100, 50));//SO
gameObj.push(new ObstacleKub(100, 290, [1, 3.2], 30, 100));//SO

//gameObj.push(new ObstacleKub(0, 0, [0, 1], 400, 400));//BV

//övre väg

gameObj.push(new ObstacleKub(120, 0, [1.0, 2], 35, 125));//norr
gameObj.push(new ObstacleKub(150, 0, [1.0, 2], 110, 150));//norr
gameObj.push(new ObstacleKub(250, 150, [1.0, 2], 160, 100));//ost
gameObj.push(new ObstacleKub(200, 150, [1.0, 2], 60, 50));//ost
gameObj.push(new ObstacleKub(250, 100, [1.0, 2], 60, 50));//ost

//KLippor
gameObj.push(new ObstacleKub(100, 150, [1.0, 1.7], 110, 50));//norr
gameObj.push(new ObstacleKub(150, 200, [1.0, 1.7], 110, 50));//norr
gameObj.push(new ObstacleKub(200, 250, [1.0, 1.7], 110, 50));//norr
gameObj.push(new ObstacleKub(240, 300, [1.0, 1.7], 40, 40));//norr



notWaiting("Ravin"); 