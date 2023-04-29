<template>
    <header>
        <nav class="navbar">
            <ul>
                <li class="navbar-link">
                    <router-link to="/home">Home</router-link>
                </li>
                <li class="navbar-link">
                    <router-link to="/home">Remodelers</router-link>
                </li>
                <li class="navbar-link">
                    <router-link to="/home">Create Post</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <section class="introduction">
        <div class="containerB">
            <div class="boxB col1">
                <img src="src/assets/banner.png" class="imgBanner" alt="">
            </div>
            <div class="boxC col2">
                <h1>Have a comfortable live! </h1>
                <p id="txtBanner">
                    Find the best experts to remodel the house of your dreams in a fast and secure way.
                </p>
                <div>
                    <a href="" class="btnBanner">Most populars</a>
                </div>
            </div>
        </div>
    </section>
    <router-view></router-view>
</template>

<script>
export default {
    name: "navbar"
}

window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

</script>

<style scoped>
body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    transition: 0.7s;
    padding: 30px 20px;
    z-index: 10;
}
header.abajo{
    background: #ffffff;
    padding: 15px 20px;
}
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar-link{
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;
}
.navbar-link a{
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}
.introduction{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #004A63;
    background-size: cover;
    background-position: center;
}
header.abajo .navbar,
header.abajo ul li a{
    color: #000000;
}
section.introduction{
    padding: 15%;
}

.containerB{
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 2rem;
}
.boxB{
    display: flex;
    align-items: center;
    justify-content: center;
}
.imgBanner{
    width: 80%;
}
.boxC{
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    text-align: justify;
    color: #FFFFFF;
}
.btnBanner{
    background: #02AA8B;
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 15px;
    text-decoration: none;
    font-size: 20px;
}
</style>