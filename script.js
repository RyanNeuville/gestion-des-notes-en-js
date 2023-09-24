var nom = prompt("entrer le nom de l'eleves concerner svp !");
        document.bulletin.nom.value = nom;
        function calculer() {
            document.bulletin.nc1.value = parseFloat(document.bulletin.n1.value) *  parseFloat(document.bulletin.c1.value);
            document.bulletin.nc2.value = parseFloat(document.bulletin.n2.value) *  parseFloat(document.bulletin.c2.value);
            document.bulletin.nc3.value = parseFloat(document.bulletin.n3.value) *  parseFloat(document.bulletin.c3.value);
            document.bulletin.nc4.value = parseFloat(document.bulletin.n4.value) *  parseFloat(document.bulletin.c4.value);
            document.bulletin.nc5.value = parseFloat(document.bulletin.n5.value) *  parseFloat(document.bulletin.c5.value);
            document.bulletin.totalc.value = parseFloat(document.bulletin.c1.value) +  parseFloat(document.bulletin.c2.value) + parseFloat(document.bulletin.c3.value) +  parseFloat(document.bulletin.c4.value) +  parseFloat(document.bulletin.c5.value);
            document.bulletin.totaln.value = parseFloat(document.bulletin.n1.value) +  parseFloat(document.bulletin.n2.value) + parseFloat(document.bulletin.n3.value) +  parseFloat(document.bulletin.n4.value) +  parseFloat(document.bulletin.n5.value)
            document.bulletin.totalnc.value = parseFloat(document.bulletin.nc1.value) +  parseFloat(document.bulletin.nc2.value) + parseFloat(document.bulletin.nc3.value) +  parseFloat(document.bulletin.nc4.value) +  parseFloat(document.bulletin.nc5.value)
            var moyenne =  document.bulletin.totalnc.value / document.bulletin.totalc.value;
            document.bulletin.moy.value = moyenne;
            if ( moyenne >= 10) {
                document.bulletin.decision.value = "ADMIS";
            } else {
                document.bulletin.decision.value = "REFUSER";
            }
        }
        function effacer() {
            document.bulletin.nom.value = "";
            document.bulletin.c1.value = ""; document.bulletin.c2.value = ""; document.bulletin.c3.value = ""; document.bulletin.c4.value = ""; document.bulletin.c5.value = ""; 
            document.bulletin.n1.value = ""; document.bulletin.n2.value = ""; document.bulletin.n3.value = ""; document.bulletin.n4.value = ""; document.bulletin.n5.value = ""; 
            document.bulletin.nc1.value = ""; document.bulletin.nc2.value = ""; document.bulletin.nc3.value = ""; document.bulletin.nc4.value = ""; document.bulletin.nc5.value = ""; 
            document.bulletin.totalc.value = ""; document.bulletin.totaln.value = ""; document.bulletin.totalnc.value = ""; document.bulletin.moy.value = ""; document.bulletin.decision.value = ""; 

        }