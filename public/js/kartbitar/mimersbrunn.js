
//---------------------------------------------
//
// MIMERS BRUNN
//
//---------------------------------------------

console.log("MB");
mapImages.push(new Image());
mapImages[mapImages.length-1].src = "./img/brunn.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/mimer.png";

gameObj.push({
    vem: "Mimers Brunn",
    namn: "Mimers Brunn",
    vad: "objekt",
    floor: 1,
    miljo: false,
    figur: true,
    info: false,
    x:150, y: 150,
    speedY: 0, speedX: 0,
    width: 100, hight: 100,
    img: mapImages[mapImages.length-1],
    cardImg: cardImages[cardImages.length-1],
    draw: function(){
    	var ctx = myGameArea.context;
		ctx.drawImage(this.img, 150, 150); 
		},
    move: function(){},
    hitAction: function(){
        console.log("runMM");
        //var ij = gameObj[0].findIndex(function(index) { return index["upgrades"] ==="Mimers Brunn";} );
        const index = gameObj[0].upgrade.findIndex(upg => upg === "Mimers Brunn");
        let rubrik = "Mimer";
        let img = this.cardImg;
    if (index == -1){
        
        let button = {text: "Jag dricker!", action: moveStart};
        let text = "Dricker du ur min brunn får du lite av min visdom.";
        gameObj[0].iq++; 
        gameObj[0].upgrade.push("Mimers Brunn");
        }
    else{
        
        let button =  [{text: "Jasså...", action: moveStart}];
        let text = "Det här är inget man bara dricker för man är törstig.";
        gameObj[0].placeMe = true;;
        }
        gameObj[0].placeMe = true;
        drawRuta(this.rubrik, this.text, this.img, this.button);

    
    
    //unsetKartbitsaction();


    }


})

 
hitObjects++;
gameStatus.push(moveStart);