// JS for the fixed header

const{ height: pageHeaderHeight}=document
.querySelector(".site-header")
.getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// // JS for the modal window

// const refs = {
//   openModalBtn: document.querySelector("[data-open-modal]"),
//   closeModalBtn: document.querySelector("[data-close-modal]"),
//   backdrop: document.querySelector("[data-backdrop]"),
// };

// refs.openModalBtn.addEventListener("click", toggleModal)
// refs.closeModalBtn.addEventListener("click", toggleModal);

// refs.backdrop.addEventListener("click", logBackdropClick);

// function toggleModal() {
//   refs.backdrop.classList.toggle("is-hidden")
// }

// function logBackdropClick(){
//   console.log("it's click")
// }

// // JS FORM

// (() => {
//   document
//   .querySelector('.contact-form')
//   .addEventListener('submit', e=> {
//     e.preventDefault();
//     new FormData(e.currentTarget).forEach((value, name) =>
//     console.log(`${name}: ${value}`),
//     );
    
// // auto reset after submition ( btn "submit")
//     e.currentTarget.reset();
//   });
// })();