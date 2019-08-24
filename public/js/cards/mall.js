/*---Namn------
Namn
----------------*/

/*----nedladdning-----
bild på karta / sprites 
bild i poppupp
typ av action (strid, val, slå)
premisser
vinst
moveschema
----------------*/
mall{
	name: mall,
	pics:[mall.png],
	cardPic:mall.png,
	typ: //(strid, val, slå)
	move: function (){},
	diceText: "",
	T6:[4,7],
    T6text:["Hejdå", "Den här staven kan säkert hjälpa dig"],
    T6actions:[flyttarSig, getWand]
        
}
diceStatus="start";

/*
var cardNR = card.findIndex(zz => zz.namn=="Alven");


var alven = new Image(); 
alven.src="img/alven.png";
var alvSprite = new Image(); 
alvSprite.src="img/alvsprite.png";

//card[cardNR].func=loadAlven;
card[cardNR].img=alvSprite;

