//mall
//---------------------------------------------
card.push(
    {
        id:"",
        namn: "Trollmor",
        bild: "trollmor.png",
        styrka: 3,
        info:"En arom av svett slår mot dig när du traskar in i gläntan. Det är visst trollmor håller på att laga Tomtegtyta. Om hon blir störd eller bara vill improvisera och piffa upp anrättningen med dig som ingridiens är osäkert, men angriper dig.",
        pris: "vätte",
    
        color: "yellow",
        //vad:"skatt", 
        //color:"yellow"
    });
//--------------------------------------------------

class Card {
    constructor(){
        this.name;
        this.text;

        this.typ; //monster
        this.styrka;
        this.height;

        this.color=color;
        this.speedX = 0;
        this.speedY = 0;
         
   // this.kartaX=4;
    //this.kartaY=-1;
        this.newRuta=0; 
        this.liv=3;
    }

    update(){
       // ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    make() {
        
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x<0) {this.x=400;  mapChange("vast");}
        if (this.x>400) {this.x=0;  mapChange("ost");}
        if (this.y<0) {this.y=400;  mapChange("norr");}
        if (this.y>400) {this.y=0;  mapChange("syd"); }      
    }    


    changeKartbit(){
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x<0) {this.x=400; wood.mapNum++;}
        if (this.x>400) {this.x=0; wood.mapNum++;}
        if (this.y<0) {this.y=400; wood.mapNum++;}
        if (this.y>400) {this.y=0; wood.mapNum++;}  

    }
}



/*
module.exports = Figur;

const User = require('./figur.js');

// Instantiate User:
let figur = new Figur();
*/