// Home page typewriter intro.
// Typewriter created by Tameem Safi: https://github.com/tameemsafi/typewriterjs

const phrases = [
  "hi there!",
  "my name is jonathan.",
  "i'm a graduate from the university of oregon (scoo ducks!)",
  "i studied data science. with a focus in marketing analytics",
  "scroll down for more info about me!",
  "thanks for visiting my website!",
];

const typewriter = new Typewriter(document.getElementById("app"), {
  loop: true,
  delay: 50,
  deleteSpeed: 5,
});

phrases.forEach((phrase, i) => {
  typewriter.pauseFor(1000).typeString(phrase);
  // Clear after every phrase except the last.
  if (i < phrases.length - 1) typewriter.pauseFor(1500).deleteAll();
});

typewriter.start();