

let bg = {
	namn: "bg", miljo: true, figur : false, info: false, floor:1,
	draw: function(){
	var ctx = myGameArea.context;
	ctx.fillStyle = "green";
   	ctx.fillRect(0, 0, 400, 400);
    }
}



let glanta = {
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
		ctx.beginPath();
    	ctx.arc(200, 200, 150, 0, 2*Math.PI);
    	ctx.fillStyle = 'white';
    	ctx.fill();}
}

let edgeN = {namn: "edge", miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
		ctx.fillStyle = "rgb(203,195,151)";
	   ctx.fillRect(0, 0, 400, 20);}}
let edgeS = {miljo: true, figur : false, info: false, floor:1,
		draw: function(){
			var ctx = myGameArea.context;
			ctx.fillStyle = "rgb(203,195,151)";
		   ctx.fillRect(0, 380, 400, 20);}}
let edgeV = {miljo: true, figur : false, info: false, floor: 1,
			draw: function(){
				var ctx = myGameArea.context;
			ctx.fillStyle = "rgb(203,195,151)";
			   ctx.fillRect(0, 0, 20, 400);}}
let edgeO = {miljo: true, figur : false, info: false, floor: 1,
				draw: function(){
					var ctx = myGameArea.context;
				ctx.fillStyle = "rgb(203,195,151)";
				   ctx.fillRect(380, 0, 20, 400);}}

let testRuta = {
	namn: "test",
		
	miljo: false, figur : false, info: true, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
	ctx.fillStyle = "red";
	ctx.globalAlpha = 0.2;
	//mittruta 170,170 230,230
	//norr x170 y 150 60, 20
   	ctx.fillRect(170, 150, 60, 20);
   	//soder
   	ctx.fillRect(170, 230, 60, 20);
   	//ost 150, 170, 20 60
   	ctx.fillRect(150, 170, 20, 60);
   	//vast
   	ctx.fillRect(230, 170, 20, 60);
   	ctx.globalAlpha = 1;

    }
}	
let entre = {
	namn: "Entre",
		
	miljo: true, figur : false, info: false, floor:1,
	
	draw: function(){
		var ctx = myGameArea.context;
		//console.log(wood.norr + wood.soder + wood.vast + wood.ost);
		ctx.fillStyle = "white";
		if (wood.norr == 1) ctx.fillRect(170, 0, 60, 60);
		if (wood.soder == 1) ctx.fillRect(170, 340, 60, 60);
		if (wood.vast == 1) ctx.fillRect(0, 170, 60, 60);
		if (wood.ost == 1) ctx.fillRect(340, 170, 60, 60);
    }
}

let entreN = {
	namn: "EntreN",
		
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
		ctx.fillStyle = "white";
   		ctx.fillRect(170, 0, 60, 60);
    }
}
let entreS = {
	namn: "EntreS",
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
	ctx.fillStyle = "white";
   	ctx.fillRect(170, 340, 60, 60);
    }
}
let entreV = {
	namn: "EntreV",
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
	ctx.fillStyle = "white";
   	ctx.fillRect(0, 170, 60, 60);}
}
let entreO = {
	namn: "EntreO",
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
		   ctx.fillStyle = "white";
   			ctx.fillRect(340, 170, 60, 60);
    }
}


let roadN = {
	miljo: true, figur : false, info: false, floor:1,
    draw : function (){   
		var ctx = myGameArea.context;
        ctx.fillStyle = "white";
        ctx.fillRect(170, 0, 60, 60);
    }
}
let roadS = {
	miljo: true, figur : false, info: false, floor:1,
    draw : function (){
		var ctx = myGameArea.context;
        ctx.fillStyle = "white";
       ctx.fillRect(170, 200, 60, 200);
	}}
let roadO = { 
	miljo: true, figur : false, info: false, floor:1,
    draw : function (){
		var ctx = myGameArea.context;
	ctx.fillRect(200, 170, 200, 60);
}}
let roadV = {
	miljo: true, figur : false, info: false, floor:1,
    draw : function (){
		var ctx = myGameArea.context;
            ctx.fillStyle = "white";
        ctx.fillRect(0, 170, 200, 60);
	}}
