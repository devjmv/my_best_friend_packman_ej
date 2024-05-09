const playSound = function() {
  var sonido = new Audio("data/intro.mp3");
  sonido.play();
  document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);