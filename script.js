// Designed by ZanuZoss, coded by ZanuZoss

document.addEventListener("DOMContentLoaded", function() {
  var i = 0;
  var txt = 'zanufetch';
  var speed = 150;

  function typeWriter() {
      if (i < txt.length) {
          document.getElementById("zff").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  typeWriter();

  setTimeout(function() {
      document.querySelector('.zanufetch').style.opacity = '1';
  }, 1400);

  function updateText() {
      if (window.innerWidth <= 1000) {
          document.querySelector('.cose').textContent = 'Software Enginner...';
      } else {
          document.querySelector('.cose').textContent = 'Software Enginner & Designer';
      }
  }

  updateText();
  window.addEventListener('resize', updateText);
});
