<template>
  <div class="wrapper">
    <el-card class="box-card">
      <div class="label">
        <p>{{topic.title}}</p>
        <span>创建于：{{create}}</span>
        <span>回复：{{topic.reply_count}}</span>
        <span>浏览量：{{topic.visit_count}}</span>
      </div>
      <p>{{topic.content}}</p>
    </el-card>
  </div>
</template>

<script>
  import auth from '../auth'
  export default{
    data () {
      return {
        id: '', topic: {}, create: ''
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
    width: 75%;
    margin:0 auto;
    background: #F9FBFC;
  }
  .label{
    width: 98%;
    margin:0 auto;
  }
  .label span{
    font-size: 16px;
    margin-right: 20px;
    color:#ccc;
  }
  @media screen and (max-width: 1300px){
    .box-card{
      width: 90%;
    }
  }
</style>
