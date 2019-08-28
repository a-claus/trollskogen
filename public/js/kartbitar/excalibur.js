/*function geten (){ sept18
    return actions.length;

}*/


/* 
ladda bilder
ladda kartbit
    när ska ngt hända


ladda text
ladda händelser


*/
/* bilder
------------------
*/


/* inställningar
------------------
*/

rsos_text=[];
rsos_text.push("Endast de värdiga kan ta Excalibur ur stenen.");
rsos_text.push("Jag är värdig!");
//actions.push({index: actions.length, namn:"swordofstone", text:rsos_text[0] ,color:"146 146 146", func:runSwordofstone, img:swordofstone });
//rsosDices={T6:[3,5,7],text:["Du är inte värdig. -1 iq", "Inget händer", "Du är värdig!"], actions:["minusIQ", "inget" ,"getSak"]};
var excaliburNR=thing.length;
thing.push({id:thing.length, namn:"Excalibur", vad:"sak",color:"grey", plus:"styrka", width:5, height:5, img:sword, f_text:"Ja"});

console.log(thing);

function minusIQ(){
    figur[0].iq--;
    if (figur[0].iq<0)figur[0].iq=0;
}
function none(){
   
}

function getExcalibur(){
     diceStatus="klar";
     figur.push(new Sak(excaliburNR));  


}

function loadSIS(){
    console.log("laddarSIS");
        bildColorForAction="146 146 146"; //actions[index].color;
        bildaction = runSwordofstone;
        bild = swordofstone;
        diceText="Endast de värdiga kan ta Excalibur ur stenen.";
        diceBonus="iq";
        T6=[3,5,7];
        T6text=["Du är inte värdig. -1 iq", "Inget händer", "Du är värdig!"];
        T6actions=[minusIQ, none, getExcalibur];
        diceStatus="start";
}
kartbit[13].func=loadSIS;



 
 function runSwordofstone(){
    gameStatus="wait";
     downMeny.set("putInBag", rsos_text[0], rsos_text[1], excalibur);
    unsetKartbitsaction();
    //console.log("JA!" + figur[0].x);
     figur[0].x=260; //xxx
     figur[0].y=260; //xxx
     var obj = thing.find( rsos => rsos.namn === "Excalibur");
     figur.push(new Sak(obj.id)); 
     //gameStatus="panel";
     gameStatus="diceRuta";

}
function runSwordofstoneDices (number){

{
//  text:"Endast de värdiga kan ta Excalibur ur stenen.",
//  3: "minusIQ",
//  6: "ingen",
//  8: "getExcalibur"
}
}

gameStatus.push(moveStart);