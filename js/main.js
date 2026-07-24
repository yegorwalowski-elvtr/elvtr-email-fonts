/* ============ Data ============ */

var SYLLABUS = [
  { title: 'How Top Professionals Actually Build Their Careers', date: 'Wed (6/10)', time: '6 PM PT', format: 'Panel',
    speakers: [
      { name: 'Darin Danforth', title: 'Principal Field Chief Technical Officer & Instructor', url: 'https://www.linkedin.com/in/ddan4th/' },
      { name: 'Lisa Savage', title: 'Global Group Creative Director & Elite Expert', url: 'https://www.linkedin.com/in/lisa-savage-8010325/' },
      { name: 'Duc Haba', title: 'Chief AI Officer & Instructor', url: 'https://www.linkedin.com/in/duchaba/' }
    ] },
  { title: 'How to Turn Skills Into Opportunities', date: 'Wed (6/17)', time: '6 PM PT', format: 'Panel',
    speakers: [
      { name: 'Clayton Davis', title: 'Senior Creative Designer & Expert Instructor', url: 'https://www.linkedin.com/in/clayton-davis-0b664a7/' },
      { name: 'David N. Weiss', title: 'Emmy-nominated Writer, Film Director & Award-winning Animation Scriptwriter', url: 'https://www.linkedin.com/in/david-n-weiss-72731838/' },
      { name: 'Matt Balogh', title: 'Professional TTRPG Storyteller & Expert Instructor', url: 'https://www.linkedin.com/in/gmbaloghgames' }
    ] },
  { title: 'What Hiring Managers Really Look For (And What They Ignore)', date: 'Wed (6/24)', time: '6 PM PT', format: 'Panel',
    speakers: [
      { name: 'Danielle Tomassini', title: 'Marketing, Product, & Sales Executive | Managing Partner, Growth and Commercial Lead at Otter Collective', url: 'https://www.linkedin.com/in/dtomassini/' },
      { name: 'David Auerbach', title: 'Head of the Transformation Management Office (TMO), COO at AstraZeneca', url: 'https://www.linkedin.com/in/davidjauerbach4/' },
      { name: 'Leah Latham', title: 'Senior Production Supervisor at Walt Disney Animation Studios', url: 'https://www.linkedin.com/in/leahlatham/' }
    ] },
  { title: 'How to Stand Out in a Competitive Field', date: 'Wed (7/1)', time: '6 PM PT', format: 'Panel',
    speakers: [
      { name: 'Ivy Sang', title: 'UX/UI Director | Lead, Product Design at Safe Software', url: 'https://ca.linkedin.com/in/ivysang' },
      { name: 'Adam Beechen', title: 'Emmy-nominated writer, producer for Television, Film and Comics & New York Times best-selling author', url: 'https://www.linkedin.com/in/adam-beechen-b6320411/' },
      { name: 'Vanessa Robles', title: 'Production Director at Penguin Random House', url: 'https://www.linkedin.com/in/vanessa-robles-a505b39/' }
    ] },
  { title: 'Building a Personal Brand That Attracts Opportunities', date: 'Wed (7/8)', time: '5 PM PT', format: 'Solo',
    speakers: [
      { name: 'Lilah Jones', title: 'Keynote Speaker, Leadership Strategist & Executive Coach', url: 'https://www.linkedin.com/in/lilahjones' }
    ] },
  { title: 'Interview Mastery: Psychology of Winning Interviews', date: 'Tue (7/14)', time: '6 PM PT', format: 'Solo',
    speakers: [
      { name: 'Lindsay Shaw', title: 'Pro & Former Olympic Sport Psychologist and Psychophysiologist | Director of Sport Psychology for the Cleveland Guardians', url: 'https://www.linkedin.com/in/lindsay-shaw-4886b76/' }
    ] },
  { title: 'AI Without the Hype: What Actually Matters for Your Career', date: 'Wed (7/22)', time: '6 PM PT', format: 'Panel',
    speakers: [
      { name: 'Jeremy Rule', title: 'Chief AI Officer at TruDate Corporation', url: 'https://www.linkedin.com/in/jeremyrule/' },
      { name: 'Tanner Gilligan', title: 'Principal AI Engineer at Microsoft', url: 'https://www.linkedin.com/in/tanner-gilligan/' },
      { name: 'Avril Hsu', title: 'DMTS, Human-Centered AI Product Incubator & Builder at Dell Chief AI Office', url: 'https://www.linkedin.com/in/avrilwhsu' }
    ] },
  { title: 'Public Speaking for Real Life (Not Just the Stage)', date: 'Wed (7/29)', time: '6 PM PT', format: 'Solo',
    speakers: [
      { name: 'Monique Hayward', title: 'Executive Marketing & Communications Leader, Author, Fractional CMO & Former Senior Director at Microsoft & Intel', url: 'https://www.linkedin.com/in/moniquehayward' }
    ] }
];

