var fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }, 2000);
    });
}


async function run() {
    var song1 = await readFilePromise('data/song1.txt');
    console.log(song1);
    var song2 = await readFilePromise('data/song2.txt');
    console.log(song2);
    var song3 = await readFilePromise('data/song3.txt');
    console.log(song3);
    return [song1, song2, song3];


}

console.log('Start');
run().then(values => {
    console.log(values);
}) ;
console.log('End');