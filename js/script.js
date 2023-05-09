const headerBars = document.querySelector('.header__bars')
const overlay = document.querySelector('.header__overlay')
const headerRight = document.querySelector('.header__right')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
  headerRight.classList.toggle('show-menu')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  headerRight.classList.remove('show-menu')
})

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  header.classList.toggle('sticky', window.scrollY > 99);
});