import Papers from './imgs/opening-image.jpg'

function Opening(){
    return(
        <section className='Opening'>
            <img
                src={Papers}
                alt="Image could not load"
                className='Opening-img'>
            </img>
            <div className="Opening-text-wrapper">
               <h1>Literature Work Collection</h1>
               <p>Collection of poems and<br /> other Literature stuff</p>
            </div>
        </section>
    )
}

export default Opening;
