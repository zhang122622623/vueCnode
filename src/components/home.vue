<template>
  <div class="wrapper">
    <div class="header">
      <img src="../assets/cnodejs.svg"  title="cnodejs.svg">
      <ul>
        <li>首页</li>
        <li>API</li>
        <li>关于</li>
      </ul>
    </div>
    <el-card class="box-card">
      <div v-for="(item,index) in info "  class="item" :class="{'spe':(index%2===0)}">
          <img :src="item.author.avatar_url">
          <div class="context">
            <p>{{item.title}}</p>
            <span>回复：{{item.reply_count}}</span>
            <span>浏览：{{item.visit_count}}</span>
            <span>创建于：{{create[index]}}</span>
          </div>
          <hr v-show="( (index%10)!==0 || index===0)">
      </div>
      <el-pagination background layout="prev, pager, next" class="pagi"
        :total="100"    @current-change="PageChange">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import auth from '../auth'
  export default {
    data () {
      return {
        msg: '', info: [], param: {}, create: []
      }
    },
    methods: {
      PageChange (val) {
        this.param.page = val
        auth.getTopics(this, this.param)
      }
    },
    mounted () {
      this.param = {
        page: 1,
        tab: 'share',
        limit: 10,
        mdrender: false
      }
      auth.getTopics(this, this.param)
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    margin-top: -20px;
  }
  .header{
    height: 80px;
    width: 100%;
    background: #545c64;
    margin-bottom: 20px;
  }
  .header img{
    height: 80px;
    width: 100px;
    float: left;
    margin-left: 10%;
    margin-top: 5px;
  }
  .header ul{
    height: 80px;
    line-height: 80px;
    float: right;
    margin:0 10% 0 0 ;
  }
  .header li{
    display: inline-block;
    color: #fff;
    list-style: none;
    font-size: 18px;
    margin:10px 20px 0;
    cursor: pointer;
  }
  .box-card{
    width: 75%;
    margin:0 auto;
    background: #F9FBFC;
  }
  @media screen and (max-width: 1300px){
    .box-card{
      width: 90%;
    }
  }
  .item{
    width: 94%;
    min-height:70px;
    margin:0 auto 20px;
    clear: both;
    position: relative;
  }
  .item img{
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 1%;
    float: left;
    cursor: pointer;
  }
  .item .context{
    height:100%;
    float: left;
    text-align: left;
    margin-left: 30px;
    font-family: "Helvetica Neue", Helvetica,"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .context p{
    font-size: 21px;
    margin:5px  0 ;
  }
  .item span{
    font-size: 16px;
    margin-right: 20px;
    color:#ccc;
  }
  .item hr{
    clear: both;
    height: 0;
    border-top: 1px solid #ccc;
    background-color: #ccc;
    width: 100%;
    position: absolute;
    bottom:-10px;
    left: 0;
  }
  .pagi{
    margin-top: 25px;
  }
  .spe{
   * background-color: #ccc;
  }
</style>
