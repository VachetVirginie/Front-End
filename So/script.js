
var now = new Date();

var annee   = now.getFullYear();
var mois    = ('0'+now.getMonth()+1).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var seconde = ('0'+now.getSeconds()).slice(-2);

date1 = new Date('2015-10-2 00:00:00');
date2 = new Date(now);
diff = dateDiff(date1, date2);
document.write(" Il y a "+diff.day+" jours, "+diff.hour+" heures, "+diff.min+" minutes et "+diff.sec+" secondes...");

function dateDiff(date1, date2){
var diff = {}                           // Initialisation du retour
var tmp = date2 - date1;

tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
diff.sec = tmp % 60;                    // Extraction du nombre de secondes

tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
diff.min = tmp % 60;                    // Extraction du nombre de minutes

tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
diff.hour = tmp % 24;                   // Extraction du nombre d'heures

tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
diff.day = tmp;

return diff;
}


