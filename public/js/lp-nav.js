(function () {
  'use strict';

  const NavItems = document.querySelectorAll('#lp-nav > a');

  NavItems.forEach(item => {
    const href = item.getAttribute('href');
    const Section = document.querySelector(href);
    const sectionOffsetTop = Section.offsetTop;
    console.log(sectionOffsetTop);
    item.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({ top: sectionOffsetTop, behavior: 'smooth' });
    });
  });
})();
