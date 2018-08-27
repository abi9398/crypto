const crypto = require('crypto');  
var fs = require('fs');

var data = fs.readFileSync('new1.txt'); 
data=data.toString();

const decipher = crypto.createDecipher('aes192', '123');  


var decrypted = decipher.update(data, 'hex', 'utf8');  

decrypted += decipher.final('utf8');  
fs.writeFileSync('msg.txt',decrypted,callback); 
console.log("check on msg.txt");