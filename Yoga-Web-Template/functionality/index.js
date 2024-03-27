// sections
const sectionHome = document.querySelector('.section-home')
const sectionAbout = document.querySelector('.section-about')
const sectionExercises = document.querySelector('.section-exercises')
const sectionMyVision = document.querySelector('.section-my-vision')
const sectionCommunication = document.querySelector('.section-communication')

const navBar = document.querySelector('.nav-bar')
const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-about')
const navExercises = document.querySelector('.nav-exercises')
const navMyVision = document.querySelector('.nav-my-vision')
const navCommunication = document.querySelector('.nav-communication')
const moveToExercisesBtn = document.querySelector('.move-to-exercises-btn')


const navAnchorsArray = [navHome, navAbout, navExercises, navMyVision, navCommunication]
const sectionsArray = [sectionHome, sectionAbout, sectionExercises, sectionMyVision, sectionCommunication]

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



// scroll into view events clause 
moveToExercisesBtn.addEventListener('click', ()=>{
  sectionExercises.scrollIntoView()
})

for(let i = 0; i < navAnchorsArray.length; i++){
  navAnchorsArray[i].addEventListener('click', ()=>{
    sectionsArray[i].scrollIntoView()
  })
}
