<template>
  <div class="Hearthealth">
    <div class="title">
      高考志愿填报
    </div>
    <div class="Hearthealth-list">
      <ul>
        <li>个人情况摸底及专属方案制定</li>
        <li>择校软性因素认知(城市、发展前景)</li>
        <li>择校软性因素认知(学校排名、专业)</li>
        <li>家长及个人便好匹配</li>
        <li>家庭资源匹配</li>
        <li>文理科就业薪资详解</li>
        <li>文理科填报专业详解</li>
        <li>志愿填报定制方案</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Hearthealth{
  width: 100%;
  height: 100%;
  position: relative;
}
.title{
  width: 300px;
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  background: #a86451;
  color: #fff;
}
.Hearthealth-list{
  color: #f4a23f;
  font-size: 24px;
  font-weight: 900;
  width: 500px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  margin-left: 100px;

}
.Hearthealth-list ul>li{
  margin-top: 50px;
}
</style>
