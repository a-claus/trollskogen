
var kartObj = [];
var gameObj = [];//monster, figur, sak, monument, plant

/* 

MENYOBJEKT

*/


var bag = new Image(); 
bag.src="img/bag.png";	

var gameOver = new Image(); 
gameOver.src="img/gameover1.png";

	

 var b_hart = new Image(); 
 b_hart.src="img/b_hart.png";

 var h_hart = new Image(); 
 h_hart.src="img/h_hart.png";

 var r_hart = new Image(); 
 r_hart.src="img/r_hart.png";

  var fightDraw = new Image(); 
fightDraw.src = "img/f_draw.png";

 var fightWin = new Image(); 
 fightWin.src="img/f_win.png";



  
 var fightLose = new Image(); 
 fightLose.src = "img/f_lose.png";



 var ICONmagi = new Image(); 
ICONmagi.src = "img/magi.png";        			

var ICONiq = new Image(); 
ICONiq.src = "img/iq.png";

var ICONstyrka = new Image(); 
ICONstyrka.src = "img/styrka.png";



 kartObj.push({
 	miljo: false, figur : false, info: true, namn: "meny", floor: 0,
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

//var imgCard = new Image(); 
//imgCard.src="img/monsterCard.png" ;
//var imgTroll = new Image(); 


