function modal(openAttr, closeAttr, modalAttr) {
  const refs = {
    openModalBtn: document.querySelector(openAttr),
    closeModalBtn: document.querySelector(closeAttr),
    modal: document.querySelector(modalAttr),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}

(() => {
  modal('[data-modal-open]', '[data-modal-close]', '[data-modal]');
  modal('[data-modal-open-menu]', '[data-modal-close-menu]', '[data-modal]');
  modal('[data-modal-open-video]', '[data-modal-close-video]', '[data-modal-video]');

// Кнопки в Products
  modal('[data-modal-open-products-1]', '[data-modal-close-products-1]', '[data-modal-products-1]');
  modal('[data-modal-open-products-2]', '[data-modal-close-products-2]', '[data-modal-products-2]');
  modal('[data-modal-open-products-3]', '[data-modal-close-products-3]', '[data-modal-products-3]');

//               // Кнопки в Contacts
  modal('[data-modal-locations-open]', '[data-modal-locations-close]', '[data-modal-locations]');
  modal('[data-modal-franchise-open]', '[data-modal-franchise-close]', '[data-modal-franchise]');

  //               // Кнопка в About
  modal('[data-modal-open-about]', '[data-modal-close-about]', '[data-modal-about]');
})();