<template>
  <el-card class="box-card1 reply-card">
    <span>{{topic.reply_count}} 回复</span>
    <div class="reply" v-for="(item, index) in replies">
      <hr>
      <img :src="item.author.avatar_url" :id="index" @click="goUser($event)">
      <span>{{item.author.loginname}} <label>{{replyTime[index]}}</label></span>
      <div id="content" v-html="item.content" class="replyContent"></div>
    </div>
  </el-card>
</template>

<script>
  import auth from '../auth'
  export default {
    data () {
      return {}
    },
    computed:{
      topic(){
        return this.$store.state.topic
      },
      replies(){
        return this.$store.state.replies
      },
      replyTime(){
        return this.$store.state.replyTime
      },
    },
    methods:{
      goUser(e){
        let index = parseInt(e.target.id);
        let name = this.replies[index].author.loginname;
        auth.getUser(this,name);
        let router = '/user/' + name;
        this.$router.push(router);
      }
    }
  }
</script>

<style scoped>
  .reply-card{
    margin:15px 3% 15px;
  }
  .reply-card span{
    font-size: 17px;
    color:#888;
  }
  .reply {
    width: 100%;
    position: relative;
    clear: both;
  }
  .reply hr{
    clear: both;
    height: 1px;
    border-top: 1px solid #eee;
    border-bottom: none;
    border-left: none;
    border-right: none;
    background-color: #eee;
    width: 100%;
  }
  .reply img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin: 10px 10px 10px 1%;
    float: left;
    cursor: pointer;
  }
  .reply span{
    display: inline-block;
    float: left;
    margin-top: 15px;
    font-size: 16px;
    color: #333;
  }
  .reply label{
    font-size: 15px;
    color: #ccc;
    margin-left: 10px;
  }
  #content{
    font-size: 16px;
    width: 98%;
    margin:0 auto;
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
    cursor: auto;
  }
  #content.replyContent{
    clear: both;
    margin-left: 2%;
    font-size: 15px;
  }
</style>
