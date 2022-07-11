// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my name is christine.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a student at uc berkeley (go bears!).")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying computer science and data science.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm also interested in design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("fan of pineapple on pizza.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i also like to doodle.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();
