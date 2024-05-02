var fs = require('fs');

//****** SYNC ***********///
//SYNC IO (Input & Output) ko block krta hy
// console.log('SYNC 1');
// var files = fs.readdirSync('./') //10mins IO Block
// console.log('SYNC 2' ,files)

//*********** ASYNC **********///
console.log('ASYNC 1');
//fs.readdir mery folder ki jtni bhe files hn un sb ko read kryga or phr console.log me display krdyga
fs.readdir('./', function (error, files){
    if(error) {
        console.log('Error', error)
    }
    else {
        console.log('Files',files)
    }
});

console.log('ASYNC 2')