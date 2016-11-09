// jessie.js - build 161108
function Jessie(library) {
  this.library = library;

  this.expand = function(start, expansion) {
    if(Jessie.library[start]) {
      var pick = random(Jessie.library[start]);
      for (var i = 0; i < pick.length; i++) {
        Jessie.expand(pick[i], expansion);
      }
    } else {
      expansion.push(start);
    }
    return expansion.join(" ");
  }

  this.cfg = function () {
    var start = "<start>";
    var expansion = []
    var result = Jessie.expand(start, expansion);
  }
}
