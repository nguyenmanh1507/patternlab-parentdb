(function () {
  'use strict';

  const addNewBtn = document.getElementById('add-new-school-year');
  const closeModalBtns = document.querySelectorAll('.close-modal');
  const modal = document.getElementById('modal-add-school-year');

  addNewBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });

  $('.datepicker').dateDropper();
})();
