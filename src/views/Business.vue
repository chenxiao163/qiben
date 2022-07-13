<style scoped>
.Business{
  position: relative;
  top: -30px;
  width: 100%;
  height: 91vh;
  background-color: #FAA830;
}

.main-box{
  background:rgba(255, 255, 255, 0.9)!important;
  z-index: 10;
  width: 80%;
  min-width: 80%;
  height: 400px;
  position: fixed;
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
  .go img {
    width: 939px;
    height: 221px;
  }
  .change-close{
    position: absolute;
    top: 240px;
    right: 280px;
    z-index: 20;
  }
  .change-close img{
    width: 30px;
    height: 30px;
  }
  .main-box-title{
    font-size: 32px;
    color: #FAA830;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .mian-box-list{
    min-width: 85%;
    max-width: 64px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    font-size: 18px;
    color: #fff;
  }
  .mian-box-list .list{
    color: #FAA830;
    width: 208px;
    height: 45px;
    margin: 10px 15px;
    text-align: center;
    line-height: 45px;
    border:1px solid #FAA830;
    font-size: 12px;
  }
  .Business-list{
    width: 80%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)

}
  .title-list{
    width: 20%;
    height: 200px;
  }
  .imglist{
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  .imglist img {
    width: 80px;
    height: 80px;
  }
  .list{
    text-align: center;
    margin-top: 10px;
    color: #fff;
  }
    .xinlimain-box{
    background:rgba(255, 255, 255, 0.9)!important;
    z-index: 10;
    width: 80%;
    min-width: 80%;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
  .xinlimian-box-list{
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
    font-size: 18px;
    color: #fff;
  }
  .xinlimian-box-list .xinlilist{
    color: #FAA830;
    width: 29%;
    height: 45px;
    margin: 10px 15px;
    text-align: center;
    line-height: 45px;
    border:1px solid #FAA830;
    font-size: 12px;
  }

</style>
<template>
  <div class="Business">
     <div class="Business-body">
      <div class="Business-list">
          <div class="title-list"  @click="aaa(item)"  v-for="item,index in businessList" :key="index">
            <div class="imglist">
              <img :src="item.img" alt="" >
            </div>
            <div class="list">
              <div class="list-top" style="font-size:20px">{{item.data}}</div>
              <div>{{item.title}}</div>
            </div>
            <!--  <img :src="item.img" alt="" > -->
            <!-- <div style="font-size:20px">{{item.data}}{{item.title}}</div> -->
            <!-- <div>{{item.title}}</div> -->
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
    <div class="xinlimain-box" v-show="xinliShow">
      <div class="main-box-title">
        {{xinlilistTitle}}
      </div>
      <div class="xinlimian-box-list" style="">
          <div v-if="xinlilist1" class="xinlilist">
          {{xinlilist1}}
        </div>
        <div v-if="xinlilist2" class="xinlilist">
          {{xinlilist2}}
        </div>
        <div v-if="xinlilist3" class="xinlilist">
          {{xinlilist3}}
        </div>
        

      </div>
      <div class="close"  @click="xinliShow=false">
        <img src="../assets/home/关闭.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default { 
    data() {
      return {
        listTitle:null,
        mainShow:false,
        list1:null,
        list2:null,
        list3:null,
        list4:null,
        list5:null,
        list6:null,
        list7:null,
        list8:null,
        businessList:[
          {
            img:require('../assets/home/Mentalhealth.png'),
            data:'心里健康咨询',
            list1:"心里咨询",
            list2:"专业心里咨询辅导",
            list3:"职业性格测试",
            title:"Menta Health Counseling"
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
            title:"CEE Aspiration Forms Coaching"
          },
          {
            img:require('../assets/home/kaoyan.png'),
            data:'考研保研规划',
            list1:"考研现状分析",
            list2:"考研择校规划",
            list3:"考研毕业前景",
            list4:"考研前期准备",
            title:"Postgraduate StudyPlanning Gyidance"
          },
          {
            img:require('../assets/home/studying.png'),
            data:'出国留学规划',
            list1:"留学国家分析",
            list2:"留学生活规划",
            list3:"留学费用对比",
            list4:"留学申请准备",
            title:"Study Abroad Planning Coaching"
          },
          {
            img:require('../assets/home/graduate.png'),
            data:'毕业求职规划',
            list1:"行业薪资对比",
            list2:"求职行业选择",
            list3:"求职技能培训",
            list4:"求职流程解析",
            title:"Job Serch Planning Guidanc"
          },
        ],
        xinlilist1:null,
        xinlilist2:null,
        xinlilist3:null,
        xinlilistTitle:null,
        xinliShow:false
      }
    },
    methods: {
      aaa(item){
        if(item.data === "心里健康咨询"){
          this.xinliShow =true
          this.xinlilistTitle = item.data
          this.xinlilist1 = item.list1
          console.log(this.xinlilist1);
          this.xinlilist2 = item.list2
          this.xinlilist3 = item.list3
        }else{
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
        }
        
      },
       change(){
        this.changeGoShow = true
      }
    }
  }
</script>

