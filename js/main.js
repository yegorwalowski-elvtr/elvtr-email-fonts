/* ============ Data ============ */

var SYLLABUS = [
  { title: 'How Top Professionals Actually Build Their Careers', date: 'Wed (6/10)', time: '6 PM PT', format: 'Panel',
    desc: "What separates deliberate career-building from just staying busy — from people who've done both." },
  { title: 'Breaking Into Any Industry Without Experience', date: 'Wed (6/17)', time: '6 PM PT', format: 'Panel',
    desc: "How to enter a new field when your résumé doesn't check the usual boxes." },
  { title: 'What Hiring Managers Really Look For (And What They Ignore)', date: 'Wed (6/24)', time: '6 PM PT', format: 'Panel',
    desc: 'The signals that actually move a hiring decision — straight from the people making it.' },
  { title: 'Interview Mastery: Psychology of Winning Interviews', date: 'Wed (7/1)', time: '6 PM PT', format: 'Panel',
    desc: 'The psychology behind interviews that land offers, not just get you through the door.' },
  { title: 'AI Without the Hype: What Actually Matters for Your Career', date: 'Wed (7/8)', time: '5 PM PT', format: 'Panel',
    desc: "Cutting through the noise on AI to focus on what's actually changing your day-to-day work." },
  { title: 'How to Stand Out in a Competitive Field', date: 'Tue (7/14)', time: '6 PM PT', format: 'Panel',
    desc: 'Practical ways to differentiate yourself when every résumé looks the same.' },
  { title: 'Public Speaking for Real Life (Not Just the Stage)', date: 'Wed (7/22)', time: '6 PM PT', format: 'Solo',
    desc: 'Speaking with confidence in meetings and pitches — not just on stage.' },
  { title: 'Building a Personal Brand That Gets You Opportunities', date: 'Wed (7/29)', time: '6 PM PT', format: 'Solo',
    desc: 'How to build a reputation that brings opportunities to you, instead of chasing them.' },
  { title: 'How to Turn Skills Into Opportunities', date: 'Wed (8/5)', time: '6 PM PT', format: 'Panel',
    desc: 'Translating what you already know into your next role, project, or opportunity.' },
  { title: 'What It Takes to Grow From Specialist to Leader', date: 'Wed (8/12)', time: '6 PM PT', format: 'Solo',
    desc: 'The mindset and skill shifts required to move from doing the work to leading it.' },
  { title: 'How to Learn Faster and Smarter', date: 'Wed (8/19)', time: '6 PM PT', format: 'Solo',
    desc: 'Learning techniques that help you retain more in less time.' },
  { title: 'Getting Promoted: What Nobody Tells You', date: 'Wed (8/26)', time: '6 PM PT', format: 'Panel',
    desc: "The unspoken factors behind promotions, from people who've been on both sides of the decision." },
  { title: 'Designing Your Next 6 Months (Action Plan Session)', date: 'Wed (9/2)', time: '6 PM PT', format: 'Solo',
    desc: 'A hands-on session to leave with a concrete plan for your next six months.' }
];

var VISIBLE_LESSONS = 5;

var REVIEWS = [
  { text: 'Pretty thoroughly highlighted the commonalities between these different creative industries and the quality of effort that marks success in them.', rating: 4.5 },
  { text: 'It was interesting to align passion, work ethic and essential rest in the journey of discipline to gain desired outcomes. Found that to be a commonality for each facilitator sharing their success story.', rating: 4.8 },
  { text: "Really interesting to hear these professionals' perspectives. They had good insights into how to package and present oneself. I appreciated the panel answering my question about neurodivergent job seekers.", rating: 5 },
  { text: 'It was very insightful and helpful towards answering questions I have regarding career change and how I can present myself to hiring managers.', rating: 5 },
  { text: "Wonderful insights and information, this gave me lots to think on! It was also very well-run and effective, easily the most time-effective webinar I've ever attended. Thank you everyone!", rating: 5 },
  { text: "Lilah nailed it by clearing the assumptions on HOLD BARS. Her advice on reaching out to colleagues and people working in organizations you're seeking rather than relying only on LinkedIn — I believe her, sometimes it's faster getting work from these contacts.", rating: 4.8 }
];

/* ============ Syllabus ============ */

var syllabusList = document.getElementById('syllabus-list');

function lessonHTML(item, index) {
  var num = String(index + 1).padStart(2, '0');
  var open = index === 0;
  var hidden = index >= VISIBLE_LESSONS;
  return (
    '<article class="lesson' + (open ? ' lesson--open' : '') + (hidden ? ' lesson--hidden' : '') + '">' +
      '<p class="lesson__number">' + num + '</p>' +
      '<div class="lesson__info">' +
        '<h3 class="lesson__title">' + item.title + '</h3>' +
        '<div class="lesson__chips">' +
          '<span class="chip"><img src="assets/icon-calendar-gray.svg" alt="" width="20" height="20" />' + item.date + '</span>' +
          '<span class="chip"><img src="assets/icon-clock-gray.svg" alt="" width="20" height="20" />' + item.time + '</span>' +
          '<span class="lesson__badge">' + item.format + '</span>' +
        '</div>' +
        '<div class="lesson__details">' +
          '<div class="lesson__details-inner"><p class="lesson__desc">' + item.desc + '</p></div>' +
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

var showAllBtn = document.getElementById('syllabus-show-all');
var syllabusExpanded = false;

showAllBtn.addEventListener('click', function () {
  syllabusExpanded = !syllabusExpanded;
  syllabusList.classList.toggle('syllabus__list--expanded', syllabusExpanded);
  showAllBtn.textContent = syllabusExpanded ? 'Hide full Syllabus' : 'Show all Syllabus';
  if (!syllabusExpanded) {
    // collapse any lesson that is about to be hidden again
    syllabusList.querySelectorAll('.lesson--hidden.lesson--open').forEach(function (lesson) {
      setLessonOpen(lesson, false);
    });
    document.getElementById('syllabus').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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
