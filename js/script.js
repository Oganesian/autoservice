$(document).ready(function() {
let mainNav = document.getElementById('js-menu');
let mynavbarToggle = document.getElementById('js-mynavbar-toggle');

mynavbarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
});
