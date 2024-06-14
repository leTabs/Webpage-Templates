// nav elements
const largeNavBar = document.querySelector('.large-nav-bar')
const navLHome = document.querySelector('.nav-l-home')
const navLOverview = document.querySelector('.nav-l-overview')
const navLServices = document.querySelector('.nav-l-services')

// section elements
const sectionHome = document.querySelector('.section-home')
const sectionOverview = document.querySelector('.section-overview')
const sectionServices = document.querySelector('.section-services')

window.addEventListener('scroll', ()=>{
    const scrollPosition = window.scrollY;
    const maxScroll = 475;
    if(scrollPosition >= maxScroll){
        largeNavBar.style.width = '100vw'
        largeNavBar.style.backgroundColor = 'black'
        largeNavBar.style.boxShadow = '5px 5px 15px black'
        largeNavBar.style.paddingRight = '0'
    }
    else{
        largeNavBar.style.width = '40vw'
        largeNavBar.style.backgroundColor = 'transparent'
        largeNavBar.style.boxShadow = 'none'
        largeNavBar.style.paddingRight = '3.5rem'
    }
})

navLHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
})
navLOverview.addEventListener('click', ()=>{
    sectionOverview.scrollIntoView()
})
navLServices.addEventListener('click', ()=>{
    sectionServices.scrollIntoView()
})
