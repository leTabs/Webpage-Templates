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

// social media elements
const allInstaIcons = document.querySelectorAll('.insta-icon')
const allFacebookIcons = document.querySelectorAll('.facebook-icon')
const allXIcons = document.querySelectorAll('.x-icon')
// 
const menuWindowWrapper = document.querySelector('.menu-window-wrapper');
const menuCloseBtn = document.querySelector('.menu-close-btn')
// const menuWindow = document.querySelector('.menu-window')

for(let i = 0; i < navElementsArray.length; i++){
    navElementsArray[i].addEventListener('click', ()=>{
        sectionElementsArray[i].scrollIntoView()
    })
}

navMenu.addEventListener('click', ()=>{
    menuWindowWrapper.style.display = 'block'
    menuWindowWrapper.scrollTop = 0;
    document.querySelector('html').style.overflowY = 'hidden'
})
menuCloseBtn.addEventListener('click', ()=>{
    menuWindowWrapper.style.display = 'none'
    document.querySelector('html').style.overflowY = 'auto'
})
document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        menuWindowWrapper.style.display = 'none'
        document.querySelector('html').style.overflowY = 'auto'

}})

// social media anchors
allInstaIcons[0].addEventListener('click', ()=>{
    window.location = 'https://www.instagram.com/'
})
allInstaIcons[1].addEventListener('click', ()=>{
    window.location = 'https://www.instagram.com/'
})

allFacebookIcons[0].addEventListener('click', ()=>{
    window.location = 'https://www.facebook.com/'
})
allFacebookIcons[1].addEventListener('click', ()=>{
    window.location = 'https://www.facebook.com/'
})

allXIcons[0].addEventListener('click', ()=>{
    window.location = 'https://www.x.com/'
})
allXIcons[1].addEventListener('click', ()=>{
    window.location = 'https://www.x.com/'
})
