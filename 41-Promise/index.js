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
        // if(path === 'a') {
        //     reject(path);
        // } else {
        //     resolve(path);
        // }
        // var song = fs.readFileSync(path, {encoding: 'utf8'});
        // console.log('song: ' + song);
        // if(song) {
        //     resolve('resolve ' + song);
        // } else {
        //     reject('reject ' + song);
        // }
    });
}


console.log('Start');

readFilePromise('data/song1.txt')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

console.log('between song1 and song2');
readFilePromise('data/song2.txt')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });    
console.log('End');