// nav elements
const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-about')
const navServices = document.querySelector('.nav-services')
const navGallaery = document.querySelector('.nav-gallery')
const navContact = document.querySelector('.nav-contact')

// sections elements
const sectionHome = document.querySelector('.section-home')
const sectionAbout = document.querySelector('.section-about')
const sectionServices = document.querySelector('.section-services')
const sectionContact = document.querySelector('.section-contact')
// other elements
const findOutMoreBtn = document.querySelector('.find-out-more-btn')
const fullServiceListBtn = document.querySelector('.full-service-list-btn')
const availableDatesBtn = document.querySelector('.available-dates-btn')
const facebookIcon = document.querySelector('.facebook-icon-el')
const instagramIcon = document.querySelector('.instagram-icon-el')
const twitter = document.querySelector('.twitter-icon-el')
const aboutWrapperContainer = document.querySelector('.about-wrapper-container')
const aboutWindowClose = document.querySelector('.about-window-close')
const datesWrapperContainer = document.querySelector('.dates-wrapper-container')
const datesWindowClose = document.querySelector('.dates-window-close')


// 
navHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
})
navAbout.addEventListener('click', ()=>{
    sectionAbout.scrollIntoView()
})
navServices.addEventListener('click', ()=>{
    sectionServices.scrollIntoView()
})
navGallaery.addEventListener('click', ()=>{
    alert('gallery')
})
navContact.addEventListener('click', ()=>{
    sectionContact.scrollIntoView()
})

// 
findOutMoreBtn.addEventListener('click', ()=>{
    aboutWrapperContainer.style.display = 'flex'
})
aboutWindowClose.addEventListener('click', ()=>{
    aboutWrapperContainer.style.display = 'none'
})
fullServiceListBtn.addEventListener('click', ()=>{
    window.location = 'venue-services.html'
})
availableDatesBtn.addEventListener('click', ()=>{
    datesWrapperContainer.style.display = 'flex'
})
datesWindowClose.addEventListener('click', ()=>{
    datesWrapperContainer.style.display = 'none'
})
facebookIcon.addEventListener('click', ()=>{
    alert('Comming soon')
})
instagramIcon.addEventListener('click', ()=>{
    alert('Comming soon')
})
twitter.addEventListener('click', ()=>{
    alert('Comming soon')
})
