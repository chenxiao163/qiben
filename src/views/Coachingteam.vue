<style>
  .Coachingteam{
    width: 100%;
    height: 88vh;
    position: relative;
  }
  .Coachingteam-title{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .Coachingteam-title img {
    width: 381px;
    height: 40px;
  }
</style>
<template>
<div class="Coachingteam">
    <div class="Coachingteam-title">
      <img src="../assets/Coachingteam/辅导团队.png" alt="">
    </div>
    <iframe  v-if="iframeShow" style="width: 100vw;height: 100vh;margin-top:-30px;" src="/banner.html" frameborder="0"></iframe>
</div>

</template>

<script>
export default {
  data() {
    return {
      iframeShow: false,
      iframeWin: null // 记录iframe实例
    };
  },
  mounted() {
    this.iframeShow = true
    this.$nextTick(() => {
      this.iframeWin = this.$refs.iframe.contentWindow;
    })
  },
  methods: {
    // 向iframe发送消息
    sendIframeWinpMessage() {
      this.iframeWin.postMessage(
        {
          params:
            "你想传的数据" /*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/
        },
        "*"
      );
    }
  }
};
</script>

