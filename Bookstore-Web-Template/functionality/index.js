


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




//
function animationScrollTrigger(target, animation){

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

// Define the callback function
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animation);
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(target)};

const x = document.querySelector('.item-01')
const y = document.querySelector('.item-02')
const z = document.querySelector('.item-03')
animationScrollTrigger(x, 'item-jumpers')
animationScrollTrigger(y, 'item-jumpers')
animationScrollTrigger(z, 'item-jumpers')

const x2 = document.querySelector('.p-01')
const y2 = document.querySelector('.p-02')
const z2 = document.querySelector('.p-03')
animationScrollTrigger(x2, 'text-info-animator')
animationScrollTrigger(y2, 'text-info-animator')
animationScrollTrigger(z2, 'text-info-animator')

animationScrollTrigger(document.querySelector('.contact-img'), 'contact-img-animation')
