// WEB PAGE CONTENT VARIABLES (required)

// title
const aboutTitle = 'About Section Title'
// the text content (paragraph)
const paragraph = `
Text content that describes valuable information about the author, ownser or manager of the website. Text content that describes valuable information about the author, ownser or manager of the website. Text content that describes valuable information about the author, ownser or manager of the website. 
    <br /> <br />
    Text content that describes valuable information about the author, ownser or manager of the website. Text content that describes valuable information about the author, ownser or manager of the website. Text content that describes valuable information about the author, ownser or manager of the website. 
`
// the image's name 
const aboutImageName = 'proxy03.png'
// the image's alternative text
const aboutImgAltText = 'proxy image could not load'

/////////////////////////////////////////
// VARIABLES (not required)

// getting the empty element:
const mainAbout = document.querySelector('.main-about-section')
/*---------------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION

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

/*---------------------------------------------------------------------------------------------*/
// FUNCTION CALL

aboutContent(aboutTitle, paragraph, aboutImageName, aboutImgAltText)
