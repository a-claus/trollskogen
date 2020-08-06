
inteNyRubrik=0;

    for (var y=0;y<statsAktivitet.length;y++) {
            zz=inputFil[akt]
            if (statsAktivitet[y].namn === zz)
             {
                statsAktivitet[y].add(inputFil[xx+L],inputFil[xx+A]);
                inteNyRubrik=1;
                break;  
             }
    } 
            if (inteNyRubrik==0)
            {
                statsAktivitet.push(new StatsAktivitet(zz)); 
                statsAktivitet[y].add(inputFil[xx+L],inputFil[xx+A]);
            }
            console.log(statsAktivitet[y].tid);
           