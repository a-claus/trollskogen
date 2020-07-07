const input = document.querySelector('input[type="file"]')//type: "text/plain; charset=utf-8"

//const input = document.querySelector('input[type="text/plain; charset=utf-8"]')//type: "text/plain; charset=utf-8"
input.addEventListener('change', function (e){
    console.log(input.files)

    const reader = new FileReader()
    reader.onload = function() {
       let array =[]; let j = 0; let skrap =[];  

       //console.log(reader.result);
       let text = "abc";
       text = reader.result;
       text.replace(/(\r\n|\r|\n)/g, '\n');
       text = text.replace(/,/g, '.');
       
       console.log(text);
        const lines = text.split("\n").map(function(line){
            j=0; let text = "";
           // if (line.slice(1, 4) != "gat" && line.slice(1, 4) != "---") {
               // console.log(line.slice(1,4));
               
            
             //console.log(line.length); //168 är varje rad
// gatunamn, gatunr-fr,, gatunu-ti, num x, num y, wgs84_lat, wgs 84_long
//1-26, 27-36, 37-46, 47- 59, 60-72, 73-91, 92-110
             //L = array.length;
/*
            txt =  line.slice(0, 25);
            pos = txt.search("  ");
            //adr = txt.replace(/\s+/g, '');
            adr = txt.slice(0, pos);
            txt =  line.slice(26, 35);
            nr_f = txt.replace(/\s+/g, '');
            txt =  line.slice(36, 45);
            nr_t = txt.replace(/\s+/g, '');
            txt =  line.slice(46, 58);
            n_x = txt.replace(/\s+/g, '');
            txt =  line.slice(59, 71);
            n_y = txt.replace(/\s+/g, '');
            txt =  line.slice(72, 90);
            lat = txt.replace(/\s+/g, '');
            txt =  line.slice(91, 109);
            long = txt.replace(/\s+/g, ''); 

             array.push({adr: adr, nr: nr_f, nr_t: nr_t, num_x: n_x, num_y: n_y, lat: lat, long:long});
        */
       if (line.slice(0, 6) == "\u000c"){skrap.push(line); }
       else {
        array.push(line);  
       }   
             

       console.log(line.slice(0, 7));
              
               })
              
        console.log(skrap);
        console.log(array);

        sendFile(array);

    }
    //reader.readAsText(input.files[0])
     reader.readAsText(input.files[0], 'ISO-8859-1');
},false)




function sendFile(input){
var data = new Blob([JSON.stringify(input)], {type: "text/plain; charset=utf-8"});

console.log(data);

var URL = window.URL || window.webkitURL;
var u = URL.createObjectURL(data);
document.getElementById('download_link').href = u;
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