var bigInt = require("big-integer");
var rlcg = require('./rlcg.js');

function omi(){
  this.hashDicio = "ABCDEFGHIJKLMNOPQRSTUWXYZ§&%$#@?+£¢αβγδεζηθλμπρΣΦψÇюѣѫдж";
  this.textBase = 37;
  this.hashBase = this.textBase + this.hashDicio.length -1;
}

omi.prototype.readOmi = function(VisualHash){
  var hash  = this.processVisualHash(VisualHash);
  var magic = new rlcg(hash,this.hashBase);
  var omiText = magic.next().toString(this.textBase);
  omiText = omiText.replaceAll("<36>"," ");
  return omiText;
}

omi.prototype.findOmi = function(omi){
  omi = omi.replaceAll(" ","<36>");
  var magic = new rlcg(omi,this.textBase);
  var hash = magic.prev().toString(this.hashBase);
  return this.processRawHash(hash);
}


omi.prototype.processRawHash = function(hashRAW){ 
  for(var i=36;i<this.hashBase;i++){
    hashRAW = hashRAW.replaceAll("<"+i+">",this.hashDicio.charAt(i-36));    
  }
  return hashRAW;
}

omi.prototype.processVisualHash = function(visualHash){
  for(var i=36;i<this.hashBase;i++){
    visualHash = visualHash.replaceAll(this.hashDicio.charAt(i-36),"<"+i+">");    
  }
  return visualHash;
}

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

module.exports = omi;