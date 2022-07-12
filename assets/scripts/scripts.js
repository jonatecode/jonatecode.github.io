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
  .typeString('my name is Jonathan.')
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("i'm a student at unviersity of oregon (sco ducks!)")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .typeString("i'm studying data science.")
  .pauseFor(1500)
  .deleteAll()
  .pauseFor(1000)
  .start();