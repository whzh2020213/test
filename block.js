var fs = require('fs');
var data = fs.readFileSync('record.txt');
console.log(data.toString());
console.log('执行成功！');