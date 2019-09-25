//---------------------------------------------
//
// EFFEKTER 
//
//---------------------------------------------

/*

	Ska kunna skicka en sak till de olika rutorna. Plus och negativt ska synas en stund. 

*/
//sakImg.push(new Image());
//sakImg[sakImg.length-1].src = "./img/wand.png";
ef_img=[];
ef_img.push(new Image());
ef_img[0].src = "./img/ef_sol1.png";
ef_img.push(new Image());
ef_img[1].src = "./img/ef_sol2.png";
ef_img.push(new Image());
ef_img[2].src = "./img/ef_sol3.png";
ef_img.push(new Image());
ef_img[3].src = "./img/ef_moln1.png";
ef_img.push(new Image());
ef_img[4].src = "./img/ef_moln2.png";
ef_img.push(new Image());
ef_img[5].src = "./img/ef_moln3.png";
ef_img.push(new Image());
ef_img[6].src = "./img/hart.png";
var rip = new Image();
rip.src = "./img/rip.png";

let EF_x; let EF_y; let EF_xTill; let EF_yTill; let EF_raknare=0; let EF_stegX; let EF_stegY;

function putEquipmentToBag(){
	//först ska bild synas i mitten. Störe. Det ska stråla bakom den. Sen åker den ner i väskan.

	//Frågan hur många olika strålbilder behövs för att göra bakgrundseffekt. Tar det senare.
	console.log("effekt");
	gameObj.push(
 {
	 
    namn: "effekt",
    vad: "effekt",
    miljo: false, effekt: true, info: false,
    floor:1,
    placeMe: false,
    
    x: 200 - sakImg[sakImg.length - 1].width/ 2,
    y: 200 - sakImg[sakImg.length - 1].height / 2,
    width: sakImg[sakImg.length - 1].width,
    height: sakImg[sakImg.length - 1].height,
    xTill: 40,
    yTill: 350,
    stegX:  -1,
    stegY: 1,
   	raknare: 0,
   	move: function(){
   		
   		this.raknare += 2;
		if (this.raknare > 50){ 
			this.x += this.stegX; 
			this.y += this.stegY;}
		if (this.x < this.xTill) {
				
					gameObj[hitIndex].putInBag();
					this. effekt = false; 
					if (bagAktiv == -1) {
						bagAktiv = 0;
						bagger[bagAktiv].do();
						hitArea.push(
							{x: 35, 
							y: 360, 
							width: 80, 
							height: 35, 
							action:function(){changeThing();}}
						);}
					//gameObj.splice(hitIndex, 1);
				
		
						//dragHitArea.push({x:35, y:360, width:80, height:35, action:function() {bagger[bagAktiv].dragFunc()}});
					
				}
   	},
   	draw: function(){
   		//console.log("eff draw" + this.x);
       ctx.drawImage(sakImg[sakImg.length - 1], this.x, this.y, this.width, this.height);
	}
});
	return false;
}

var effekt = {}; 
var bege;
function effekten(vart, plunus){
	effekt = {
   		raknare: 0,
   		x: 10,
   		y: 10,
   		vart: "iq",
   		plunus: "add",
   		add:0,
   		draw: function(){
   			    
   			effekt.raknare++;
			if (effekt.raknare == 1){ 
				if (effekt.vart == "iq") {effekt.x = 252; effekt.y=9;}
				if (effekt.vart == "magi") {effekt.x = 330; effekt.y=340;}
				if (effekt.vart == "styrka") {effekt.x = 25; effekt.y=9;}
				if (effekt.vart == "harts") {effekt.x = 340;/*300 troligen startpunkt*/ 
					effekt.y=10; effekt.raknare=1000;}

				if (effekt.plunus == "add") {effekt.add=0} else {effekt.add=2}
				bege = ctx.getImageData(effekt.x, effekt.y, 50, 50);
				//ctx.globalAlpha = 0.75;
				console.log("xyz");
			}
			if (effekt.raknare < 100) {
   				if (effekt.raknare%3 != 0) {ctx.putImageData(bege, effekt.x, effekt.y); ctx.drawImage(ef_img[0 + effekt.add], effekt.x, effekt.y,50,50);}
      			if (effekt.raknare%3 != 1) {ctx.putImageData(bege, effekt.x, effekt.y); ctx.drawImage(ef_img[1+ effekt.add], effekt.x, effekt.y, 50,50);}
			   	if (effekt.raknare%3 != 2) {ctx.putImageData(bege, effekt.x, effekt.y); ctx.drawImage(ef_img[2 + effekt.add], effekt.x, effekt.y,50,50);}
				return true;
			} 

			if (effekt.raknare == 100) {
				ctx.putImageData(bege, effekt.x, effekt.y); 
				if (vart == "iq") drawIQ(0,250,10); 
				if (vart == "magi") drawMagi(0,330,350); 
				if (vart == "styrka") drawStyrka(0,25,10); 
				ctx.globalAlpha = 1; 
				return false;
			}
			console.log(gameObj[0].liv);
			if (effekt.raknare > 999) {
				temp = effekt.raknare%20; 
				console.log(temp);
				ctx.putImageData(bege, effekt.x, effekt.y); 
				ctx.drawImage(ef_img[6], effekt.x, effekt.y, temp * 2, temp * 2);
				if (effekt.raknare==1100){ 
					drawHarts(0, effekt.x - 40, effekt.y);
					return false;

				}
				return true;
			}
		}};
		effekt.plunus=plunus;
		effekt.vart = vart;
	gameStatus.push(effekt.draw);


	
	return false;
}

function deadOrAlive(plunus){
	gameObj[0].skada += plunus;
	
	if (gameObj[0].skada < 0) {gameObj[0].skada == 0;}
	drawHarts(0, 300, 10);
	if (gameObj[0].skada >= gameObj[0].liv){
		
		gameStatus.push(death);
		return false;
	}
	return true;

}

function aliveOrNot(figur){
	if (gameObj[figur].liv <= gameObj[figur].skada){ return false;}
	else {return true;}
}

function death(){
	
	console.log(gameStatus);
	var rubrik = "GAME OVER";
	var text = gameObj[0].vem + " kunde blivit en hjälte. Nu förmulnad i Trollskogen. Ska vi sända bud till slottet och meddela misslyckandet, så de kan skicka en ny dumdristig äventyrare in i Trollskogen för att rädda kung Sebastian?";
	var buttons = [ {text: "Spela", action: startaIgen}, {text:" Sluta", action: end}];
	movepause = true;
	drawRuta(rubrik, text, rip, buttons);
	//gameStatus.push(drawRuta);
	
return false;
}

