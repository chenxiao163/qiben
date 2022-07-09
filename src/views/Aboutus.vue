<style>
  .Aboutus{
    width: 100%;
    height: 80%;
    position: relative;
  }
  .aboutus-title{
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
  }
  .aboutus-box{
    width: 75%;
    height: 500px;
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%);
  }
  .aboutus-mian{
    width: 100%;
    position: absolute;
    top: 0;
    left: 55%;
    transform: translate(-52%);
    display: flex;
    flex-wrap: wrap;
  }
  .aboutus-mian .aboutus-box-list{
    z-index: 10;
    width: 45%;
    height: 230px;
    margin: 10px 10px;
    background-color: #FAA830;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .aboutus-box-mian{
    margin-top: 60px;
  }
</style>
<template>
  <div class="Aboutus">
    <img src="../assets/Aboutus/关于我们-bg.png" style="margin-top:-30px" alt="">
    <div class="aboutus-main">
      <div class="aboutus-title">
        <img src="../assets/Aboutus/me-title.png" alt="">
      </div>
      <div class="aboutus-box">
        <div class="aboutus-mian">
            <div class="aboutus-box-list">
              <div class="aboutus-box-mian">
                <span> 一流高校毕业、海归创始团队</span><br>
                <span>/</span><br>
                <span>First-class college graduates,</span><br>
                <span>returness founding template</span>
              </div>
            </div>
            <div class="aboutus-box-list">
               <div class="aboutus-box-mian">
                <span>名企资深人士实力护航</span><br>
                <span>/</span><br>
                <span>Famous enterprise veterans escorting,</span><br>
                <!-- <span>returness founding template</span> -->
              </div>
            </div>
            <div class="aboutus-box-list">
              <div class="aboutus-box-mian">
                <span>高校导师团队</span><br>
                <span>/</span><br>
                <span>College tutor team,</span><br>
                <!-- <span>returness founding template</span> -->
              </div>
             </div>
             <div class="aboutus-box-list">
               <div class="aboutus-box-mian">
                <span>聚焦高中 五年行业深耕</span><br>
                <span>/</span><br>
                <span>foucs on education industry Counseling,</span><br>
                <span>with five years experience</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

