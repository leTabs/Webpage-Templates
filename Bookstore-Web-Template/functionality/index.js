


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

const item01 = document.querySelector('.item-01')
const item02 = document.querySelector('.item-02')
const item03 = document.querySelector('.item-03')


// const item04 = document.querySelector('.item-04')
// const item05 = document.querySelector('.item-05')
// const item06 = document.querySelector('.item-06')


animationScrollTrigger(item01, 'item-jumpers')
animationScrollTrigger(item02, 'item-jumpers')
animationScrollTrigger(item03, 'item-jumpers')

const x2 = document.querySelector('.p-01')
const y2 = document.querySelector('.p-02')
const z2 = document.querySelector('.p-03')
animationScrollTrigger(x2, 'text-info-animator')
animationScrollTrigger(y2, 'text-info-animator')
animationScrollTrigger(z2, 'text-info-animator')

animationScrollTrigger(document.querySelector('.contact-img'), 'contact-img-animation')


const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


const allItems = document.querySelectorAll('.item')
const allDots = document.querySelectorAll('.dot')

let itemCounter = 0;

function nextItem(itemIndex){
  if(itemCounter == allItems.length - 3){
    return(alert('No more items'))
  }
    allItems[itemIndex].style.display = 'none'
    allDots[itemIndex].style.backgroundColor = 'white';

    allItems[itemIndex + 3].style.display = 'block'
    allDots[itemIndex + 3].style.backgroundColor ='black'
    itemCounter++
    // alert(itemCounter)
}


function prevItem(itemIndex){
  if(itemCounter == 0){
    return
  }
  allItems[itemIndex - 1].style.display = 'block';
  allDots[itemIndex - 1].style.backgroundColor ='black'

  allItems[itemIndex + 2].style.display = 'none';
  allDots[itemIndex + 2].style.backgroundColor = 'white';
  itemCounter--
}


prevBtn.addEventListener('click', ()=>{prevItem(itemCounter)})
nextBtn.addEventListener('click', ()=>{nextItem(itemCounter)})

const aboutLeftDiv = document.querySelector('.about-left-div')
animationScrollTrigger(aboutLeftDiv, 'about-left-div-appearing')
