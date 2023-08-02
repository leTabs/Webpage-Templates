// FUNCTION DEFINITION

//getting the empty wrapper element (type: main, className: "main-blog-section")
const blogThumb = document.querySelector('.main-blog-section')


/* the function defines the structure of the blog's thumbnail and specifies the content,
 based on the parameters passed during the function call */
const newBlog = function(blogIdNumber,imageThumb, imageAltText, date, blogTitle, blogDescription){
    blogThumb.innerHTML += `
        <section class="blog-thumb">
            <img src="static/images/${imageThumb}" alt="${imageAltText}" class="blog-thumb-img"/>
            <span>
                <p>${date}</p>
                <h3 class="blog-thumb-title">${blogTitle}</h3>
                <a href="blog-content.html?blogId=${blogIdNumber}">
                    <p class="blog-description">${blogDescription}</p>
                </a>
            </span>
        </section>
    `
}

//function definition END
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
    "and image of a car",
    "June 07",
    "Going on vacation", 
    `Stepping into vacation mode! Time to unwind, explore, and recharge.
    Disconnecting from work temporarily for a rejuvenating break.
    Exciting stories and experiences await upon my return!`
)


*/

newBlog(
    1,
    "pexels-adam-lowly-2622290.jpg",
    "and image of a car",
    "June 07",
    "Going on vacation", 
    `Stepping into vacation mode! Time to unwind, explore, and recharge.
    Disconnecting from work temporarily for a rejuvenating break.
    Exciting stories and experiences await upon my return!`
)

newBlog(
    1,
    "pexels-adam-lowly-2622290.jpg",
    "and image of a car",
    "June 07",
    "Going on vacation", 
    `Stepping into vacation mode! Time to unwind, explore, and recharge.
    Disconnecting from work temporarily for a rejuvenating break.
    Exciting stories and experiences await upon my return!`
)
