document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  navLinks.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
      navLinks.classList.remove('active');
    }
  });
});
