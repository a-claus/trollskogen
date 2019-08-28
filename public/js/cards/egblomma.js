//---------------------------------------------
//
// Äggblomma - Book 1 
//
//---------------------------------------------

console.log("EgBlomma");
mapImages.push(new Image());
mapImages[mapImages.length-1].src="./img/egblomma.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/egblomma.png";




gameObj.push(
 {
  namn:"blomma",
   floor:1,  miljo: false, figur : true, info: false,
    vem: "Egblomma",
    vad: "figur",
    index: kartObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    placeMe: true,

  moving: false,
  vaderstrack: "soder",
  draw: function(){
    ctx.drawImage(mapImages[this.indexS], this.x, this.y);
  },
  move: function (){},
  getBlomma: function(){
  
        console.log("getBlomma");
        
        gameStatus="ajaxwait";
        ajaxQueue++;
        getFile("./js/cards/blomma.js");
  

 deleteObject("Egblomma");
    
    
    },    
  cardImg : cardImages[cardImages.length-1],


  /*--------------------------------
KARTA
----------------------------------*/   

    x: 170,
    y: 170,
    speedX: 0,
    speedY: 0,
    width: 60,
    hight: 60,
    

  /*--------------------------------
HIT
----------------------------------*/   


hitAction : function(){
  console.log("ÄggblommaHitAction");
    gameStatus = "wait";
    figurRubrik = this.vem;
    figurButton = "Plocka blomman";
    figurText = "Där är Äggblomman, som trollpackan behövde till Kungens medicin,";
    figurImg = this.cardImg;
    figurAction = gameObj[1].getBlomma;
 
     gameStatus="ruta";
}

});





//kartbit[13].func=loadSIS;

hitObjects++;
gameStatus.push(moveStart);