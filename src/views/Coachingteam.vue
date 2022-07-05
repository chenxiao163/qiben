<style>
  .Coachingteam{
    position: relative;
  }
  .Coachingteam img{
    width: 100%;
  }
  .Coachingteam-mian{
    width: 630px;
    height: 445px;
    position: absolute;
    top:100px;
    left: 50%;
    transform: translate(-50%);
  }
  .el-carousel__item{
    width: 313px;
    height: 445px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .Coachingteam-title{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
</style>
<template>
  <div class="Coachingteam">
    <img style="margin-top:-30px" src="../assets/Coachingteam/辅导团队-bg.png" alt="">
    <div class="Coachingteam-title">
      <img src="../assets/Coachingteam/辅导团队.png" alt="">
    </div>
    <div class="Coachingteam-mian">
    <el-carousel :interval="3000" type="card" height="545px" width="413px">
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
       <!-- 12312312312 -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imglist:[
        {
          img:require('../assets/Coachingteam/1.png')
        },
        {
          img:require('../assets/Coachingteam/2.png')
        },
        {
          img:require('../assets/Coachingteam/3.png')
        },
        {
          img:require('../assets/Coachingteam/4.png')
        },
        {
          img:require('../assets/Coachingteam/5.png')
        },
        {
          img:require('../assets/Coachingteam/6.png')
        },
        {
          img:require('../assets/Coachingteam/7.png')
        },
        {
          img:require('../assets/Coachingteam/8.png')
        },
      ]
    }
  }
}
</script>
