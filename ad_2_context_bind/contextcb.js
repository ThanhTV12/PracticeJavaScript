function run(cb) {
    console.log('run....');
    cb();
}

var hello = function() {
    console.log('hello: ' + this.name);
}

var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log('say hi: ' + this.name);
    }
}

run(hello.bind(mouse))