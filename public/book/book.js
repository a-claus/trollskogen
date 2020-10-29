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
		val: "Min rustning är lite rostig.",
		vald: "Menar du verkligen att jag ska gå."
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
		val: "...",
		vald: ""
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

getFile(figurer[0].url);

// Börja att ladda upp

	// Bilder
	// Text??
	

// Rita upp yta, två knappar Nästa, starta spel.

// Välja figur

// Starta spel

//---------------------------------------------
//
// Svamp
//
//---------------------------------------------
/*
ger slumpvis bonuc. IQ, styrka, extra hjärta och gift

*/
let bookImages = [];
let bookImg = [new Image()];

//bookImg.push(new Image());
 console.log(bookImg.length,"1")
      //  bookImages[bookImages.length - 1].addEventListener("load", notWaiting.bind(namn))
 bookImg[bookImg.length - 1].scr = "./img/hart.png";
laddabilder("ett", "./img/book/1.png", "book")
laddabilder("tva", "./img/book/2.png", "book")
laddabilder("tre", "./img/book/3.png", "book")
laddabilder("fyra", "./img/book/4.png", "book")
laddabilder("fem", "./img/book/5.png", "book")
laddabilder("sex", "./img/book/6.png", "book")
laddabilder("sju", "./img/book/7.png", "book")
laddabilder("atta", "./img/book/8.png", "book")
laddabilder("nio", "./img/book/9.png", "book")
laddabilder("prins", "./img/book/prins.png", "book")
laddabilder("kammarjungfru", "./img/book/kammarjungfru.png", "book")
laddabilder("narr", "./img/book/narr.png", "book")
laddabilder("riddare", "./img/book/riddare.png", "book")
 var im = new Image(); 
 im.src="./img/book/1.png";
 let bookPICsource = ["1.png", "2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
 let fig = ["prins.png",  "narr.png", "riddare.png","kammarjungfru.png"];
 let bubbla = new Image();
  bubbla.src = "./img/bubbla.png";
  let s_bg = new Image();
  s_bg.src = "./img/bg.png";
 

 
class Book{
	constructor(){
		this.pic = new Image();
		
		this.page=-1;
		this.end = 10;
		this.figurer = 4;
		this.loadPic("book");
		this.figCount = -1	;

	}

	loadPic(alt){
		if (alt == "book"){
			this.page++;
			this.pic.src = "./img/book/" + bookPICsource[this.page];
			
		}
		else {
			this.figCount++;
			if (this.figCount == 4) this.figCount = 0;
			this.pic.src = "./img/book/" + fig[this.figCount];	
		}
	}
 	read(){
 	//bläddra bok
	 
	 	ctx.drawImage(s_bg	, 0, 0, 400, 400);
	 	console.log(book);
	 	console.log(this.pic);
	 	ctx.drawImage(book.pic, 0, 0, 400, 400);
	 	
	 	
	 	if (this.figCount > -1){	 		//figurer[this.figCount].magi

				ctx.drawImage(bubbla, 0, 0, 400, 150);

				let t = figurer[this.figCount].storytext.val;
				if (onArea == true)  t = figurer[this.figCount].storytext.vald;

				textWriter2(t, 200, 50, {color:"black", lineLength:40, align:"center"})
				drawMagi(20,120,figurer[this.figCount].e.magi);
				drawIQ(20,70,figurer[this.figCount].e.iq);
				drawStyrka(20, 20, figurer[this.figCount].e.styrka);
				drawJump(15, 220, figurer[this.figCount].e.skutt);
			//	ctx.drawImage(arrow, 300, 350, 80,40);
				drawHarta(20,170,figurer[this.figCount].e.liv);

				button.push(new Button(start, 300, 350, "",80,40, "arrow", {onArea: true, oa_func: book.read })); 

				
				
	 	}
	 	
	 		if (this.page < 8){
				this.loadPic("book");
				
			} else {
				
				
				this.loadPic("val");
			}


		}

	
}
let book = new Book();

console.log("book klar")
