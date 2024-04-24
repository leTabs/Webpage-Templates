// nav elements
const navHome = document.querySelector('.nav-home')


const navElementsArray = [navHome]


for(let i = 0; i < navElementsArray.length; i++){
    navElementsArray[i].addEventListener('click', ()=>{
        alert('pop')
    })
}
