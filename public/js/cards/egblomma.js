//---------------------------------------------
//
// Äggblomma - Book 1 
//
//---------------------------------------------

console.log("ÄggBlomma");
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
  hitAction: function(){},
  drawRuta: function(){
    
   const index = getIndexGameObj("blomma");
    drawRuta("Äggblomman", "Där är den!, som trollpackan behövde till Kungens medicin!", gameObj[index].cardImg, [{text: "Plocka blomma!", action: gameObj[index].getBlomma}]);
getFile("./js/cards/blomma.js");
  },
  getBlomma: function(){
  
  console.log("getBlomma");
        
        
  deleteObject("blomma");      
  gameStatus.push(putEquipmentToBag, move);

 
    
    
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
   
  
    gameStatus.push(this.drawRuta);
    hitIndex = this.index;
    gameObj[0].placeMe = true;
    console.log("Ägget är löst!");
 
    
}

});





//kartbit[13].func=loadSIS;

hitObjects++;
gameStatus.push(moveStart);