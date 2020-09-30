
const input = document.querySelector('input[type="file"]') 
input.addEventListener('change', function (e){
  //  console.log(input.files);
   // console.log(input.files.length);
let i =0;
 for (i=0; i < input.files.length; i++){
    let reader = new FileReader();
    reader.onload = function() {
   
      
       let array =[]; let j = 0; let skrap =[];  let passnr=[];
       let passen = [];
       let text = ""; 
      // console.log(reader.result);
       //console.log(file[i]);
       text = reader.result;
       //console.log(text);
       text.replace(/(\r\n|\r|\n)/g, '\n');
       text = text.replace(/,/g, '.');
       
       //console.log(text);
        const lines = text.split("\n").map(function(line){
        line = line.replace(/\s\s+/g, ' ');  
       // console.log(line);   
        let kolla = cleaner(line);
        console.log(line);
        if (kolla == "skrap") {
          skrap.push(line); 
        }
        else if (kolla == "pass") {
        passnr.push(line);
        let part = line.split(" ");
        //console.log(part);
        passen.push({pass: part[1], datum: part[3], resa:[]});


      }
      else if (kolla == "antal"){
       // console.log ("aaaa", line); 
        // console.log ("aaa", ); 
          let r = passen[passen.length-1].resa;
          r[r.length-1].antal=line.slice(1, 2);


      }
        else if (kolla == "antal2"){
          console.log("rvåsiffrigt antal resenärer!!!");

      }
       else {
      //  console.log(line);
        let arr = line.split(" ");
    //   console.log(arr);
        if (arr.length > 5){
         
        arr = stada_nod(arr);
      //  console.log(arr);
        if (isNaN( arr.nod ) == false ) {
          array.push(arr);
          passen[passen.length-1].resa.push(arr);}
        }
      }   

      })
     
      
        let filnamn = passen[0].datum;
        
       // console.log(passen);
        document.getElementById("download_link").download = "flexpass" + filnamn + ".json";


        var linkar = document.createElement("A"); 
        document.getElementById("downloads").appendChild(linkar); 
        linkar.innerHTML = " "+filnamn + " ";   
        linkar.id = filnamn; 
        linkar.download =  "flexpass" + filnamn + ".json";
        
        
 console.log(passen);
        sendFile(passen, filnamn);

    }
  

    //reader.readAsText(input.files[0])
     reader.readAsText(input.files[i], 'ISO-8859-1');
   }
},false)


//{passnr: 999, antalNoder: 20, antalBommar: 1, }


function stada_nod(input){
  // console.log(input);
 // document.getElementById("download_link").download = "flexpass" + filnamn + ".json";
  let obj = {}; let typ; let err = false;
  //if (input.length == 5) obj.antal = parseInt(input[1]);
  //if (input.length == 2) obj.id = input[1].slice(3, 7);
    if (input.length > 5){   
        obj.nod = input[1];
        obj.nod = parseInt(obj.nod.replace("U", ''));  
        obj.tid = input[2];
        if (input[3].slice(0,1) == "("){ // hämtanod
            obj.door = "stiga på"; 
            obj.urtid == input[3].slice(1,5);
            let raknare = 4;
            if (isNaN(input[4]) == false) {
                obj.mpl = parseInt(input[4]);
                raknare++;
            }
        obj.adr = input[raknare] + " ";
        raknare++;
            do {
                if (input[raknare + 1]=="MÖL") break;
                if (input[raknare + 1]=="GÖT") break;
                obj.adr += input[raknare] + " ";
                raknare++;
                if (raknare==20) {console.log(input); console.log(obj); break;}
                if (input[raknare + 1]=="MÖL") break;
            }   
            while( input[raknare + 1] != "GÖT")
      
        if (obj.adr.slice(0,3)== "BOM") {
            //console.log("errorhandler");
            //"pass":"150","datum":"200605","resa":[{"nod":4,"tid":"0752","door":"stiga på","mpl":1560,"adr":"Donsö Hamn ","restyp":"RTBA","id":"BodKri","antal":"4"
            err =true;
            obj.restyp = "error";
            obj.adr = "Okänd";
            obj.id = "noOne";
        }
        if (err == false){
            if (input[raknare + 2] == "RT") {raknare++; input[raknare + 2] = "RTBA" }
            obj.restyp = input[raknare + 2];
            obj.id = input[raknare+3].slice(0,3) + input[raknare+4].slice(0, 3);
        }
    }        
    else{
      obj.door = "gå av";
      let raknare = 3;
      if (isNaN(input[3]) == false) {
        obj.mpl = parseInt(input[3]);
        raknare++;
      }
      obj.adr = input[raknare] + " ";
      raknare++;
      do {
        if (input[raknare + 1]=="MÖL") break;
         if (input[raknare + 1]=="GÖT") break;
      obj.adr += input[raknare] + " ";
      raknare++;
      if (raknare==20) break;
      
    } while(input[raknare + 1] != "GÖT")
    if (input[raknare+3] ==undefined){
      
    }
    else
    {obj.id = input[raknare+3].slice(0,3) + input[raknare+4].slice(0,3);} //namn
    

    }
  }
  //console.log(obj);
  
return obj;
    }
    

