// nav elements
const navHome = document.querySelector('.nav-home')
const navOurCoffee = document.querySelector('.nav-our-coffee')

const navElementsArray = [navHome, navOurCoffee]

// section elements
const sectionHome = document.querySelector('.section-home')
const sectionOurCoffee = document.querySelector('.section-our-coffee')

const sectionElementsArray = [sectionHome, sectionOurCoffee]


for(let i = 0; i < navElementsArray.length; i++){
    navElementsArray[i].addEventListener('click', ()=>{
        sectionElementsArray[i].scrollIntoView()
    })
}
