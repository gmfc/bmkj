var bigInt = require("big-integer");

/*
  
    next = a x+ c % m

    int qarray[12];
    qarray[0]=0;
    qarray[1]=1;
    int i =2;
    int reset = m;
    while (m % a >0) {
      int remainder=m%a;
      int quotient=m/a;
      std::cout << m << " = " << quotient << "*" << a << " + " << remainder << "\n";
      qarray[i] =qarray[i-2]-(qarray[i-1]*quotient);
      m=a;
      a=remainder;
      i++;
    }
    if (qarray[i-1]<0) {qarray[i-1]+=reset;}
    std::cout << qarray[i-1] << "\n";

*/

function ainverse(){
  var a = bigInt("6bk7am7hfy85yrjvbci39rhd9iw834uekndjj3475i3nc9273gndufidnvi476284ncie37eicndfog9u6wue2cb7aqqreuto39a635y8knxcbv8734123jhh6uy5hcxq16fcqkwxmr",37);
  var m = bigInt("<36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36><36>",37);
  
  var qarray = [];
  qarray[0]= bigInt("0",37);
  qarray[1] = bigInt("1",37);
  var i = 2;
  var reset = m;
  
  while(bigInt(m).mod(a).greater(0)){
    var remainder = bigInt(m).divmod(a).remainder;
    var quotient = bigInt(m).divmod(a).quotient;
    //console.log(m.toString(36) + " = " + quotient.toString(36) + " * " + a.toString(36) + " + " + remainder.toString(36) );
    //out
    qarray[i] = bigInt(qarray[i-2]).minus(bigInt(qarray[i-1]).multiply(quotient));
    m=a;
    a=remainder;
    i++;
  }
  if(bigInt(qarray[i-1]).compare(0)<0){
    qarray[i-1] = bigInt(qarray[i-1]).plus(reset);
    console.log("reset set");
  }
  console.log(qarray[i-1].toString(37));
  
}

ainverse();