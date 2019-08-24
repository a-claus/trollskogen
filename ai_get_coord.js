    var idoc = app.activeDocument;  
    var sel = idoc.selection;  
      
    for (j=0; j<sel.length; j++) {  
        var ipath = sel[j];  
        var itext = idoc.textFrames.add();  
        var pp = [];      
      
        for (i=0; i<ipath.pathPoints.length; i++) {  
            pp.push(Math.floor(ipath.pathPoints[i].anchor[0]) + "," + Math.abs(Math.floor(ipath.pathPoints[i].anchor[1])));  
        }  
        itext.contents = pp.join (",");  
       //itext.contents = sel[0].pathPoints[0].anchor[0];  
        itext.left = ipath.left + ipath.width + 2;  
        itext.top = ipath.top;  
      
        pp = null;  
    }  