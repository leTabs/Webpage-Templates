
const blogThumb = document.querySelector('.main-blog-section')
blogThumb.innerHTML= `
`
const newBlog = function(
    imageThumb='pexels-adam-lowly-2622290.jpg', 
    date='Month 00', blogTitle='Title',
    blogDescription='A small and meaningful descriptionA small and meaningful descriptionA small and meaningful descriptionA small and meaningful descriptionA small and meaningful description '
    ){
    
    blogThumb.innerHTML += `
            <section class="blog-thumb">
            <img src="images/${imageThumb}" alt="" class="blog-thumb-img"/>
            <span>
                <p>${date}</span> <img src="icons/ellipsis-vertical-solid.svg" alt="" class="vertical-elip"/></p>
                <h3 class="blog-thumb-title">${blogTitle}</h3>
                <p>${blogDescription}</p>
            </span>
        </section>
    `
}
newBlog()
newBlog()
newBlog()
newBlog()
