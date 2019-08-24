
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
        gameStatus = "wait";
        //var ij = gameObj[0].findIndex(function(index) { return index["upgrades"] ==="Mimers Brunn";} );
        const index = gameObj[0].upgrade.findIndex(upg => upg === "Mimers Brunn");
    if (index == -1){
        figurRubrik = "Mimer";
        figurButton = "Jag dricker!";
        figurText = "Dricker du ur min brunn får du lite av min visdom.";
        figurImg = this.cardImg;
        figurAction = function(){gameObj[0].iq++; gameObj[0].upgrade.push("Mimers Brunn");  gameObj[0].placeMe = true; gameStatus = "move";};
        gameStatus="ruta";}
    else{
        figurRubrik = "Mimer";
        figurButton = "Jasså";
        figurText = "Det här är inget man bara dricker för man är törstig.";
        figurImg = this.cardImg;
        figurAction = function(){gameObj[0].placeMe = true; gameStatus = "move";};
        gameStatus="ruta";}

    
    
    //unsetKartbitsaction();


    }


})



 
hitObjects++;
ajaxQueue--;