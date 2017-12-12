<template>
  <div class="wrapper">
    <el-card class="box-card1">
      <h3>作者:</h3>
      <hr>
      <div class="content">
        <img :src="user.avatar_url"><span>{{name}}</span>
        <p>积分：{{user.score}}</p>
        <p>创建于：{{create_at}}</p>
        <p>Github：<a :href="'https://github.com/'+name" target="_blank">https://github.com/{{name}}</a></p>
      </div>
    </el-card>
    <el-card class="box-card1">
      <h3>最近创建的话题:</h3>
      <div class="topics" v-for="(item, index) in recent_topics">
        <img :src="user.avatar_url">
        <span>{{item.title}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  import  auth from '../auth'
  export default{
    data(){
      return {
        name:'',create_at:'',recent_replies:[],recent_topics:[]
      }
    },
    computed:{
      user(){
        return this.$store.state.user;
      }
    },
    watch:{
      user(val){
        let that =this;
        this.create_at = val.create_at.split('T')[0];
        val.recent_topics.map(function (e,i) {
          if(i<5){
            that.recent_topics[i] = e ;
          }
        });
        this.recent_replies = val.recent_replies;
        console.log(  this.recent_topics);
      }
    },
    mounted(){
      this.name = this.$route.params.name;
      auth.getUser(this,this.name);
    }
  }
</script>

<style scoped>
 .wrapper{
   height: 100%;
   width: 100%;
 }
 .box-card1{
   width: 70%;
   margin:20px auto;
   background: #F9FBFC;
   text-align: left;
 }
 .box-card1 h3{
   font-size: 19px;
   margin: 0;
 }
 .box-card1 hr {
   clear: both;
   height: 1px;
   border-top: 1px solid #e7e7e7;
   border-bottom: none;
   border-left: none;
   border-right: none;
   background-color: #e7e7e7;
   width: 104%;
   margin-left: -2%;
 }
 .content{
   width: 99%;
   margin:0 auto;
 }
 .box-card1 p{
   font-size: 16px;
   margin:0 auto 5px;
   clear: both;
 }
 .box-card1 img{
   height:60px;
   width: 60px;
   border-radius: 4px;
   border:1px solid #ccc;
   margin: 10px 15px 15px 0;
   float: left;
 }
 .box-card1 span{
   float: left;
   display: inline-block;
   margin-top: 40px;
   font-size: 19px;
   color:#ccc;
 }
 .box-card1 a{
   text-decoration: none;
   font-style: italic;
   font-size: 16px;
 }
 .box-card1 a:hover{
   color: wheat;
   text-decoration: underline;
 }
 .topics{
   width: 100%;
   height: 40px;
   line-height: 40px;
   display: block;
   clear: both;
 }
 .topics img{
   width: 30px;
   height: 30px;
   margin:10px 15px 0 0;
   border: none;
   border-radius:0;
 }
 .topics span{
   display: inline-block;
   margin-top:5px;
   font-size: 17px;
   color: #122121;
 }
</style>
