//Access-Control-Allow-Origin: *

function getAntalNoderPass(array){
	//[{namn:"a", value :3},{namn:"a", value : 11
	let  exportArray = [];
	
	for (i=0; i < array.length; i++){
		
		exportArray.push({namn: array[i].pass,value:array[i].resa.length});

	}
	console.log(exportArray);
 	return exportArray;
}
