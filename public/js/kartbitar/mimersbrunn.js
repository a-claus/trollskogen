
//---------------------------------------------
//
// MIMERS BRUNN
//
//---------------------------------------------


wait.push("MBbild", "MBbild2");
mapImages.push(new Image());
mapImages[mapImages.length-1].addEventListener('load', notWaiting.bind("MBbild") );
mapImages[mapImages.length-1].src = "./img/brunn.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].addEventListener('load', notWaiting.bind("MBbild2") );
cardImages[cardImages.length-1].src="./img/mimer.png";




kartObj.push({
    namn: "Mim Br",
    img: mapImages[mapImages.length-1],
    miljo: true, figur : false, info: false, floor:1,
	draw: function(){
        ctx.drawImage(this.img, 150, 150,100 ,100);//, 100, 100
    }
});

gameObj.push({
    vem: "Mimers Brunn",
    namn: "Mimers Brunn",
    vad: "objekt",
    floor: 1,
    miljo: false,
    figur: true,
    info: false,
    x:150, y: 150,
    z:[1, 2], hojd:1,
    golv: 1,
    hitAreaX: 160, hitAreaY: 160 , haWidth: 80 , haHight: 80,

    speedY: 0, speedX: 0,
    width: 100, hight: 100,
    //img: mapImages[mapImages.length-1],
    cardImg: cardImages[cardImages.length-1],
    text: "",
    button: [],
    count: 0,
    draw: function(){
    	//var ctx = myGameArea.context;
		//ctx.drawImage(this.img, 150, 150); 
		},
    move: function(){return false;},
    hitAction: function(){
        //waitFor("MM");
        wait.push("MM");
        moveOn = false;
        //movepause = true;
        //gameObj[0].placeMe = true;
        console.log("runMM!");
        gameStatus.push(this.drawRuta);
        hitIndex = this.index;
    },
    drawRuta: function(){
        
        //var ij = gameObj[0].findIndex(function(index) { return index["upgrades"] ==="Mimers Brunn";} );
        const harInte = gameObj[0].upgrade.findIndex(upg => upg === "Mimers Brunn");
        const index = getIndexGameObj("Mimers Brunn");
        console.log ("MB" + index);

        //let img = this.cardImg;
    if (harInte == -1){
        
        gameObj[index].button = [{text: "Jag dricker!", action: notWaiting}];
        gameObj[index].text = "Dricker du ur min brunn får du lite av min visdom.";
        gameObj[0].iq++; 
        gameObj[0].upgrade.push("Mimers Brunn");
        
        }
    else{
        gameObj[index].button =  [{text: "Jasså...", action: notWaiting}];
        gameObj[index].text = "Det här är inget man bara dricker för man är törstig.";
        gameObj[0].placeMe = true;
        }
        gameObj[0].placeMe = true;
        drawRuta("Mimers Brunn", gameObj[index].text, gameObj[index].cardImg, gameObj[index].button);



    }


})

hitObjects++;


   notWaiting("MB"); 
   console.log("KLAR MIM"); 
