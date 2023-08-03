// ANCHOR VARIABLE VALUES (required)


// sidebar-article:
articleImageName = "pexels-david-mcbee-2302017.jpg"
articleImageAltText = "this is an image"
articleTitle = "This is the title"
articleText = "A fe good words a few gwords a few gwords a few gwords a few gwords a few gwords a few good words"


// blog sudgestions:
img01 = 'pexels-arthouse-studio-4311142.jpg'
imgText01 = 'First image'
title01 = 'title 01'

img02 = 'pexels-eneida-nieves-803975.jpg'
imgText02 = 'Second image'
title02 = 'title 02'


// WEB PAGE CONTENT VARIABLES (not required)

const socialIcons = `
<span class="social-icons">
    <img src="static/icons/facebook.svg" alt="My Facebook" class="icon fb" />
    <img src="static/icons/instagram.svg" alt="My Instagram" class="icon insta" />
    <img src="static/icons/twitter.svg" alt="My Twitter" class="icon twitter" />
    <img src="static/icons/linkedin.svg" alt="My Instagram" class="icon in" />
</span>
`

const articleWrapper = document.querySelector('.article-section')
// web page content variables END
/*------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION


const articleContent  = function(imageName, imageAltText, title, text){
    articleWrapper.innerHTML =`
        <img src="static/images/${imageName}" alt="${imageAltText}" class="article-img" />
        <p>${title}</p>
        <p>${text}</p>
        <button class="read-more">Read more</button>
        <hr />
        ${socialIcons}
    `
}

const blogSudgestion = function(firstImg, firstImgAlText,sudgestionTitle01,
    secImg, secImgAltText, sudgestionTitle02){
    return(`
    <section class="reminder">
        <p class="pseudo-title">Other posts <span class="see-all">See all</span></p>
        <div class="blog-sample-wrapper">
            <div class="blog-sample">
                <img src="static/images/${firstImg}" alt="${firstImgAlText}" />
                <p>${sudgestionTitle01}</p>
            </div>
            <div class="blog-sample">
                <img src="static/images/${secImg}" alt="${secImgAltText}" />
                <p>${sudgestionTitle02}</p>
            </div>
        </div>
    </section>
    `)
}

const blogContentParser  = function(
    date, 
    title, 
    textContent, 
    imageName, 
    imgAltText,
    innerTitle,
    quoteText = "",
){
return(`
    <p class="date-elip">${date}</p>
    <h1 class="blog-content-title">${title}</h1>
    <p class="content">${textContent}</p>
    <img src="static/images/${imageName}" alt="${imgAltText}" class="blog-content-img">
    <p class="content">${textContent}</p>
    <h2 class="inner-title">${innerTitle}</h2>
    <blockquote class="content-quote">${quoteText}</blockquote>
    <p class="content">${textContent}</p>
    <hr />
    ${socialIcons}
    ${sudgestions}
`)
}

//function definition END
/*------------------------------------------------------------------------------------------------------*/
// FUNCTION CALL

const sudgestions = blogSudgestion(
    img01,
    imgText01,
    title01,
    img02,
    imgText02,
    title02
)

// getting URL required information
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blogId');

// calling the function as an item of the blogData array
const blogData = {
  1:blogContentParser(
    'June 22',
    'Here is the title',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
    'pexels-bino-gadoino-16622215.jpg', 'Image alterntive text here',
    'Quote title',
    'Give a man a fish he eat for a day, learn a man to fsh he ll eat for the rest of his life'
),
  2:blogContentParser(
    'March 05',
    'Here is the title',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
    'pexels-bino-gadoino-16622215.jpg', 'Image alterntive text here',
    'Quote title',
    'Give a man a fish he eat for a day, learn a man to fsh he ll eat for the rest of his life'
),
};



articleContent(articleImageName, articleImageAltText, articleTitle, articleText)

/*-----------------------------------------------------------------------------------------*/
// EVENT LISTENERS & CONTROL FLOW

// getting the empty wrapper element (type: main, className: "main-blog-content")
const blogContent= document.querySelector('.main-blog-content');
// establising the contitions for the content of each blog
if(blogData[blogId]){
    blogContent.innerHTML = blogData[blogId];
}else(blogContent.innerHTML = '<h1>The blog is missing...</h1>')


// creating a destination for the "SEE ALL" button
document.querySelector('.see-all').addEventListener('click', ()=>{
    window.location = 'blog-feed.html'
})


