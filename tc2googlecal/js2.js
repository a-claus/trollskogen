const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e){
    console.log(input.files)

    const reader = new FileReader()
    reader.onload = function() {
       let array =[]; let j = 0; 
       //console.log(reader.result);
       let text = "abc";
       text = reader.result;
       text.replace(/(\r\n|\r|\n)/g, '\n');
       text = text.replace(/,/g, '.');
       
       console.log(text);
        const lines = text.split("\n").map(function(line){
            j=0; let text = "";
            if (line.slice(1, 4) != "Ben" && line.slice(1, 4) != "---") {
               // console.log(line.slice(1,4));
               
            
             //console.log(line.length); //168 är varje rad
             L = array.length;
             array.push([line.slice(0, 38), line.slice(107, 116), line.slice(119, 129), line.slice(38, 42), line.slice(43, 107), line.slice(38, 42), line.slice(135, 148), line.slice(154, 167) + "\n"]);
             //for (j=0; j<7; j++){
               // array[L][j].replace(/,/g, '.');
             //}
             //j=line.slice(0, 38);
             
               //console.log(line.slice(38, 42)); 
             
}

              //168 är varje rad
             //console.log(line);
               })

        console.log(array);
/*
       let te = reader.result;
       let L = te.length + 0;
        for (i = 0; i < L; i++){
           
                switch (te.charAt(i)){
                    case " ":
                        j++;
                        if (j < 3) text += " ";
                    break
                    default:
                        j=0;
                        text += te.charAt(i);
                }


        }*()


       /*reader.result.replace(/(\r\n|\r|\n)/g, '\n');
       //console.log(reader.result); \r\n|\r|\n
        const lines = reader.result.split("\n").map(function(line){
            j=0; let text = "";
             console.log(line.length);
            
            for (i = 0; i < line.lenght; i++){
                console.log(line.charAt(i));
                switch (line.charAt(i)){
                    case " ":
                        j++;
                        if (j < 3) text += " ";
                    break
                    default:
                        j=0;
                        text += line.charAt(i);
                }


            }*/
               

            
          //  console.log(text);
            //return text.split("  ");
         //   let lines = text.split("  ");

       // })
       
        //let cal = cleanFile(lines);
        sendFile(array);

    }
    reader.readAsText(input.files[0])
},false)

function cleanFile(lines){
    let g_cal;
    let rad=0;
    
    //g_cal[rad] = ["Subject","Start Date","Start Time","End Date","End Time","All Day Event", "Description"];
    g_cal = '\"Subject\",\"Start Date\",\"Start Time\",\"End Date\",\"End Time\",\"All Day Event\", \"Description\" \n';

    for (var i = 0; i<lines.length; i++){
        if (lines[i].length == 11 && lines[i][0] != '\" Vecka\"'){
            if (lines[i][7] != '\" \"'){
         
            if (lines[i][1]=='\" \"')lines[i][1] = lines[i-1][1];
            //g_cal.push([]);
           /* g_cal[rad].push(lines[i][5].replace(/\"/g,""));
            g_cal[rad].push(lines[i][1].replace(/\"/g,""));
            g_cal[rad].push(lines[i][3].replace(/\"/g,""));
            g_cal[rad].push(lines[i][1].replace(/\"/g,""));
            g_cal[rad].push(lines[i][4].replace(/\"/g,""));
            g_cal[rad].push("false");
            g_cal[rad].push(lines[i][9].replace(/\"/g,"") + "\n");   
            g_cal[rad].push(lines[i][5]);
            g_cal[rad].push(lines[i][1]);
            g_cal[rad].push(lines[i][3]);
            g_cal[rad].push(lines[i][1]);
            g_cal[rad].push(lines[i][4]);
            g_cal[rad].push("false");
            g_cal[rad].push(lines[i][9]); */
            g_cal += lines[i][5] + ",";
            g_cal +=lines[i][1] + ",";
            g_cal += lines[i][3]+ ",";
            g_cal += lines[i][1]+ ",";
            g_cal += lines[i][4]+ ",";
            g_cal += '\"'+ "false" + " \",";
            g_cal += lines[i][9] + "\n";
            }
        }
    
    };

    console.log(g_cal);
    return g_cal;

}

function sendFile(input){
var data = new Blob([input], {type: "text/plain; charset=utf-8"});

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