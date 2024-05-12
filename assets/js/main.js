const playSound = function() {
  var sonido = new Audio("../media/intro.mp3");
  sonido.play();
  document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);