// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('mommy')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('daddy')
  .typeString('pp')
  .pauseFor(1000)
  .start();