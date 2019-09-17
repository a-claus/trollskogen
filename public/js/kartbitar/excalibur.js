
console.log("SIS");
mapImages.push(new Image());
mapImages[mapImages.length-1].src = "./img/swordofstone.png";
cardImages.push(new Image());
cardImages[cardImages.length-1].src="./img/excalibur.png";
sakImg.push(new Image());
sakImg[cardImages.length-1].src="./img/sword.png";

gameObj.push({

vem: "Svärdet i stenen",
    namn: "Svärdet i stenen",
    vad: "objekt",
    floor: 1,
    miljo: false,
    figur: true,
    info: false,
    x:150, y: 150,
    speedY: 0, speedX: 0,
    width: 100, hight: 100,
    index: gameObj.length,
    img: mapImages[mapImages.length-1],
    cardImg: cardImages[cardImages.length-1],
    text: "",
    draw: function(){
        var ctx = myGameArea.context;
        ctx.drawImage(this.img, 150, 150); 
        },
    move: function(){},
    hitAction: function(){
        gameObj[0].placeMe = true;
        console.log("SIS!");
        gameStatus.push(diceRuta);
        hitIndex = this.index;
        this.T6 = 0;
        movepause = true;
    },
    drawRuta: function(){
        var buttons = [];
        //var ij = gameObj[0].findIndex(function(index) { return index["upgrades"] ==="Mimers Brunn";} );
        const harInte = gameObj[0].upgrade.findIndex(upg => upg === "Svärdet i stenen");
        const index = getIndexGameObj("Svärdet i stenen");
        console.log ("SIS" + harInte);
        //let img = this.cardImg;
    if (harInte == -1){
        let T6res = [2, 1];

        if (this.T6 >= T6res[0]) {//get sword}
            this.text = "Du är värdig!";
            this.getSword();
            buttons = [{action: moveFunc, text: "Ta Excalibur"}]; 
            gameObj[0].upgrade.push("Svärdet i stenen");
        }
        else if (this.T6 >= T6res[1]) {
            this.text = "Du är icke värdig.";
            gameObj[0].upgrade.push("Svärdet i stenen");
            buttons = [{action: moveFunc, text: "Dumma sten"}]; 
        }
        else {
            buttons = [{text: "Jag är värdig!", action: diceRuta}];
            this.text= "Endast de värdiga kan dra Excalibur ur stenen.";
            buttons.push({action: moveFunc, text: "Behöver nog bli lite klokare"}); 
        }
    }
    else{
       this.text= "En gång olämplig, alltid lämplig.";
        buttons.push({action: moveFunc, text: "Dumma sten."}); 

     }   
       
       // gameObj[0].placeMe = true;
    drawDiceRuta({rubrik: "Svärdet i stenen", brod: gameObj[index].text}, gameObj[index].cardImg, buttons, this.T6);
    this.T6 = Math.floor(Math.random() * 6 + 1);
    console.log("T6:" + this.T6);
    return true;  


    },
    getSword: function(){
        gameStatus.push(putEquipmentToBag, move);

    },
    putInBag: function(){
        bagger.push(new Sak());
        var post = bagger[bagger.length-1];
        post.namn = "Excalibur";
        post.img = sakImg[sakImg.length-1];
        post.dragFunc = function(){};
        post.do = function() {gameObj[0].styrka += 2};
        post.undo = function() {{gameObj[0].styrka -= 2};
    }
}



});

hitObjects++;
gameStatus.push(moveStart);
