<template>
  <div class="wrapper">
    <el-card class="box-card">
      <div class="label">
        <p>{{topic.title}}</p>
        <span>创建于：{{create}}</span>
        <span>浏览量：{{topic.visit_count}}</span>
        <span>回复：{{topic.reply_count}}</span>
      </div>
      <p>{{topic.content}}</p>
    </el-card>
    <el-card class="box-card1">
      <p>作者</p>
      <img :src="topic.author.avatar_url">
    </el-card>
  </div>
</template>

<script>
  import auth from '../auth'
  export default{
    data () {
      return {
        id: '', topic: {author: {}}, create: ''
      }
    },
    mounted () {
      let path = this.$route.path
      this.id = path.split('/')[2]
      // console.log(this.id)
      let param = {
        mdrender: false
      }
      auth.getTopic(this, this.id, param)
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    padding-top: 25px;
  }
  .box-card{
    width: 70%;
    float: left;
    margin:0 5%;
    background: #F9FBFC;
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
  .box-card1{
    width: 15%;
    float: left;
    background: #F9FBFC;
  }
</style>
