<template>
  <div class="more">
    <div class="more-left">
    </div>
    <div class="more-right">
      <!-- <div class="more-title">更多信息请扫描关注</div> -->
      <div class="more-list" style="list-style-type: none;">
        <div class="more-img">
          <div class="more-img-top">
            <img src="" alt="">
          </div>
          <div class="more-img-bottom">
           <span>公众号 </span>
            <!-- 12312312312 -->
          </div>
        </div>
        <div class="more-img">
          <div class="more-img-top">
            <img src="" alt="">
          </div>
          <div class="more-img-bottom">
           <span>客服号</span>
          </div>
        </div>
        <div class="more-img">
          <div class="more-img-top">
            <img src="" alt="">
          </div>
          <div class="more-img-bottom">
           <span>客服号</span>
          </div>
        </div>
      </div>
      <div class="more-footer">
        <ul>
          <li>公众号 启本咨询</li>
          <li>qibenbusiness</li>
          <li>qibenbusiness@homail.com</li>
        </ul>
        <div class="more-icon">
          <img src="../assets/变更.png" alt="" class="icon">
          <img src="../assets/变更.png" alt="" class="icon">
          <img src="../assets/变更.png" alt="" class="icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul>li{
  list-style-type: none;
}
.more-icon{
  width: 30px;
  position: absolute;
  top: -5px;
  right: -60px;
}
.icon{
  width: 30px;
  height: 30px;
  margin-top: 20px;
}
.more{
  width: 100%;
  height: 890px;
  background: #f4a23f;
  margin-top: -30px;
  position: relative;
}
.more-left{
  width: 50%;
  height: 100%;
  float: left;
}
.more-right{
  width: 50%;
  height: 100%;
  float: right;
}
.more-title{
  font-size: 25px;
  color: #fff;
  position: absolute;
  top: 20%;
  right: 10%;
}
.more-list{
  width:500px;
  height: 150px;
  position: absolute;
  top: 30%;
  right: 10%;
  display: flex;
  flex-wrap: wrap;
}
.more-list img{
  width: 100px;
  height: 100px;
}
.more-footer{
  font-size: 16px;
  position: absolute;
  top: 50%;
  right: 10%;
}
.more-footer ul>li{
  text-align:right;
  margin-top: 30px;
}
.more-img{
  width: 100px;
  margin-left: 40px;

}
.more-img-top{
}
.more-img-bottom{
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>