var REVIEWS = [
  { text: "Wonderful insights and information, this gave me lots to think on! It was also very well-run and effective, easily the most time-effective webinar I've ever attended. Thank you everyone!", rating: 5 },
  { text: 'Pretty thoroughly highlighted the commonalities between these different creative industries and the quality of effort that marks success in them.', rating: 4.5 },
  { text: 'It was interesting to align passion, work ethic and essential rest in the journey of discipline to gain desired outcomes. Found that to be a commonality for each facilitator sharing their success story.', rating: 4.8 },
  { text: "Really interesting to hear these professionals' perspectives. They had good insights into how to package and present oneself. I appreciated the panel answering my question about neurodivergent job seekers.", rating: 5 },
  { text: 'It was very insightful and helpful towards answering questions I have regarding career change and how I can present myself to hiring managers.', rating: 5 },
  { text: "Lilah nailed it by clearing the assumptions on HOLD BARS. Her advice on reaching out to colleagues and people working in organizations you're seeking rather than relying only on LinkedIn — I believe her, sometimes it's faster getting work from these contacts.", rating: 4.8 }
];

/* ============ Syllabus ============ */

var syllabusList = document.getElementById('syllabus-list');

function speakerHTML(speaker) {
  return (
    '<li>' +
      '<a class="lesson__speaker" href="' + speaker.url + '" target="_blank" rel="noopener">' +
        '<span class="lesson__speaker-name">' + speaker.name + '</span>' +
        '<img src="assets/icon-linkedin.svg" alt="LinkedIn" width="16" height="16" />' +
      '</a>' +
      '<span class="lesson__speaker-title"> - ' + speaker.title + '</span>' +
    '</li>'
  );
}

function lessonHTML(item, index) {
  var num = String(index + 1).padStart(2, '0');
  var open = index === 0;
  return (
    '<article class="lesson' + (open ? ' lesson--open' : '') + '">' +
      '<p class="lesson__number">' + num + '</p>' +
      '<div class="lesson__info">' +
        '<h3 class="lesson__title">' + item.title + '</h3>' +
        '<div class="lesson__chips">' +
          '<span class="chip"><img src="assets/icon-calendar-gray.svg" alt="" width="20" height="20" />' + item.date + '</span>' +
          '<span class="chip"><img src="assets/icon-clock-gray.svg" alt="" width="20" height="20" />' + item.time + '</span>' +
          '<span class="lesson__badge">' + item.format + '</span>' +
        '</div>' +
        '<div class="lesson__details">' +
          '<div class="lesson__details-inner">' +
            '<p class="lesson__speakers-label">' + (item.speakers.length > 1 ? 'Speakers:' : 'Speaker:') + '</p>' +
            '<ul class="lesson__speakers">' + item.speakers.map(speakerHTML).join('') + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="lesson__action">' +
        '<button class="lesson__toggle" aria-expanded="' + open + '">' +
          '<span class="lesson__toggle-label"></span>' +
          '<span class="lesson__toggle-chevron" aria-hidden="true"></span>' +
        '</button>' +
      '</div>' +
    '</article>'
  );
}

syllabusList.innerHTML = SYLLABUS.map(lessonHTML).join('');

function setLessonOpen(lesson, open) {
  lesson.classList.toggle('lesson--open', open);
  lesson.querySelector('.lesson__toggle').setAttribute('aria-expanded', String(open));
}

syllabusList.addEventListener('click', function (event) {
  var toggle = event.target.closest('.lesson__toggle');
  if (!toggle) return;
  var lesson = toggle.closest('.lesson');
  var willOpen = !lesson.classList.contains('lesson--open');
  syllabusList.querySelectorAll('.lesson--open').forEach(function (open) {
    setLessonOpen(open, false);
  });
  if (willOpen) setLessonOpen(lesson, true);
});

/* ============ Reviews slider ============ */

var reviewsTrack = document.getElementById('reviews-track');
var reviewIndex = 0;

var STAR =
  '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.7l2.47 5.46 5.96.63-4.45 4.02 1.24 5.86L10 14.7l-5.22 2.97 1.24-5.86-4.45-4.02 5.96-.63L10 1.7z"/></svg>';

reviewsTrack.innerHTML = REVIEWS.map(function (review) {
  var pct = (review.rating / 5) * 100;
  return (
    '<div class="review">' +
      '<blockquote class="review__text">“' + review.text + '”</blockquote>' +
      '<div class="review__rating">' +
        '<span class="review__stars"><span class="review__stars-bg">' + STAR.repeat(5) + '</span>' +
        '<span class="review__stars-fill" style="width:' + pct + '%">' + STAR.repeat(5) + '</span></span>' +
        '<span class="review__score">' + review.rating.toFixed(1) + '</span>' +
      '</div>' +
    '</div>'
  );
}).join('');

