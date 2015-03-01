'use strict'
var bonnesIdées = ['des jeux', 'du fun', "des M&M's"];


var on = {
  seQuitte: function (horaire) {
    process.stdout.write('On se quitte à ' + horaire + '\n');
  },
  seDonneRendezVous: function(lAnnée) {
    process.stdout.write('On se donne rendez-vous en ' + lAnnée+ '\n');
  },
  revientAvecPleinDe: function(bonnesIdéesL) {
    process.stdout.write('On revient avec plein de bonnes idées : ' + bonnesIdéesL.join(', ') + '\n' );
  },
};

function a(horaire) {return horaire;}
function lAnnée(année) {return année;}








/* Notre Haiku */
on.seQuitte(a("16h"));
on.seDonneRendezVous(lAnnée("2016"));
on.revientAvecPleinDe(bonnesIdées);

/*                  - Jean-Pierre & Bastien */