// context

var a = {
    name: 'AAAA', 
    run: function() {
        var run2 = function() {
            console.log('run2: ' + this.name);
        }
        run2.bind(this)();
    } 
}

a.run();


var b = {
    name: 'BBBB', 
    run: function() {
        var run2 = function() {
            console.log('run2: ' + this.name);
        }.bind(this);
        run2();
    } 
}

b.run();

// ------------------------
// arrow function don't have context so it will use the nearest parent's context

var c = {
    name: 'CCCC',
    run: function() {
        var run2 = () => console.log('run2: ' + this.name);
        run2();
    }
} 

c.run();


var d = {
    name: 'DDDD',
    run: function() {
        var run2 = function() {
            var run3 = () => {
                console.log('run3: ' + this.name);
            }
            run3();
        }
        run2.bind(this)();
    }
} 

d.run();


var e = {
    name: 'EEEE',
    run: function() {
        var run2 = () =>  {
            var run3 = () => {
                console.log('run3: ' + this.name);
            }
            run3();
        }
        run2();
    }
} 

e.run();