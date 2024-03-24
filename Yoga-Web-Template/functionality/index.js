const navBar = document.querySelector('.nav-bar')


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentPosition = window.scrollY;
    let scrollDirection = currentPosition > lastScrollTop ? 'down' : 'up';
    lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
    if (scrollDirection === 'down') {
      navBar.style.top = '-50%'
    } else {
      navBar.style.top = '0%'
    }
  });
