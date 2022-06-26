<template>
  <div class="Business">
    <div class="Business-body">
      <div class="Business-list">
          <img src="../assets/图片1.png" alt="" >
          <div class="title-list">
            <div style="font-size:20px">心理辅导健康</div>
            <div>Menta Health Counseling</div>
        </div>
      </div>
      <div class="Business-list">
        <img src="../assets/图片2.png" alt="">
        <div class="title-list">
          <div style="font-size:20px">高考资源填报</div>
          <div style="width:150px">CEE Aspiration Forms Coaching</div>
        </div>
      </div>
      <div class="Business-list">
        <img src="../assets/图片3.png" alt="">
        <div class="title-list">
          <div style="font-size:20px">出国留学规划</div>
          <div>Study Abroad Planning Coaching</div>
        </div>
      </div>
      <div class="Business-list">
        <img src="../assets/图片4.png" alt="">
        <div class="title-list">
          <div style="font-size:20px">考验保研规划</div>
          <div>Postgraduate StudyPlanning Gyidance</div>
        </div>
      </div>
      <div class="Business-list">
        <img src="../assets/图片5.png" alt="">
        <div class="title-list">
          <div style="font-size:20px">毕业求职规划</div>
          <div style="width:150px">Job Serch Planning Guidance</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.Business{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
}
.Business-body{
  width: 100%;
  height: 600px;
  align-self:center;

}
.Business-list{
  position: relative;
  top: 50%;
  left: 20%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: inline-block;
}
.Business-list img{
  width:80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.Business-list .title-list{
  position: absolute;
  top: 200px;
  left: 60%;
  transform: translate(-50%);
  width: 200px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
.Business-list .title-list{
  margin-top: 20px;
}
.Business-list .title-list div{
  width: 150px;
  margin-top: 20px;
  margin-right: 50px;
  font-size: 16px;
}
</style>