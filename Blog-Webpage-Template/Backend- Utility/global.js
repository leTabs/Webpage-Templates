const sociaMedia = `
<span class="social-icons">
<img src="icons/facebook.svg" alt="My Facebook" class="icon fb" />
<img src="icons/instagram.svg" alt="My Instagram" class="icon insta" />
<img src="icons/twitter.svg" alt="My Twitter" class="icon twitter" />
<img src="icons/linkedin.svg" alt="My Instagram" class="icon in" />
</span>
`

const navContent = `
<div class="upper-nav">
                <input type="search" placeholder="Search..." class="search"/> <!--class="fas fa-search"-->
${sociaMedia}
        </div>
        <!--  -->
        <div class="lower-nav">
            <h3 class="nav-title">Up North</h3>
            <img src="icons/bars-solid.svg" alt="Mobile Navbar Button" class="nav-btn"/>
            <span class="anchors">

            </span>
        </div>
`
const mobileNavContent=`
// here was the content of the modile navigation
`
const formContent = `
<h3 class="form-title">Talk to me freely</h3>
<div>
    <span>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name"/>
    </span>
    <span>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name"/> 
    </span>
    <span>
        <label for="mail">Email</label>
        <input type="email" id="mail" />
    </span>
    <span>
        <label for="message">Message</label>
        <input type="textarea" id="message"/>
    </span>
</div>
<button type="submit" id="form-btn">Submit</button>
`

const footerContent = `
<span class="social-icons">
<img src="icons/facebook.svg" alt="My Facebook" class="icon" />
<img src="icons/instagram.svg" alt="My Instagram" class="icon" />
<img src="icons/twitter.svg" alt="My Twitter" class="icon" />
<img src="icons/linkedin.svg" alt="My Instagram" class="icon" />
</span>
<p> &copy <span class="copyright">2023 by leTabs</span></p>
`
const navBar = document.querySelector('.navigation-bar')
navBar.innerHTML = navContent

// const modileNavBar = document.querySelector('.mobile-nav')
// modileNavBar.innerHTML = mobileNavContent

const form = document.querySelector('#contact')
form.innerHTML = formContent

const footer = document.querySelector('footer')
footer.innerHTML = footerContent


const navButton = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav');

const opacityReduce = function(n) {
  mobileNav.style.opacity = `${n / 10}`;
};

navButton.addEventListener('click', () => {
  if (mobileNav.style.display !== 'block') {
    mobileNav.style.opacity = `1`;
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
    }, 15);
  }
});


// social media hyperlinks
const mediaEndpoint = function(destination){
  window.location = `${destination}`
}
document.querySelector('.fb').addEventListener('click', ()=>{mediaEndpoint('http://facebook.com')})
document.querySelector('.insta').addEventListener('click', ()=>{mediaEndpoint('http://instagram.com')})
document.querySelector('.twitter').addEventListener('click', ()=>{mediaEndpoint('http://twitter.com')})
document.querySelector('.in').addEventListener('click', ()=>{mediaEndpoint('http://linkedin.com')})

