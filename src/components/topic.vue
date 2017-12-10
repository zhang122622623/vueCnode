<template>
  <div class="wrapper1">
    <el-card class="box-card1">
      <div class="label">
        <p>{{topic.title}}</p>
        <span>创建于：{{create}}</span>
        <span>浏览量：{{topic.visit_count}}</span>
        <span>回复：{{topic.reply_count}}</span>
      </div>
      <hr class="spe-hr">
      <div v-html="topic.content" id="content"></div>
    </el-card>

    <el-card class="box-card2">
      <p>作者:</p>
      <img :src="topic.author.avatar_url"><span>{{loginname}}</span>
      <p>积分：{{score}}</p>
      <p>Github：<a :href="'https://github.com/'+loginname" target="_blank">https://github.com/{{loginname}}</a></p>
    </el-card>

    <Reply></Reply>

    <!--<button @click="goTop" id="go_top">返回顶部</button>-->
  </div>
</template>

<script>
  import auth from '../auth'
  export default{
    data () {
      return {
        id: '', topic: {author: {}}, create: '', loginname: '', user: '', score: '', replies: [], replyTime: [], ups: []
      }
    },
    methods: {
      goTop () {
        window.scrollTo(0, 0)
      }
    },
    mounted () {
      let path = this.$route.path
      this.id = path.split('/')[2]
      // console.log(this.id)
      let param = {
        mdrender: true
      }
      auth.getTopic(this, this.id, param)
    }
  }
</script>

<style>
  @import '../../static/markdown-github.css';
  .wrapper1{
    height: 100%;
    width: 100%;
    padding-top: 25px;
  }
  .wrapper1 .spe-hr{
    height: 0;
    border-top: 1px solid #ccc;
    border-bottom: none;
    background-color: #ccc;
    width: 102%;
    margin: 10px 0 10px -1%;
  }
  .box-card1{
    width: 70%;
    float: left;
    margin:0 3%;
    background: #F9FBFC;
    text-align: left;
  }
  .label{
    width: 98%;
    margin:0 auto;
  }
  .label p{
    font-size: 20px;
    margin: 10px auto;
  }
  .label span{
    font-size: 16px;
    margin-right: 20px;
    color:#ccc;
  }
  .box-card2{
    width: 20%;
    float: left;
    background: #F9FBFC;
    text-align: left;
    max-width: 320px;
  }
  .box-card2 p{
    font-size: 16px;
    margin:0 auto 5px;
    clear: both;
  }
  .box-card2 img{
    height:80px;
    width: 80px;
    border-radius: 4px;
    border:1px solid #ccc;
    margin: 10px 15px 15px 0;
    float: left;
  }
  .box-card2 span{
    float: left;
    display: inline-block;
    margin-top: 40px;
    font-size: 19px;
    color:#ccc;
  }
  .box-card2 a{
    text-decoration: none;
    font-style: italic;
    font-size: 16px;
  }
  .box-card2 a:hover{
    color: wheat;
    text-decoration: underline;
  }

  #go_top{
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
</style>

