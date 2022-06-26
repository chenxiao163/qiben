<template>
  <div id="app">
    <nav>
      <div class="app-list">
        <div class="icon-left">
          <img src="./assets/home/logo.png" alt="">
        </div>
        <div class="title-list">
          <router-link to="/">首页</router-link>
          <router-link to="/Project">项目套餐</router-link>
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
*{
  margin: 0;
  padding: 0;
}
html{
  width: 100%;
  height: 100%;
}
.app-list{
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-left img{
  margin:-20px 20%;
}
.icon-left{
  width: 50%;
  float: left;
}
.title-list{
  width: 50%;
  float: left;
}
nav {
  width: 100%;
  margin:30px 0px; 
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
  font-size: 18px;
  margin: 0 40px;
  color:#f4a23f;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.Scribe{
  width: 100%;
  height: 1px;
  background-color: #f4a23f;
  border: 1px solid #f4a23f;
  margin: 20px 0px;
}
</style>