function cleaner(input){
 
  let spara = "noder";
  let kniv=input.slice(0, 5);
 
  
  if (kniv ==  "Passn"){spara = "pass";}
  if (kniv ==  "Passk"){spara = "skrap";}
  if (kniv ==  "Ledni"){spara = "skrap";}
  if (kniv ==  "Bokni"){spara = "skrap";}
  if (kniv ==  "MOBIT"){spara = "skrap";}
  if (kniv ==  "Start"){spara = "skrap";}
  if (kniv ==  "Norma"){spara = "skrap";}
  if (kniv ==  "Sista"){spara = "skrap";}
  if (kniv ==  "Hemom"){spara = "skrap";}
  if (kniv ==  "Statu"){spara = "skrap";} 
  if (kniv ==  "Dubbe"){spara = "skrap";}
  if (kniv ==  "Plane"){spara = "skrap";}
  if (kniv ==  "Stati"){spara = "skrap";}
  if (kniv ==  "Undan"){spara = "skrap";}
  if (kniv ==  "Ekono"){spara = "skrap";}
  if (kniv ==  " Kapa"){spara = "skrap";}
  if (kniv ==  " L I "){spara = "skrap";}
  if (kniv.length < 2){spara="skrap";}
  if (input.slice(3, 6) == "PER"){spara = "antal";}
  if (input.slice(4, 7) == "PER"){spara = "antal2";} //xyz
 
  
return spara;

}

function sendFile(input, namn){
var data = new Blob([JSON.stringify(input)], {type: "text/plain; charset=utf-8"});

//console.log(data);

var URL = window.URL || window.webkitURL;
var u = URL.createObjectURL(data);
document.getElementById(namn).href = u;
}
















/*
let fileUploaded; loadHandler; errorHandler;
function csvToArray (csv) {
    rows = csv.split(/\r\n||\n);
    //rows = csv.split("\n");
    return rows.map(function (row) {
      return row.split(";");
    });
};
// Hard-coded for brevity, but you can set this variable with FileReader
var csv = "the,quick,brown,fox\n" +
          "jumps,over,the,lazy,dog";
var array = csvToArray(csv);
console.log(array);
function getAsText(fileToRead){
    let reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}
function handleFiles(files){
    if(window.FileReader){
        getAsText(files[0]);
        fileUploaded = true;
    } else {
        alert("Filereader inte supportad av webbläsaren.");
    }
}
function loadHandler(event){
    let csv = event.target.result;
    processData(csv);
}
function errorHandler(event){
    if (event.target.error.name == "NotReadableError")
        alert("Kan inte läsa fil");
}*/