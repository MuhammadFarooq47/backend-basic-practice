const os = require('os');

var totalMenory = os.totalmem();
var freeMemory = os.freemem();

console.log('TotalMemory', totalMenory);
console.log('FreeMemory', freeMemory);