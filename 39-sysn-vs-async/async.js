var fs = require('fs')

console.log('Start');
fs.readFile('song1.txt', {encoding: 'utf8'}, (err, data) => {
    console.log(data);
});
console.log('End');