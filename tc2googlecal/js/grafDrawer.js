
//"datum", "namn", "klocka", "langd", "aktivitet"
const DATUM=0;
const NAMN=1;
const KLOCKA=2;
const LANGD=3;
const AKTIVITET=4;

const nollY=285;
var enhetSteg=10; //tveksamt
var hoppY; //tveksamt
var space=Math.floor(760/31);
var intervallEnd=new Date();
var intervallStart=new Date();
intervallEnd.setDate(intervallStart.getDate() - 1);
intervallStart.setDate(intervallStart.getDate() - 31);
var iS=intervallStart.toLocaleDateString();


var firstInFil=0;
var lastInFil=0;
 //$("#div1").load("./json/flexpass200708.js");
//var fs = require('fs');
//var files = fs.readdirSync('./json/');
//console.log(files);
//var jsonData = JSON.parse("./json/flexpass200708.json");

//$.getJSON("./json/flexpass200708.json", function (result){
	//console.log(jsonData);
//})
/*
$.getJSON("./json/flexpass200708.js")
	.done (function( json ) {
  		console.log( "JSON Data: " ,json);
  	})	
  	.fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
	})
 

	//,data,success(data,status,xhr))
*/

/* Nytt diagram

 - Hur stor ska den vara
 - Hur många staplar
 - Ytterlinjer
 
 - obj x namn: y: namn xy:[[namn, 50],[]], diagramtyp: "stapel" sortering: 
 */





class Diagram{
	/*----------------------------------------------------
			1. Räkna ut statestiken
			2. Skapa canvas
			3. Räkna ut storlek diagram
			4. Rita diagram 
	-------------------------------------------------------*/
	constructor(rubrik ="Hej", x_namn="abcdefggrtgtr", y_namn="def", array=[{namn:"a", value :3},{namn:"a", value : 11},{namn:"k", value : 23},{namn:"b", value : 12}], diagramTyp = "stapel"){
	

			
			this.rubrik= rubrik;
			this.x_namn= x_namn;
			this.y_namn = y_namn;
			this.array= array;
			this.diagramtyp= diagramTyp;
			this.L = this.array.length;
			this.setConst();


 //skapa canvas
       		this.canvas = document.createElement("canvas");
       		this.canvas.id = this.name;//"CanvasArea";
        	this.canvas.width = this.w;
        	this.canvas.height = this.h;
        	this.canvas.style.border="1px solid #c3c3c3";
        	var body = document.getElementsByTagName("body")[0];
        	body.appendChild(this.canvas);
        	this.canvasArea=document.getElementById(this.name); //canvasArea var inte "this" tidigare
        	this.graf = this.canvasArea.getContext("2d");
        	
        	this.rita();

        	//his.updateGraf();
}
	setConst(){
		this.marg = [30,30,30,30]; // vänster, upp ner, höger
		this.h = 400;
		this.w = 1200;// (this.canvas.width; 810
		this.origo = {x: this.marg[0], y: this.h-this.marg[3]};
		this.bredd = this.w - this.marg[0] - this.marg[3];
		this.hojd = this.h - this.marg[1] - this.marg[2];
		this.center = {x: this.bredd/2 + this.marg[0], y: this.hojd/2 + this.marg[1]};
	}

	rita(){
		this.L = this.array.length;
		this.graf.clearRect(0,0,this.canvas.width, this.canvas.height);
		this.ritaUtsida();
		this.topp = this.toppCheck();
		this.lineValue=this.calcLines();
		
		this.skala = (this.canvas.height-75)/this.topp;
		this.skaladStats = this.array.map(x => /*Math.round*/(x.value*this.skala));
		console.log(this.skaladStats);
		this.lineValue=this.calcLines(); 
		
		this.drawStaplar();
		this.drawLines();
		this.drawXInfo();
		this.drawMedel();
		
	}

	

	drawMedel(){
			let summa = 0;
			for (i=0; i<this.L; i++){
				summa += this.array[i].value;
			}

			var medel = this.origo.y - summa * this.skala/this.L;

			let snitt = Math.round(10*summa/this.L);
			snitt = snitt/10;
				this.graf.strokeStyle= "red";
			 	this.graf.beginPath();
                this.graf.moveTo(this.origo.x, medel);
                this.graf.lineTo(this.bredd + this.origo.x, medel);
                
                this.graf.stroke();
               
                this.drawSkalInfo(snitt, medel, "red", "right"); //Math.round(summa/this.L)

                

                this.graf.beginPath();
                this.graf.moveTo(this.origo.x, this.origo.y - this.topp * this.skala);
                this.graf.lineTo(this.bredd + this.origo.x, this.origo.y - this.topp * this.skala);
                
                this.graf.stroke();
                this.drawSkalInfo(this.topp, this.origo.y - this.topp * this.skala, "red", "right"); 


	}

