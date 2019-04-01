function countFrom(a, b) {
    return new Promise((resolve, rejcet) => {
        let i = a;
        let interValId = setInterval(() => {
            console.log(i);
            if(b === i) {
                clearInterval(interValId);
                resolve("Done")
            }
            i++;
        }, 1000);
    })
}
async function run() {
    console.log('Start');

    await countFrom(1, 10)
      .then((data) => {
          console.log(data);
      })
      .catch(err => {
          console.log(err);
      });
    console.log('End'); 
}

console.log('Start outside');  
run();
console.log('End outside');  