var prevBtns = [document.getElementById('reviews-prev-d'), document.getElementById('reviews-prev-m')];
var nextBtns = [document.getElementById('reviews-next-d'), document.getElementById('reviews-next-m')];
var counterCurrentEls = [document.getElementById('reviews-counter-current')].concat(
  Array.prototype.slice.call(document.querySelectorAll('[data-counter-current]'))
);
var counterTotalEls = [document.getElementById('reviews-counter-total')].concat(
  Array.prototype.slice.call(document.querySelectorAll('[data-counter-total]'))
);

function renderReviews() {
  reviewsTrack.style.transform = 'translateX(-' + reviewIndex * 100 + '%)';
  var current = String(reviewIndex + 1).padStart(2, '0');
  var total = String(REVIEWS.length).padStart(2, '0');
  counterCurrentEls.forEach(function (el) { el.textContent = current; });
  counterTotalEls.forEach(function (el) { el.textContent = total; });
  prevBtns.forEach(function (btn) { btn.disabled = reviewIndex === 0; });
  nextBtns.forEach(function (btn) { btn.disabled = reviewIndex === REVIEWS.length - 1; });
}

prevBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (reviewIndex > 0) { reviewIndex--; renderReviews(); }
  });
});
nextBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (reviewIndex < REVIEWS.length - 1) { reviewIndex++; renderReviews(); }
  });
});

renderReviews();

// Swipe navigation (touch devices)
var touchStartX = null;
var reviewsViewport = document.querySelector('.reviews__viewport');

reviewsViewport.addEventListener('touchstart', function (event) {
  touchStartX = event.touches[0].clientX;
}, { passive: true });

reviewsViewport.addEventListener('touchend', function (event) {
  if (touchStartX === null) return;
  var delta = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;
  if (Math.abs(delta) < 40) return;
  if (delta < 0 && reviewIndex < REVIEWS.length - 1) { reviewIndex++; renderReviews(); }
  if (delta > 0 && reviewIndex > 0) { reviewIndex--; renderReviews(); }
}, { passive: true });

/* ============ FAQ accordion ============ */

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

/* ============ Sticky header shadow ============ */

var header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  header.classList.toggle('header--scrolled', window.scrollY > 8);
}, { passive: true });

/* ============ Copy support email ============ */

var emailBtn = document.getElementById('footer-email');
var emailTimer = null;

emailBtn.addEventListener('click', function () {
  var email = emailBtn.querySelector('.footer__email-text').textContent;
  var copied = function () {
    emailBtn.classList.add('footer__email--copied');
    clearTimeout(emailTimer);
    emailTimer = setTimeout(function () {
      emailBtn.classList.remove('footer__email--copied');
    }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(copied);
  } else {
    var area = document.createElement('textarea');
    area.value = email;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    copied();
  }
});

/* ============ Scroll to top ============ */

document.getElementById('scroll-up').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============ Mobile side menu ============ */

var menuBtn = document.getElementById('menu-btn');
var sideMenu = document.getElementById('side-menu');

function setMenuOpen(open) {
  sideMenu.classList.toggle('side-menu--open', open);
  sideMenu.setAttribute('aria-hidden', String(!open));
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
}

menuBtn.addEventListener('click', function () { setMenuOpen(true); });
document.getElementById('side-menu-close').addEventListener('click', function () { setMenuOpen(false); });
document.getElementById('side-menu-overlay').addEventListener('click', function () { setMenuOpen(false); });
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') setMenuOpen(false);
});

document.querySelectorAll('.side-menu__anchor').forEach(function (anchor) {
  anchor.addEventListener('click', function () {
    document.querySelectorAll('.side-menu__anchor--active').forEach(function (active) {
      active.classList.remove('side-menu__anchor--active');
    });
    anchor.classList.add('side-menu__anchor--active');
    setMenuOpen(false);
  });
});

// Highlight the section currently in view
var anchorMap = {};
document.querySelectorAll('.side-menu__anchor').forEach(function (anchor) {
  anchorMap[anchor.dataset.section] = anchor;
});
if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Object.keys(anchorMap).forEach(function (key) {
        anchorMap[key].classList.toggle('side-menu__anchor--active', key === entry.target.id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['intro', 'syllabus', 'reviews', 'faq'].forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/* ============ Scroll reveal ============ */

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section__heading, .section > .section__title, .benefit-card, .how-card, .pillar-card, .intro__card, .intro__title, .cta__icon, .cta__text, .reviews__heading, .reviews__card').forEach(function (el) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}
