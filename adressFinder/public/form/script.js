//mapp form
function getAndSend(){
    const inf={date:document.getElementById("datum").innerHTML, 
    adress:document.getElementById("adress").value, 
    kommentar:document.getElementById("kommentar").innerHTML,
    namn:document.getElementById("namn").value,
    altAdress:document.getElementById("$altAdress.value"),
    slutdatum:document.getElementById("slutDatum").value,
    tag:document.getElementById("tag").value};
    console.log(inf);
    window.location.href="/pug/nyAdress/:obj";}