let roadVertikal = {
	miljo: true, figur : false, info: false,
	floor:1,
    draw : function (){

            ctx.fillStyle = "white";
        ctx.fillRect(170, 0, 60, 400);
	}}
let roadHorisontal = {
	miljo: true, figur : false, info: false, 
	floor:1,
    draw : function (){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 170, 400, 60);
	}}
	
let tunnelN = {
	miljo: true, figur : false, info: false, 
	floor:1,
    draw : function (){
        ctx.fillStyle = "rgb(120,120,120)";
       ctx.fillRect(170,150,60,50);
    }
}
let tunnelS = {
	miljo: true, figur : false, info: false, 
	floor:1,
    draw : function (){
        ctx.fillStyle = "rgb(120,120,120)";
        ctx.fillRect(170,200,60,50);
    }
}
let tunnelV = {
	miljo: true, figur : false, info: false, 
	floor:1,
    draw : function (){
        ctx.fillStyle = "rgb(120,120,120)";
        ctx.fillRect(150, 170, 50, 60);
      
    }
}
let tunnelO = {
	miljo: true, figur : false, info: false, 
	floor:1,
    draw : function (){
        ctx.fillStyle = "rgb(120,120,120)";
         ctx.fillRect(200,170,50,60);
    }
}
let broHorisontal= {

	floor:2, 	miljo: true, figur : false, info: false,
    draw : function (){
        ctx.drawImage(broVO,150,150);
    }
}
let broVertikal = {
	floor:2, miljo: true, figur : false, info: false, 
    draw : function (){
        ctx.drawImage(bro, 150, 150);
    }
}
var hojd = 1;
let brokantV = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitAreaV",
	moving: false,
	draw: function(){},
	move: function(){},
	x: 150, y: 170,
    speedX: 0, speedY: 0,
	width: 20, hight: 60,
	doIt: function(){
		
		var ind = gameObj.findIndex(obj => obj.vem == objectSpecial);
		if (mapArea(0, ind) == true){
			gameObj[0].jump.golv = 1.2;
		}
		else
		{
			console.log("doIt inactivate");
			gameObj[0].jump.golv = 1;
			objectSpecial = "none";	
		}
	},
	hitAction: function(){
		console.log("brokant" + gameObj[0].jump.hojd);
		//hojd=1.2;
		if (gameObj[0].jump.hojd >= 1.2){ //speedX
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = 1.2;
			objectSpecial = this.vem;
			console.log("OS" + objectSpecial);
			return 1;} 
		else {
			gameObj[0].speedX = 0; hojd = 1; return 0;}
    }
}	
let brokantVfall = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitFall",
	moving: false,
	draw: function(){},
	move: function(){},
	x: 140, y: 170,
    speedX: 0, speedY: 0,
	width: 10, hight: 60,
	hitAction: function(){
		console.log("brokantHitAreaFall" + gameObj[0].jump.hojd);
		//hojd=1.2;
			if ( gameObj[0].hojd > 0.75){
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = .0;
			objectSpecial = this.vem;
			console.log("OS" + objectSpecial);
			return 1;} 
		else {
			gameObj[0].skada++;
			gameObj[0].move();
			gameObj[0].jump.golv = 1;
			gameObj[0].floor = 1;
			return 1;
		}
    }
}	

//var hojd = 1;
let brokantO = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitAreao",
	moving: false,
	draw: function(){},
	move: function(){},
	//ctx.fillRect(230, 170, 20, 60);
	x: 230, y: 170,
    speedX: 0, speedY: 0,
	width: 20, hight: 60,
	doIt: function(){
		
		var ind = gameObj.findIndex(obj => obj.vem == objectSpecial);
		if (mapArea(0, ind) == true){
			gameObj[0].jump.golv = 1.2;
		}
		else
		{
			console.log("doIt inactivate");
			gameObj[0].jump.golv = 1;
			objectSpecial = "none";	
		}
	},
	hitAction: function(){
		console.log("brokant" + gameObj[0].jump.hojd);
		//hojd=1.2;
		if (gameObj[0].jump.hojd >= 1.2){ //speedX
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = 1.2;
			objectSpecial = this.vem;
			console.log("OS" + objectSpecial);
			return 1;} 
		else {
			gameObj[0].speedX = 0; hojd = 1; return 0;}
    }
}	
let brokantOfall = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitFall",
	moving: false,
	draw: function(){},
	move: function(){},
	//ctx.fillRect(230, 170, 20, 60);
	x: 250, y: 170,
    speedX: 0, speedY: 0,
	width: 10, hight: 60,
	hitAction: function(){
		console.log("brokantHitAreaFall" + gameObj[0].jump.hojd);
		//hojd=1.2;
			if ( gameObj[0].hojd > 0.75){
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = .0;
			//objectSpecial = this.vem;
			return 1;} 
		else {
			gameObj[0].skada++;
			gameObj[0].move();
			gameObj[0].jump.golv = 1;
			gameObj[0].floor = 1;
			return 1;
		}
    }
}

