// nav elements
const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-about')
const navServices = document.querySelector('.nav-services')
const navGallaery = document.querySelector('.nav-gallery')
const navContact = document.querySelector('.nav-contact')

// sections elements
const sectionHome = document.querySelector('.section-home')
const sectionAbout = document.querySelector('.section-about')
// other elements
const findOutMoreBtn = document.querySelector('.find-out-more-btn')

// 
navHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
})
navAbout.addEventListener('click', ()=>{
    sectionAbout.scrollIntoView()
})
navServices.addEventListener('click', ()=>{
    alert('Services')
})
navGallaery.addEventListener('click', ()=>{
    alert('gallery')
})
navContact.addEventListener('click', ()=>{
    alert('contact')
})

// 
findOutMoreBtn.addEventListener('click', ()=>{
    alert('Comming soon')
})
