// nav elements
const navHome = document.querySelector('.nav-home')
const navOurCoffee = document.querySelector('.nav-our-coffee')
const navHistory = document.querySelector('.nav-history')
const navInfo = document.querySelector('.nav-info')
const navMenu = document.querySelector('.nav-menu')

const navElementsArray = [navHome, navOurCoffee, navHistory, navInfo]

// section elements
const sectionHome = document.querySelector('.section-home')
const sectionOurCoffee = document.querySelector('.section-our-coffee')
const sectionHistory = document.querySelector('.section-history')
const sectionInfo = document.querySelector('.section-info')

const sectionElementsArray = [sectionHome, sectionOurCoffee, sectionHistory, sectionInfo]


for(let i = 0; i < navElementsArray.length; i++){
    navElementsArray[i].addEventListener('click', ()=>{
        sectionElementsArray[i].scrollIntoView()
    })
}

navMenu.addEventListener('click', ()=>{
    alert('Menu panel')
})
