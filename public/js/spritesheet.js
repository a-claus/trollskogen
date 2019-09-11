
var kartObj = [];
var gameObj = [];//monster, figur, sak, monument, plant

/* 

MENYOBJEKT

*/


var bag = new Image(); 
bag.src="img/bag.png";	

	

 var b_hart = new Image(); 
 b_hart.src="img/b_hart.png";

 var h_hart = new Image(); 
 h_hart.src="img/h_hart.png";

 var r_hart = new Image(); 
 r_hart.src="img/r_hart.png";

 var ICONmagi = new Image(); 
ICONmagi.src = "img/magi.png";        			

var ICONiq = new Image(); 
ICONiq.src = "img/iq.png";

var ICONstyrka = new Image(); 
ICONstyrka.src = "img/styrka.png";



 kartObj.push({
 	miljo: false, figur : false, info: true,
 	draw: function(){
 		drawMeny();}
 });	



 // miljo

  var imgHart = new Image(); 
 imgHart.src="img/hart.png";


 var broVO = new Image(); 
broVO.src="img/broVO.png";

var bro = new Image(); 
	bro.src="img/bro.png";	   
/*
var excalibur = new Image(); 
excalibur.src="img/excalibur.png";

var swordofstone = new Image(); 
swordofstone.src="img/swordofstone.png";



var piska = new Image(); 
piska.src="img/piska.png";

var kudde = new Image(); 
kudde.src="img/kudde.png";

var sword = new Image(); 
sword.src="img/sword.png";

var klubba = new Image(); 
klubba.src="img/klubba.png";

var svamp = new Image(); 
svamp.src="img/svamp.png";



 var huginmumin = new Image(); 
 huginmumin.src="img/huginmumin.png";

var blabar = new Image(); 
 blabar.src="img/blabar.png";



 var rip = new Image(); 
 rip.src="img/rip.png";
 */

var imgTarning = new Image(); 
imgTarning.src="img/tarning.png" ;

var imgVS = new Image(); 
imgVS.src="img/vs.png" ;

var rutaBG = new Image(); 
rutaBG.src="img/combat_bg.png";

var combatBG = new Image(); 
combatBG.src="img/combat1.png";


var knapp = new Image(); 
knapp.src = "img/knapp.png";




var spriteTarning =
{ 
T:[[0,0,160,160],[160,0,160,160],[320,0,160,160],[480,0,160,160],[640,0,160,160],[800,0,160,160],[0,160,160,160],
[160,160,160,160],[320,160,160,160],[480,160,160,160], [640,160,160,160],[800,160,160,160]] 	
}

var imgCard = new Image(); 
imgCard.src="img/monsterCard.png" ;
var imgTroll = new Image(); 
//imgTroll.src="img/trollMor.png" ;
/*
function drawCard(monster){
	ctxI = myGameArea.context;

	switch (monster){
        case "troll":
                    ctxI.drawImage(imgTroll, 0,0,250,250, 15,0,220,250);
                     ctxI.drawImage(imgCard, 0,0,300,526, 0,0,250,500);
                     ctxI.font = "14px Verdana";
                     ctxI.textAlign="center";
					ctxI.fillText("Trollmor",125,184);
					ctxI.textAlign="left";
                     ctxI.font = "10px Arial";
					ctxI.fillText("En arom av svett, unken trasa slår mot",30,250);
					ctxI.fillText("dig när du traskar in i gläntan. Trollmor " ,30,260);
					ctxI.fillText("håller på att laga Tomtegryta. Hon tycks " ,30,270);
					ctxI.fillText("inte ha något emot att improvisera och " ,30,280);
					ctxI.fillText("piffa upp anrättningen med dig. ",30,290);
 ctxI.drawImage(imgVS, 90,320,60,60);
                    break;

        }

}*/


//var spriteTarning =