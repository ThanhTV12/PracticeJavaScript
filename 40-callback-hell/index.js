var fs = require('fs');

console.log('Start');
fs.readFile('data/song1.txt',  {encoding: 'utf8'}, (err, data) => {
    console.log(data);
    fs.readFile('data/song2.txt',  {encoding: 'utf8'}, (err, data) => {
        console.log(data);
        fs.readFile('data/song3.txt',  {encoding: 'utf8'}, (err, data) => {
            console.log(data);
        });
    });
});

console.log('End');