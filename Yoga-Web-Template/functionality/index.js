const navBar = document.querySelector('.nav-bar')
const moveToExercisesBtn = document.querySelector('.move-to-exercises-btn')
const sectionExercises = document.querySelector('.section-exercises')


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentPosition = window.scrollY;
    let scrollDirection = currentPosition > lastScrollTop ? 'down' : 'up';
    lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
    if (scrollDirection === 'down') {
      navBar.style.top = '-50%'
    } else {
      navBar.style.top = '0%'
    }
  });




moveToExercisesBtn.addEventListener('click', ()=>{
  sectionExercises.scrollIntoView()
})
