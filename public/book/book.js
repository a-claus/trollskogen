console.log("book laddas");

var figurImg = [];
figurImg.push(new Image());
figurImg[0].src="./img/prins.png";


figurer = [];
figurer.push({
	id: "Prinsen",
	url: "./js/player/prins.js",
	status: "alive",
	storytext:{
		val: "Jag är lite upptagen, min frimärksamling, är i oordning...",
		vald: "Okej, jag gör det om jag får din hand."},
	e: {
		liv: 3, skada: 2,
   		 styrka: 3, iq:1, magi: 0, magipower: 0, skutt:  1, aj_fall:-.25
	
	}
});
figurer.push({
	id: "Narren",
	url: "./js/player/narr.js",
	status: "alive",
	storytext:{
		val: "Det finns troll i skogen och jag tror inte de dör av skratt för mina apkonster.",
		vald: "Men min söta, det är inte alls humoristiskt att mata monstrena inne i skogen med spinkiga mig."
	},
	e: {liv: 2,
    skada: -.5,
    styrka: 1,
    iq:3,
    magi: 2,// 0,
    magipower: 1,
	skutt: 2, hardLandning:.5
	}
});


figurer.push({
	id: "Riddaren",
	url: "./js/player/riddaren.js",
	status: "alive",
	storytext:{
		val: "Miiiin rustning är rostig.",
		vald: "... och trollen kommer säkert buckla till min hjälm."
	},
	e: {liv: 4,
    skada: 0,
    styrka: 4,
    iq:0,
    magi: 0,// 0,
    magipower: 0,
	skutt: 0, hardLandning:.5
	}
});

figurer.push({
	id: "Kammarjungfrun",	
	url: "./js/player/kammarjungfrun.js",
	status: "alive",
	storytext:{
		val: "Men Prinsessa, vem ska hjälpa dig att ta på dig din nattsärk",
		vald: "Jaha du ska sova med klänningen på."
	},
	e: {liv: 3,
    skada: 0,
    styrka: 2,
    iq:5,
    magi: 1,// 0,
    magipower: 1,
	skutt: 1, hardLandning:.5
	}
});


// getFile(figurer[0].url);

console.log(figurer[0].url);
// Börja att ladda upp



let bookImages = [];
let bookImg = [new Image()];

//bookImg.push(new Image());
 

 var im = new Image(); 
 im.src="./img/book/1.png";
 let bookPICsource = ["1.png", "2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
 let figPICsource = ["prins.png", "narr.png", "riddare.png","kammarjungfru.png"];
 let bubbla = new Image();
  bubbla.src = "./img/bubbla.png";
  let s_bg = new Image();
  s_bg.src = "./img/bg.png";
 
console.log("book2");
 
class Book{
	constructor(){
		this.pics = []; 
		this.page = -1;
		this.loadPics();
		this.onArea = false;	
	}
	loadPics(){
		this.end= bookPICsource.length; 
		this.figs = figPICsource.length;
		for(i = 0; i < this.end; i++){
			this.pics.push(new Image());
			this.pics[this.pics.length-1].src = "./img/book/" + bookPICsource[i];
		}
		
		for(i=0; i < this.figs; i++){
			this.pics.push(new Image());
			this.pics[this.pics.length-1].src = "./img/book/" + figPICsource[i];
		}
		this.L = this.pics.length;
	}

 	read(){
 		console.log("Reading")
 		this.page++;
 		if (this.page == this.L) this.page = this.L - this.figs;
 		this.onArea = false;
 		this.draw();
 		return false;
 	}

	draw(){
		console.log("1",this.onArea);
	 	ctx.drawImage(s_bg, 0, 0, 400, 400);
	 	ctx.drawImage(this.pics[this.page], 0, 0, 400, 400);
	 	
	 	
	 	if (this.page >= (this.end)){	
	 		console.log("2",this.onArea);
	 		this.figCount = this.page - this.end; 
			ctx.drawImage(bubbla, 0, 0, 400, 150);

			let t = figurer[this.figCount].storytext.val;
			if (this.onArea == true)  {
				t = figurer[this.figCount].storytext.vald;
			}

			console.log(t);
			textWriter2(t, 200, 50, {color:"black", lineLength:40, align:"center"})
			drawMagi(20,120,figurer[this.figCount].e.magi);
			drawIQ(20,70,figurer[this.figCount].e.iq);
			drawStyrka(20, 20, figurer[this.figCount].e.styrka);
			drawJump(15, 220, figurer[this.figCount].e.skutt);
			drawHarta(20,170,figurer[this.figCount].e.liv);
			button.push(new Button(getFigur, 300, 350, "", 80, 40, "arrow", {onArea: true}));
		}
	}
	
}
function getFigur(){
		console.log("ladda figur", book.page);
		//ladda figur
		let val = book.figCount;
		if (val > 1) val = 0;

		console.log( val );	
		loadFile(figurer[val].url, figurer[val].id);
		//nu när fiifur inte skapad, får alternativ hamna på de två som existerat
		//starta spel


	}


let book = new Book();

console.log("book klar")
