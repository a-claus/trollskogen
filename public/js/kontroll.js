var NSVO=["norr","soder","vast","ost"];
var inverseNSVO=["soder","norr","ost","vast"];

/*--------------------------
1. Varit på alla kartrutor? 
----------------------------*/

function nyRuta(ruta, vaderstrack){
	
switch (vaderstrack){
            case 0:
                ruta=ruta-9;
            break;
            case 1:
                
                ruta=ruta+9;
                
            break;
            case 2:
               ruta=ruta-1;
            break;
            case 3:
               ruta=ruta+1;
            break;
        }
        
        return ruta;
    }    

function getVaderstreck(nummer){
	return [map[nummer].norr, map[nummer].soder, map[nummer].vast,map[nummer].ost];
}

function addRoads(vilkenRuta,besokta){
	var theroad=[];
	var thenotRoad=[];
	var array=[];
	for (var i=0;i<4;i++){
		 array.push(nyRuta(vilkenRuta,i));
	}
	ugh=[0,0,0,0];
	var temp;
	for (i=0; i<besokta.length;i++){
		temp=array.indexOf(besokta[i].vilkenRuta);
		if (temp>0)ugh[temp]=1;


	}
 	
 for (var i=0;i<4;i++){

if(ugh[i]==0){
 	if(map[vilkenRuta][NSVO[i]]==0 || map[vilkenRuta][NSVO[i]]==100) {
 		
 		 thenotRoad.push({roadType:map[vilkenRuta][NSVO[i]],ruta:vilkenRuta, vaderstrack:i});

 	}
 	else{
 		
 		theroad.push({roadType:map[vilkenRuta][NSVO[i]],ruta:vilkenRuta, vaderstrack:i});
 	}
 }	
 }
 
return {road:theroad, notRoad:thenotRoad};
}




function kontrollKarta(){
	var heraki=0;
	maze=[];
	maze.push(new Object);

	
	maze[heraki].road=[];
	maze[heraki].notRoad=[];
	//var binAt=[{ruta:4,heraki:0}];
	var getNewRoads;
	var tal;
	var kompass;
	
	var vilkenRuta=4;
	var besokta=[{ruta:vilkenRuta,heraki:heraki}];
	var newRoad;

	var x=0;

	


while (besokta.length<81){

  /*--------------------------
	Ta reda på vilka vägar den nya rutan har
----------------------------*/

	getNewRoads=addRoads(vilkenRuta, besokta);

 	maze[heraki].road=maze[heraki].road.concat(getNewRoads.road);
 	maze[heraki].notRoad=maze[heraki].notRoad.concat(getNewRoads.notRoad);
 	console.log("road"+maze[heraki].road.length+"notroad"+maze[heraki].notRoad.length);

  /*--------------------------
	1. Finns inte väg, så måste det letas fram en väg som är användbar
	2: Hitta lämplig väg till ny ruta eller lägre nivå
----------------------------*/

if (maze[heraki].road.length == 0){
	
	tal=Math.floor(Math.random()*maze[heraki].notRoad.length);
	if (maze[heraki].notRoad[tal]==0){
		var nyaRutan = nyRuta(maze[heraki].notRoad[tal].ruta, maze[heraki].notRoad[tal].vaderstrack);
		//har vi varit på rutan?
		if (isItNewRuta(besokta,nyaRutan)=="nyRuta"){ 
		//skapa väg 
		 map[maze[kategori].notRoad[tal].ruta][maze[kategori].notRoad[tal].vaderstrack]=1; 
		 getNewRoads=addRoads(vilkenRuta);
 		maze[heraki].road.concat(getNewRoads.road);
 		  maze[heraki].notRoad.splice(tal, 1);
		}
		//??? Fungerar det utan att kolla level, eller är det nödvändigt ???
	}
}
 /*--------------------------
	3. Val av väg
----------------------------*/

newRoad=0;
while (newRoad==0 && maze[heraki].road.length>0){
	
	tal=Math.floor(Math.random()*maze[heraki].road.length);
	
		console.log(tal+"/"+maze[heraki].road.length);
		console.log("No/"+maze[heraki].notRoad.length);
		console.log("nyaRutan"+maze[heraki].road[tal].ruta);
	nyaRutan = nyRuta(maze[heraki].road[tal].ruta, maze[heraki].road[tal].vaderstrack);
	
	var rutInf=isItNewRuta(besokta,nyaRutan);
	
	if (rutInf=="nyRuta"){
		newRoad=1;
		kompass=maze[heraki].road.vaderstrack;
		if (map[nyaRutan][inverseNSVO[kompass]]==0){
			rutInf="ny_ruta_ny_heraki";}
		else {
			rutInf="ny_ruta_samma_heraki";
		}
	}
	
	if (isNaN(rutInf)==false){ 
		//find heraki

		if (rutInf==heraki){
			rutInf="inte_ny_ruta_samma_heraki";
		}
		else{
			heraki=rutInf;
			rutInf="inte_ny_ruta_annan_heraki";
		}

	}
console.log("rutInf"+rutInf + x++);
	
switch (rutInf){
	case "ny_ruta_ny_heraki":
		//console.log("ny_ruta");
			heraki++;
			maze.push(new Object);
			vilkenRuta=nyaRutan;
			besokta.push({ruta:vilkenRuta,heraki:heraki});
			maze[heraki].position=vilkenRuta;
			console.log("heraki"+heraki);
	break;
	case "ny_ruta_samma_heraki":
	//console.log("ny_ruta_samma_heraki");
		vilkenRuta=nyaRutan;
		besokta.push({ruta:vilkenRuta,heraki:heraki});
		maze[heraki].position=vilkenRuta;
	break;
	case "inte_ny_ruta_annan_heraki":
		console.log("inte_ny_ruta_annan_heraki");
		var till=maze.length-1;
		for (i=till;i>heraki;i--){
			maze[heraki].road=maze[heraki].road.concat(maze[i].road);
			maze[heraki].notRoad=maze[heraki].notRoad.concat(maze[i].notRoad);
			maze[i]=[];
		}
		for (i=0;i<besokta.length;i++){
			if (besokta[i].heraki>heraki){
				besokta[i].heraki=heraki;
			} 
		}
	
	break;
	case "inte_ny_ruta_samma_heraki":
	//console.log("inte_ny_ruta_samma_heraki");
		//tabort vägen
		maze[heraki].road.splice(tal,1);
	break;
}
}
}
		
		

		


console.log(besokta);
}
	


		




function isItNewRuta(besokta,rutNumber){

	for (var i=0; i<besokta.length;i++){
		
		if (besokta[i].ruta==rutNumber) return besokta[i].heraki;
	}
 	return "nyRuta";
}

/*--------------------------
2. Går det att gå tillbaka?
----------------------------*/


	/*-Nej-------------------------
	2b. Skapa ny heraki.
	----------------------------*/

/*--------------------------
3. Lägg till nya vägar.
----------------------------*/	

/*--------------------------
4. Finns det vägar i herakin
----------------------------*/


	/* ja--------------------------
	4a. Välj en väg. 
	----------------------------*/


	


		/* Nej--------------------------
		4b1. Är den nya rutan av lägre heraki?
		----------------------------*/


			/*Ja--------------------------
			4b1-1.Döp om herakin till lägre herakin
			----------------------------*/


		/*Ja--------------------------
		4b2 Gå till 4
		----------------------------*/

	/* nej--------------------------
	4c. Skapa ny väg i herakin. Om inte 1.
	Gå till 4a.
	----------------------------*/



