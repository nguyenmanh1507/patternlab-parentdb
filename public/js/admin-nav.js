(function () {
  'use strict';

  const Dropdowns = document.querySelectorAll('.admin-nav__dropdown');
  const Nav = document.querySelector('.admin-nav');
  const NavToggleBtn = Nav.querySelector('.admin-nav__btn-toggle');

  Dropdowns.forEach(function (d) {
    const Target = d.querySelector('.admin-nav__link');
    const SubMenu = d.querySelector('.admin-nav__sub-menu');
    const Icon = Target.querySelector('.admin-nav__btn-dropdown .fas');

    Target.addEventListener('click', function (event) {
      event.preventDefault();
      SubMenu.classList.toggle('is-open');
      Icon.classList.toggle('fa-angle-up');
    });
  });

  NavToggleBtn.addEventListener('click', function () {
    Nav.classList.toggle('is-collapse');
  });
})();
