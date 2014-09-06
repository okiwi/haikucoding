

var LE_SOLEIL = {
  brille: function() {
    return Math.random() < 0.9;
  }
};

quand(LE_SOLEIL.brille(), affiche("Le soleil brille sur le geekcamp"))
  .sinon(affiche("Le soleil ne brille pas sur le geekcamp"));







































  function quand(condition, callback) {
    if(condition) {
      callback();
    }
    return {
      sinon: function(callback) {
        if(!condition) {
          callback();
        }
    }};
  }

function affiche(chaine) {
  return function() {console.log(chaine)};
}
