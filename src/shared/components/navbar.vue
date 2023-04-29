<template>

  <nav class="navbar">
      <ul>
          <li class="navbar-link">
              <router-link to="/home">Home</router-link>
          </li>
          <li class="navbar-link">
              <router-link to="/home" >Remodelers</router-link>
          </li>
          <li class="navbar-link">
              <router-link to="/home" >Create Post</router-link>
          </li>
      </ul>
  </nav>
    <div class="introduction">
        <div>background</div>
    </div>
    <router-view></router-view>

git 
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>
body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}
  .navbar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #004A63;
  }
  .navbar-link{
      list-style-type: none;
      display: inline-block;
      padding: 10px 20px;
  }
  .navbar-link a{
      color: white;
      text-decoration: none;
      font-weight: bold;
  }
  .introduction{
      background-color: #004A63;
      height: 500px;
  }
</style>