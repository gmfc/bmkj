var omi = require('./omi.js');

function main(){
  var OM = new omi();
  

  
  var hash = OM.findOmi("batatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatatabatataba");
  console.log("h>: "+hash);
  console.log("=====================================");
  var text = OM.readOmi(hash);
  console.log("t>: "+text);
  console.log("=====================================");
  
  
  
}

main();