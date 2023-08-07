// DESTINATION VARIABLES VALUES (required)


// sidebar-article:
articleImageName = "proxy02.jpg"
articleImageAltText = "proxy image could not load"
articleTitle = "Title"
articleText = "Text content that describes valuable information about the author, ownser or manager of the website. "


// blog sudgestions:
img01 = 'proxy01.jpg'
imgText01 = 'proxy image could not load'
title01 = 'Blog title'

img02 = 'proxy01.jpg'
imgText02 = 'proxy image could not load'
title02 = 'Blog title'


///////////////////////////////////////////////
// STANDARD VARIABLES (not required)

const socialIcons = `
<span class="social-icons">
    <img src="static/icons/facebook.svg" alt="My Facebook" class="icon fb" />
    <img src="static/icons/instagram.svg" alt="My Instagram" class="icon insta" />
    <img src="static/icons/twitter.svg" alt="My Twitter" class="icon twitter" />
    <img src="static/icons/linkedin.svg" alt="My Instagram" class="icon in" />
</span>
`

// getting the empty wrapper element 
// (type: article, className: "article-section")
const articleWrapper = document.querySelector('.article-section');

// (type: main, className: "main-blog-content")
const blogContent= document.querySelector('.main-blog-content');


// getting URL required information
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blogId');

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
    textContent01, 
    imageName, 
    imgAltText,
    textContent02 = "",
    quoteTitle,
    quoteText = "",
    textContent03 = ""
){
return(`
    <p class="date-elip">${date}</p>
    <h1 class="blog-content-title">${title}</h1>
    <p class="content">${textContent01}</p>
    <img src="static/images/${imageName}" alt="${imgAltText}" class="blog-content-img">
    <p class="content">${textContent02}</p>
    <h2 class="inner-title">${quoteTitle}</h2>
    <blockquote class="content-quote">${quoteText}</blockquote>
    <p class="content">${textContent03}</p>
    <hr />
    ${socialIcons}
    ${sudgestions}
`)
}


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

// calling the function as an item of the blogData array
const blogData = {
  1:blogContentParser(
    'Month 00',
    'Blog Title',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
    'proxy01.jpg', 'Image alterntive text here',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
    'Quote title',
    'It\'s like driving a car at night. You never see further than your headlights, but you can make the whole trip that way. ',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.'
),
  2:blogContentParser(
    'Month 00',
    'Here is the title',
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
    'proxy01.jpg', 'Image alterntive text here',
    '',
    'Quote title',
    'Give a man a fish he eat for a day, learn a man to fsh he ll eat for the rest of his life',
    ''
),
};



articleContent(articleImageName, articleImageAltText, articleTitle, articleText)

/*-----------------------------------------------------------------------------------------*/
// EVENT LISTENERS & CONTROL FLOW


// establising the contitions for the content of each blog
if(blogData[blogId]){
    blogContent.innerHTML = blogData[blogId];
}else(blogContent.innerHTML = '<h1>The blog is missing...</h1>')

// creating a destination for the "SEE ALL" button
document.querySelector('.see-all').addEventListener('click', ()=>{
    window.location = 'blog-feed.html'
})

// getting the "Read More" button element
const readMore = document.querySelector('.read-more');

readMore.addEventListener('click', ()=>{
    window.location = 'about.html'
})
