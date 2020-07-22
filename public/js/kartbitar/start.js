console.log("start js");
//---------------------------------------------
//
// START  SLUT
//
//---------------------------------------------

mapImages.push(new Image());
wait.push("startBild");
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("startBild") );
mapImages[mapImages.length-1].src = "./img/map_start.png";


kartObj.push(
 {
    namn: "Start",
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

//listaEffekt.push(new Effekter("stars",200,200));

console.log(wait);
//if (wait.length > 0){
    notWaiting("START");
wait =[];
