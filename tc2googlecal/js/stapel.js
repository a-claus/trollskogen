

var nollY=275;
var enhetSteg=10;
var hoppY;

const D=0;
const N=1;
const KL=2;
const L=3;
const A=4;

class Diagram{


}


class Stats{

    constructor (name){ 
        this.name=name;
        this.antal=0;
        this.tid=0;
        this.toppAntal=0;
        this.toppTid=0;
      }

    add(tid,minus){
        var numb = tid.substring(0,2);
        numb=Number(numb);
            if(isNaN(numb) === true){numb=5;}

        if (minus!="avboka"){
            this.antal++; 
            this.tid+=numb; 
             
        }else{
        this.antal--; 
        this.tid=this.tid-numb;    
    }    
}


    toppCheck(){
        var tiptopAntal=0;
        var tiptopTid=0;
        var loop=this.length;
        for (var x=0;x<loop;x++){
            if (tiptopAntal<this.antal) tiptopAntal=this.antal;
            if (tiptopTid<this.tid) tiptopTid=this.tid;}
            return(tiptopAntal, tiptopTid);
}
}

class StatsDatum extends Stats {
  constructor(name) {
    super(name);
    this.datum=new Date(name);
   
  }
}

class StatsAktivitet extends Stats {
  constructor(name) {
    super(name);
  }
}

var statsDatum=[];
var statsAktivitet=[];


var filLength=inputFil.length;
var timeFilEnd=inputFil[filLength-5];


function countStats(timeEnd=timeFilEnd, dagar=30){
   
    var varv=filLength/5;
    var inteNyRubrik;
    var z="a";
    var zz;
    var akt;
    var xx;
        for (var x=1; x<varv;x++){ 
            inteNyRubrik=0;
            xx=x*5; 
            akt=x*5+A;
       
            for (var y=0;y<statsDatum.length;y++) {
                zz=new Date(inputFil[xx])
                if (statsDatum[y].datum.getTime() === zz.getTime())
                    {
                    statsDatum[y].add(inputFil[xx+3],inputFil[xx+4]);
                    inteNyRubrik=1;
                    break;  
                    }
           } 
            
            if (inteNyRubrik==0)
            {
                statsDatum.push(new StatsDatum(inputFil[xx])); 
                statsDatum[y].add(inputFil[xx+3],inputFil[xx+4]);
            }
        
                inteNyRubrik=0;
                z=inputFil[akt];
    for (var y=0;y<statsAktivitet.length; y++) {
          

            if (statsAktivitet[y].name == z)
             {
                statsAktivitet[y].add(inputFil[xx+L],inputFil[xx+A]);
                inteNyRubrik=1;
                break;  
             }
    } 
            if (inteNyRubrik==0)
            {
                statsAktivitet.push(new StatsAktivitet(z)); 
                statsAktivitet[y].add(inputFil[xx+L],inputFil[xx+A]);
            }
            statsAktivitet.toppCheck();
            console.log(statsAktivitet[y].tid+" "+ statsAktivitet[y].antal+" "+ statsAktivitet[y].name+" "+akt);
         //Math.max(statsAktivitet[y].antal)
       
        }
}

function drawStaplar2(timeEnd=timeFilEnd, dagar=30){
var y = new Date(timeEnd);
var x = new Date(timeEnd);
var z;
x.setDate(x.getDate()-30);


    for (x;x<=y; x.setDate(x.getDate() + 1)){
           
           
        for (z=0;z<statsDatum.length;z++){
            
                 if (x.getTime()===statsDatum[z].datum.getTime())
            
                {    //index
                    canvasYta[0].draw(x.getDate(),statsDatum[z].antal);
                    canvasYta[1].draw(x.getDate(),statsDatum[z].tid/15);
            }
        }
                 
    }
       

                    canvasYta[0].skrivRubrik("Antal som tagit friskvård");
                    canvasYta[1].skrivRubrik("Tid som man tagit friskvård");
      

}

