<template>
  <div class="Home">
    <div class="block" style="margin-top:-30px;">
    <el-carousel height="500px">
      <el-carousel-item v-for="(item,index) in typeOpiton" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="title-img">
      <img src="../assets/home/titli-list.png" alt="">
    </div>
    <div class="changeGo" @click="change">
      <img src="../assets/home/button.png" alt="">
    </div>
    <div v-show="changeGoShow">
      <div class="go">
        <img src="../assets/home/前往咨询.png" alt="">
      </div>
      <div class="change-close" @click="changeGoShow=false">
         <img src="../assets/home/关闭.png" alt="">
      </div>
    </div>
    <div class="footer">
      <div class="home-list-title">
        <img src="../assets/home/business.png" alt="">
      </div>
      <div class="Home-main">
        <div class="Home-list-main" v-for="(item,index) in homelist" :key="index">
          <div class="Home-list" @click="aaa(item)">
            <img :src="item.img" alt="" class="img-list">
            <div style="margin:10px -10px">{{item.data}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-box" v-show="mainShow" @click="mainShow=false">
        <img :src="listimg" alt="">
        <div class="close">
          <img src="../assets/home/关闭.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default { 
    data() {
      return {
        homelist:[
          {
            img:require('../assets/home/Mentalhealth.png'),
            data:'心里健康咨询',
            listimg:require('../assets/home/Mentalhealthlist.png')
          },
          {
            img:require('../assets/home/gaokao.png'),
            data:'高考志愿填报',
            listimg:require('../assets/home/gaokaolist.png')
          },
          {
            img:require('../assets/home/kaoyan.png'),
            data:'考研保研规划',
            listimg:require('../assets/home/kaoyanlist.png')
          },
          {
            img:require('../assets/home/studying.png'),
            data:'出国留学规划',
            listimg:require('../assets/home/studyinglist.png')
          },
          {
            img:require('../assets/home/graduate.png'),
            data:'毕业求职规划',
            //listimg:require('../assets/home/graduatelist.png')
          },
          {
            img:require('../assets/home/more.png'),
            data:'更多信息咨询',
            listimg:require('../assets/home/morelist.png')
          },
        ],
        mainShow:false,
        listimg:null,
        typeOpiton:[
          {
            img:require('../assets/home/bg-1.png')
          },
          {
            img:require('../assets/home/bg-2.png'),
          },
          {
            img:require('../assets/home/bg-3.png'),
          },
        ],
        changeGoShow:false
      }
    },
    methods: {
      aaa(item){
        this.mainShow = true
        this.listimg = item.listimg
      },
      change(){
        this.changeGoShow = true
      }
    }
  }
</script>

<style>
html{
  width: 100%;
  height: 100%;
  position: relative;
}
.title-img{
  min-width: 842px;
  min-height: 147px;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
}
.changeGo{
  min-width: none;
  min-height: none;
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
}
.home-list-title{
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
}
.footer{
  background-color:#f4a23f;
  min-height: 350px;
  min-width: 100%;
  position: absolute;
  bottom: 0;
}
.Home-main{
  width:100%;
  height:200px;
  display: flex;
    position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-25%);
}
.Home-list-main{
  /* position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-25%); */
}
.Home-list{
  width: 150px;
  height: 150px;
}
.Home-list .img-list{
  width: 70px;
  height: 70px;
}
.main-box{
  z-index: 10;
  width: 100%;
  height: 400px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
}
.main-box img{
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.close{
  width: 50%;
  position: absolute;
  right: -230px;
  top: 40px;
}
.close img{
  width: 30px;
  height: 30px;

}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .go{
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%);
    z-index: 20;
  }
  .change-close{
    position: absolute;
    top: 240px;
    right: 180px;
    z-index: 20;
  }
  .change-close img{
    width: 30px;
    height: 30px;
  }
</style>