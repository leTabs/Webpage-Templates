const sociaMedia = `
<span class="social-icons">
<img src="icons/facebook.svg" alt="My Facebook" class="icon" />
<img src="icons/instagram.svg" alt="My Instagram" class="icon" />
<img src="icons/twitter.svg" alt="My Twitter" class="icon" />
<img src="icons/linkedin.svg" alt="My Instagram" class="icon" />
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
            <span>
                <a href="#">Home</a>
                <a href="blog-feed.html">My Blog</a>
                <a href="about.html">About</a>
                <a href="#contact">Contact</a>
            </span>
        </div>
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

const form = document.querySelector('#contact')
form.innerHTML = formContent

const footer = document.querySelector('footer')
footer.innerHTML = footerContent
