// ANCHOR VARIABLE VALUES (required)

// title
const aboutTitle = 'Get to me better'
// the text content (paragraph)
const paragraph = `
    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
    <br /> <br />
    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
`
// the image's name 
const aboutImageName = 'pexels-szabolcs-toth-10182592.jpg'
// the image's alternative text
const aboutImgAltText = 'this is an image'

// anchor variable values required END
/*---------------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION


// getting the empty element (type: main, className: "main-about-section")
const mainAbout = document.querySelector('.main-about-section')

// the function defines the structure of the empty element and specifies it's content 
// from the variables, passed as arguments during the function call
const aboutContent = function(title, text, image, altText){
    mainAbout.innerHTML = `
    <div>     
        <h2 class="about-title">${title}</h2>
        <p class="about-text">
            ${text}
        </p>
    </div>
    <img src="static/images/${image}" alt="${altText}" class="about-img"/>
    `
}

// function definition END
/*---------------------------------------------------------------------------------------------*/
// FUNCTION CALL

aboutContent(aboutTitle, paragraph, aboutImageName, aboutImgAltText)
