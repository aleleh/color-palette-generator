var button = document.getElementById("button");
var colorCodes = document.getElementById("color-codes");

button.addEventListener("click", function() {
  var color1 = randomHexColor();
  var color2 = randomHexColor();
  var color3 = randomHexColor();
  var color4 = randomHexColor();
  var color5 = randomHexColor();
  document.getElementById("color1").style.backgroundColor = color1;
  document.getElementById("color2").style.backgroundColor = color2;
  document.getElementById("color3").style.backgroundColor = color3;
  document.getElementById("color4").style.backgroundColor = color4;
  document.getElementById("color5").style.backgroundColor = color5;
  document.querySelectorAll('.hex-code')[0].textContent = color1;
  document.querySelectorAll('.hex-code')[1].textContent = color2;
  document.querySelectorAll('.hex-code')[2].textContent = color3;
  document.querySelectorAll('.hex-code')[3].textContent = color4;
  document.querySelectorAll('.hex-code')[4].textContent = color5;
});

function randomHexColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}