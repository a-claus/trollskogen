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
sakImg.push(new Image());
sakImg[sakImg.length-1].src="./img/egblomma.png";


gameObj.push(
 {
  namn:"blomma",
   floor:1,  miljo: false, figur : true, info: false,
    vem: "Egblomma",
    vad: "figur",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    placeMe: true,
    hide: false,
    moving: false,
  vaderstrack: "soder",
  draw: function(){
    if (this.hide==false)
    ctx.drawImage(mapImages[this.indexS], this.x, this.y);
  },
  move: function (){},
  drawRuta: function(){
    gameObj[hitIndex].hide = true;
    const index = getIndexGameObj("blomma");
    drawRuta("Äggblomman", "Där är den!, som trollpackan behövde till Kungens medicin!", gameObj[index].cardImg, [{text: "Plocka blomma!", action: gameObj[index].getBlomma}]);

  },
  getBlomma: function(){
  
  console.log("getBlomma");    
  //deleteObject("blomma");      
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
  if (this.hide==false){
    gameStatus.push(this.drawRuta);
    hitIndex = this.index;
    gameObj[0].placeMe = true;}
    
    console.log("Ägget är löst!");   
},

putInBag: function(){
  bagger.push(new Sak());
  var post = bagger[bagger.length-1];
  post.namn = "Äggblomma";
  post.img = sakImg[sakImg.length-1];
  post.dragFunc = function(){ 
    if (wood.mapNR == 4) 
      kartObj.push(entreN);
    };
    post.do = function() {};
    post.undo = function() {};
    //deleteObject("blomma");  
}

});





//kartbit[13].func=loadSIS;

hitObjects++;
gameStatus.push(moveStart);



console.log("blomma Klar");



