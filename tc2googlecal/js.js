const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function() {
        const lines = reader.result.split("\n").map(function(line){
            return line.split(";")
        })
        console.log(lines)
        document.getElementById("output").innerHTML = lines;
        let cal = cleanFile(lines);
        sendFile(cal);

    }
    //reader.readAsText(input.files[0])
     reader.readAsText(input.files[0], 'ISO-8859-1');
},false)

function cleanFile(lines){
    let g_cal;
    let rad=0;
    
 
    g_cal = '\"Subject\",\"Start Date\",\"Start Time\",\"End Date\",\"End Time\",\"All Day Event\",\"Description\"\n';

    for (var i = 0; i<lines.length; i++){
        if ((lines[i].length == 11 || lines[i].length == 10) && lines[i][0] != '\" Vecka\"'){
            if (lines[i][7] != '\" \"'){
                if (!(lines[i][5] === "" || lines[i][5] === " " || lines[i][5] === " Kod")){ //!(a || b)
         
            if (lines[i][1]=='\" \"')lines[i][1] = lines[i-1][1];
                g_cal += lines[i][5] + ",";
                g_cal +=lines[i][1] + ",";
                g_cal += lines[i][3]+ ",";
                g_cal += lines[i][1]+ ",";
                g_cal += lines[i][4]+ ",";
                g_cal += '\"'+ "false" + " \",";
                g_cal += lines[i][9] + "\n";
            }
        }}
    
    };
/*
    for (var i = 0; i<lines.length; i++){
        if (lines[i].length == 10 && lines[i][0] != '\" Vecka\"'){
            if (lines[i][7] != '\" \"'){
                if (!(lines[i][5] === "" || lines[i][5] === " " || lines[i][5] === " Kod")){ //!(a || b)
                    if (lines[i][1]=='\" \"')lines[i][1] = lines[i-1][1];
                    g_cal += lines[i][5] + ",";
                    g_cal +=lines[i][1] + ",";
                    g_cal += lines[i][3]+ ",";
                    g_cal += lines[i][1]+ ",";
                    g_cal += lines[i][4]+ ",";
                    g_cal += '\"'+ "false" + " \",";
                    g_cal += lines[i][9] + "\n";
                    }
                }
            }
    
    };*/
    //document.getElementById("output").innerHTML = g_cal;
    console.log(g_cal);
    return g_cal;

}

function sendFile(input){
var data = new Blob([input], {type: "text/plain"});

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