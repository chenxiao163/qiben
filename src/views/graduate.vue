<template>
  <div class="Hearthealth">
    <div class="title">
      毕业求职规划
    </div>
    <div class="Hearthealth-list">
      <ul>
        <li>行业薪资对比</li>
        <li>求职行业选择</li>
        <li>求职技能培训</li>
        <li>求职流程解析</li>
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
