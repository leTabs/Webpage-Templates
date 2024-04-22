/* add normalizer */
html, body, nav, section, main{
    margin: 0;
    padding: 0;
}

main{
    width: 100vw;
    height: 100vh;
}
nav{
    background-color: rgb(106, 59, 51);
    color: white;
    position: fixed;
    width: 100vw;
    z-index: 10;
}
.nav-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    /* height: 5rem */
}
nav span{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
nav h2, nav p{
    margin: 0;
    padding: 0
}
nav h2{
    font-size: 2.1rem;
}
nav p{
    font-size: 1.5rem;
    margin-right: 5rem;
}
nav img{
    width: 2rem;
    height: 2rem;
    margin: 0 1.5rem 0 5rem;
}

.nav-bottom{
    height: 3rem;
    background-color: white;
}

/*  */
.section-home{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section-home img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
}
.home-div{
    margin-top: 7rem;
    width: 80%;
    height: 65% ;
    background-color: rgb(255, 255, 255);
    border-radius: 45px;
    box-shadow: 3px 3px 15px black;
    text-align: center;
}
.home-div img{
    position: static;
    display: block;
    margin: 0 auto;
    width: 75%;
    height: 30%;
    z-index: 2
}