	drawXInfo(x, namn, i){
		//först ska vi räkna ut bredden
		var yLinjering=this.origo.y+10;
		var bredd= (this.bredd + this.L * 15)/this.L; //vi startar på 15 slutar på 790
		
		

		this.graf.fillStyle="#123456";
		this.graf.globalAlpha=1;
		this.graf.font="12px Trebuchet MS";
		this.textAlign="center";

			 this.graf.fillText(namn, x, yLinjering + 10 * (i % 3)); //i*bredd+bredd/2
		
		//for (var i=0; i<this.L; i++){
		//	 this.graf.fillText(this.array[i].namn, x, yLinjering + 12 * (i % 10)); //i*bredd+bredd/2

		//}
	}


	drawStaplar(){
		//först ska vi räkna ut bredden
		var yStart=0;
		var bredd= this.bredd/this.L; //vi startar på 10 slutar på 790
	

		
		for (var x=0; x<this.L; x++){
				this.graf.fillStyle="#123456";
				this.graf.globalAlpha = .5;
				yStart = this.origo.y-this.skaladStats[x];
				this.graf.fillRect(x*bredd+this.origo.x, yStart, bredd-5, this.skaladStats[x]);
				this.drawXInfo(x * bredd + this.origo.x + (bredd-5) / 2, this.array[x].namn, x);

		}


	}

	drawSkalInfo(val, y, color="black", pos="left"){
			let posX;
			if (pos== "left") {posX=this.origo.x-3;  this.graf.textAlign="right";}
			if (pos== "right") {posX=this.origo.x+3 +this.bredd; this.graf.textAlign="left";}
			//vertical-align: middle;
			this.graf.textBaseline="middle"
		 	this.graf.fillStyle=color;
            this.graf.font="10px Trebuchet MS";
           
            this.graf.fillText(val,posX, y);

	}

	  ritaUtsida()
    {
    	let w = this.canvas.width/2
       		let h = this.canvas.height-20;
       	

    		this.graf.save();
    		 this.graf.font="12px Trebuchet MS"
 this.graf.translate(12, h/2);
 this.graf.rotate(-Math.PI/2);
 this.graf.textAlign = "center";
 this.graf.fillText(this.y_namn, 20, 0);
 this.graf.restore();
       		

            this.graf.fillStyle="black";
           this.graf.textAlign = "center";
            this.graf.font="18px Trebuchet MS"
            this.graf.fillText(this.rubrik,w,20);
            this.graf.font="12px Trebuchet MS"
            this.graf.fillText(this.x_namn, this.center.x, this.origo.y+22);
             this.graf.beginPath();
                this.graf.moveTo(this.origo.x, this.marg[1]);
                this.graf.lineTo(this.origo.x, this.origo.y);
                this.graf.lineTo(this.origo.x+  this.bredd, this.origo.y);

                this.graf.stroke();


    }

	drawLines(){
	
		var val=this.lineValue;
		
	
		var hoppy;
		var x=0;
		var fetLinje;
		if (this.vadSkaRaknas=="tid"){fetLinje=4;}else{fetLinje=5;}
		//this.skaladStats = this.stats.map(x => /*Math.round*/(x.value*this.skala));
		 //for (var x=0;x<=antal;x++)
		 while(x*this.lineValue*this.skala<this.hojd)
		 {
            hoppY = this.origo.y - x * this.lineValue * this.skala;
            
              //if (x % fetLinje == 0){
              	this.graf.strokeStyle="#bbbbbb";
              	this.drawSkalInfo(x*this.lineValue, hoppY);
              //}
               this.graf.strokeStyle = "#dddddd";
               this.graf.beginPath();
               this.graf.moveTo(this.origo.x, hoppY);
               this.graf.lineTo(this.origo.x + this.bredd, hoppY);
               this.graf.stroke();
               x++;
              }


	}

	calcLines(){
		
			var timeCutter=[];
			var i=0;
		
			let cutter=[1,2,5,10,20,50,100,200,500, 1000, 2000, 5000];

			this.topp % cutter 
			
				
				while (this.topp/cutter[i] > 10){
					i++;
					if (cutter.length==i) cutter.push(cutter[i-1] + 1000);
				}
			
		
		
		
		return (cutter[i]);
	}

	toppCheck(){
        var tiptop=0;
      	

      	
        for (var i=0; i<this.L; i++){
        	
            if (tiptop < this.array[i].value) {tiptop=this.array[i].value;
            
            }}
          
            return(tiptop);
	}

}


function findIntervall(){
	var ifl=inputFil.length;
	var i=0;
	do
	{i=i+5;
		
	}
	while (new Date(inputFil[i])< intervallStart && i<ifl); 
	firstInFil=i;
	
	do
	{i=i+5; 
	}
	while (new Date(inputFil[i])<= intervallEnd && i<ifl); 
	lastInFil=i-5;


}





