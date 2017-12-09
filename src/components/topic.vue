<template>
  <div class="wrapper1">
    <el-card class="box-card1">
      <div class="label">
        <p>{{topic.title}}</p>
        <span>创建于：{{create}}</span>
        <span>浏览量：{{topic.visit_count}}</span>
        <span>回复：{{topic.reply_count}}</span>
      </div>
      <div v-html="topic.content" id="content"></div>
    </el-card>

    <el-card class="box-card2">
      <p>作者:</p>
      <img :src="topic.author.avatar_url"><span>{{loginname}}</span>
      <p>积分：{{score}}</p>
      <p>Github：<a :href="'https://github.com/'+loginname" target="_blank">https://github.com/{{loginname}}</a></p>
    </el-card>

    <el-card class="box-card1 reply-card">
      <span>{{topic.reply_count}} 回复</span>
      <div class="reply" v-for="(item, index) in replies">
        <hr>
        <img :src="item.author.avatar_url">
        <span>{{item.author.loginname}} <label>{{replyTime[index]}}</label></span>
        <span class="ups" v-show="(ups[index]!==0)"><img src="../assets/ups.jpg"> <label>{{ups[index]}}</label></span>
      </div>
    </el-card>
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
  #content{
    font-size: 16px;
  }
  #content h1{
    font-size:26px;
  }
  #content h2{
    font-size:22px;
  }
  #content img{
    max-height: 100%;
    max-width: 100%;
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

  .reply-card{
    margin:15px 3% 10px;
  }
  .reply-card span{
    font-size: 17px;
    color:#888;
  }
  .reply {
    width: 98%;
    position: relative;
    clear: both;
  }
  .reply hr{
    clear: both;
    height: 0;
    border-top: 1px solid #ccc;
    border-bottom: none;
    background-color: #ccc;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
  }
  .reply img{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin: 20px 10px 0 2%;
    float: left;
    cursor: pointer;
  }
  .reply span{
    display: inline-block;
    float: left;
    margin-top: 20px;
    font-size: 16px;
    color: #333;
  }
  .reply label{
    font-size: 15px;
    color: #ccc;
    margin-left: 10px;
  }
  .reply .ups{
    float: right;
    height:30px;
    width: 60px;
    margin:10px 15px 0 0;
  }
  .ups img{
    float: left;
    height:100%;
    width: 50%;
    margin:0 4px 0 0;
    cursor: auto;
  }
  .ups label{
    float: left;
    display: inline-block;
    margin-top: 10px;
   }
</style>

