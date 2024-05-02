const path = require('path');

// Ya mjha is file ka sirf path btayga pura path
console.log('__filename', __filename)

//Ya hamari directory ki full information dyta hy...
var pathObj = path.parse(__filename);
console.log('pathObj', pathObj)