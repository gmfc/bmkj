var bigInt = require("big-integer");

function rlcg(seed,base){
  if(seed===undefined){
    this.seed = bigInt("42",37);
  } else {
    this.seed = bigInt(seed,base);
  }
  this.A = bigInt("6bk7am7hfy85yrjvbci39rhd9iw834uekndjj3475i3nc9273gndufidnvi476284ncie37eicndfog9u6wue2cb7aqqreuto39a635y8knxcbv8734123jhh6uy5hcxq16fcqkwxmr",37);
  this.C = bigInt("atak74d9riw834uekndjj3475i3nc9273f6mlmcfqte45zrs4lxyo1k79dhggndufinvi476284nciejd74b4lctf40i6aedfxgx312us5w5ufhufhd85y8knxcbv873756kncx458",37);
  this.M = bigInt("a0<43><53>ny<36>q<52><36>i<50><46><57>6<51>moja<50>83g<62>7<48><59>ur<44>k<36><61>ot7<54>p<46><51><57><46><59>6p<45>1<54><43><48>9<42>h8<63>c<43>jn<41><60><45><57>2<48>6<58><55>h<39>utz<41>q<60><59>x<58><44><63><62>mz3m<57>gmx<46><42><45><52>gy<50>gl<53><38>w<38><39><42><62>y<46>2x<57><38><60>r0v<63><53>c<47>g",64); 
  this.IN = bigInt("hz0swevloq9rhe9orj990jl55il0qfbhkz8w0joeag0u5o7trs256xrby7n98bhursb9bl5f0dr6nax81t9p296<36>hhjwixozeb9hkg6x0w74z51wbntbrndtdf1csbwec24j6wjkrx2d",37);
  
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