let brokantN = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitAreaN",
	moving: false,
	draw: function(){},
	move: function(){},
	// 	ctx.fillRect(150, 170, 20, 60);
	x: 170, y: 150,
    speedX: 0, speedY: 0,
	width: 60, hight: 20,
	doIt: function(){
		
		var ind = gameObj.findIndex(obj => obj.vem == objectSpecial);
		if (mapArea(0, ind) == true){
			gameObj[0].jump.golv = 1.2;
		}
		else
		{
			
			gameObj[0].jump.golv = 1;
			objectSpecial = "none";	
		}
	},
	hitAction: function(){
		
		//hojd=1.2;
		if (gameObj[0].jump.hojd >= 1.2){ //speedX
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = 1.2;
			objectSpecial = this.vem;
			
			return 1;} 
		else {
			gameObj[0].speedX = 0; hojd = 1; return 0;}
    }
}	
let brokantNfall = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitFallN",
	moving: false,
	draw: function(){},
	move: function(){},
	//ctx.fillRect(230, 170, 20, 60);
	x: 170, y: 140,
    speedX: 0, speedY: 0,
	width: 60, hight: 10,
	hitAction: function(){
	
		//hojd=1.2;
			if ( gameObj[0].hojd > 0.75){
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = .0;
			//objectSpecial = this.vem;
			return 1;} 
		else {
			gameObj[0].skada++;
			gameObj[0].move();
			gameObj[0].jump.golv = 1;
			gameObj[0].floor = 1;
			return 1;
		}
    }
}

let brokantS = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitAreaS",
	moving: false,
	draw: function(){},
	move: function(){},
	
	x: 170, y: 230,
    speedX: 0, speedY: 0,
	width: 60, hight: 20, 
	doIt: function(){
		
		var ind = gameObj.findIndex(obj => obj.vem == objectSpecial);
		if (mapArea(0, ind) == true){
			gameObj[0].jump.golv = 1.2;
		}
		else
		{
			gameObj[0].jump.golv = 1;
			objectSpecial = "none";	
		}
	},
	hitAction: function(){
		console.log("brokant" + gameObj[0].jump.hojd);
		//hojd=1.2;
		if (gameObj[0].jump.hojd >= 1.2){ //speedX
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = 1.2;
			objectSpecial = this.vem;
			return 1;} 
		else {
			gameObj[0].speedX = 0; hojd = 1; return 0;}
    }
}	
let brokantSfall = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitFallS",
	moving: false,
	draw: function(){},
	move: function(){},
	//ctx.fillRect(230, 170, 20, 60);
	x: 170, y: 250,
    speedX: 0, speedY: 0,
	width: 60, hight: 10,
	hitAction: function(){
		
		//hojd=1.2;
			if ( gameObj[0].hojd > 0.75){
			//gameObj[0].speedX = -1;
			gameObj[0].move();
			 gameObj[0].jump.golv = .0;
			//objectSpecial = this.vem;
			return 1;} 
		else {
			gameObj[0].skada++;
			gameObj[0].move();
			gameObj[0].jump.golv = 1;
			gameObj[0].floor = 1;
			return 1;
		}
    }
}	
let broHitAreaNS = {
	
	miljo: false, figur : false, info: true, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
	ctx.fillStyle = "red";
	ctx.globalAlpha = 0.2;
	//mittruta 170,170 230,230
	//norr x170 y 150 60, 20
   	ctx.fillRect(170, 150, 60, 10);
   	//soder
   	ctx.fillRect(170, 240, 60, 10);
   	//ost 150, 170, 20 60
   	ctx.fillRect(150, 170, 10, 60);
   	//vast
   	ctx.fillRect(240, 170, 10, 60);
   	ctx.globalAlpha = 1;
    }
}	

