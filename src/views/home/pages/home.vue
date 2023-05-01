<template>
    <section class="introduction">
        <div class="containerB">
            <div class="boxB col1">
                <img src="src/assets/banner.png" class="imgBanner" alt="Remodeling a house view on a laptop">
            </div>
            <div class="boxC col2">
                <h1>Have a comfortable <span class="green">live!</span> </h1>
                <p id="txtBanner">
                    Find the best experts to remodel the house of your dreams in a fast and secure way.
                </p>
                <div>
                    <a href="" class="btnBanner">Most populars</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home"
}
</script>

<style scoped>

section.introduction{
    padding: 12%;
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
.green{
    color: #86D57C;
}
.introduction{
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #004A63;
    background-size: cover;
    background-position: center;
}
</style>