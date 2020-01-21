	let foto = []; let paparazzi = true;
	foto[1] = new Image();
	foto[2] = new Image();

function kamera(floor){
	var ctx = myGameArea.context;
	foto[floor].src = myGameArea.foto();
}

function drawFoto(floor){
	ctx.drawImage(foto[floor], 0, 0);
}

function studio(){
console.log("studio");

	for (let floor = 1; floor <= wood.floors; floor++){
	for (let i = 0; i < kartObj.length; i++){
		
		if (kartObj[i].miljo == true && kartObj[i].floor == floor){
			kartObj[i].draw();

		}
	}
	kamera(floor);
	


}

}


class ObstacleKub { //extends Figur
    constructor(x, y, z, hight, width){
    	this.namn ="ObstacleKub";
        this.hitAreaX = x;
        this.hitAreaY = y;
        this.z = z;
		this.haWidth = width;
        this.haHight = hight;
      //  this.floor = Math.abs(this.z);
    }
    move(){return false;}
    draw(){}
    hitAction(){}
}

function makeBro(vs){
	if (vs="NS"){
		gameObj.push(new ObstacleKub(150,170,[2, 2.3],60,20)); //vast
		gameObj.push(new ObstacleKub(170,230,[2, 2.3],60,20)); //ost
		gameObj.push(new ObstacleKub(170,0,[2, 2],60,400)); //road
	}
	if (vs="VO"){
		gameObj.push(new ObstacleKub(150,170,[2, 2.3],20,60)); //vast
		gameObj.push(new ObstacleKub(230,170,[2, 2.3],20,60,)); //ost
		gameObj.push(new ObstacleKub(0,170,[2, 2],400,60)); // road
	}

}

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

