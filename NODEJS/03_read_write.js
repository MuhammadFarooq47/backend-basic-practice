var fs = require('fs');

function readFile(srcPath){
    fs.readFile(srcPath, 'utf8', function(error, data){
        (error)? console.log('Read Error', error) : console.log('Read', data)
    });
}

function writeFile(savePath, data){
    fs.writeFile(savePath, data, function(error) {
        (error) ? console.log('Write Error', error) : console.log('Write sucessfully')
    })
}

function appendFile(savePath, data){
    fs.appendFile(savePath, data, function(error){
        (error)? console.log("Error", error) : console.log("Append Sucessfully")
    })
}

//readFile('./createFile.txt')
//writeFile('./createFile.txt', "Hello World I am learning Nodejs")
appendFile('createFile.txt', "Now I'm using append function")