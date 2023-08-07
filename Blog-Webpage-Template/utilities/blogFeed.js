// VARIABLES (not required)
//getting the empty wrapper element
//(type: main, className: "main-blog-section")

const blogThumb = document.querySelector('.main-blog-section')


/*----------------------------------------------------------------------------------------------*/
// FUNCTION DEFINITION


/* the function defines the structure of the blog's thumbnail and specifies the content,
 based on the parameters passed during the function call */
const newBlog = function(blogIdNumber,imageThumb, imageAltText, date, blogTitle, blogDescription){
    blogThumb.innerHTML += `
        <section class="blog-thumb">
            <img src="static/images/${imageThumb}" alt="${imageAltText}" class="blog-thumb-img"/>
            <span>
                <p>${date}</p>
                <h3 class="blog-thumb-title">${blogTitle}</h3>
                <a href="blog-content.html?blogId=${blogIdNumber}" class="blog-description-wrapper">
                    <p class="blog-description">${blogDescription}</p>
                </a>
            </span>
        </section>
    `
}


/*--------------------------------------------------------------------------------------------------*/
// FUNCTION CALL

/*
ARGUMENTS
1: the number of the blog, (first, second, etc.)
2: the name of the thumbnail's image 
3: the alternative text for the image
4: the release date
5: a title
6: a small description of the blog (around 30 words)


EXAMPLE: 
newBlog(
    1,
    "carImage.jpg",
    "an image of a car",
    "June 07",
    "Going on vacation", 
    `Stepping into vacation mode! Time to unwind, explore, and recharge.
    Disconnecting from work temporarily for a rejuvenating break.
    Exciting stories and experiences await upon my return!`
)


*/

newBlog(
    1,
    "proxy01.jpg",
    "proxy image could not load",
    "Month 00",
    "Post title", 
    `A small description of the post. 
     A small description of the post.<br />
     A small description of the post. 
     A small description of the post.  `
)

newBlog(
    2,
    "proxy01.jpg",
    "proxy image could not load",
    "Month 00",
    "Post title", 
    `A small description of the post. 
     A small description of the post.<br />
     A small description of the post. 
     A small description of the post.  `
)
newBlog(
    3,
    "proxy01.jpg",
    "proxy image could not load",
    "Month 00",
    "Post title", 
    `A small description of the post. 
     A small description of the post.<br />
     A small description of the post. 
     A small description of the post.  `
)
newBlog(
    4,
    "proxy01.jpg",
    "proxy image could not load",
    "Month 00",
    "Post title", 
    `A small description of the post. 
     A small description of the post.<br />
     A small description of the post. 
     A small description of the post.  `
)
