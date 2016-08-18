var omi = require('./omi.js');

function main(){
  var OM = new omi();
  

  
  var hash = OM.findOmi("nah mang its all about the double boiler dont want the emulsion to break");
  console.log("h>: "+hash);
  console.log("=====================================");
  var text = OM.readOmi(hash);
  console.log("t>: "+text);
  console.log("=====================================");
  console.log(OM.getNextNHash(hash,40));
  //hash = "0";
  for(var i=0;i<5;i++){
    var div = document.getElementById('container');
    var h = document.createElement('spam');
    var br = document.createElement('br');
    h.appendChild(document.createTextNode('Hash: ' + hash));
    var msg = document.createTextNode(OM.readOmi(hash));
    var hr = document.createElement('hr');
    //p.textContent = ;
    hash = OM.getPrevNHash(hash,2)[1];
    div.appendChild(h);
    div.appendChild(br);
    div.appendChild(msg);
    div.appendChild(hr);
  }
  
  
  
}

main();