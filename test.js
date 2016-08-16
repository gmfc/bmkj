var rlcg = require('./rlcg.js');
var fs = require('fs');


function  normalTest(){
  
  var rand = new rlcg("42",37);
  var vec = [];
  var count =0;
  var i = 0;
  var n = 20;
  while (i<n) {
    vec[i] = rand.next().toString(37);
    i++;
  }
  i--;
  while(i>0){
    i--;
    var num = rand.prev().toString(37);
    var check = num === vec[i];

    console.log(i+"\n:>"+num+"\n:>"+vec[i]+"\n--------------");

    if(check){
      count++;
    }
  }
  
  console.log(count===(n-1));
  
}

function regress(){
  var rand = new rlcg();
  
  for(var i=0;i<100;i++){
    console.log(rand.prev().toString());
  }
}


function main() {
  normalTest();

}



main();