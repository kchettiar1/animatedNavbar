// Menu-toggle
const menuBtn = document.querySelector('.menuBtn')
let menuOpen = false;
console.log(menuBtn);

const navExpand = document.querySelector('.nav-menu');
let navOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false;

  }
  console.log('menuBtn',menuOpen);
})

menuBtn.addEventListener('click', () => {
  if (!navOpen) {
    navExpand.classList.add('expand')
    navExpand.classList.remove('collapse')
    navOpen = true
  } else {
    navExpand.classList.remove('expand')
    navExpand.classList.add('collapse')
    navOpen = false;

  }
  console.log('Nav Items',navOpen);
})

