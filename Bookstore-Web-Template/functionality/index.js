const navDestinationsArray = document.querySelectorAll('.nav-destination')

const sectionOpening = document.querySelector('.opening-section')
const sectionAbout = document.querySelector('.about-section')


// alert(navDestinationsArray.length)
navDestinationsArray[0].addEventListener('click', ()=>{
    sectionOpening.scrollIntoView()
})
navDestinationsArray[1].addEventListener('click', ()=>{
    sectionAbout.scrollIntoView()
})
