html{
    overflow-x: hidden;
    scroll-behavior: smooth;
}
html, body, main{
    padding: 0;
    margin: 0;
}
main{
    width: 100vw;
    height: 100vh;
}
nav{
    height: 4.5rem;
    width: 100vw;
    background-color: white;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    font-style: italic;
    z-index: 100;
}
nav span:first-of-type{
    font-size: 1.8rem;
    margin-left: 6rem;
    color: brown
}
nav span:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 7rem;
    /* width: 100%; */
}
nav span p{
    margin: 0;
    margin-left: 1.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 250ms;
    padding: 0.3rem 0.5rem;
    border-bottom: solid 1px transparent;
}
nav span p:hover{
    color: brown;
    border-bottom-color: brown;
}
/*  */
.fixed-img{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    z-index: -1;
}
/* home section */

.section-home{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
}
.home-text-div{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    z-index: 2;
    font-size: 3.2rem;
    color: white;
    text-align: center;
}
.home-text-div p{
    word-spacing: 1.5rem;
    letter-spacing: 0.5rem;
    margin: 0;
}
.home-text-div span{
    font-style: italic;
    letter-spacing: normal;
    font-size: 2rem;
    display: inline-block;
    word-spacing: normal;
    margin-top: 3rem;
    /* border-bottom: solid 1px white; */
}
/* .home-text-div button{
    font-size: 1.1rem;
    border: solid 1px rgb(255, 255, 255);
    color: white;
    margin: 0;
    outline: none;
    padding: 0.3rem 3rem;
    margin-top: 2rem;
    background-color: rgb(126, 15, 15);
} */
/* about section */

.section-about{
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-wrapper{
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    display: flex;
    justify-content: space-between;
    /* border: solid 1px red; */
    width: 85%;
    height: 70%;
}
.section-about img{
    width: 62%;
    object-fit: cover;
    height: 100%;
}
.about-text-container{
    width: 30%;
    color: white;
    background-color: brown;
    text-align: center;
}
.about-text-container h2{
    font-size: 2.4rem;
    letter-spacing: 0.3rem;
    word-spacing: 1.2rem;
    font-weight: normal;
    margin: 5rem 0 1rem 0;
}
.about-text-container hr{
    border: solid 2px rgb(255, 255, 255);
    width: 1rem;
    margin: 0.2rem auto;
}
.about-text-container p{
    font-size: 1.3rem;
    width: 75%;
    margin: 2.5rem auto 0 auto;
    word-spacing: 0.3rem;
    line-height: 2.5rem;
}
.about-text-container button{
    font-size: 1.2rem;
    margin-top: 3.5rem;
    color: white;
    padding: 1rem 3rem;
    background-color: transparent;
    border: solid 1px white;
    transition: 250ms;
}
.about-text-container button:hover{
    background-color: rgb(255, 255, 255);
    color: brown;
    cursor: pointer;
}
/* services */
.section-services{
    width: 100%;
    height: 100%;
    background-color: red;
}
.section-services p{
    margin: 0;
}

.section-services img{
    width: 3rem;
    height: 3rem;
}
