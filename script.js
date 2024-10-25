window.addEventListener('load', function() {
  const profile = document.querySelector('.profile');
  profile.classList.add('slide-in-left');

  const loadingBar = document.querySelector('.loading-bar');
  loadingBar.style.display = 'none'; 
});

AOS.init();

var typed = new Typed('.heading', {
  strings: ["Welcome to my page!", "Nice to meet you!", "Hello there! ^-^"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});