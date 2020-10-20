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
		vald: "Okej, jag gör det om jag får din hand."
	}
});
figurer.push({
	id: "Narren",
	url: "./js/player/narr.js",
	status: "alive",
	storytext:{
		val: "Det finns troll i skogen och jag tror inte de dör av skratt för mina apkonster.",
		vald: "Men min söta, det är inte alls humoristiskt att mata monstrena inne i skogen med spinkiga mig."
	}
});
figurer.push({
	id: "Riddaren",
	url: "./js/player/riddaren.js",
	status: "alive",
	storytext:{
		val: "Min rustning är lite rostig.",
		vald: "Menar du verkligen att jag ska gå."
	}
});
figurer.push({
	id: "Kammarjungfrun",
	url: "./js/player/kammarjungfrun.js",
	status: "alive",
	storytext:{
		val: "...",
		vald: ""
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
 let fig = ["prins.png", "kammarjungfru.png", "narr.png", "riddare.png"];
 let bubbla = new Image();
  bubbla.src = "./img/bubbla.png";

 
class Book{
	constructor(){
		this.pic = new Image();
		
		this.page=0;
		this.end = 10;
		this.figurer = 4;
		this.loadPic("book");
		this.figCount = 0;

	}

	loadPic(alt){
		if (alt == "book"){
			this.pic.src = "./img/book/" + bookPICsource[this.page];
			this.page++;
		}
		else {
			this.pic.src = "./img/book/" + fig[this.figCount];
			this.figCount++;
			if (this.figCount == 4) this.figCount = 0;
		}
	}
 	read(){
 	//bläddra bok
	 	console.log(this.page, this.figCount);
	 		ctx.drawImage(this.pic, 0, 0, 400, 400);
	 		if (this.page < 9){
				this.loadPic("book");
			} else {
				drawMagi(20,120,2);
				drawIQ(20,70,2);
				drawStyrka(20,20,3);
				drawHarta(20,170,4);
				textWriter(figurer[this.figCount].storytext.val, 250, 30, 40, "black", "center");
				//ctx.drawImage(bubbla, 40, 30);
				this.loadPic("val");
			}


		}

	
}
let book = new Book();
