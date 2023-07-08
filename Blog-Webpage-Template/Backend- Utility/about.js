const mainAbout = document.querySelector('.main-about-section')

const aboutTitle = 'Get to know me better'
const paragraph = `
    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
    <br /> <br />
    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
`
const aboutImageName = 'pexels-szabolcs-toth-10182592.jpg'

const aboutContent = function(title, text, image){
    mainAbout.innerHTML = `
    <div>     
    <h2 class="about-title">${title}</h2>
    <p class="about-text">
        ${text}
    </p>
    </div>
    <img src="images/${image}" alt="" class="about-img"/>
    `
}
aboutContent(aboutTitle, paragraph, aboutImageName)
