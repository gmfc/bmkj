var omi = require('./omi.js');

function main(){
  var OM = new omi();
  

  
  var hash = OM.findOmi("bom dia");
  console.log("h>: "+hash);
  console.log("=====================================");
  var text = OM.readOmi(hash);
  console.log("t>: "+text);
  console.log("=====================================");
  
  console.log(OM.readOmi("1"));
  
}

main();