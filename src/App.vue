<template>
  <div id="app">
    <nav>
      <div class="app-list">
        <div class="icon-left">
          <img src="./assets/home/logo.png" alt="">
        </div>
        <div class="title-list">
          <router-link to="/">首页</router-link>
          <router-link to="/Business">业务领域</router-link>
          <router-link to="/Coachingteam">辅导团队</router-link>
          <router-link to="/Aboutus">关于我们</router-link>
        </div>
        <br>
        <div class="Scribe"></div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app{
  height: 80vh;
}
*{
  margin: 0;
  padding: 0;
}
html{
  font-family:"Microsoft YaHei"
}
.app-list{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-left img{
  margin: -20px 157px;
}
.icon-left{
  width: 50%;
  float: left;
}
.title-list{
  width: 50%;
  float: left;
  font-size: 16px;
}
nav {
  width: 100%;
  margin:30px 0px; 
}

nav a {
  text-decoration:none;
  font-size: 16px;
  margin: 0 40px;
  color:#FAA830;
}

nav a.router-link-exact-active {
}
.Scribe{
  width: 100%;
  height: 1px;
  background-color: #FAA830;
  border: 1px solid #FAA830;
  margin: 20px 0px;
}
</style>
