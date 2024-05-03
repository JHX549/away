// Menu fade in
window.addEventListener('scroll', function() {
  var menubox = document.getElementById('menubox');
  if (window.scrollY > 100) {
      if (menubox.style.display !== 'block') {
          menubox.style.display = 'block';
          fadeIn(menubox); // Call fadeIn function to add fade-in effect
      }
  } else {
      menubox.style.display = 'none';
  }
});

function fadeIn(element) {
  var opacity = 0;
  var intervalID = setInterval(function() {
      if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
  }, 50);
}