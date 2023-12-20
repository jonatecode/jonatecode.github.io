// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 5,
});

typewriter
  .pauseFor(1000)
  .typeString('hi there!')
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString('my name is jonathan.')
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("i'm a student at the unviersity of oregon (scoo ducks!)")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("i'm studying data science. with a focus in marketing analytics")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("scroll down for more info about me!")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("thanks for visiting my website!")
  .start();