// FAQ accordion
document.querySelectorAll('.faq-item__toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    var item = toggle.closest('.faq-item');
    var isOpen = item.classList.contains('faq-item--open');

    document.querySelectorAll('.faq-item--open').forEach(function (open) {
      open.classList.remove('faq-item--open');
      open.querySelector('.faq-item__toggle').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('faq-item--open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});

// Scroll to top
document.getElementById('scroll-up').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu
var menuBtn = document.getElementById('menu-btn');
var nav = document.getElementById('main-nav');

menuBtn.addEventListener('click', function () {
  var open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', function (event) {
  if (event.target.closest('a')) {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
