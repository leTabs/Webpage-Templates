// WEB PAGE CONTENT VARIABLES (required)


// opening panel variables

// image name 01
firstImageName = 'pexels-eneida-nieves-803975.jpg'
// image name 02
secondImageName = 'pexels-david-mcbee-2302017.jpg'
// image name 03
thirdImageName = 'pexels-bino-gadoino-16622215.jpg'
// blog name/title
blogTitleName =  `My Blog.<br /> The mountain side.`



// recent post 01 variables

// post image name 
imgName01 = 'pexels-arthouse-studio-4311142.jpg'
// image alternative text
imgAltText01 = 'this is an image'
// post's date
date01 = 'June 02'
// post's title 
postTitle01 = 'Title goes here'
// a small post description
postDescription01 = `
    a small description of the post
    a small description of the post
    a small description of the post
    a small description of the pos
`
// post number
postNumber01= 1



// recent post 02 variables

// post image name 
imgName02 = 'pexels-adam-lowly-2622290.jpg'
// image alternative text
imgAltText02 = 'this is an image'
// post's date
date02 = 'June 22'
// post's title
postTitle02 = 'Title popin here'
// a small post description
postDescription02 = `
    a small description of the post
    a small description of the post
    a small description of the post
    a small description of the pos
`
// post number
postNumber02 = 2
// web page content variables END 
/*----------------------------------------------------------------------------------------------*/
// FUNCTION DECLARATION


// getting the empty wrapper element (type: section, className: "intro-wall")
const introWall = document.querySelector('.intro-wall')

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



// getting the recent posts empty wrapper elements
// (type: div, className: "recent-post-01")
// (type: div, className: "recent-post-02")
const recentPost01 = document.querySelector('.recent-post-01')
const recentPost02 = document.querySelector('.recent-post-02')

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

// function declaration END
/////////////////////////////////////////////////////////////////////////////////
/* FUNCTION CALLS */


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* EVENT LISTENERS */

// Recent post (First), "click" for destination
document.querySelector(`.order${postNumber01}`).addEventListener('click', ()=>{
    window.location = `file:///C:/Users/FUJITSU/Desktop/templates/Blog/blog-content.html?blogId=${postNumber01}`
})

// Recent post (Second), "click" for destination
document.querySelector(`.order${postNumber02}`).addEventListener('click', ()=>{
    window.location = `file:///C:/Users/FUJITSU/Desktop/templates/Blog/blog-content.html?blogId=${postNumber02}`
})
