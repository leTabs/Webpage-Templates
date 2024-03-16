const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-about')

const sectionOpening = document.querySelector('.opening-section')
const sectionAbout = document.querySelector('.about-section')


navHome.addEventListener('click', ()=>{
    sectionOpening.scrollIntoView()
})

navAbout.addEventListener('click', ()=>{
    sectionAbout.scrollIntoView()
})
