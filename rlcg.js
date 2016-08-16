var bigInt = require("big-integer");

function rlcg(seed,base){
  if(seed===undefined){
    this.seed = bigInt("42",37);
  } else {
    this.seed = bigInt(seed,base);
  }
  this.A = bigInt("6bk7am7hfy85yrjvbci39rhd9iw834uekndjj3475i3nc9273gndufidnvi476284ncie37eicndfog9u6wue2cb7aqqreuto39a635y8knxcbv8734123jhh6uy5hcxq16fcqkwxmr",37);//6364136223846793005 //41c9roc33ffeys2wpfeta3wd
  this.C = bigInt("atak74d9riw834uekndjj3475i3nc9273f6mlmcfqte45zrs4lxyo1k79dhggndufinvi476284nciejd74b4lctf40i6aedfxgx312us5w5ufhufhd85y8knxcbv873756kncx458",37);
  this.M = bigInt("<36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36>",37);
  this.IN = bigInt("hz0swevloq9rhe9orj990jl55il0qfbhkz8w0joeag0u5o7trs256xrby7n98bhursb9bl5f0dr6nax81t9p296<36>hhjwixozeb9hkg6x0w74z51wbntbrndtdf1csbwec24j6wjkrx2d",37);//13877824140714322085//4654452103859546277//41c9roc33ffeys2wpfeta3wd
  
}

rlcg.prototype.next = function(){
  this.seed = bigInt(this.A).times(this.seed).plus(this.C).mod(this.M);
  return(this.seed);
};

rlcg.prototype.prev = function(){
  this.seed = bigInt(this.seed).minus(this.C).multiply(this.IN).mod(this.M);
  if (this.seed.isNegative()) {
    this.seed= bigInt(this.seed).plus(this.M);
  }
  return(this.seed);
};

module.exports = rlcg;