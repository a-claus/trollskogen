//canvas 16:9, 720-1280? 
let keyMap = {};let keyMapUpp = {};

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        
        this.paus=false;
        this.canvas.width = 400;//711;//400
        this.canvas.height = 400;//400
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        window.addEventListener('keydown', function (e) {e = e || event; myGameArea.key = e.keyCode; keyMap[e.keyCode] = e.type == 'keydown'; })
        window.addEventListener('keyup', function (e) {
            e = e || event; 
            myGameArea.key = false; 
            keyMap[e.keyCode] = e.type == 'keydown';
             })
        this.canvas.addEventListener('mousedown', on_canvas_click, false);//on_canvas_click
        this.canvas.addEventListener('mouseup', mouse_up, false);
        this.canvas.addEventListener("mousemove", mousePosition, false)
       /* this.canvas.onmousemove = function (e){
            canvas("JAaaaa", e)
        }*/

        this.interval = setInterval(loop, 20);
    },
    
    clear : function() {
       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        console.log("stop");
        clearInterval(this.interval);
    },
    foto: function() {
        return this.canvas.toDataURL("image/png");
    },
    
}
//let ctx = myGameArea.context;
 
