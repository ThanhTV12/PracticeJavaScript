var mouse = {
    name: "Mickey",
    sayHi: function() {
        console.log('Hi, my name is: ' + this.name);
    }
};

// context: mouse
mouse.sayHi();

var say = mouse.sayHi.bind(mouse);

// context: global context;
console.log('this: ' + JSON.stringify(this));
// context: global context;
say();
cat = {
    name: "Tom"
}
say = mouse.sayHi.bind(cat);
say();
