var NSVO=["norr","soder","vast","ost"];
var inverseNSVO=["soder","norr","ost","vast"];

function kontrollKarta2()
{
	var heraki=0; var slump; var i; var j;
	maze=[];
	var ruta=4; var newRuta;
	
	
	besokta=[{ruta:ruta,heraki:heraki, status:"otestad"}];
	//var getNewRoads=addRoads(vilkenRuta, besokta);

 	//maze[0]={ruta:4 heraki:heraki};
 	var rutaAntal=0;
 	//road=[]; //ruta, vaderstrack, heraki
 	//notRoad=[];
 	var there = [{heraki:0, ruta:4, status:"otestad"}]; var here = new Object(); 
 	var raknadeRutor = []; var besokt;


while (rutaAntal<81){
	raknare=0;
	raknadeRutor=[];
	for (i=0; i<besokta.length;i++){
		if (besokta[i].status=="otestad") raknadeRutor.push(i);
	}
	
	if (raknadeRutor.length == 0){
		console.log("ajajja" + besokta.length); break;

	}
	
	slump=Math.floor(Math.random()*raknadeRutor.length);

	here=besokta[raknadeRutor[slump]];

	

	for(i=0; i<4; i++){
		//kolla vilka rutor man kommer till
		console.log("here"+here.ruta);
		there=vilkenruta(here, i); //nummer och heraki
		console.log("here" + here.ruta+"there" + there.ruta);
		
		if (there.ruta>-1 && there.ruta<81){
			console.log("inne");

			besokt=-1;
			for (j=0; j<besokta.length; j++){
				if (besokta[j].ruta==there.ruta){
					there.heraki=besokta[j].heraki;
					besokt=j;
					break;
				}
			}

			//if (there.heraki>here.heraki) {heraki++; there.heraki=heraki;}
			
			if (besokt>-1){		

				if (there.heraki<here.heraki){ 
						for (k=0;k<besokta.length;k++)
						{
							if (besokta[k].heraki>there.heraki) besokta[k].heraki=there.heraki; here.heraki=there.heraki;
						}

					}
				
					
				}
			}

			if (besokt==-1) {
				console.log("rutA"+rutaAntal);

				rutaAntal++;
				if (here.heraki<there.heraki){heraki++;} 
				besokta.push({ruta:there.ruta, heraki:heraki, status: "otestad"});

			}	

			
		}	
		
		
	}
	besokta[raknadeRutor[slump]].status="testad";



}	


function vilkenruta(there, vaderstrack){
	 
switch (vaderstrack){
            case 0:
                there.ruta=there.ruta-9;
            break;
            case 1:
                
                there.ruta=there.ruta+9;
                
            break;
            case 2:
               there.ruta=there.ruta-1;
            break;
            case 3:
               there.ruta=there.ruta+1;
            break;
        }
        
        if (there.ruta<0 || there.ruta>80) {return {ruta:there.ruta, heraki:there.heraki, status:"out"};}
       
        var vd=inverseNSVO[vaderstrack];
       
        if (map[there.ruta][vd]==0) {there.heraki++;}
        
        return {ruta:there.ruta, heraki:there.heraki, status:"otestad"};
    }    