function drawStaplar(){
    var z;
    var SAL=statsAktivitet.length;
    var xvid=Math.floor(760/SAL-30);

     for (z=0;z<SAL;z++){
                    canvasYta[2].draw(z,statsAktivitet[z].antal, xvid);
                 //   canvasYta[1].draw(x.getDate(),statsDatum[z].tid/15);     
    }


}
    



class CanvasYta{

  //const map1 = array1.map(x => x * 2);


    constructor (id){  
        this.antalStaplar;
        this.topp=0;
        this.id=id;
        this.nolly=275;
        this.enhetSteg=10;
        this.hoppY;
        this.stapelSpace;
        this.antalStaplar;
        this.skala;


                    }
    
     makeCanvas(){
        var x;
        var name="CanvasArea"+this.id;
        this.canvas = document.createElement("canvas");

        this.canvas.id=name//"CanvasArea";
        this.canvas.width=800;
        this.canvas.height=300;
        this.canvas.style.border="1px solid #c3c3c3";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(this.canvas);

        var canvasArea=document.getElementById(name);
        this.diagram = canvasArea.getContext("2d");
        
      
        for (x=0;x<20;x++){
            this.diagram.strokeStyle="#eeeeee";
            
               
              if (x%5==0){this.diagram.strokeStyle="#bbbbbb";}
                if (x==0){this.diagram.strokeStyle="#000000";}
                hoppY=nollY-x*enhetSteg;
                this.diagram.beginPath();
                this.diagram.moveTo(10,hoppY);
                this.diagram.lineTo(790,hoppY);
                this.diagram.stroke();
                }

    }




    skrivNummer(vilketDiagram){
                switch(vilketDiagram) {
                        case "aktivitet":
                                    //console.log(statsAktivitet[y].tid+" "+ statsAktivitet[y].antal+" "+ statsAktivitet[y].name+" "+akt);


                            this.antalStaplar=statsAktivitet.length;
                            this.stapelSpace=Math.floor(760/this.antalStaplar);
                            console.log(this.antalStaplar+" "+ this.stapelSpace);
                            for(a=0;a<this.antalStaplar;a++){
                                   this.diagram.fillText(statsAktivitet[a].name,(this.stapelSpace*a+this.stapelSpace/2),290);}
    
                
                            break;

                        default: 
                                this.stapelSpace=Math.floor(760/31);
                                    for(a=1;a<32;a++){
                                    // console.log(space);
                                    this.diagram.fillText(a,(space*a),290);}
    
                }


    }



     draw(plats,kvantitet, xvid=15){
/*-------------------------------------------------------------------------   
Vi behöver veta var i x-led. bredd på kolumn och hur lång den ska vara.
Samt skala borde nog vara här.

-----------------------------------------------------------------------------*/     
        var y_from=275;
        var position=plats*5+15*plats;
        var space=Math.floor(760/31);
        var yStart=y_from-10*kvantitet;
       
        
       this.diagram.fillStyle = "#bb00bb";   
        
     
         //this.diagram.fillRect(20,20,15,20);
           this.diagram.fillRect(this.stapelSpace*(plats),yStart,xvid,10*kvantitet);//x,y, xbredd, höjd
      // this.diagram.fillRect(space*(plats+1),yStart,15,10*kvantitet);
       

    }

    skrivRubrik(text)
    {
       
            this.diagram.fillStyle="black";
            this.diagram.font="18px Trebuchet MS"
            this.diagram.fillText(text,10,30);

    }

      
    


}
    /*
    

    }*/
    
	
/*
Stapel.draw=function(){ //metodhs

		//var canvas = document.getElementById("canvas1");
		//var diagram = canvas.getContext("2d");
		//diagram.fillStyle = "222222";
		diagram.fillRect(this.x_pos,this.y_pos,this.width,this.height);

	}*/
/*
function MakeCanvas(id){

var canvas = document.getElementById("canvasDatum");
var diagram = canvas.getContext("2d");
diagram.fillStyle="#F1211F";
diagram.font = "10px Arial";

var nollY=275;
var enhetSteg=10;
var hoppY;
var x;
hoppY=nollY-x*enhetSteg;*/
