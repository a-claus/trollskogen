
//---------------------------------------------
//
// RAVIN
//
//---------------------------------------------

mapImages.push(new Image());
mapImages[mapImages.length-1].src = "./img/stup1.png";




coAct = "ravin";
//console.log(kartObj);
//kartObj.shift();
//console.log(kartObj);
kartObj.splice(3,0,
 {
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
				let polygonMap = [152,123,156,124,159,131,174,151,187,162,198,183,205,185,219,177,224,184,222,193,233,207,250,221,258,220,274,229,285,235,297,235,299,241,313,246,313,244,301,239,299,233,285,232,258,218,250,218,225,193,227,183,220,173,205,180,195,171,191,159,177,149,163,133,160,122];
				
				drawPolygon(polygonMap, "rgb(146,42,42)");
		},
  
});

gameObj.push({
	vem: "ravin", x:200, y:1,
	doIt: function(){
		var ctx = myGameArea.context;
		let px = gameObj[0].x + gameObj[0].width;
		let py = gameObj[0].y + gameObj[0].hight;
		let c = ctx.getImageData(gameObj[0].x, gameObj[0].y, 1, 1).data;
		let cString1 = c[0]+" "+c[1]+" "+c[2]; 
		c = ctx.getImageData(px, py, 1, 1).data;
    	let cString2 = c[0]+" "+c[1]+" "+c[2]; 
    	
		//var ind = gameObj.findIndex(obj => obj.vem == objectSpecial);
		if (cString1 != "255 255 255" && cString2 != "255 255 255"){
			gameObj[0].jump.golv = 0;
			moveS = true;
			moveV = true;
		}
		else
		{
			objectSpecial = "none";	
			console.log("mmm" + objectSpecial);
			gameObj[0].skada++;
			gameObj[0].jump.golv = 1;
			
			moveS = false;
			moveV = false;
		}
	}

});


notWaiting("ravin"); 