let ravin1 = {
	image: "img/stup1.png", floor:1, miljo: true, figur : false, info: false,
    draw: function (){
        ctx.drawImage(this.image, 0, 0, 400, 400);
    }
}
let mb = {
	
    draw : function (){
        ctx.drawImage(broVO,150,150);
    }
}
let mim = {
    draw : function (){
        ctx.drawImage(broVO,150,150);
    }
}
let sis = {
    draw : function (){
        ctx.drawImage(broVO,150,150);
    }
}



	
function setDraw(vaderstrack){
		kartObj.push(bg);
		console.log("wood:" + wood.namn + " woodmapnum" + wood.mapNR);

switch (wood.namn){
	case "Road":
		kartObj.push(glanta, entre);
	break;

	case "FyraBroVO": 
		kartObj.push(roadVertikal, tunnelN, tunnelS, roadHorisontal, broHorisontal,testRuta);
		gameObj.push(brokantN);
		gameObj.push(brokantNfall);
		gameObj.push(brokantS);
		gameObj.push(brokantSfall);
		
		hitObjects++;
		roadVertikal.floor=1;
		
		//tunnlar är alltid floor 1;
		roadHorisontal.floor=2;
		//bro alltid floor 2;
	break;
	case "FyraBroNS": 
		console.log("FBNS");
		kartObj.push(roadHorisontal, tunnelV, tunnelO, roadVertikal, broVertikal,testRuta);
		gameObj.push(brokantV);
		gameObj.push(brokantVfall);
		gameObj.push(brokantO);
		gameObj.push(brokantOfall);
		
		hitObjects++;
		roadVertikal.floor=2;
		//tunnlar är alltid floor 1;
		roadHorisontal.floor=1;
		//bro alltid floor 2;
	break;
	case "Svärdet i stenen":
		kartObj.push(glanta, entre, sis);
		ajaxer("./js/kartbitar/excalibur.js");
	break;
	case "Mimers Brunn":
		kartObj.push(glanta, entre, mb);
		ajaxer("./js/kartbitar/mimersbrunn.js");
	break;
	
	case "Start": ajaxer("./js/kartbitar/start.js"); break;
	case "Ravin1":
		ajaxer("./js/kartbitar/ravin.js");
		//kartObj.push(ravin1);
	break;

	default:
		console.log("kartbit existerar inte");
		kartObj.push(glanta);
	}
	//console.log("kant" + wood.edge);
switch (wood.edge){
	case "soder": kartObj.push(edgeS); break;
	case "cornerSV": kartObj.push(edgeS); kartObj.push(edgeV); break;
	case "cornerSO": kartObj.push(edgeS); kartObj.push(edgeO); break;
	case "norr" :kartObj.push(edgeN); break;
	case "cornerNO": kartObj.push(edgeN); kartObj.push(edgeO); break;
	case "cornerNV":  kartObj.push(edgeN); kartObj.push(edgeV);break;
	case "ost" : kartObj.push(edgeO); break;
	case "vast":  kartObj.push(edgeV); break;
}
//magisk stig
console.log(vaderstrack + wood[vaderstrack] );

	if (wood[vaderstrack]==0 || wood[vaderstrack]==99 ){
		
	switch(vaderstrack){
		case "norr": kartObj.push(entreN); magStigNamn = "EntreN"; break;
		case "soder": kartObj.push(entreS); magStigNamn = "EntreS"; break;
		case "vast": kartObj.push(entreV); magStigNamn = "EntreV"; break;
		case "ost":console.log("entreO"); kartObj.push(entreO); magStigNamn = "EntreO"; break;
	}
	//hitarea
	}

console.log(kartObj);
}
function xbagMagi(vad){
	switch(vad){
		case "blomma": if(wood.mapNR==4) kartObj.push(entreN); break;
	}
	magStigNamn = -1;

}


