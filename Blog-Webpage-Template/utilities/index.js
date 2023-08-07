// WEB PAGE CONTENT VARIABLES (required)

// opening panel variables

// image name 01
firstImageName = 'proxy01.jpg'
// image name 02
secondImageName = 'proxy01.jpg'
// image name 03
thirdImageName = 'proxy01.jpg'
// blog name/title
blogTitleName =  `Blog Title <br /> Continuing`



// recent post 01 variables

// post image name 
imgName01 = 'proxy02.jpg'
// image alternative text
imgAltText01 = 'proxy image could not load'
// post's date
date01 = 'Month 00'
// post's title 
postTitle01 = 'Post title'
// a small post description
postDescription01 = `
    A small description of the post.
    A small description of the post.
    A small description of the post.
`
// post number
postNumber01= 1


// recent post 02 variables

// post image name 
imgName02 = 'proxy02.jpg'
// image alternative text
imgAltText02 = 'proxy image could not load'
// post's date
date02 = 'Month 00'
// post's title
postTitle02 = 'Post title'
// a small post description
postDescription02 = `
A small description of the post.
A small description of the post.
A small description of the post.
`
// post number
postNumber02 = 2

/////////////////////////////////////////////////
// getting the empty wrapper elements

const introWall = document.querySelector('.intro-wall')

const recentPost01 = document.querySelector('.recent-post-01')
const recentPost02 = document.querySelector('.recent-post-02')
/*----------------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION

/* the function defines the structure of opening panel wrapper 
element and asigns it's content from the filled variabels, as parameters */
const openingPanel= function(firstImage, secondImage, thirdImage, blogName){
    introWall.innerHTML =`
        <img src="static/images/${firstImage}" alt="" class="wall-img first-img"/>
        <div class="middle-img-wrapper">
            <img src="static/images/${secondImage}" alt="" class="wall-img wall-mid-img"/>
            <p class="title">${blogName}</p>
        </div>
        <img src="static/images/${thirdImage}" alt="" class="wall-img third-img"/>
    `
}


/* the function defines the structure of recent post wrapper 
element and asigns it's content from the filled variabels, as parameters */
const recentPosts = function(container, imgName, imgAltText, date, postTitle, postDescription, postNumber){
    container.innerHTML = 
    `
        <img src="static/images/${imgName}" alt="${imgAltText}" />
        <div>
            <span>${date}</span>
            <h2>${postTitle}</h2>
            <br />
            <p class="order${postNumber}">${postDescription}</p>
        </div>
    `
}


/*-------------------------------------------------------------------------------------------------*/
/* FUNCTION CALL */

// opening panel,  function call.
openingPanel(
    firstImageName,
    secondImageName,
    thirdImageName, 
    blogTitleName
)

// recent post (First), function call
recentPosts(recentPost01, imgName01, imgAltText01, date01, postTitle01, postDescription01, postNumber01)

// recent post (Second), function call
recentPosts(recentPost02, imgName02, imgAltText02, date02, postTitle02, postDescription02, postNumber02)


/*---------------------------------------------------------------------------------------------------------------*/
/* EVENT LISTENERS */

// Recent post (First), "click" for destination
document.querySelector(`.order${postNumber01}`).addEventListener('click', ()=>{
    window.location = `file:///C:/Users/FUJITSU/Desktop/templates/Blog/blog-content.html?blogId=${postNumber01}`
})

// Recent post (Second), "click" for destination
document.querySelector(`.order${postNumber02}`).addEventListener('click', ()=>{
    window.location = `file:///C:/Users/FUJITSU/Desktop/templates/Blog/blog-content.html?blogId=${postNumber02}`
})
