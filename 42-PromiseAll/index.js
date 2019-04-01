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


// Promise hell

// console.log('Start');
// readFilePromise('data/song1.txt')
//     .then((data) => {
//         console.log(data);
//         return readFilePromise('data/song24.txt')
//     })
//     .then((data) => {
//         console.log(data);
//         return readFilePromise('data/song34.txt')
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('err: ' + err);
//     })
// console.log('End');


// promise.all


Promise.all([
    readFilePromise('data/song15.txt'),
    readFilePromise('data/song25.txt'),
    readFilePromise('data/song35.txt')
]).then((values) => {
    console.log(values);
}).catch(err => {
    console.log('err: ' + err);
})