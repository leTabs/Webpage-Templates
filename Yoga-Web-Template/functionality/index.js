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
// mob
const mobNavIcon = document.querySelector('.mob-nav-icon')
const mobNavContainer = document.querySelector('.mob-nav-container')
const monNavCloseBtn = document.querySelector('.mob-nav-close-nav')

const moreAboutMe = document.querySelector('.more-about-me')
const facebookIconEl = document.querySelector('.facebook-icon-el')
const instagramIconEl = document.querySelector('.instagram-icon-el')
const twitterIconEl = document.querySelector('.twitter-icon-el')

const navAnchorsArray = [navHome, navAbout, navExercises, navMyVision, navCommunication]
const sectionsArray = [sectionHome, sectionAbout, sectionExercises, sectionMyVision, sectionCommunication]

// nav-small-window
const navSmallWindow = document.querySelector('.nav-small-window')


let lastScrollTop = 0;

function navHandlerFunc(){
  let currentPosition = window.scrollY;
  let scrollDirection = currentPosition > lastScrollTop ? 'down' : 'up';
  lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
  if (scrollDirection === 'down') {
    navBar.style.top = '-50%'
    navSmallWindow.style.display = 'block'
  } else {
    navBar.style.top = '0%'
    navSmallWindow.style.display = 'none'
  }
}



window.addEventListener('scroll', ()=>{
  navHandlerFunc()
});
navSmallWindow.addEventListener('click', ()=>{
  navHandlerFunc()
})

moreAboutMe.addEventListener('click', ()=>{
  alert('Coming soon')
})

facebookIconEl.addEventListener('click', ()=>{
  alert('Facebook anchor (empty)')
})
instagramIconEl.addEventListener('click', ()=>{
  alert('Instagram anchor (empty)')
})
twitterIconEl.addEventListener('click', ()=>{
  alert('Twitter anchor (empty)')
})
mobNavIcon.addEventListener('click', ()=>{
  mobNavContainer.style.display = 'block'
})
monNavCloseBtn.addEventListener('click', ()=>{
  mobNavContainer.style.transform = 'translate(-200%, -50%)' 
  setTimeout(()=>{
  mobNavContainer.style.transform = 'translate(-50%, -50%)'
  mobNavContainer.style.display = 'none'}, 250) 
})
// scroll into view events clause 
moveToExercisesBtn.addEventListener('click', ()=>{
  sectionExercises.scrollIntoView()
})

for(let i = 0; i < navAnchorsArray.length; i++){
  navAnchorsArray[i].addEventListener('click', ()=>{
    sectionsArray[i].scrollIntoView()
  })
}