function countStats(name){

   
	var statArray=[];
	
    var i=firstInFil;
    var finger;

    var a_l=-1;
    var d = new Date(intervallStart);
    
   	var filDate = new Date(inputFil[i]);
   	console.log("IE:"+intervallEnd);
    for (d; d <= intervallEnd; d.setDate(d.getDate() + 1)){
    	console.log("da"+d+" IE:"+intervallEnd);
    		
    	switch (name){
    		case "datum_tid":
    			statArray.push({stapelRub:d.getDate(),value:0});
    			a_l++;
    				//while(d > new Date(inputFil[i])){console.log("i:"+i+d); i=i+5;}
					while(d >= filDate){
					
						statArray[a_l].value=statArray[a_l].value+calcMin(inputFil[i+LANGD],inputFil[i+AKTIVITET]);
						i=i+5;
						filDate = new Date(inputFil[i]);
					
					}
			break;
//-----------------------------------------------------------------------------------------------------------

			case "datum_antal":
				statArray.push({stapelRub:d.getDate(),value:0});
				a_l++;
				while(d >= filDate){
					if (inputFil[i+AKTIVITET]=="avboka"){statArray[a_l].value--;}else{statArray[a_l].value++;}
						i=i+5;
						filDate = new Date(inputFil[i]);
						
					}

			break;
//-----------------------------------------------------------------------------------------------------------
			case "aktivitet_antal":
				
				i=i+5;
				finger=statArray.findIndex(x=>x.stapelRub==inputFil[i+AKTIVITET]);
				
				if (finger==-1)
					{statArray.push({stapelRub:inputFil[i+AKTIVITET],value:1});}
				else
					{
						if (inputFil[i+AKTIVITET]!="avboka"){statArray[finger].value++;} else {statArray[finger].value--;}

					}
				

			break;
//---------------------------------------------------------------------			
			case "aktivitet_tid":
				
				i=i+5;
				if (i>=inputFil.length) break;
				finger=statArray.findIndex(x=>x.stapelRub==inputFil[i+AKTIVITET]);
				
				if (finger==-1){
					console.log("x:"+inputFil[i+LANGD]+ "i"+i);
						statArray.push(
						{stapelRub:inputFil[i+AKTIVITET], value: calcMin(inputFil[i+LANGD], inputFil[i+AKTIVITET])}
						);}
				else
					{statArray[finger].value += calcMin(inputFil[i+LANGD],inputFil[i+AKTIVITET]) ;}
				

			break;
//---------------------------------------------------------------------------------------------------
			case "dag_tid":
                                
                                i=i+5;
                                if (i>=inputFil.length) break;
                                var dagg = new Date(inputFil[i+DATUM]);
                                var n = vardag(dagg.getDay());
                                
                                finger=statArray.findIndex(x=>x.stapelRub==n);
                              
                                
                                if (finger==-1){
                                			for (var a=0;a<7;a++){
                                                statArray.push({stapelRub: vardag(a), value: 0});

                        }finger=statArray.findIndex(x=>x.stapelRub==n);}
                                
                                        statArray[finger].value += calcMin(inputFil[i+LANGD],inputFil[i+AKTIVITET]);
                                

                        break;
//------------------------------------------------------------------------------------------------------------------
			case "dag_antal":
                                i=i+5;
                                if (i>=inputFil.length) break;
                                var dagg = new Date(inputFil[i+DATUM]);
                                var n = vardag(dagg.getDay());
                                
                                finger=statArray.findIndex(x=>x.stapelRub==n);
                              
                                
                                if (finger==-1){
                                			for (var a=0;a<7;a++){
                                                statArray.push({stapelRub: vardag(a), value: 0});}
                                              	 finger=statArray.findIndex(x=>x.stapelRub==n);}
                                	if (inputFil[i+AKTIVITET]!="avboka"){statArray[finger].value++;} else {statArray[finger].value--;}

                                

                        break;
//---------------------------------------------------------------------------------------------------------------------------------

			
		}
	}
	return statArray;
    	  		
}

function vardag(nummer){

	var d=["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
	return d[nummer];
}

function hittaIndex(arrayName,seek) { 
   // return arrayName. === seek;
}

function calcMin(tid,minus){
		var numb = tid.substring(0,2);
		var min;
		
		
        numb=Number(numb);
            if(isNaN(numb) === true){numb=5;}
			if (minus=="avboka"){min=-numb;}else{min=numb;}    
    	return min;
}

function setDateFunction() {
    var s = new Date(document.getElementById("startDate").value);
    var e = new Date(document.getElementById("endDate").value);
    var idag = new Date();

    if (s<e && e<idag){
    		console.log("setDateF");
    		intervallStart= new Date(s); intervallEnd= new Date(e); 
    		findIntervall();
    		for (var x=0;x<canvasYta.length;x++){
    		canvasYta[x].updateGraf();}
    	}
    else
    	{	
    		remDatesInput();
    	
    	}
}

function remDatesInput(){
		document.getElementById("startDate").value=intervallStart.toLocaleDateString();
    	document.getElementById("endDate").value=intervallEnd.toLocaleDateString();

}