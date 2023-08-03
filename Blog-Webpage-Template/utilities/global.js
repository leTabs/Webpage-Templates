// ANCHOR VARIABLE VALUES (required)

facebookAccount = 'http://facebook.com'
instagramAccount = 'http://instagram.com'
twitterAccount = 'http://twitter.com'
linkedInAccount = 'http://linkedin.com'


// anchor variable values required END
/*---------------------------------------------------------------------------------------------*/
// WEB PAGE CONTENT VARIABLES (not required)

// social media html structure
const sociaMedia = `
  <span class="social-icons">
  <img src="static/icons/facebook.svg" alt="My Facebook" class="icon fb " />
  <img src="static/icons/instagram.svg" alt="My Instagram" class="icon insta" />
  <img src="static/icons/twitter.svg" alt="My Twitter" class="icon twitter ft" />
  <img src="static/icons/linkedin.svg" alt="My Instagram" class="icon in ft" />
  </span>
`

// computer screen navigation structure
const navContent = `
  <div class="upper-nav">
    <input type="search" placeholder="Search..." class="search"/>
    ${sociaMedia}
  </div>
  <div class="lower-nav">
    <h3 class="nav-title">Up North</h3>
    <img src="static/icons/bars-solid.svg" alt="Mobile Navbar Button" class="nav-btn"/>
    <span class="anchors"></span>
  </div>
`

// mobile screen navigation structure
const mobileNavContent=`
// here was the content of the modile navigation
`

// form content
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

// footer content
const footerContent = `
${sociaMedia}
<p> &copy <span class="copyright">2023 by leTabs</span></p>
`
// web page content variables END
/*----------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION


// getting the empty wrapper element (type: nav, className: "navigation-bar")
const navBar = document.querySelector('.navigation-bar')

// getting the empty wrapper element (type: form, id: "contact")
const form = document.querySelector('#contact')

// getting the empty wrapper element (type: footer)
const footer = document.querySelector('footer')


// the function assigns content from the content variables to each respectible wrapper element
const globalContentAssignment = function(){
  navBar.innerHTML = navContent
  form.innerHTML = formContent
  footer.innerHTML = footerContent
}


// the function alters the browser window to the destination (social media accounts) 
const mediaEndpoint = function(destination){
  window.location = `${destination}`
}


// getting the empty wrapper element (type: div, className: "mobile-nav")
const mobileNav = document.querySelector('.mobile-nav');

// the function defines the opacity of the navigation (mobile version)
const opacityReduce = function(n) {
  mobileNav.style.opacity = `${n / 10}`;
};

// the function controls the behaviour of the mobile navigation (display & opacity)
const mobileNavBehaviour = function(){
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
}
// function definition END
/*------------------------------------------------------------------------------------------*/
// FUNCTION CALL

globalContentAssignment()

// function call END
/*------------------------------------------------------------------------------------------*/
// EVENT LISTENERS 

// getting the appropriate element (type: button, className: "nav-btn")
const navButton = document.querySelector('.nav-btn');

// handles the mobile navigation
navButton.addEventListener('click', () => {mobileNavBehaviour()});

// they navigate to the social media respective accounts



const facebooks = document.querySelectorAll('.fb')
const instagrams = document.querySelectorAll('.insta')
const twitters = document.querySelectorAll('.twitter')
const linkedins = document.querySelectorAll('.in')


const includeDestination = function(icon, destination){
  icon.addEventListener('click', ()=>{mediaEndpoint(destination)});
}


facebooks.forEach((item)=> includeDestination(item, facebookAccount));
instagrams.forEach((item)=> includeDestination(item, instagramAccount));
twitters.forEach((item)=> includeDestination(item, twitterAccount));
linkedins.forEach((item)=> includeDestination(item, linkedInAccount));
/*---------------------------------------------------------------------------------------------*/
