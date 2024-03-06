


const navDestinationsArray = document.querySelectorAll('.nav-destination')

const sectionOpening = document.querySelector('.opening-section')
const sectionAbout = document.querySelector('.about-section')
const sectionProductsServices = document.querySelector('.products-and-services')
const sectionContact = document.querySelector('.contact-section')

const sectionsArray = [sectionOpening, sectionAbout, sectionProductsServices, sectionContact]

const continueBtn = document.querySelector('.continue-btn')
const backToTheTopButton = document.querySelector('.back-to-the-top-btn')

for(let i = 0; i < navDestinationsArray.length; i++){
    navDestinationsArray[i].addEventListener('click', ()=>{
        sectionsArray[i].scrollIntoView()
    })
}

continueBtn.addEventListener('click', ()=>{
    sectionProductsServices.scrollIntoView()
})

backToTheTopButton.addEventListener('click', ()=>{
    sectionOpening.scrollIntoView();
})
