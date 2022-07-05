<style scoped>
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
.changeGo img{
  width: 180px;
  height: 55px;
  min-width: 150px;
  min-height: 54px;
}
.home-list-title{
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
}
.footer{
  background-color:#f4a23f;
  min-height: 400px;
  min-width: 100%;
  position: relative;
}
.Home-main{
  height:200px;
  display: flex;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
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
  background:rgba(255, 255, 255, 0.9)!important;
  z-index: 10;
  width: 80%;
  min-width: 80%;
  height: 400px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
}
.main-box img{
  width: 80%;
  position: absolute;
}
.close{
  width: 50%;
}
.close img{
  width: 30px;
  height: 30px;
  position: relative;
  left: 190%;
  top: 40px;
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
  .main-box-title{
    font-size: 24px;
    color: #f4a23f;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .mian-box-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
  }
  .mian-box-list .list{
    color: #f4a23f;
    width: 22%;
    height: 40px;
    margin: 10px 15px;
    text-align: center;
    line-height: 40px;
    border:1px solid #f4a23f;
    font-size: 14px;
  }
  .more{
    z-index: 10;
    width: 80%;
    height: 550px;
    background:rgba(255, 255, 255, 0.9)!important;
    position: fixed;
    top: 300px;
    left: 50%;
    transform: translate(-50%);
  }
  .more-box-title{
    font-size: 24px;
    color: #f4a23f;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .mero-left{
    width: 50%;
    float: left;
    display: flex;
    flex-wrap: wrap;
  }
  .mero-right{
    width: 50%;
    float: right;
  }
  .type-list-top-left{
    border: 2px solid #f4a23f;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 100px;
    left: 150px;
    text-align: center;
    line-height: 150px;
    color: #f4a23f;
    font-size: 20px;
  }
  .type-list-top-right{
    border: 2px solid #f4a23f;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 100px;
    left: 350px;
    text-align: center;
    line-height: 150px;
    color: #f4a23f;
    font-size: 24px;
  }
  .type-list-bm-left{
    border: 2px solid #f4a23f;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 250px;
    left: 50px;
    text-align: center;
    line-height: 150px;
    color: #f4a23f;
    font-size: 24px;
  }
  .type-list-bm-cn{
    border: 2px solid #f4a23f;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 250px;
    left: 250px;
    text-align: center;
    line-height: 150px;
    color: #f4a23f;
    font-size: 24px;
  }
  .type-list-bm-right{
    border: 2px solid #f4a23f;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 250px;
    left: 450px;
    text-align: center;
    line-height: 150px;
    color: #f4a23f;
    font-size: 24px;
  }
  .mero-right-box{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 30%;
    left: 55%;
    color: #f4a23f;
  }
  .mero-right-list-title{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .mero-right-list{
    margin-top: 10px;
  }
  .block{
    height: 570px;
  }
  .el-carousel__item{
    width: 100%;
    height: 570px;
  }
</style>
<template>
  <div class="Home">
    <div class="block" style="margin-top:-30px;">
    <el-carousel height="570px">
      <el-carousel-item v-for="(item,index) in typeOpiton" :key="index">
        <img :src="item.img" style="height: 100%;width:100%;" alt="">
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
    <div class="main-box" v-show="mainShow">
      <div class="main-box-title">
        {{listTitle}}
      </div>
      <div class="mian-box-list">
        <div v-if="list1" class="list">
          {{list1}}
        </div>
        <div v-if="list2" class="list">
          {{list2}}
        </div>
        <div v-if="list3" class="list">
          {{list3}}
        </div>
        <div v-if="list4" class="list">
          {{list4}}
        </div>
        <div v-if="list5" class="list">
          {{list5}}
        </div>
        <div v-if="list6" class="list">
          {{list6}}
        </div>
        <div v-if="list7" class="list">
          {{list7}}
        </div>
        <div v-if="list8" class="list">
          {{list8}}
        </div>
      </div>
      <div class="close"  @click="mainShow=false">
        <img src="../assets/home/关闭.png" alt="">
      </div>
    </div>
    <div class="more" v-show="moreShow">
      <div class="more-box-title">
        {{moreTitle}}
      </div>
      <div class="mero-left">
        <div class="type-list-top-left">
          竞争激烈
        </div>
         <div class="type-list-top-right">
          缺乏经验
        </div>
        <div class="type-list-bm-left">
          目标不明
        </div>
        <div class="type-list-bm-cn">
          认知不清
        </div>
        <div class="type-list-bm-right">
          能力不足
        </div>
      </div>
      <div class="mero-right">
        <div class="mero-right-box">
          <div class="mero-right-list-title">
            上大学=？
          </div>
          <div class="mero-right-list">
            对大学/专业选择感到迷茫？
          </div>
          <div class="mero-right-list">
            对是否出国/考研心存疑虑
          </div>
          <div class="mero-right-list">
            求职如何扬长避短脱颖而出？
          </div>
          <div class="mero-right-list">
            那么多好机会为什么我却把握不住？
          </div>
        </div>
      </div>
      <div class="close"  @click="moreShow=false">
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
            list1:"心里咨询",
            list2:"专业心里咨询辅导",
            list3:"职业性格测试",
          },
          {
            img:require('../assets/home/gaokao.png'),
            data:'高考志愿填报',
            list1:"个人情况摸底及专属方案制定",
            list2:"择校软性因素认知(城市、发展前景)",
            list3:"择校软性因素认知(学校排名、专业)",
            list4:"家长及个人便好匹配",
            list5:"家庭资源匹配",
            list6:"文理科就业薪资详解",
            list7:"文理科填报专业详解",
            list8:"志愿填报定制方案",
          },
          {
            img:require('../assets/home/kaoyan.png'),
            data:'考研保研规划',
            list1:"考研现状分析",
            list2:"考研择校规划",
            list3:"考研毕业前景",
            list4:"考研前期准备",
          },
          {
            img:require('../assets/home/studying.png'),
            data:'出国留学规划',
            list1:"留学国家分析",
            list2:"留学生活规划",
            list3:"留学费用对比",
            list4:"留学申请准备",
          },
          {
            img:require('../assets/home/graduate.png'),
            data:'毕业求职规划',
            list1:"行业薪资对比",
            list2:"求职行业选择",
            list3:"求职技能培训",
            list4:"求职流程解析",
          },
          {
            img:require('../assets/home/more.png'),
            data:'更多信息咨询',
            listimg:require('../assets/home/morelist.png')
          },
        ],
        mainShow:false,
        moreShow:false,
        listimg:null,
        listTitle:null,
        list1:null,
        list2:null,
        list3:null,
        list4:null,
        list5:null,
        list6:null,
        list7:null,
        list8:null,
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
        changeGoShow:false,
        moreTitle:null
      }
    },
    methods: {
      aaa(item){
        console.log(item);
        this.mainShow = true
        this.listimg = item.listimg
        this.listTitle = item.data
        this.list1 = item.list1
        this.list2 = item.list2
        this.list3 = item.list3
        this.list4 = item.list4
        this.list5 = item.list5
        this.list6 = item.list6
        this.list7 = item.list7
        this.list8 = item.list8
        if(item.data === '更多信息咨询'){
          this.mainShow = false
          console.log(111);
          this.moreShow = true
          this.moreTitle = item.data
        }
      },
      change(){
        this.changeGoShow = true
      }
    }
  }
</script>

