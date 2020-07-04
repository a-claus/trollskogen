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
   floor: 1,  miljo: false, figur : true, info: false,
    vem: "Egblomma",
    vad: "figur",
    index: gameObj.length,
    indexS: mapImages.length - 1,
    indexCI: cardImages.length - 1,
    placeMe: true,
    moving: false,
    img: sakImg[sakImg.length - 1],
  vaderstrack: "soder",
  draw: function(){
    
    ctx.drawImage(mapImages[this.indexS], this.x, this.y);
  },
  move: function (){return false;},
  drawRuta: function(){
        gameObj[hitIndex].floor = -1;


    const index = getIndexGameObj("blomma");
    t6Ruta.text = {rubrik: "Äggblomman", text: "Där är den!, som trollpackan behövde till Kungens medicin!"}
    t6Ruta.buttons = [{text: "Plocka blomma!", action: gameObj[index].getBlomma}];
    t6Ruta.draw();
    //drawRuta("Äggblomman", "Där är den!, som trollpackan behövde till Kungens medicin!", gameObj[index].cardImg, [{text: "Plocka blomma!", action: gameObj[index].getBlomma}]);

  },
  getBlomma: function(){
  
  console.log("getBlomma"); 
  map[wood.mapNum].card = 1;   
  //deleteObject("blomma");      
  gameStatus.push(putEquipmentToBag);
  notWaiting("e_blomma");
    },    
  cardImg : cardImages[cardImages.length-1],


  /*--------------------------------
KARTA
----------------------------------*/   

    x: 170,
    y: 170,
    z: [1, 1.3], hojd: .3,
    speedX: 0,
    speedY: 0,
    width: 60,
    hight: 60,
    

  /*--------------------------------
HIT
----------------------------------*/   


hitAction : function(){
  wait.push("e_blomma");
  moveOn = false;
  console.log("ÄggblommaHitAction");
    gameStatus.push(this.drawRuta);
    hitIndex = this.index;
    gameObj[0].placeMe = true;
    t6Ruta.reset();
    
    console.log("Ägget är löst!"); 
    setnohit(hitIndex);  
},

putInBag: function(){
  bagger.push(new Sak());
  var post = bagger[bagger.length-1];
  post.namn = "Äggblomma";
  post.img = sakImg[sakImg.length-1];
  post.dragFunc = function(){ 
    if (wood.mapNR == 4)
     console.log(getIndexGameObj("edgeNorr"));
    gameObj[1].open = true;
    wood.norr = 1;
    edgeN.open = true;
    paparazzi = true;
    console.log(gameObj[getIndexGameObj("edgeNorr")]);
    console.log(gameObj[getIndexGameObj("msHitArea")]);

    };
    post.do = function() {};
    post.undo = function() {};
    //deleteObject("blomma");  
}

});





//kartbit[13].func=loadSIS;

hitObjects++;
notWaiting("Äggblomma");



console.log("blomma Klar");



