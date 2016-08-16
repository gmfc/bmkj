var bigInt = require("big-integer");
var rlcg = require('./rlcg.js');

function omi(){
  this.dicio = "ABCDEFGHIJKLMNOPQRSTUWXYZ§&%$"
}

omi.prototype.readOmi = function(VisualHash){
  // hash base 64!
  // omi base 37
  var hash  = this.processVisualHash(VisualHash);
  var magic = new rlcg(hash,64);
  var omiText = magic.next().toString(37);
  omiText = omiText.replaceAll("<36>"," ");
  return omiText;
}

omi.prototype.findOmi = function(omi){
  omi = omi.replaceAll(" ","<36>");
  var magic = new rlcg(omi,37);
  var hash = magic.prev().toString(64);
  return this.processRawHash(hash);
}


omi.prototype.processRawHash = function(hashRAW){
  
  //var dicio  = "ABCDEFGHIJKLMNOPQRSTUWXYZ§&%$";
  
  for(var i=36;i<64;i++){
    hashRAW = hashRAW.replaceAll("<"+i+">",this.dicio.charAt(i-36));    
  }
  return hashRAW;
}

omi.prototype.processVisualHash = function(visualHash){
  //var dicio  = "ABCDEFGHIJKLMNOPQRSTUWXYZ§&%$";
  for(var i=36;i<64;i++){
    visualHash = visualHash.replaceAll(this.dicio.charAt(i-36),"<"+i+">");    
  }
  return visualHash;
}

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

module.exports = omi;