function drawTrRuta(x, y, width, hight, z=1){
		var ctx = myGameArea.context;
		ctx.fillStyle = "brown";
		ctx.globalAlpha = 0.1 + z*.1;
		ctx.fillRect(x, y, width, hight);
		ctx.globalAlpha = 1;
	}


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
	namn: "EntreN", visible: true,
		
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		if (this.visible== true){
		var ctx = myGameArea.context;
		ctx.fillStyle = "white";
   		ctx.fillRect(170, 0, 60, 60);}
    }
}
let entreS = {
	namn: "EntreS", visible: true,
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		if (this.visible == true){
		var ctx = myGameArea.context;
	ctx.fillStyle = "white";
   	ctx.fillRect(170, 340, 60, 60);}
    }
}
let entreV = {
	namn: "EntreV", visible: true,
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		if (this.visible == true){
		var ctx = myGameArea.context;
	ctx.fillStyle = "white";
   	ctx.fillRect(0, 170, 60, 60);}}
}
let entreO = {
	namn: "EntreO", visible: true,
	miljo: true, figur : false, info: false, floor:1,
	draw: function(){
		if (this.visible == true){
		var ctx = myGameArea.context;
		   ctx.fillStyle = "white";
   			ctx.fillRect(340, 170, 60, 60);}
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
// var hojd = 1; dec 2019
/*
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
}*/	

let plan1 = {
	namn: "plan1", miljo: false, figur : true, info: false,
	draw: function(){},
	move: function(){return false;},
	hojd:0,
	x:0, y:0, width: 400, hight: 400, z: [.9, 1], hojd: .1,
	hitAction: function(){}
};


/* dec 2019

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
*/
//var hojd = 1;
/* dec 2019
let brokantO = {
	floor:2,  miljo: false, figur : true, info: false,
	vem: "brokantHitAreao",
	moving: false,
	draw: function(){},
	move: function(){},
	//ctx.fillRect(230, 170, 20, 60);
	x: 230, y: 170, z:[2, 2.3], 
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
*/
/* gammal dec19
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
*/
let edgeNorr={
	namn:"edgeNorr",
	
	draw: function(){},
	move: function (){return false;},
	  hitAreaX: 0, hitAreaY: 0, z: [0, 5.1],
	  speedX: 0, speedY: 0,
	  haWidth: 400, haHight: 20,
  hitAction : function(){
	  movepause = true;
	  gameStatus.push(nyruta);
	  hitIndex = this.index;
	   
  }
  };
  //--
  let edgeSoder =
   {
	  namn:"edgeSoder",
	  //x: 0, y: 300, z: 0,
	  hitAreaX: 0, hitAreaY: 380, z: [0, 5.2],
	  speedX: 0, speedY: 0,
	  
	   haWidth: 400, haHight: 20,
	  draw: function(){},
	  move: function (){return false;},
	  hitAction : function(){
	  movepause = true;
	  gameStatus.push(nyruta);
	  hitIndex = this.index;
	    }
  };
  let edgeVaster =
   {
	  namn:"edgeVaster",
	  hitAreaX: 0, hitAreaY: 0, z: [0, 5.3],
	  speedX: 0, speedY: 0,
	  haWidth: 20, haHight: 400,
	  draw: function(){},
	  move: function (){return false;},
	  hitAction : function(){
	  movepause = true;
	  gameStatus.push(nyruta);
	  hitIndex = this.index;
	}
  };
  let edgeOster =
   {
	  namn:"edgeOster",
	  hitAreaX: 380, hitAreaY: 0, z: [0, 5.4],
	  speedX: 0, speedY: 0,
	  haWidth: 20, haHight: 400, 
	  draw: function(){},
	  move: function (){return false;},
	  hitAction : function(){
	  movepause = true;
	  gameStatus.push(nyruta);
	  hitIndex = this.index;
	
	  }
  };
  let msHitArea =
   {
	  namn:"msHitArea",
	  hitAreaX: 50, hitAreaY: 50, z: [0, 5],
	  speedX: 0, speedY: 0,
	  haWidth: 300, haHight: 300,
	  koIndex: "NN",

	  draw: function(){},
	  move: function (){return false;},
	  hitAction : function(){                  
                   // let killern = kartObj.findIndex(function(obj) { return obj["namn"] === this.ms;});
                   // kartObj.splice(killern, 1);
                   kartObj[this.koIndex].visible = false;
					paparazzi = true;
					this.z = [-1, -1]; zeta = true; // istället för att radera objektet 
	  }
  };



let kvadrat = {
	
	miljo: true, figur : true, info: false, floor:1,
	draw: function(){
		var ctx = myGameArea.context;
		ctx.fillStyle = "grey";
   		ctx.fillRect(150, 150, 100, 100);
    },
    move:{}
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
		/*gameObj.push(brokantN);
		gameObj.push(brokantNfall);
		gameObj.push(brokantS);
		gameObj.push(brokantSfall);*/
		console.log("FBVO");
		makeBro("VO")
		
		//hitObjects++;
		//roadVertikal.floor=1;
		
		//tunnlar är alltid floor 1;
		//roadHorisontal.floor=2;
		//bro alltid floor 2;
	break;
	case "FyraBroNS": 
		console.log("FBNS");
		kartObj.push(roadHorisontal, tunnelV, tunnelO, roadVertikal, broVertikal,testRuta);
		makeBro("NS");
		/*gameObj.push(brokantV);
		gameObj.push(brokantVfall);
		gameObj.push(brokantO);
		gameObj.push(brokantOfall);*/
		
		//hitObjects++;
		//roadVertikal.floor=2;
		//tunnlar är alltid floor 1;
		//roadHorisontal.floor=1;
		//bro alltid floor 2;
	break;
	case "Hyllan": 
		console.log("Hylla");
		kartObj.push(glanta, entre, kvadrat);
		gameObj.push(new ObstacleKub(150, 150, [1, 1.3], 100, 100));
		//makeHylla();
	
	break;
	case "Svärdet i stenen":
		kartObj.push(glanta, entre, sis);
		ajaxer("./js/kartbitar/excalibur.js");
	break;
	case "Mimers Brunn":
		kartObj.push(glanta, entre, mb);
		ajaxer("./js/kartbitar/mimersbrunn.js");
	break;
	
	case "Start":

		//gameObj.push(plan1);
		ajaxer("./js/kartbitar/start.js"); break;
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
switch (wood.floors){
	default:
		gameObj.push(plan1);
}

//magisk stig
console.log("magic" + vaderstrack + wood[vaderstrack] );

	if (wood[vaderstrack]==0 || wood[vaderstrack]==99 ){
		
	switch(vaderstrack){
		case "norr": kartObj.push(entreN); gameObj.push(msHitArea); gameObj[gameObj.length - 1].ms = "entreN"; break;
		case "soder": kartObj.push(entreS); gameObj.push(msHitArea); gameObj[gameObj.length - 1].ms = "entreS"; break;
		case "vast": kartObj.push(entreV); gameObj.push(msHitArea); gameObj[gameObj.length - 1].ms = "entreV";break;
		case "ost": kartObj.push(entreO); gameObj.push(msHitArea); gameObj[gameObj.length - 1].ms = "entreO";break;
	}
		gameObj[gameObj.length - 1].koIndex = kartObj.length - 1; 

	// anar att ms kan plockas bort som egenskap
	}

console.log(kartObj);
console.log(gameObj);
}
function xbagMagi(vad){
	switch(vad){
		case "blomma": if(wood.mapNR==4) kartObj.push(entreN); break;
	}
	magStigNamn = -1;

}



