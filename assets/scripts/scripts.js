// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 5
});

typewriter
  .pauseFor(1000)
  .typeString('hi there!')
  .pauseFor(1500)
  .deleteChars(6)
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(1000)
  .typeString('my name is Jonathan.')
  .pauseFor(1500)
  .deleteAll()
  .start();