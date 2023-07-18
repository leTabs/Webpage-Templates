const introWall = document.querySelector('.intro-wall')


const frontImages = function(firstImage, secondImage, thirdImage, blogName){
    introWall.innerHTML =`
        <img src="images/${firstImage}" alt="" class="wall-img first-img"/>
        <div class="middle-img-wrapper">
            <img src="images/${secondImage}" alt="" class="wall-img wall-mid-img"/>
            <p class="title">${blogName}</p>
        </div>
        <img src="images/${thirdImage}" alt="" class="wall-img third-img"/>
    `
}

frontImages(
    'pexels-eneida-nieves-803975.jpg',
    'pexels-david-mcbee-2302017.jpg',
    'pexels-bino-gadoino-16622215.jpg',
    `My Blog.<br /> The mountain side.`
)



const navButton = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav');

const opacityReduce = function(n) {
  mobileNav.style.opacity = `${n / 10}`;
};

navButton.addEventListener('click', () => {
  if (mobileNav.style.display !== 'block') {
    mobileNav.style.display = 'block';
  } else {
    let i = 10;
    const reduceOpacityInterval = setInterval(() => {
      opacityReduce(i);
      i--;
      if (i <= 0) {
        clearInterval(reduceOpacityInterval);
        mobileNav.style.display = 'none';
      }
    }, 50);
    
    mobileNav.style.opacity = `1`;
  }
});
